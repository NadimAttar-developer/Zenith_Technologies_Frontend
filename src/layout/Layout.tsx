import { Box, styled } from "@mui/material";
import { FC, PropsWithChildren, useState } from "react";
import Sidebar, { drawerWidth } from "./Sidebar";
import Navbar from "./Navbar";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar handleDrawerOpen={() => setOpen(true)} open={open} />
      <Sidebar handleDrawerClose={() => setOpen(false)} open={open} />
      <Main
        open={open}
        sx={{ pt: 9, pl: 1, width: "100%", overflow: "hidden" }}
      >
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
