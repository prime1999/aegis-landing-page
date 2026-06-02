import Navbar from "@/components/layout/Navbar";
import Model from "@/components/layout/Model";

const page = () => {
  return (
    <main className="w-full h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-auto mt-8">
        <h1 className="text-5xl text-center font-bold font-jura bg-clip-text text-transparent bg-gradient-to-r from-black via-cyan-600 to-cyan-900 z-100">
          Meet Aegis, Your Personal <br />
          AI Analyst for Web3.
        </h1>
        <div className="-mt-10">
          <Model />
        </div>
      </div>
    </main>
  );
};

export default page;
