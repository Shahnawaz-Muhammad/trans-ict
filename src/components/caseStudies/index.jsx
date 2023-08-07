import { BsSquareFill } from "react-icons/bs";
import ChooseUs from "../choose-us";

const CaseStudies = () => {
  return (
    <div className="relative bg-caseStudiesBg bg-cover bg-center bg-no-repeat text-center h-full py-20 lg:py-0 lg:h-[719px] w-full">
      <div className="max-w-[1220px] mx-auto pt-28">
        <div className="flex justify-center">
          <div className="grid gap-6">
            <div className="flex items-center justify-center gap-3">
              <BsSquareFill className="text-[#800000] w-3 h-3" />
              <p className="uppercase text-sm font-medium">case studies</p>
              <BsSquareFill className="text-[#800000] w-3 h-3" />
            </div>
            <h2 className="capitalize text-5xl text-center font-medium leading-10">
              why people choose us?
            </h2>
            <p className="text-base text-center text-[#7B7E86] max-w-[1200px] md:px-[150px] lg:px-[310px] pb-20">
              IT service providers work closely adipiscing elit. Morbi obortis
              ligula euismod sededesty am augue nisl.
            </p>
          </div>
        </div>
        <ChooseUs />
      </div>
    </div>
  );
};

export default CaseStudies;
