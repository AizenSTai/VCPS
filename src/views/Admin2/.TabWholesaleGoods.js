import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
// import { Toolbar } from '@mui/material'
import { List, ListItemButton, ListItem, Link, Collapse, ListItemText, ListItemIcon, ListSubheader, Typography, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { InboxIcon, DraftsIcon, SendIcon, ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material"

export default function TabWholesaleGoods() {
  // const childRef = useRef(null)
  // const childRef1 = useRef(null)
  // const [openList, setopenList] = React.useState({});
  // const handlerListOpen = el => {
  //   console.log("el", el.currentTarget.getAttribute("name"))
  //   const target = el.currentTarget
  //   setopenList(prev => ({
  //     ...prev,
  //     [target.getAttribute("name")]: !prev[
  //       target.getAttribute("name")
  //     ]
  //   }))
  // }
  // const pages = [{ title: "1", name: "آسانسور" }, { title: "2", name: "غذا" }]
  // const checkboxes = [{ type: "آسانسور", name: "موتور" }, { type: "آسانسور", name: "سیم" }, { type: "غذا", name: "گوشت" }, { type: "غذا", name: "برنج" }, { type: "غذا", name: "روغن" }]
  // const cbvalids = [{ type: "آسانسور", name: "موتور" }, { type: "غذا", name: "گوشت" }]
  // const ShowGoodsHandler = () => {
  //   const lists = pages.map((itm) => {
  //     return (
  //       <Box>
  //         <ListItemButton name={itm.title} sx={{ display: "flex", flexDirection: "row", direction: "rtl", textAlign: "start" }} onClick={handlerListOpen}>
  //           <ListItemText sx={{ direction: "rtl" }} primary={itm.name} />
  //           {openList[itm.title] ? <ExpandLess /> : <ExpandMore />}
  //         </ListItemButton>
  //         <Collapse in={openList[itm.title]} timeout="auto" unmountOnExit>
  //           <List component="div" disablePadding>
  //             <ListItemButton sx={{ pl: 4, display: "flex", flexDirection: "column" }}>
  //               <FormGroup sx={{ml:"auto"}}>
  //                 {checkboxes.map((cb) => {
  //                   if (cb.type == itm.name) {
  //                     const isValid = false
  //                     cbvalids.map((indx)=>{
  //                       if(indx.type == cb.type && indx.name == cb.name){
  //                         console.log(indx.type + " " + cb.type + " " + indx.name + " " + cb.name)
  //                         isValid = true
  //                       }
  //                     })
  //                     return <FormControlLabel control={<Checkbox defaultChecked={isValid == true} />} label={cb.name} />
  //                   }
  //                 })}
  //               </FormGroup>
  //             </ListItemButton>
  //           </List>
  //         </Collapse>
  //       </Box>
  //     )
  //   })
  //   return lists

  // }
  // return (
  //   <Box sx={{ height: 770, width: '30%' }}>
  //     <ShowGoodsHandler />
  //     <SnackbarPopUp ref={childRef} severity={'success'} message={'عملیات موفق'} />
  //     <SnackbarPopUp ref={childRef1} severity={'error'} message={'عملیات ناموفق'} />
  //   </Box>
  // )
}
