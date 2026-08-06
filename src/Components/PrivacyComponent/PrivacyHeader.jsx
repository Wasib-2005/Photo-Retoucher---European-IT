const PrivacyHeader = () => {
  return (
    <div className="bg-[#f3f6fd] py-5 md:py-18">
      <div className="text-center flex flex-col gap-3 ">
        <h2 className="text-[14px] text-[#0041FF]">Privacy policy</h2>
        <h1 className="text-[38px] md:text-[48px] lg:text-[58px] text-[#1B263B] font-semibold ">
          Questions About Your <span className="text-[#0041FF]">Privacy?</span>
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[20px] ">
          We are committed to protecting your privacy and handling your data
          with transparency,
          <br />
          security, and care.
        </p>
      </div>
    </div>
  );
};

export default PrivacyHeader;
