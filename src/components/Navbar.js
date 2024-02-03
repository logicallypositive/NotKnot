import { Button } from "@mui/material";
import { Box } from "@mui/material";
import SettingsButton from "./Icons/SettingsButton";
import LoginButton from "./Icons/LoginButton";
import SearchButton from "./Icons/SearchButton";

const ButtonStyle = {
  color: "white",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    background: "none",
    color: "black",
  },
};
export default function Navbar({ children }) {
  return (
    <>
      <div className="navbar">
        <div
          className="container"
          style={{
            display: "flex",
          }}
        >
          <Box className="startNav" sx={{ display: "flex", width: "100%" }}>
            <Button style={ButtonStyle}>Gallery</Button>
            <Button style={ButtonStyle}>My Page</Button>
            <Button style={ButtonStyle}>Following</Button>
          </Box>

          <Box
            className="middleNav"
            sx={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            {children}
          </Box>

          <Box
            className="endNav"
            sx={{ display: "flex", width: "100%", justifyContent: "end" }}
          >
            <SearchButton />
            <LoginButton />
            <SettingsButton />
          </Box>
        </div>
      </div>
    </>
  );
}
