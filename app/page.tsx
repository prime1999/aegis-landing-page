import { Scan, ChartBar, Newspaper, Brain } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Model from "@/components/layout/Model";

const page = () => {
  return (
    <main className="relative w-full h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-auto mt-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold font-jura bg-clip-text text-transparent bg-gradient-to-r from-black via-cyan-600 to-cyan-900 z-100">
          Meet Aegis, Your Personal <br />
          AI Analyst for Web3.
        </h1>
        <div className="-mt-10">
          <Model />
        </div>
      </div>
      <div className="absolute bottom-20 left-50">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-14 w-[8px] bg-cyan-800"></div>
            <div className="h-14 w-[6px] bg-cyan-800"></div>
            <div className="h-14 w-[4px] bg-cyan-800"></div>
          </div>
          <div>
            <p className="w-32 font-geist-mono font-semibold text-xs">
              Personalized Web3 insights powered by your wallet activity.
            </p>
          </div>
        </div>
        <button className="bg-cyan-800 text-white font-geist-mono text-xs px-4 py-2 rounded-full mt-2 cursor-pointer duration-500 hover:bg-cyan-900 transition-colors">
          -- Get Started --
        </button>
      </div>
      <div className="absolute bottom-10 right-20">
        <div className="flex flex-col items-center justify-center gap-4">
          {" "}
          <div className="flex items-center gap-2 backdrop-blur-4xl shadow-md rounded-lg rounded-lg p-4">
            <Scan size={18} className="text-cyan-800" />
            <p className="font-geist-mono text-xs font-semibold mt-1">
              Scans through your wallet activities.
            </p>
          </div>
          <div className="flex items-center gap-2 backdrop-blur-4xl shadow-md rounded-lg rounded-lg p-4">
            <ChartBar size={18} className="text-cyan-800" />
            <p className="font-geist-mono text-xs font-semibold mt-1">
              Analyzes the scanned wallet activity.
            </p>
          </div>
          <div className="flex items-center gap-2 backdrop-blur-4xl shadow-md rounded-lg rounded-lg p-4">
            <Newspaper size={18} className="text-cyan-800" />
            <p className="font-geist-mono text-xs font-semibold mt-1">
              Get Updates based on your wallet activity.
            </p>
          </div>
          <div className="flex items-center gap-2 backdrop-blur-4xl shadow-md rounded-lg rounded-lg p-4">
            <Brain size={18} className="text-cyan-800" />
            <p className="font-geist-mono text-xs font-semibold mt-1">
              Provides AI explanations and recommendations.
            </p>
          </div>
        </div>
      </div>
      <h6 className="fixed bottom-5 translate-x-50 font-jura font-bold tracking-widest text-xs">
        -- by priime --
      </h6>
    </main>
  );
};

export default page;
