import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material/";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "/details" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "/blog" },
    { Name: "Contact us", Link: "/contact" },
  ];
  const [open, SetOpen] = useState(false);
  return (
    <AppBar sx={{ background: "black", position: "fixed" }}>
      <StyledToolbar>
        <SocialBox>
          <a href="https:www.facebook.com">
            <Facebook sx={{color:'white'}}/>
          </a>
          <a href="https:www.instagram.com">
            <Instagram sx={{color:'white'}}/>
          </a>
          <a href="https:www.twitter.com">
            <Twitter sx={{color:'white'}}/>
          </a>
        </SocialBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {/* {item.Name} */}
              <Link
                to={item.Link}
                style={{ color: "white", textDecoration: "none" }}
              >
                {item.Name}
              </Link>
            </Typography>
          ))}
        </MenuBox>

        <SearchBox>
          <InputBase placeholder="Search ..." sx={{ color: "white" }} />
          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={() => SetOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem
              onClick={() => SetOpen(!open)}
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: "orange",
                  color: "white",
                  fontWeight: "700",
                },
              }}
            >
              <Link
                to={item.Link}
                style={{ color: "black", textDecoration: "none" }}
              >
                {item.Name}
              </Link>
              {/* {item.Name } */}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
