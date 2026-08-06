import ReadBlogDetails from "./ReadBlogDetails";
import ReadBlogPart2Extra from "./ReadBlogPart2Extra";
import ReadBlogs from "./ReadBlogs";

const ReadBlogPart2 = () => {
  return (
    <div className="mx-auto px-4 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20 flex flex-col gap-12">
      
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <ReadBlogDetails />
        <div className="flex-1">
          <ReadBlogs />
        </div>
      </div>

      {/* Extra / Related Blogs */}
      <ReadBlogPart2Extra />
    </div>
  );
};

export default ReadBlogPart2;