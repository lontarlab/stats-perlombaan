export const tempPassedAwayConfig = {
  plugins: {
    title: {
      display: true,
      text: "Rata-Rata",
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          let label = context.dataset.label || "";
          label = label + ": ";
          label = label + Math.round(context.parsed.y * 100) / 100;
          if (context.dataset.label == "Akurasi") {
            label = label + "%";
          }

          return label;
        },
      },
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      title: {
        text: "WPM",
        display: true,
        font: {
          size: 20,
        },
      },
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value: any, index: any, ticks: any) {
          return value + "%";
        },
      },
      title: {
        text: "Akurasi",
        display: true,
        font: {
          size: 20,
        },
      },
      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  },
};


export const matchData = 
[
  {
    name: "Fitria",
    wpm: 45,
    acc: 93,
    isCpm: false,
  },
  {
    name: "Fitria",
    wpm: 50,
    acc: 94.7,
    isCpm: false,
  },
  {
    name: "Fitria",
    wpm: 46,
    acc: 94.5,
    isCpm: false,
  },
  {
    name: "Fitria",
    wpm: 300,
    acc: 96.8,
    isCpm: true,
  },
  {
    name: "Fitria",
    wpm: 265,
    acc: 95,
    isCpm: true,
  },
  {
    name: "Fitria",
    wpm: 355,
    acc: 98.2,
    isCpm: true,
  },
  {
    name: "Fitria",
    wpm: 285,
    acc: 96,
    isCpm: true,
  },
  {
    name: "Fitria",
    wpm: 60,
    acc: 94.7,
    isCpm: false,
  },
  {
    name: "Fitria",
    wpm: 67,
    acc: 98,
    isCpm: false,
  },
  {
    name: "Fitria",
    wpm: 64,
    acc: 96.1,
    isCpm: false,
  },


  {
    name: "Maryam",
    wpm: 35,
    acc: 92,
    isCpm: false,
  },
  {
    name: "Maryam",
    wpm: 38,
    acc: 95.7,
    isCpm: false,
  },
  {
    name: "Maryam",
    wpm: 190,
    acc: 94.8,
    isCpm: true,
  },
  {
    name: "Maryam",
    wpm: 245,
    acc: 96.3,
    isCpm: true,
  },
  {
    name: "Maryam",
    wpm: 215,
    acc: 94.4,
    isCpm: true,
  },
  {
    name: "Maryam",
    wpm: 230,
    acc: 95.8,
    isCpm: true,
  },
  {
    name: "Maryam",
    wpm: 37,
    acc: 94.7,
    isCpm: false,
  },
  {
    name: "Maryam",
    wpm: 45,
    acc: 96.3,
    isCpm: false,
  },
  {
    name: "Maryam",
    wpm: 40,
    acc: 94.3,
    isCpm: false,
  },


  {
    name: "Dwita",
    wpm: 25,
    acc: 96.9,
    isCpm: false,
  },
  {
    name: "Dwita",
    wpm: 25,
    acc: 94,
    isCpm: false,
  },
  {
    name: "Dwita",
    wpm: 160,
    acc: 97.2,
    isCpm: true,
  },
  {
    name: "Dwita",
    wpm: 170,
    acc: 96,
    isCpm: true,
  },
  {
    name: "Dwita",
    wpm: 170,
    acc: 95.2,
    isCpm: true,
  },
  {
    name: "Dwita",
    wpm: 170,
    acc: 97.3,
    isCpm: true,
  },
  {
    name: "Dwita",
    wpm: 25,
    acc: 96.9,
    isCpm: false,
  },
  {
    name: "Dwita",
    wpm: 25,
    acc: 96.9,
    isCpm: false,
  },
  {
    name: "Dwita",
    wpm: 25,
    acc: 96.9,
    isCpm: false,
  },


  {
    name: "Salwa",
    wpm: 22,
    acc: 90,
    isCpm: false,
  },
  {
    name: "Salwa",
    wpm: 25,
    acc: 93.7,
    isCpm: false,
  },
  {
    name: "Salwa",
    wpm: 125,
    acc: 92.8,
    isCpm: true,
  },
  {
    name: "Salwa",
    wpm: 180,
    acc: 97,
    isCpm: true,
  },
  {
    name: "Salwa",
    wpm: 165,
    acc: 95.2,
    isCpm: true,
  },
  {
    name: "Salwa",
    wpm: 160,
    acc: 95.2,
    isCpm: true,
  },
  {
    name: "Salwa",
    wpm: 35,
    acc: 98.6,
    isCpm: false,
  },
  {
    name: "Salwa",
    wpm: 29,
    acc: 94.3,
    isCpm: false,
  },
  {
    name: "Salwa",
    wpm: 31,
    acc: 95.2,
    isCpm: false,
  },


  {
    name: "Doni",
    wpm: 35,
    acc: 96.2,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Doni",
    wpm: 31,
    acc: 96.2,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Doni",
    wpm: 34,
    acc: 96.9,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Doni",
    wpm: 185,
    acc: 96,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Doni",
    wpm: 190,
    acc: 96.6,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Doni",
    wpm: 275,
    acc: 99.4,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Doni",
    wpm: 230,
    acc: 98.8,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Doni",
    wpm: 45,
    acc: 99,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Doni",
    wpm: 42,
    acc: 94.9,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Doni",
    wpm: 40,
    acc: 96.8,
    isCpm: false,
    isPkl: false,
  },


  {
    name: "Wahyu",
    wpm: 38,
    acc: 98.3,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Wahyu",
    wpm: 36,
    acc: 98.2,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Wahyu",
    wpm: 26,
    acc: 94.6,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Wahyu",
    wpm: 285,
    acc: 98.3,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Wahyu",
    wpm: 290,
    acc: 98.2,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Wahyu",
    wpm: 240,
    acc: 99.4,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Wahyu",
    wpm: 255,
    acc: 97.5,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Wahyu",
    wpm: 43,
    acc: 97.3,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Wahyu",
    wpm: 52,
    acc: 100,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Wahyu",
    wpm: 55,
    acc: 100,
    isCpm: false,
    isPkl: false,
  },


  {
    name: "Sesil",
    wpm: 17,
    acc: 90,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Sesil",
    wpm: 22,
    acc: 93.3,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Sesil",
    wpm: 27,
    acc: 91.1,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Sesil",
    wpm: 120,
    acc: 93.3,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Sesil",
    wpm: 135,
    acc: 93.8,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Sesil",
    wpm: 205,
    acc: 95.3,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Sesil",
    wpm: 150,
    acc: 94.2,
    isCpm: true,
    isPkl: false,
  },
  {
    name: "Sesil",
    wpm: 26,
    acc: 94.2,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Sesil",
    wpm: 31,
    acc: 95.9,
    isCpm: false,
    isPkl: false,
  },
  {
    name: "Sesil",
    wpm: 32,
    acc: 94.1,
    isCpm: false,
    isPkl: false,
  },

  {
    name: "Ibnu",
    wpm: 33,
    acc: 94,
    isCpm: false,
    isPkl: true,
  },
  {
    name: "Ibnu",
    wpm: 31,
    acc: 92.3,
    isCpm: false,
    isPkl: true,
  },
  {
    name: "Ibnu",
    wpm: 28,
    acc: 89.9,
    isCpm: false,
    isPkl: true,
  },
  {
    name: "Ibnu",
    wpm: 165,
    acc: 92,
    isCpm: true,
    isPkl: true,
  },
  {
    name: "Ibnu",
    wpm: 155,
    acc: 92.8,
    isCpm: true,
    isPkl: true,
  },
  {
    name: "Ibnu",
    wpm: 215,
    acc: 94.8,
    isCpm: true,
    isPkl: true,
  },
  {
    name: "Ibnu",
    wpm: 195,
    acc: 94.5,
    isCpm: true,
    isPkl: true,
  },
  {
    name: "Ibnu",
    wpm: 36,
    acc: 93.9,
    isCpm: false,
    isPkl: true,
  },
  {
    name: "Ibnu",
    wpm: 41,
    acc: 96.3,
    isCpm: false,
    isPkl: true,
  },
  {
    name: "Ibnu",
    wpm: 43,
    acc: 96.2,
    isCpm: false,
    isPkl: true,
  },




];
