import { FiUpload } from "react-icons/fi";

const ReadBlogDetails = () => {
  const articles = [
    "Red Flag 1: They Can't Explain Their Quality Control Process",
    "Red Flag 2: Weak File Handling and No Clear Confidentiality Process",
    "Red Flag 3: They Cannot Scale With You",
    "Red Flag 4: Pricing Is Unclear Until You Are Already Committed",
    "Red Flag 5: No Free Trial or Sample Option",
  ];

  return (
    <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-6 md:sticky top-24 self-start">
      {/* Table of Contents Card */}
      <div className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="text-xs font-bold text-[#0041FF] tracking-wider uppercase mb-4">
          In This Article
        </h3>
        <ul className="flex flex-col gap-3">
          {articles.map((item, index) => (
            <li
              key={index}
              className="text-xs text-[#1B263B] hover:text-[#0041FF] cursor-pointer transition-colors leading-snug border-b border-gray-100 pb-2 last:border-b-0 last:pb-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Share Button */}
      <button className="flex items-center gap-2 text-xs font-bold text-[#0041FF] uppercase tracking-wider hover:underline w-fit">
        <FiUpload className="text-sm" />
        <span>Share This Article</span>
      </button>
    </aside>
  );
};

export default ReadBlogDetails;