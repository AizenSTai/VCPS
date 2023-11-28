// ** React Imports
import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-sms'
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

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

const ThirdPage = (prop) => {
  return (
    <Box sx={{ height: 'auto', transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='4.990.000 ریال'
            subtitle='دموی اپلیکیشن'
            icon={<CheckIcon sx={{ color: "green" }} />}
            subtitle2="امکان ایجاد 500 صفحه"
            icon2={<CloseIcon sx={{ color: "red" }} />}
            subtitle3='دریافت خروجی وب'
            icon3={<CheckIcon sx={{ color: "green" }} />}
            color='success'
            trend='پشتیبانی 24 ساعت'
            trendNumber='2 گیگ فضای ابری'
            title='اندروید'
            benefits="100 پیامک رایگان"
            src='/images/title/art.jpg'
            onClick={prop.onClick}
            price="4990000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='6.490.000 ریال'
            title='آی او اس - iOS'
            trend='پشتیبانی 24 ساعت'
            color='secondary'
            benefits="155 پیامک رایگان"
            trendNumber='5 گیگ فضای ابری'
            subtitle='دموی اپلیکیشن'
            icon={<CheckIcon sx={{ color: "green" }} />}
            subtitle2="امکان ایجاد 500 صفحه"
            icon2={<CloseIcon sx={{ color: "red" }} />}
            subtitle3='دریافت خروجی وب'
            icon3={<CheckIcon sx={{ color: "green" }} />}
            src='/images/title/management.png'
            onClick={prop.onClick}
            price="6490000"

          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='7.900.000 ریال'
            trend='پشتیبانی 24 ساعت'
            trendNumber='10 گیگ فضای ابری'
            title='وب اپلیکیشن - PWA'
            benefits="220 پیامک رایگان"
            subtitle='دموی اپلیکیشن'
            icon={<CheckIcon sx={{ color: "green" }} />}
            subtitle2="امکان ایجاد 500 صفحه"
            icon2={<CloseIcon sx={{ color: "red" }} />}
            subtitle3='دریافت خروجی وب'
            icon3={<CheckIcon sx={{ color: "green" }} />}
            src='/images/title/architecture.jpg'
            onClick={prop.onClick}
            price="7900000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='9.900.000 ریال'
            color='warning'
            trend='پشتیبانی 24 ساعت'
            benefits="300 پیامک رایگان"
            trendNumber='15 گیگ فضای ابری'
            subtitle='دموی اپلیکیشن'
            icon={<CheckIcon sx={{ color: "green" }} />}
            subtitle2="امکان ایجاد 500 صفحه"
            icon2={<CheckIcon sx={{ color: "green" }} />}
            subtitle3='دریافت خروجی وب'
            icon3={<CheckIcon sx={{ color: "green" }} />}
            title='ویندوز اپلیکیشن - wpf'
            src='/images/title/office.jpg'
            onClick={prop.onClick}
            price="9990000"
          />
        </Grid>
      </Grid>
      <Button variant='contained' sx={{ m: "10px" }} onClick={prop.onBack}>بازگشت</Button>

    </Box>
  )
}

export default ThirdPage
