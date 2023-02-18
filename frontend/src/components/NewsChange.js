import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const lableStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const NewsChange = () => {
  const navigate = useNavigate();

  const [blog, setBlog] = useState();

  const id = useParams().id;

  console.log(id);

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({
        title: data.blog.title,
        briefDescription: data.blog.briefdescription,
        fullDescription: data.blog.fulldescription,
        imageURL: data.blog.image,
      });
    });
  }, [id]);

  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:4000/api/blog/update/${id}`, {
        title: inputs.title,
        briefDescription: inputs.briefdescription,
        fullDescription: inputs.fulldescription,
        imageURL: inputs.image,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  console.log(blog);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/"))
      .then(() => navigate("/allnews"));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor="green"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin={"auto"}
            marginTop={3}
            display="flex"
            flexDirection={"column"}
            width={"80%"}
          >
            <Typography
              fontWeight={"bold"}
              padding={3}
              color="gray"
              variant="h2"
              textAlign="center"
            >
              Post News
            </Typography>
            <InputLabel sx={lableStyles}>Title</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.title}
              margin="auto"
              variant="outlined"
            />
            <InputLabel sx={lableStyles}>Brief Description</InputLabel>
            <TextField
              name="briefDescription"
              multiline
              rows={3}
              onChange={handleChange}
              value={inputs.briefDescription}
              margin="auto"
              variant="outlined"
            />
            <InputLabel sx={lableStyles}>Full Description</InputLabel>
            <TextField
              name="fullDescription"
              multiline
              rows={10}
              onChange={handleChange}
              value={inputs.fullDescription}
              margin="auto"
              variant="outlined"
            />
            <InputLabel sx={lableStyles}>imageURL</InputLabel>
            <TextField
              name="imageURL"
              onChange={handleChange}
              value={inputs.imageURL}
              margin="auto"
              variant="outlined"
            />
            <Button
              sx={{ mt: 2, borderRadius: 4 }}
              variant="contained"
              color="warning"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default NewsChange;
