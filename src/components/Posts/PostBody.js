import { Box } from "@mui/material";

export default function PostBody({ post }) {
  const hasRating = post.rating !== null;
  return (
    <Box>
      <span> Rating: {hasRating ? post.rating + "/5" : "N/A"}</span>
      {/* <p>Status: {post.status}</p> */}
      <p>Categories: {post.category.join(", ")}</p>
      <p>Description: {post.description}</p>
    </Box>
  );
}
