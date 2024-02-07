import {
  ListItem,
  ListItemButton,
  ListItemText,
  SxProps,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

type Props = { link: string; text: string };

function SidebarItem({ text, link }: Props) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const active = pathname === link;

  const ITEM: SxProps = {
    borderRadius: 2,
    paddingLeft: 0.8,
    bgcolor: active ? theme.palette.primary.main : "",
    color: active ? "#f6f6f1" : "#555B77",
    transition: "all 500ms",
    ":hover": {
      bgcolor: "#9393ee",
      color: "#f6f6f1",
    },
  };

  return (
    <Link to={link}>
      <ListItem disablePadding>
        <ListItemButton sx={ITEM}>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

export default SidebarItem;
