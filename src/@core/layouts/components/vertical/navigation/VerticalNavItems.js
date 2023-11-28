// ** Custom Menu Components
import React, { useState } from 'react'
import VerticalNavLink from './VerticalNavLink'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'
import { List, ListItemButton, Collapse, ListItemText, ListItemIcon, ListSubheader } from '@mui/material'
import { InboxIcon, DraftsIcon, SendIcon, ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material"

const resolveNavItemComponent = item => {
  if (item.sectionTitle) return VerticalNavSectionTitle

  return VerticalNavLink
}


const VerticalNavItems = props => {
  // ** Props
  const { verticalNavItems } = props
  const RenderMenuItemsMain = verticalNavItems?.map((item, index) => {
    if (item.tab == "main") {
      const TagName = resolveNavItemComponent(item)
      return <TagName {...props} key={index} item={item} />
    }
  })
  const RenderMenuItemsProfile = verticalNavItems?.map((item, index) => {
    if (item.tab == "profile") {
      const TagName = resolveNavItemComponent(item)
      return <TagName {...props} key={index} item={item} />
    }
  })
  const RenderMenuItemsService = verticalNavItems?.map((item, index) => {
    if (item.tab == "service") {
      const TagName = resolveNavItemComponent(item)
      return <TagName {...props} key={index} item={item} />
    }
  })
  const RenderMenuItemsOthers = verticalNavItems?.map((item, index) => {
    if (item.tab == "others") {
      const TagName = resolveNavItemComponent(item)
      return <TagName {...props} key={index} item={item} />
    }
  })
  const RenderMenuItemsReports = verticalNavItems?.map((item, index) => {
    if (item.tab == "reports") {
      const TagName = resolveNavItemComponent(item)
      return <TagName {...props} key={index} item={item} />
    }
  })

  const [openService, setOpenService] = useState(false)
  const [openMain, setOpenMain] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const [openReports, setOpenReports] = useState(false)

  const handleServiceClick = () => {
    setOpenService(!openService);
  };
  const handleMainClick = () => {
    setOpenMain(!openMain);
  };
  const handleProfileClick = () => {
    setOpenProfile(!openProfile);
  };
  const handleReportsClick = () => {
    setOpenReports(!openReports);
  };
  // return <>{RenderMenuItems}</>
  return (
    <List
      sx={{ width: '250px' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <>{RenderMenuItemsMain}</>
      <ListItemButton sx={{ display: "flex", flexDirection: "row", direction: "rtl", textAlign: "start" }} onClick={handleProfileClick}>
        <ListItemText sx={{ direction: "rtl" }} primary="پروفایل" />
        {openProfile ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProfile} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, display: "flex", flexDirection: "column" }}>
            <>{RenderMenuItemsProfile}</>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton sx={{ display: "flex", flexDirection: "row", direction: "rtl", textAlign: "start" }} onClick={handleServiceClick}>
        <ListItemText sx={{ direction: "rtl" }} primary="سرویس" />
        {openService ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openService} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, display: "flex", flexDirection: "column" }}>
            <>{RenderMenuItemsService}</>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton sx={{ display: "flex", flexDirection: "row", direction: "rtl", textAlign: "start" }} onClick={handleReportsClick}>
        <ListItemText sx={{ direction: "rtl" }} primary="گزارشات" />
        {openReports ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openReports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, display: "flex", flexDirection: "column" }}>
            <>{RenderMenuItemsReports}</>
          </ListItemButton>
        </List>
      </Collapse>
      <>{RenderMenuItemsOthers}</>
    </List>
  )
}

export default VerticalNavItems
