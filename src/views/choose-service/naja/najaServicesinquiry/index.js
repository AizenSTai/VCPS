import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import moment from 'jalali-moment'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Button, TextField, InputAdornment } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import { Typography, Card, Grid } from '@mui/material'
import { blue } from '@mui/material/colors'
import themeConfig from 'src/configs/themeConfig'
import DateTimePicker from 'src/@core/theme/overrides/dateTimePicker'
import Export from 'src/views/ExportToPdf'
import userProfile from "src/Userprofile/userProfile";
import { set } from 'nprogress'
import jsPDF from 'jspdf'
// import { ResponsiveTooltipWrapper } from '@mui/lab/internal/pickers/wrappers/ResponsiveWrapper'
import html2canvas from 'html2canvas'
import { letterSpacing, style, textAlign } from '@mui/system'
import ChooseService from 'src/pages/BillingSellService'
import ServiceButton from '../../buttonServiceStructuring'

export default function NajaServicesInquiry(prop) {

  const { displayables, onBack } = prop
  const routeServicehandler = () => {
  }
  return (
    <Box sx={{ width: "75%", margin: "0 auto" }}>
      <Card sx={{ backgroundColor: "#FAFAFA" }}>
        <Button variant='contained' sx={{ m: 5, mb: 1 }} onClick={onBack}>بازگشت</Button>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "auto", minHeight: "200px", textAlign: "center" }}>
          {/* <Box sx={{ mb: 10 }}>
            <TextField
              id="outlined-required"
              label="شماره کاربر"
              sx={{ direction: "ltr" }}
            // InputProps={{
            //   startAdornment: <InputAdornment position="start"> +98 </InputAdornment>
            // }}
            />
          </Box> */}
          <Box sx={{ mb: 10 }}>
            <TextField
              id="outlined-required"
              label="کد ملی مالک"
              sx={{ direction: "ltr",width:"35%" }}              
            // InputProps={{
            //   startAdornment: <InputAdornment position="start"> +98 </InputAdornment>
            // }}
            />
          </Box>
          <Box sx={{ mb: 10 }}>
            <TextField
              id="outlined-required"
              label="شماره موبایل مالک"
              sx={{ direction: "ltr",width:"35%" }}              
            // InputProps={{
            //   startAdornment: <InputAdornment position="start"> +98 </InputAdornment>
            // }}
            />
          </Box>
          {displayables == "negativescore" && <Box sx={{ mb: 10 }}>
            <TextField
              id="outlined-required"
              label="شماره گواهینامه"
              sx={{ direction: "ltr", width: "35%", minWidth: "250px" }}
            // InputProps={{
            //   startAdornment: <InputAdornment position="start"> +98 </InputAdornment>
            // }}
            />
          </Box>}
          {(displayables == "vehiclecart" || displayables == "vehicleinfractions" || displayables == "infractionpictures" || displayables == "infractionsum") && <Box sx={{ mb: 10 }}>
            <TextField
              id="outlined-required"
              label="شماره پلاک"
              sx={{ direction: "ltr", width: "35%", minWidth: "250px" }}
            // InputProps={{
            //   startAdornment: <InputAdornment position="start"> +98 </InputAdornment>
            // }}
            />
          </Box>}
          {displayables == "infractionpictures" && <Box sx={{ mb: 10 }}>
            <TextField
              id="outlined-required"
              label="شماره تخلف عکسدار"
              sx={{ direction: "ltr", width: "35%", minWidth: "250px" }}
            // InputProps={{
            //   startAdornment: <InputAdornment position="start"> +98 </InputAdornment>
            // }}
            />
          </Box>}
          <Button variant='contained' sx={{ width: "15%", minWidth: "150px", margin: "0 auto", mb: 5, height: "60px" }}>استعلام</Button>
        </Box>
      </Card >
    </Box >
  )
}
