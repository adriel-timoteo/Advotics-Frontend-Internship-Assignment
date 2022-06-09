import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "@emotion/react";
import LogoutIcon from "@mui/icons-material/Logout";

const AdvoticsNavbar = () => {
  const theme = createTheme({
    typography: {
      subtitle1: {
        fontFamily: "Open Sans",
        fontSize: 11,
        fontWeight: 400,
      },
      subtitle2: {
        fontFamily: "Open Sans",
        fontSize: 10,
        fontWeight: 300,
      },
      body1: {
        fontFamily: "Open Sans",
        fontSize: 14,
        fontWeight: 500,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        style={{ background: "white" }}
        sx={{ zIndex: 1400 }}
      >
        <Toolbar>
          <Box height={40} width={120} position="relative" mx={1}>
            <Link href="/">
              <a>
                <Image
                  src="/advotics-logo.jpg"
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            <Typography variant="subtitle1" style={{ color: "#5B5B5B" }} pb={1}>
              powered by
            </Typography>
            <Box height={15} width={70} position="relative" my={0.3}>
              <Image
                src="/advotics-logo.jpg"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", flexGrow: 0 }}
            px={1}
          >
            <Typography
              variant="body1"
              style={{ color: "#727272" }}
              align="center"
            >
              Username
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "#727272" }}
              align="center"
            >
              Company Name
            </Typography>
          </Box>
          <Avatar sx={{ width: 35, height: 35, mx: 1 }} />
          <IconButton sx={{ mx: 2 }} aria-label="log out">
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AdvoticsNavbar;
