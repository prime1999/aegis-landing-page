import Navbar from "@/components/layout/Navbar";
import Model from "@/components/layout/Model";
import TypingHeading from "@/components/layout/TypingHeading";
import InsightIntro from "@/components/layout/InsightIntro";
import FeatureStack from "@/components/layout/FeatureStack";

const page = () => {
  return (
    <main className="relative w-full h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-auto mt-8">
        <TypingHeading />
        <div className="-mt-10">
          <Model />
        </div>
      </div>
      <div className="absolute bottom-18 lg:bottom-20 left-30 lg:left-50">
        <InsightIntro />
      </div>
      <div className="absolute bottom-50 lg:bottom-10 right-5 lg:right-20">
        <FeatureStack />
      </div>
      <h6 className="fixed bottom-5 translate-x-20 lg:translate-x-50 font-jura font-bold tracking-widest text-xs">
        -- by priime --
      </h6>
    </main>
  );
};

export default page;
