import PostBody from "./PostBody";
// import PostSteps from "./PostSteps";
import Heart from "../Icons/Heart.js";
import HeartFill from "../Icons/HeartFill.js";
import { Checkbox, Box } from "@mui/material";

export default function PostContainer({ post, onFavorite }) {
  if (!post) {
    return null;
  }
  // const hasSteps = Array.isArray(post.steps) && post.steps.length > 0;
  const hasPhoto = !!post.imageUrl;

  return (
    <li className="post">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "baseline",
        }}
      >
        <Checkbox
          size="small"
          icon={<Heart sx={{ padding: 0, marginBottom: 0 }} />} // Cute heart-shaped icon for unchecked state
          checkedIcon={<HeartFill />} // Filled heart-shaped icon for checked state
          onChange={() => onFavorite(post)}
          name="favorites"
        />
        <h3>{post.title}</h3>
      </Box>

      <Box className="postBodyContainer">
        {hasPhoto ? (
          <img
            className="crochetImage"
            src={post.imageUrl}
            alt={post.description}
          />
        ) : (
          <img
            className="crochetImage"
            src={"crochet-projects/NoPicture.png"}
            alt={post.description}
          />
        )}
        <PostBody post={post} />
        {/* {hasSteps ? <PostSteps post={post} /> : null} */}
      </Box>
    </li>
  );
}
