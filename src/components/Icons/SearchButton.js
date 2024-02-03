import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchButton() {
  return (
    <IconButton color="white" sx={{ size: "1.2em", color: "white" }}>
      <SearchIcon />
    </IconButton>
  );
}
