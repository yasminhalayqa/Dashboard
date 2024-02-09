import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import {
  HomeMaxOutlined,
  MenuOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { useTranslation } from "react-i18next";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        className="test"
      >
        {" "}
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};
const ProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const {t} = useTranslation()

  return (
    <Box>
      <Sidebar
        style={{
          position: "sticky",
          top: "10px",
          height: "100%",
          borderLeftWidth: "0px",
        }}
        collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
        rtl
        // height="100%"
        width="220px"
        collapsedWidth="4.5rem"
        breakPoint="md"
      >
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  {t("ADMINS")}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/*USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={`../../../public/assets/images/avatar.png`}
                  alt="user profile"
                  width="100px"
                  height="100px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Jasmin
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Developer
                </Typography>
              </Box>
            </Box>
          )}
          {/*MENU */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title={`${t("dashboard")}`}
              to="/dashboard"
              icon={<HomeMaxOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={`${t("team")}`}
              to="/team"
              icon={<PeopleAltOutlined />}
              selected={selected}
              setSelected={setSelected}
            />{" "}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
export default ProSidebar;
