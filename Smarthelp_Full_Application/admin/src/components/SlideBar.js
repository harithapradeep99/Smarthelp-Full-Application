import {
  Avatar,
  Badge,
  Box,
  Chip,
  Collapse,
  createTheme,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlideBarListItems } from "./SlideBarListItems";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { getOnePermission } from "../redux/permissionApiCalls";
const drawerWidth = 340;

const theme = createTheme({
  palette: {
    primary: {
      main: "#007A31",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function SlideBar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabValue, setTabValue] = useState(props.value);
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.currentUser.user_id);
  const token = useSelector((state) => state.user.token);
  const permissionsData = useSelector(
    (state) => state.permissionData.permissionsData
  );

  let data = {};

  const [checked, setChecked] = useState({
    adminUser: [true, true, true, true],
    event: [true, true, true, true],
    advertisement: [true, true, true, true],
    post: [true, true, true, true],
  });

  useEffect(() => {
    const getPermissionDataFromOutside = async () => {
      // let data = {};
      // const result = await getOnePermission(dispatch, token, userId);
      // if (result) {
        
      //   data = result;
      //   setChecked(data);
      //   console.log(checked);
      //   console.log(data);
      //   setValuesForSidebar();
      // }
      setValuesForSidebar();
    };
    getPermissionDataFromOutside();
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const listItems = SlideBarListItems(props.tabValue);
  const listItems = SlideBarListItems(props.tabValue);

  const setValuesForSidebar = () => {
    let dataArray = [];
    listItems.map((items) => {
      if (items.name == "dashboard") {
        dataArray.push(items);
      }
      if (data.view_users) {
        if (items.name == "view_users") {
          dataArray.push(items);
        }
      }
      if (data.view_events) {
        if (items.name == "view_events") {
          dataArray.push(items);
        }
      }
      if (data.view_posts) {
        if (items.name == "view_posts") {
          dataArray.push(items);
        }
      }
      if (data.view_advertisement) {
        if (items.name == "view_advertisement") {
          dataArray.push(items);
        }
      }
    });
    setItems(listItems);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Social
      </Typography>
      <Divider />
      <List>
        {items.map((listItem) => (
          <div key={listItem.id}>
            {!listItem.hasExpand ? (
              <ListItemButton
                key={listItem.id}
                onClick={() => navigate(listItem.link)}
              >
                <ListItemIcon>{listItem.icon}</ListItemIcon>
                <ListItemText primary={listItem.listName} />
              </ListItemButton>
            ) : (
              <React.Fragment>
                <ListItemButton key={listItem.id} onClick={handleClick}>
                  <ListItemIcon>{listItem.icon}</ListItemIcon>
                  <ListItemText primary={listItem.listName} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {listItem.expand.map((expandItem) => (
                      <ListItemButton
                        key={expandItem.id}
                        onClick={() => navigate(expandItem.link)}
                        sx={{ pl: 4 }}
                      >
                        <ListItemIcon>{expandItem.icon}</ListItemIcon>
                        <ListItemText primary={expandItem.listName} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
  return (
    <ThemeProvider theme={theme}>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={props.open}
          onClose={props.onClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            //   display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default SlideBar;
