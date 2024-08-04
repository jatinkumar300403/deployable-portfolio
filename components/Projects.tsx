import { calc } from "@/public/assets";
import { amzn } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
        {/* p2 */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* p1 */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.tripsterflights.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amzn}
                alt="amznImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Tripster Flights</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A flight booking website made for SAYTRIP WAYS PVT. LTD., a Pune based startup company. Used 
              <span className="text-textGreen"> NEXT.js</span> and <span className="text-textGreen">JavaScript</span> with <span className="text-textGreen">ShadCN and MUI </span>component library to make the website components.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>NEXT.js</li>
              <li>JapvaScript</li>
              <li>ShadCN</li>
              <li>MongoDB</li>
              <li>Clerk</li>
              <li>RazorPay</li>
              <li>Twilio</li>
            </ul>
            <div className="text-2xl flex gap-4">
              {/* <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/jatinkumar300403"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.tripsterflights.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://swapit.vinnovateit.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={calc}
                alt="swapitimg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">SwapIT</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            A Course Add and Drop portal for college students to 
            exchange their preferred courses/subjects with their preferred choice(such as professors, slots, venues, timings etc.). Used <span className="text-textGreen">NEXT.js</span> and <span className="text-textGreen">TailwindCSS</span> as tech. stack
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>NEXT.js</li>
              <li>CSS3 (Tailwind)</li>
              <li>TypeScript</li>
              <li>Firebase</li>
              <li>Prisma</li>
            </ul>
            <div className="text-2xl flex gap-4">
              {/* <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/vinnovateit/Pakdam-Pakdai"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}
              <a
                className="hover:text-textGreen duration-300"
                href="https://swapit.vinnovateit.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;