const AllServiceCategorie = ({
  categorieService,
  selectedCategorieServices,
  setSelectedCategorieServices,
}) => {
  console.log(categorieService);

  const isSelected =
    selectedCategorieServices?.value === categorieService?.value;

  return (
    <button
      onClick={() => setSelectedCategorieServices(categorieService)}
      className={` px-2.5 py-1.5 md:px-5 md:py-2.5 border border-[#0041FF] font-medium text-[12px] md:text-[16px] ${
        isSelected
          ? "bg-[#0041FF] text-white hover:bg-[#0041FF]/90"
          : "hover:bg-[#0041FF]/70 text-[#0041FF] hover:text-white"
      } rounded-lg`}
    >
      <p>{categorieService?.name}</p>
    </button>
  );
};

export default AllServiceCategorie;
