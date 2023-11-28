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
import { Typography, Card, GridTypeMap, InputLabel } from '@mui/material'
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
import { IMaskInput } from 'react-imask';

export default function CarServicesInquiry(prop) {

  const { displayables, onBack } = prop
  console.log()
  const routeServicehandler = () => {

  }

  return (
    <Box sx={{ width: "75%", margin: "0 auto" }}>
      <Card sx={{ backgroundColor: "#FAFAFA" }}>
        <Button variant='contained' sx={{ m: 5, mb: 1 }} onClick={onBack}>بازگشت</Button>
        {/* only plate number required */}
        {(displayables != "activeplates" && displayables != "negativescore" && displayables != "license") && <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "auto", minHeight: "200px", textAlign: "center" }}>
          <Box sx={{ mb: 6 }}>
            <InputLabel sx={{ textAlign: "left", width: "35%", margin: "0 auto", mb: 1 }} htmlFor="formatted-text-mask-input">شماره پلاک</InputLabel>
            <Card sx={{ width: "38%", margin: '0 auto', border: "1px solid #ddd", display: "flex", height: "75px", direction: "ltr" }}>
              <IMaskInput
                style={{ direction: "ltr", textAlign: "center", width: "25%", border: "0px solid blue", borderRight: "1px solid #ddd", borderRadius: "5px" }}
                mask="$$"
                definitions={{
                  '$': /[1-9]/
                }}
              />
              <IMaskInput
                style={{ direction: "ltr", textAlign: "center", width: "18.5%", border: "0px solid blue", borderRadius: "5px", borderRight: "1px solid #ddd" }}
                mask="$"
                definitions={{
                  '$': /[ا-ی]/
                }}
              />
              <IMaskInput
                style={{ direction: "ltr", textAlign: "center", width: "31.5%", border: "0px solid blue", borderRadius: "5px", borderRight: "1px solid #ddd" }}
                mask="$$$"
                definitions={{
                  '$': /[1-9]/
                }}
              />
              <IMaskInput
                style={{ direction: "ltr", textAlign: "center", width: "25%", border: "0px solid blue", borderRadius: "5px" }}
                mask="$$"
                definitions={{
                  '$': /[1-9]/
                }}
              />
            </Card>

          </Box>
        </Box>}
        {/* nationalcode cellphone number license Number required */}
        {(displayables == "activeplates" || displayables == "negativescore" || displayables == "license") && <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "auto", minHeight: "200px", textAlign: "center" }}>
          <Box sx={{ mb: 6 }}>
            <InputLabel sx={{ textAlign: "left", width: "35%", margin: "0 auto", mb: 1 }} htmlFor="formatted-text-mask-input">شماره گواهی نامه</InputLabel>
            <IMaskInput
              style={{ direction: "ltr", textAlign: "center", width: "38%", borderRadius: "5px", height: "50px", border: "1px solid #ddd" }}
              mask="$$$$$$$$$$"
              definitions={{
                '$': /[0-9]/
              }}
            />
          </Box>
          <Box sx={{ mb: 6 }}>
            <InputLabel sx={{ textAlign: "left", width: "35%", margin: "0 auto", mb: 1 }} htmlFor="formatted-text-mask-input">کد ملی</InputLabel>
            <IMaskInput
              style={{ direction: "ltr", textAlign: "center", width: "38%", borderRadius: "5px", height: "50px", border: "1px solid #ddd" }}
              mask="$$$$$$$$$$"
              definitions={{
                '$': /[0-9]/
              }}
            />
          </Box>
          <Box sx={{ mb: 6 }}>
            <InputLabel sx={{ textAlign: "left", width: "35%", margin: "0 auto", mb: 1 }} htmlFor="formatted-text-mask-input">تلفن همراه</InputLabel>
            <IMaskInput
              style={{ direction: "ltr", textAlign: "center", width: "38%", borderRadius: "5px", height: "50px", border: "1px solid #ddd" }}
              mask="$$$$$$$$$$$"
              definitions={{
                '$': /[0-9]/
              }}
            />
          </Box>
        </Box>}
        {/* shenase ghabz va shenase pardakht required */}
        {false && <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "auto", minHeight: "200px", textAlign: "center" }}>
          <Box sx={{ mb: 6 }}>
            <InputLabel sx={{ textAlign: "left", width: "35%", margin: "0 auto", mb: 1 }} htmlFor="formatted-text-mask-input">شناسه قبض</InputLabel>
            <IMaskInput
              style={{ direction: "ltr", textAlign: "center", width: "38%", borderRadius: "5px", height: "50px", border: "1px solid #ddd" }}
              mask="$$$$$$$$$$"
              definitions={{
                '$': /[0-9]/
              }}
            />
          </Box>
          <Box sx={{ mb: 6 }}>
            <InputLabel sx={{ textAlign: "left", width: "35%", margin: "0 auto", mb: 1 }} htmlFor="formatted-text-mask-input">شناسه پرداخت</InputLabel>
            <IMaskInput
              style={{ direction: "ltr", textAlign: "center", width: "38%", borderRadius: "5px", height: "50px", border: "1px solid #ddd" }}
              mask="$$$$$$$$$$"
              definitions={{
                '$': /[0-9]/
              }}
            />
          </Box>
        </Box>}
        <Box sx={{ display: "flex" }}>
          <Button variant='contained' sx={{ width: "15%", minWidth: "150px", margin: "0 auto", mb: 5, height: "60px" }}>استعلام</Button>
        </Box>
      </Card >
    </Box >
  )
}
