// ** React Imports
import React, { useState, useEffect } from 'react'
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-ussd'
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Divider, Typography } from '@mui/material'

// ** Icons Imports


const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' }
]

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const ForthPage = (prop) => {
  return (
    <Box sx={{ height: 'auto', transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid item xs={12} >
          <Typography sx={{ justifyContent: "center", color: "black", textAlign: "center", fontSize: "24px", backgroundColor: "lightblue" }}>کد های با واسطه</Typography>
          <Typography sx={{ justifyContent: "center", color: "grey", textAlign: "center", fontSize: "20px", backgroundColor: "lightblue" }}>کد های با واسطه با 1* شروع می شوند ، به طور مثال #[کد یک رقمی الی یازده رقمی]*1*6655*</Typography>
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='60.000.000 ریال'
            subtitle='رقمی'
            icon={<LooksTwoIcon sx={{ fontSize: "4rem", color: "orange" }} />}
            onClick={prop.onClick}
            price="60000000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='40.000.000 ریال'
            subtitle='رقمی'
            icon={<Looks3Icon sx={{ fontSize: "4rem", color: "orange" }} />}
            onClick={prop.onClick}
            price="40000000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='30.000.000 ریال'
            subtitle='رقمی'
            icon={<Looks4Icon sx={{ fontSize: "4rem", color: "orange" }} />}
            onClick={prop.onClick}
            price="30000000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='20.000.000 ریال'
            subtitle='رقمی'
            icon={<Looks5Icon sx={{ fontSize: "4rem", color: "orange" }} />}
            onClick={prop.onClick}
            price="20000000"
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={10}>
        <Grid item xs={12} >
          <Typography sx={{ justifyContent: "center", color: "black", textAlign: "center", fontSize: "24px", backgroundColor: "lightblue" }}>کد های بی واسطه</Typography>
          <Typography sx={{ justifyContent: "center", color: "grey", textAlign: "center", fontSize: "20px", backgroundColor: "lightblue" }}>کد های بی واسطهUSSD بدون عدد شروع کننده می‌باشد ،به طور مثال #[کد دو رقمی الی یازده رقمی]*6655*</Typography>
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='60.000.000 ریال'
            subtitle='رقمی'
            icon={<LooksTwoIcon sx={{ fontSize: "4rem", color: "orange" }} />}
            onClick={prop.onClick}
            price="60000000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='40.000.000 ریال'
            subtitle='رقمی'
            icon={<Looks3Icon sx={{ fontSize: "4rem", color: "orange" }} />}
            onClick={prop.onClick}
            price="40000000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='30.000.000 ریال'
            subtitle='رقمی'
            icon={<Looks4Icon sx={{ fontSize: "4rem", color: "orange" }} />}
            onClick={prop.onClick}
            price="30000000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='20.000.000 ریال'
            subtitle='رقمی'
            icon={<Looks5Icon sx={{ fontSize: "4rem", color: "orange" }} />}
            onClick={prop.onClick}
            price="20000000"
          />
        </Grid>
      </Grid>
      <Button variant='contained' sx={{ m: "10px" }} onClick={prop.onBack}>بازگشت</Button>

    </Box>
  )
}

export default ForthPage
