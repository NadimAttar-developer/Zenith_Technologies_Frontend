import {
  IconButton,
  Toolbar,
  styled,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import { Menu } from "@mui/icons-material";
import { drawerWidth } from "./Sidebar";
import LanguageButton from "components/LanguageButton";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps & { open: boolean }>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface NavbarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

function Navbar({ handleDrawerOpen, open }: NavbarProps) {
  return (
    <AppBar
      elevation={0}
      position="fixed"
      open={open}
      sx={{
        width: "100%",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mx: 0, ...(open && { display: "none" }) }}
            >
              <Menu />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography px={1} fontWeight={600}>
                  Nadim Attar
                </Typography>
              </Box>
              <Avatar />
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: 2 }}>
          <LanguageButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
