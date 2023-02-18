import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewsCard = ({ title, briefDescription, imageURL, id }) => {
  const navigate = useNavigate();

  const handleEdit = (e) => {
    navigate(`newschange/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:4000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = (e) => {
    deleteRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/"))
      .then(() => navigate("/allnews"));
  };

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  console.log(isLoggedIn);

  return (
    <Card
      sx={{
        maxWidth: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      {isLoggedIn && (
        <Box>
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            <ModeEditOutlineIcon color="warning" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteForeverIcon color="warning" />
          </IconButton>
        </Box>
      )}
      <CardHeader title={title} />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {briefDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
