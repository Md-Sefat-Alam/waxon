import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Home", "About", "Portfolio", "News", "Contact"];

function Header(props) {
  const { window, offset } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [headerColor, setHeaderColor] = React.useState({
    backgroundColor: "rgba(255,255,255,0.3)",
    boxShadow: "none",
    transition: "all 0.05s",
  });

  React.useEffect(() => {
    if (offset > 20) {
      setHeaderColor({
        backgroundColor: "rgba(255,255,255,1)",
        boxShadow: "0 0 10px rgb(0 0 0 / 6%)",
        transition: "all 0.05s",
      });
    } else {
      setHeaderColor({
        backgroundColor: "rgba(255,255,255,0)",
        boxShadow: "none",
        transition: "all 0.05s",
      });
    }
  }, [offset]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
        <img
          className="cursor-pointer"
          style={{ maxWidth: "70px" }}
          src="./images/logo/logo.png"
          alt="logo"
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <a
                key={item}
                href={"#" + item.toLowerCase()}
                style={{ color: "black" }}
                className="px-4 font-bold"
              >
                {item}
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        // onScroll={}
        className="flex justify-center items-center"
        sx={{
          ...headerColor,
          color: "black",
        }}
        component="nav"
      >
        <Toolbar className="container">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                sm: "none",
                display: "flex",
                justifyContent: "between",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              className="cursor-pointer"
              style={{ maxWidth: "70px" }}
              src="./images/logo/logo.png"
              alt="logo"
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <a
                key={item}
                href={"#" + item.toLowerCase()}
                style={{ color: "black" }}
                className="px-4 font-bold"
              >
                {item}
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
