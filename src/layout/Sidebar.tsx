import {
  Divider,
  Drawer,
  List,
  IconButton,
  styled,
  SxProps,
  Box,
  useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import SidebarItem from "./SidebarItem";
import { useTranslation } from "react-i18next";

export const drawerWidth = 290;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DRAWER: SxProps = {
  position: "relative",
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "#FAFAFB",
    border: "2px solid #fff",
    boxShadow: "inset -2px 0px 3px rgb(15 31 68 / 6%)",
    px: 1,
    overflow: "auto",
    "::-webkit-scrollbar": { display: "none" },
  },
};

const DRAWER_HEADER_SX: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  bgcolor: "#red",
  backgroundImage: "linear-gradient(45deg, #020691, #96D2F2)",
  backgroundSize: "100%",
  backgroundRepeat: "repeat",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
};

type Props = {
  open: boolean;
  handleDrawerClose: () => void;
};

function Sidebar({ handleDrawerClose, open }: Props) {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Drawer sx={DRAWER} variant="persistent" anchor="left" open={open}>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          width: drawerWidth - 20,
          zIndex: 90,
          bgcolor: "#FAFAFB",
        }}
      >
        <DrawerHeader sx={DRAWER_HEADER_SX}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
      </Box>

      <List>
        <SidebarItem link="/users" text={t("users")} />
        <SidebarItem link="/products" text={t("products")} />
        <SidebarItem link="/d3" text={t("d3")} />
      </List>
    </Drawer>
  );
}

export default Sidebar;
