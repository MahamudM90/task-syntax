import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="lg:px-52 bg-base-200 py-5">
      <h1 className="text-2xl font-bold text-center py-6">View Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 pb-5">
        {blogs.map((blog) => (
          <CardItem key={blog._id} blog={blog}></CardItem>
        ))}
      </div>
    </div>
  );
};

export default Home;
