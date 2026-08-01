import { Select } from "flowbite-react";
import SelectRadio from "./SelectRadio";
import { useEffect, useState } from "react";
import PhotoSelectionUnit from "./PhotoSelectionUnit";
import Percentige from "../../../assets/Percentige.svg";
import Secure from "../../../assets/Secure.svg";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const CalculatePrice = () => {
  const services = [
    "Clipping Path",
    "Images Masking",
    "Photo Retouching",
    "Ghost Mannequin",
    "Color Correction",
    "Drop Shadow",
    "Image editing",
  ];

  const minMaxNumberOfPhoto = { min: 1, max: 500, differentValue: 100 };

  const [selectedService, setSelectedService] = useState(services[0]);

  const [discount, setDiscount] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const selectRadioValueData = [
    {
      imgUrl: "/iconamoon_clock.svg",
      time: "6 Hours",
      radito: "$0.20/Image",
      value: 0.2,
      _id: "1",
    },
    {
      imgUrl: "/iconamoon_clock.svg",
      time: "12 Hours",
      radito: "$0.40/Image",
      value: 0.4,
      _id: "2",
    },
    {
      imgUrl: "/iconamoon_clock.svg",
      time: "18 Hours",
      radito: "$0.60/Image",
      value: 0.6,
      _id: "3",
    },
  ];

  const [selectedRadioValue, setSelectedRadioValue] = useState(
    selectRadioValueData[0],
  );

  const [numberPhoto, setNumberPhoto] = useState(minMaxNumberOfPhoto.min);

  useEffect(() => {
    const basePrice = selectedRadioValue.value * numberPhoto;
    const discountAmount = basePrice * 0.1; // TODO: Calculate discount
    setDiscount(discountAmount);
    setTotalPrice(basePrice - discountAmount);
  }, [selectedRadioValue, numberPhoto]);

  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
      <h2 className="text-[#0041FF] font-medium text-[14px] md:text-[16px]">
        PRICING CALLCUALTOR
      </h2>

      <h2 className="text-[#1B263B] text-[20px] md:text-[48px] max-w-190 md:max-w-260 font-semibold">
        <span>
          Calculate Your <span className="text-[#0041FF]">Editing Price</span>
        </span>
      </h2>

      <p className="max-w-100 md:max-w-140 text-[14px] md:text-[20px]">
        From simple clipping paths to advanced photo retouching, Outsourced
        image editing services are ideal if you are…
      </p>

      <div className="h-1.5 w-10 md:w-20 bg-[#0041FF] rounded-2xl" />

      <div className=" p-4 md:p-8 bg-white border border-[#bfbfbf] rounded-3xl">
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1.5">
              <div className="bg-[#0041FF] w-7.5 h-7.5 flex items-center justify-center text-white font-semibold rounded-lg">
                <h2 className=" ">1</h2>
              </div>
              <h2 className="text-[#1B263B]">Select Service</h2>
            </div>

            <div className="">
              <Select
                selected={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                id="service-select"
                theme={{
                  field: {
                    select: {
                      base: "bg-white! border border-[#666666] px-6 py-2 rounded-lg! w-full text-black!",
                    },
                  },
                }}
              >
                {services.map((Service, i) => (
                  <option key={("Service", i)} value={Service}>
                    {Service}
                  </option>
                ))}
              </Select>
              <p className="text-[#000000]/50 text-[14px] md:text-[16px] text-left mt-1">
                Precise clipping paths for perfect product isolation.
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="bg-[#0041FF] w-7.5 h-7.5 flex items-center justify-center text-white font-semibold rounded-lg">
                <h2 className=" ">2</h2>
              </div>
              <h2 className="text-[#1B263B]">Select Turnaround Time</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5 justify-center">
              {selectRadioValueData.map((selectRadioValue) => (
                <div key={("selectRadio", selectRadioValue._id)}>
                  <SelectRadio
                    selectRadioValue={selectRadioValue}
                    selectedRadioValue={selectedRadioValue}
                    setSelectedRadioValue={setSelectedRadioValue}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <div className="bg-[#0041FF] w-7.5 h-7.5 flex items-center justify-center text-white font-semibold rounded-lg">
                <h2 className=" ">3</h2>
              </div>
              <h2 className="text-[#1B263B]">Number of Photos</h2>
            </div>
            <PhotoSelectionUnit
              minMaxNumberOfPhoto={minMaxNumberOfPhoto}
              numberPhoto={numberPhoto}
              setNumberPhoto={setNumberPhoto}
            />

            <div className="bg-[#0041FF]/25 rounded-lg flex flex-col md:flex-row p-5 text-left gap-4 md:items-center mt-7 md:mt-2">
              <img src={Percentige} alt="" />

              <div className=" w-full">
                <h2 className="text-[#1B263B]">Bulk Discount Applied</h2>
                <p className="text-[#4C515B]">
                  Your are saving 10% on the base price of 200 images.
                </p>
              </div>

              <button className="text-white bg-[#0041FF] hover:bg-[#0041FF]/50 p-2.5 rounded-4xl text-nowrap">
                100% OFF
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 border-2 border-[#0041FF] text-[#4C515B] rounded-xl p-6 text-left md:min-w-100">
            <div>
              <h2 className="text-[#1B263B] md:text-[20px] font-medium">
                Your Estimate
              </h2>
              <p className="text-[#1B263B] text-[14px] md:text-[16px]">
                Review your selections and total amount
              </p>
            </div>

            <div className=" text-[14px] md:text-[16px] ">
              <p className="flex justify-between">
                <span>Service</span>
                <span className="font-medium text-[#1B263B]">
                  {selectedService}
                </span>
              </p>

              <p className="flex justify-between">
                <span>Turnaround Time</span>
                <span className="font-medium text-[#1B263B]">
                  {selectedRadioValue.time}
                </span>
              </p>

              <p className="flex justify-between">
                <span>Number of Photos</span>
                <span className="font-medium text-[#1B263B]">
                  {numberPhoto}
                </span>
              </p>

              <p className="flex justify-between">
                <span>Price per Image</span>
                <span className="font-medium text-[#1B263B]">
                  {selectedRadioValue.value.toFixed(2)}
                </span>
              </p>

              <p className="flex justify-between text-[#008404]/80">
                <span>Discount</span>
                <span className="font-medium text-[#1B263B]">
                  {discount.toFixed(2)}
                </span>
              </p>
            </div>

            <div className="w-full h-[2px] bg-[repeating-linear-gradient(90deg,#0041FF_0_5px,transparent_5px_10px)]" />

            <p className="flex justify-between items-center">
              <span className="text-[#1B263B]">Total Amount</span>
              <span className="font-medium text-[#0041FF] text-[16px] md:text-[20px]">
                {totalPrice.toFixed(2)}
              </span>
            </p>

            <div className="flex justify-center items-center gap-1">
              <div>
                <img src={Secure} alt="Secure" />
              </div>
              <p className="text-[#1B263B] text-[10px] md:text-[12px]">
                Secure, reliable and 100& quality gurrentted.
              </p>
            </div>

            <button>
              <Link
                to="/"
                className="flex  h-[52px] bg-[#0041FF] hover:bg-[#0036d9] rounded-lg text-white items-center justify-center gap-2 font-medium transition-colors shrink-0"
              >
                <span>Get My Image Edit</span>
                <FaArrowRight />
              </Link>
            </button>

            <button>
              <Link
                to="/"
                className="flex  h-[52px] text-[#0041FF] border border-[#0041FF] hover:border-[#0041FF]/30 hover:bg-[#0041FF]/40 hover:text-white rounded-lg items-center justify-center gap-2 font-medium transition-colors shrink-0"
              >
                <span>Get Started Free</span>
                <FaArrowRight />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatePrice;
