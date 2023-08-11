import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
        <div className="w-full flex justify-center flex-col items-center h-full">
      <h2 className="text-2xl text-center w-full">Stats Lomba Lontar 2023</h2>
          <Image className="pt-8" src={"/images/logo.png"} alt={"Logo"} width={200}  height={20} />
      </div>
    </>
  );
}
