import { IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function SettingsButton() {
  return (
    <IconButton color="inherit">
      <SettingsOutlinedIcon sx={{ color: "white" }} />
    </IconButton>
  );
}
