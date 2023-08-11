import "chart.js/auto";
import Head from "next/head";
import { Bar } from "react-chartjs-2";
import { matchData, tempPassedAwayConfig } from "../../../utils/wafat";
import { useEffect, useState } from "react";

export default function WafatInsight() {
  interface MatchData {
    name: string;
    wpm: number;
    acc: number;
    isCpm: boolean;
  }

  interface AverageData {
    name: string;
    averageWpm: number;
    averageAcc: number;
  }

  const rawData = matchData;
  const [averageData, setAverageData] = useState([] as AverageData[]);
  const [finalAverageData, setFinalAverageData] = useState([] as AverageData[]);

  const [averageSortParameter, setAverageSortParameter] = useState("wpm")
  const [averageSortOrder, setAverageSortOrder] = useState("descending")

  useEffect(() => {
    setAverageData(getAverage(rawData));
  }, []);

  useEffect(() => {
    setFinalAverageData(
      sortProcessedData([...averageData], averageSortParameter, averageSortOrder),
    );
  }, [averageData]);

  useEffect(() => {
    setFinalAverageData(
      sortProcessedData([...averageData], averageSortParameter, averageSortOrder),
    );
  }, [averageSortParameter, averageSortOrder]);

  function getAverage(data: MatchData[]) {
    const processedData = [];

    // Group input data by name
    const dataByName: any = {};
    for (const item of data) {
      if (!(item.name in dataByName)) {
        dataByName[item.name] = [];
      }
      dataByName[item.name].push(item);
    }

    // Calculate averages and convert CPM to WPM
    for (const name in dataByName) {
      const items = dataByName[name];
      let totalWpm = 0;
      let totalAcc = 0;
      let totalCount = 0;

      for (const item of items) {
        if (item.isCpm) {
          // Convert CPM to WPM
          totalWpm += item.wpm / 5;
        } else {
          totalWpm += item.wpm;
        }
        totalAcc += item.acc;
        totalCount++;
      }

      const averageWpm = totalWpm / totalCount;
      const averageAcc = totalAcc / totalCount;

      processedData.push({
        name: name,
        averageWpm: parseFloat(averageWpm.toFixed(2)),
        averageAcc: parseFloat(averageAcc.toFixed(2)),
      });
    }

    return processedData;
  }

  function sortProcessedData(data: any, sortBy: any, sortOrder: any) {
    const sortingOptions: any = {
      name: (a: any, b: any) => a.name.localeCompare(b.name),
      acc: (a: any, b: any) => a.averageAcc - b.averageAcc,
      wpm: (a: any, b: any) => a.averageWpm - b.averageWpm,
    };

    const sortingFunction = sortingOptions[sortBy];
    if (sortingFunction) {
      data.sort(sortingFunction);
      if (sortOrder === "descending") {
        data.reverse();
      }
    }

    return data;
  }

  const average = {
    labels: finalAverageData.map((item) => item.name),
    datasets: [
      {
        label: "WPM",
        data: finalAverageData.map((item) => item.averageWpm),
        yAxisID: "y",
        tension: 0,
      },
      {
        label: "Akurasi",
        data: finalAverageData.map((item) => item.averageAcc),
        segment: {
          borderColor: "rgb(0,0,0,0.2)",
          borderDash: [6, 6],
        },
        yAxisID: "y1",
        tension: 0,
        display: true,
        text: "pog",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Kesehatan: Wafat</title>
      </Head>
      <div className="flex-grow max-w-full px-4 w-full">
        <div className="py-8 px-6 bg-white rounded-lg shadow-lg h-full">
          <Bar data={average} options={tempPassedAwayConfig} />
          <div className="flex items-center">
          <p className="text-gray-900 pb-2 px-4">Urut Berdasarkan</p>
          <select
            onChange={(_) =>
              setAverageSortParameter(_.target.value)
            }
            name="jenis"
            id="_jenisController"
            className="bg-blue-200 p-2 py-2 border-0 focus:border-0"
          >
            <option value="name">Nama</option>
            <option value="acc">Akurasi</option>
            <option selected={true} value="wpm">Wpm</option>
          </select>
          <p className="text-gray-900 pb-2 px-4">Urutan</p>
          <select
            onChange={(_) =>
              setAverageSortOrder(_.target.value)
            }
            name="jenis"
            id="_jenisController"
            className="bg-blue-200 p-2 py-2 border-0 focus:border-0"
          >
            <option value="ascending">Naik</option>
            <option value="descending">Turun</option>
          </select>
          </div>
        </div>
      </div>
    </>
  );
}
