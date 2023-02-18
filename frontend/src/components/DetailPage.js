import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Card, CardMedia, Typography } from "@mui/material";
const DetailPage = () => {
  const id = useParams().id;
  
  console.log(id);

  const [blog, setBlog] = useState([]);

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setBlog(data.blog));
  }, []);

  console.log(blog);

  return (
    <div>
      <Box marginLeft={"auto"} marginRight="auto">
        <Typography textAlign={"center"}>{blog.title}</Typography>
        <Card>
          <CardMedia
            component="img"
            width="95%"
            image={blog.image}
            alt="Paella dish"
          />
        </Card>
        <Typography textAlign={"center"}>{blog.fulldescription}</Typography>
      </Box>
    </div>
  );
};

export default DetailPage;
