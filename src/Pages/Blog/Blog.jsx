import BlogPart1 from "../../Components/BlogComponent/BlogPart1/BlogPart1";
import BlogPart2 from "../../Components/BlogComponent/BlogPart2/BlogPart2";
import NavbarSpece from "../../Components/Navbar/NavbarSpece";

const Blog = () => {
  return (
    <div>
      <NavbarSpece />

      <BlogPart1 />

      <div className="mx-auto px-4 md:px-12 lg:px-20 py-10 md:py-20">
        <BlogPart2 />
      </div>
    </div>
  );
};

export default Blog;
