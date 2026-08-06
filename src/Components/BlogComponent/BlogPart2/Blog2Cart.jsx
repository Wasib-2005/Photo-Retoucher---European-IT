import { FaUser } from "react-icons/fa";
import { Link } from "react-router";

const Blog2Cart = ({ blogData }) => {
  return (
    <Link
    to={blogData?._id}
     className="flex flex-col gap-6 bg-[#f3f4f6] rounded-2xl max-w-160">
      <img className="w-full" src={blogData?.img} alt="" />
      <div className="flex flex-col gap-2 text-[12px] text-[#1B263B] px-6 pb-7">
        <h1 className="uppercase">
          By <span>{blogData?.user}</span> | <span>{blogData?.date}</span>
        </h1>
        <h1 className="text-[16px] font-medium">{blogData?.title}</h1>
        <p className="flex items-center gap-1 uppercase">
          <span className="text-[#0041FF]">Product photography</span> |{" "}
          <FaUser /> <span>{blogData?.read} read</span>
        </p>
      </div>
    </Link>
  );
};

export default Blog2Cart;
