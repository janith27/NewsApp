import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
const AllNews = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:4000/api/blog/getnews")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <NewsCard
            id={blog._id}
            title={blog.title}
            briefDescription={blog.briefdescription}
            imageURL={blog.image}
          />
        ))}
    </div>
  );
};

export default AllNews;
