import { FiArrowUpRight } from "react-icons/fi";
import { FeaturesData } from "../../data/featuresData";

const ChooseUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 mx-4">
      {FeaturesData.map((featuresData, index) => (
        <div
          key={index}
          className="h-[500px] bg-cardBg bg-no-repeat bg-cover border boeder-1 rounded-[19px]"
        >
          <div classsName="absolute top-0 right-0">
            <div className="flex flex-wrap justify-center h-[500px] p-10">
              <div className="grid gap-2">
                <p className="text-sm text-left leading-4 font-medium capitalize">
                  {featuresData.feature}
                </p>
                <h4 className="text-3xl text-left font-medium">
                  <a
                    href="https://wptf.themepul.co/tronix/service/technologysolution/"
                    target="_blank"
                    rel="nofollow"
                  >
                    {featuresData.featureText}
                  </a>
                </h4>
                <div className="flex items-center gap-1">
                  <a
                    href="#"
                    target="_blank"
                    className="no-underline capitalize"
                  >
                    learn more
                  </a>
                  <FiArrowUpRight className="text-[#800000]" />
                </div>
              </div>
              <div className="self-end">
                <img className="w-100" src={featuresData.featureImg} />
              </div>
            </div>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default ChooseUs;
