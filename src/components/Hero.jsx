import { BASE_URL } from "../App";

const Hero = ({ info }) => {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover min-h-[calc(100vh-150px)]">
      <div className="flex flex-wrap gap-x-5 gap-y-8 justify-center max-w-[1060px] m-auto pt-16">
        {info?.map(({ name, text, image, price }) => (
          <div
            key={name}
            className="flex py-2 px-1 rounded-[20px] border-[0.659px] border-solid border-[#98F9FF] w-[340px] h-[167px]
                        bg-blend-normal backdrop-blur-[13.1841px]"
          >
            <div>
              <img src={BASE_URL + image} alt={name} />
            </div>

            <div className="flex flex-col px-2 justify-between items-end">
              <div className="flex flex-col gap-2 w-[168px] h-[86px] mt-1">
                <h3 className="text-white font-semibold">{name}</h3>
                <p className="text-white font-normal text-[12px]">{text}</p>
              </div>
              <div className="mb-1 mr-[7px]">
                <button className="bg-[#FF4343] text-white text-[14px] rounded px-3 py-1">
                  ${price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
