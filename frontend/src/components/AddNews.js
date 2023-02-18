import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const lableStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddNews = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    briefDescription: "",
    fullDescription: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:4000/api/blog/add", {
        title: inputs.title,
        briefdescription: inputs.briefDescription,
        fulldescription: inputs.fullDescription,
        image: inputs.imageURL,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

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
          <InputLabel sx={lableStyles}>ImageURL</InputLabel>
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
    </div>
  );
};

export default AddNews;
