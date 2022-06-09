import {
  Box,
  Drawer,
  List,
  createTheme,
  ListItem,
  IconButton,
  Toolbar,
  ListItemButton,
} from "@mui/material";
import Image from "next/image";
import { ThemeProvider } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 72;

const AdvoticsSidebar = () => {
  const theme = createTheme({
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "#D2D2D2",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem
            key="burger"
            style={{ display: "flex", justifyContent: "center" }}
            disablePadding
          >
            <IconButton aria-label="log out" size="large">
              <MenuIcon fontSize="large" sx={{ color: "#C5C5C5" }} />
            </IconButton>
          </ListItem>
          <ListItem key="dashboard" disablePadding>
            <ListItemButton
              selected
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                height={30}
                width={30}
                position="relative"
                backgroundColor="white"
                style={{ display: "flex", justifyContent: "center" }}
                sx={{ borderRadius: "15%", p: 0.5 }}
              >
                <Image
                  src="/dashboard-icon.png"
                  alt="dashboard"
                  width="100"
                  height="100"
                />
              </Box>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default AdvoticsSidebar;
