const ReadBlogs = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Main Blog Header Image */}
      <div className="w-full overflow-hidden rounded-2xl">
        <img
          src="/ReadBlogImg/ReadBlogImg.png"
          alt="5 Red Flags to Avoid"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Intro Text */}
      <div className="flex flex-col gap-4 text-[#1B263B] text-base leading-relaxed">
        <p>
          Some providers are excellent. Many are not. The gap between a quick fix and a reliable long-term partner usually only shows up when something breaks. Before you outsource photo editing, run through the five red flags below. Each one highlights a risk that can cost ecommerce teams time, money, and trust.
        </p>
        <p>
          Ask any retouching company how quality is checked before delivery. If the answer is vague, that tells you a lot.
        </p>
      </div>

      {/* Inline Quality Control Workflow Image */}
      <div className="w-full overflow-hidden rounded-2xl">
        <img
          src="/ReadBlogImg/ReadBlogImg1.png"
          alt="Path Photo Retouching Quality Control Workflow"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Outro Text */}
      <div className="flex flex-col gap-4 text-[#1B263B] text-base leading-relaxed">
        <p>
          A professional service should be able to explain the process clearly – who edits the image, who reviews it, and what happens before delivery.
        </p>
        <p>
          A professional service should be able to explain the process clearly – who edits the image, who reviews it, and what happens before delivery.
        </p>
      </div>

      {/* Category Tags */}
      <div className="flex flex-wrap gap-3 pt-4">
        {[
          "ECOMMERCE PHOTOGRAPHY",
          "OUTSOURCING",
          "PHOTO RETOUCHING",
          "PRODUCT PHOTOGRAPHY",
        ].map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-2 border border-[#0041FF] text-[#0041FF] rounded-md text-xs font-semibold tracking-wider hover:bg-[#0041FF] hover:text-white transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReadBlogs;