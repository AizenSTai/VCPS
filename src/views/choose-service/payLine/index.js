import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import moment from 'jalali-moment'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import themeConfig from 'src/configs/themeConfig'
import DateTimePicker from 'src/@core/theme/overrides/dateTimePicker'
import Export from 'src/views/ExportToPdf'
import userProfile from "src/Userprofile/userProfile";
import { set } from 'nprogress'
import styled from '@emotion/styled'

export default function PayLine(prop) {
  const [rows, setRows] = useState([])
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)

  const TrophyImg = styled('button')({
    height: 100,
    width: 100,
    borderRadius: "10px",
    overflow: "hidden",
    display: 'flex',
    border: "1px solid #ddd",
    boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff',
    cursor: "pointer",
    ":hover": {
      boxShadow: "0 15px 15px 3px #d2d2d2, inset 0 0 1px 1px #00b1ff",
    }
  })

  const ExportDataHandler = async () => {
    await Export(prop.serviceList)
  }
  const date = moment().locale('fa').format('YYYY/M/D')
  const [name, setName] = useState({})
  userProfile().then(itm => setName(itm))
  let count = 0
  return (
    <Box sx={{ gap: "40px", display: "flex", width: "60%", flexDirection: "row", height: 'auto', justifyContent: "center" }}>
      <Box>
        <Button sx={{
          backgroundImage: 'url("/images/payimages/mellat.jpg")', backgroundSize: "contain", backgroundRepeat: "no-repeat",
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          display: 'flex',
          boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff',
          backgroundPosition: "center", height: "100px", width: "100px",
        }} />
      </Box>
      <Box>
        <Button sx={{
          backgroundImage: 'url("/images/payimages/saderat.jpg")', backgroundSize: "contain", backgroundRepeat: "no-repeat",
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          display: 'flex',
          boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff',
          backgroundPosition: "center", height: "100px", width: "100px",
        }} />
      </Box>
      <Box>
        <Button sx={{
          backgroundImage: 'url("/images/payimages/tejarat.jpg")', backgroundSize: "contain", backgroundRepeat: "no-repeat",
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          display: 'flex',
          boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff',
          backgroundPosition: "center", height: "100px", width: "100px",
        }} />
      </Box>

    </Box>
  )
}
