import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Google from "./works/Google";
import ReactBD from "./works/SwapIT";
import School from "./education/school";
import Undergrad from "./education/undergrad";

const Experience = () => {
  const [studySchool, setStudySchool] = useState(false);
  const [studyUndergrad, setStudyUndergrad] = useState(true);

  const handleSchool = () => {
    setStudySchool(true);
    setStudyUndergrad(false);
  };

  const handleCollege = () => {
    setStudySchool(false);
    setStudyUndergrad(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked and Studied" titleNo="02.ii" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
        <li
            onClick={handleCollege}
            className={`${
                studyUndergrad
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Undergraduation
          </li>
          <li
            onClick={handleSchool}
            className={`${
                studySchool
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            School
          </li>
          
        </ul>
        {studyUndergrad && <Undergrad />}
        {studySchool && <School />}
      </div>
    </section>
  );
};

export default Experience;
