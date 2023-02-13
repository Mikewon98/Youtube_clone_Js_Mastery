import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState();
  const { SearchTerms } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=SearchTerms`).then((data) =>
      setVideos(data.items)
    );
  }, [SearchTerms]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: "white" }}>
        Search Results For:{" "}
        <span style={{ color: "#F31509" }}> {SearchTerms}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
