import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";
import Apple from "./works/Apple";
import Google from "./works/Tripster";
import ReactBD from "./works/SwapIT";
import Splash from "./works/Xlancr";

const Experience = () => {
  const [workSwapIT, setWorkSwapIT] = useState(false);
  const [workTripster, setWorkTripster] = useState(true);
  const [workApple, setWorkApple] = useState(false);
  const [workXlancr, setWorkXlancr] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setWorkSwapIT(true);
    setWorkXlancr(false);
    setWorkTripster(false);
    setWorkApple(false);
    setWorkAmazon(false);
  };
  const handleXlancr = () => {
    setWorkXlancr(true);
    setWorkSwapIT(false);
    setWorkTripster(false);
    setWorkApple(false);
    setWorkAmazon(false);
  };

  const handleTripster = () => {
    setWorkTripster(true);
    setWorkSwapIT(false);
    setWorkApple(false);
    setWorkXlancr(false);
    setWorkAmazon(false);
  };
  // const handleApple = () => {
  //   setWorkReactbd(false);
  //   setWorkGoogle(false);
  //   setWorkApple(true);
  //   setWorkSplash(false);
  //   setWorkAmazon(false);
  // };
  // const handleSplash = () => {
  //   setWorkReactbd(false);
  //   setWorkGoogle(false);
  //   setWorkApple(false);
  //   setWorkSplash(true);
  //   setWorkAmazon(false);
  // };
  // const handleAmazon = () => {
  //   setWorkReactbd(false);
  //   setWorkGoogle(false);
  //   setWorkApple(false);
  //   setWorkSplash(false);
  //   setWorkAmazon(true);
  // };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02.i" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
        <li
            onClick={handleTripster}
            className={`${
              workTripster
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Tripster
          </li>
          <li
            onClick={handleReactbd}
            className={`${
              workSwapIT
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            VinnovateIT
          </li>
          <li
            onClick={handleXlancr}
            className={`${
              workXlancr
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Xlancr
          </li>
          
          
          {/* <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Splash
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li> */}
        </ul>
        {workSwapIT && <ReactBD />}
        {workXlancr && <Splash />}
        {workTripster && <Google />}
        {/* {workApple && <Apple />}
        {workAmazon && <Amazon />} */}
      </div>
    </section>
  );
};

export default Experience;