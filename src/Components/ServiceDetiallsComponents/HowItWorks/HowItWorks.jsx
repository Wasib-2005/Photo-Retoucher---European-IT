import HowItWorksImg from "../../../assets/HowItWorksImg.svg";
import Upload from "../../../assets/HowItWorkIcon/Upload.svg";
import Edit from "../../../assets/HowItWorkIcon/Edit.svg";
import Clock from "../../../assets/HowItWorkIcon/Clock.svg";

const HowItWorks = () => {
  return (
    <div className="mx-auto px-4 md:px-12 lg:px-20 pt-5 md:pt-10 lg:pt-20 pb-5 md:pb-10 lg:pb-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-20">
        <div className="flex flex-col gap-3 w-full max-w-[550px]">
          <h2 className="text-[12px] md:text-[14px] lg:text-[16px] text-[#0041FF] font-medium tracking-wide">
            OUR PROCESS
          </h2>

          <h1 className="text-[28px] md:text-[38px] lg:text-[48px] text-[#1B263B] font-semibold leading-tight">
            How it <span className="text-[#0041FF]">Works</span>
          </h1>

          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-gray-600 mb-6">
            A simple, smooth process to get your images edited perfectly
          </p>


          <div className="flex flex-col mt-2 md:mt-6">
         
            <div className="flex gap-6 md:gap-10">
           
              <div className="flex flex-col items-center">
                <div className="border border-[#bfbfbf] w-[56px] h-[56px] rounded-full flex justify-center items-center bg-white z-10 shrink-0">
                  <h1 className="text-[24px] text-[#0041FF] font-medium">01</h1>
                </div>
   
                <div className="h-full border-l-[2px] border-dashed border-[#bfbfbf] w-0"></div>
              </div>

             
              <div className="flex flex-col w-full pb-10">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex justify-center items-center p-4 w-[80px] h-[80px] rounded-lg border border-[#bfbfbf] shrink-0 bg-white">
                    <img
                      src={Upload}
                      alt="Upload"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[#1B263B] text-[18px] font-semibold mb-1">
                      Order your edits
                    </h1>
                    <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                      Upload your images, let us know what you need, and get a
                      clear, budget-friendly price instantly
                    </p>
                  </div>
                </div>
               
                <hr className="border-t-[1px] border-solid border-[#bfbfbf] mt-8" />
              </div>
            </div>

        
            <div className="flex gap-6 md:gap-10">
       
              <div className="flex flex-col items-center">
                <div className="border border-[#bfbfbf] w-[56px] h-[56px] rounded-full flex justify-center items-center bg-white z-10 shrink-0">
                  <h1 className="text-[24px] text-[#0041FF] font-medium">02</h1>
                </div>
         
                <div className="h-full border-l-[2px] border-dashed border-[#bfbfbf] w-0"></div>
              </div>

 
              <div className="flex flex-col w-full pb-10">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex justify-center items-center p-4 w-[80px] h-[80px] rounded-lg border border-[#bfbfbf] shrink-0 bg-white">
                    <img
                      src={Edit}
                      alt="Edit"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[#1B263B] text-[18px] font-semibold mb-1">
                      Our experts edit your images
                    </h1>
                    <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                      Our professional designers carefully edit your images by
                      hand with maximum precision
                    </p>
                  </div>
                </div>
             
                <hr className="border-t-[1px] border-solid border-[#bfbfbf] mt-8" />
              </div>
            </div>

       
            <div className="flex gap-6 md:gap-10">
       
              <div className="flex flex-col items-center">
                <div className="border border-[#bfbfbf] w-[56px] h-[56px] rounded-full flex justify-center items-center bg-white z-10 shrink-0">
                  <h1 className="text-[24px] text-[#0041FF] font-medium">03</h1>
                </div>
              </div>

              
              <div className="flex flex-col w-full">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex justify-center items-center p-4 w-[80px] h-[80px] rounded-lg border border-[#bfbfbf] shrink-0 bg-white">
                    <img
                      src={Clock}
                      alt="Clock"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-[#1B263B] text-[18px] font-semibold mb-1">
                      Get your images back fast
                    </h1>
                    <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                      Receive your perfectly edited images quickly, ready to use
                      for your project or business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="mt-14 flex justify-center">
          <img
            src={HowItWorksImg}
            alt="How It Works"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
