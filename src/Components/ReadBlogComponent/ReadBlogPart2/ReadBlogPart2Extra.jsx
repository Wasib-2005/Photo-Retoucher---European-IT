import Blog2Cart from "../../BlogComponent/BlogPart2/Blog2Cart";

const ReadBlogPart2Extra = () => {
  const extraBlogs = [
    {
      _id: "1",
      img: "/BlogImg/Blog1.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "2",
      img: "/BlogImg/Blog2.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
    {
      _id: "3",
      img: "/BlogImg/Blog3.png",
      user: "shovonahmed",
      date: "Jan 21, 2025",
      title: "How to Choose a Photo Retouching Company: 5 Red Flags To Avoid",
      read: 5,
    },
  ];

  return (
    <section className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="text-2xl font-bold text-[#1B263B] mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extraBlogs.map((blogData) => (
          <Blog2Cart key={blogData._id} blogData={blogData} />
        ))}
      </div>
    </section>
  );
};

export default ReadBlogPart2Extra;