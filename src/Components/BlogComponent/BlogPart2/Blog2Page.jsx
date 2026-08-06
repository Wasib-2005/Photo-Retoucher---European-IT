const Blog2Page = ({ page, selectedPage, setSelectedPage }) => {
  const isSelected = page === selectedPage;

  return (
    <button
      onClick={() => setSelectedPage(page)}
      ref={(el) => {
        if (isSelected && el) {
          el.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      }}
      className={`px-6 py-3 h-fit border rounded-lg shrink-0 hover:bg-[#0041FF] hover:text-white ${
        isSelected ? "bg-[#0041FF] text-white" : "border-black/50"
      }`}
    >
      <p>{page}</p>
    </button>
  );
};

export default Blog2Page;
