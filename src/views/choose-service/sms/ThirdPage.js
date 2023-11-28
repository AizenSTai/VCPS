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
    <Box sx={{ height: '100%', width: "100%", transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Grid container spacing={4} sx={{ height: "100%" }}>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='8.900.000 ریال'
            subtitle='ارسال پیامک تکی'
            icon={<CheckIcon sx={{ color: "green" }} />}
            subtitle2="ارسال پیامک به خارج از ایران"
            icon2={<CloseIcon sx={{ color: "red" }} />}
            subtitle3='بازگشت اعتبار پیام های ناموفق'
            icon3={<CheckIcon sx={{ color: "green" }} />}
            color='success'
            trend='پشتیبانی 24 ساعت'
            trendNumber='2 گیگ فضای ابری'
            title='پایه'
            benefits="100 پیامک رایگان"
            src='/images/title/art.jpg'
            onClick={prop.onClick}
            price="8900000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='12.000.000 ریال'
            title='اقتصادی'
            trend='پشتیبانی 24 ساعت'
            color='secondary'
            benefits="155 پیامک رایگان"
            trendNumber='5 گیگ فضای ابری'
            subtitle='ارسال پیامک تکی'
            icon={<CheckIcon sx={{ color: "green" }} />}
            subtitle2="ارسال پیامک به خارج از ایران"
            icon2={<CloseIcon sx={{ color: "red" }} />}
            subtitle3='بازگشت اعتبار پیام های ناموفق'
            icon3={<CheckIcon sx={{ color: "green" }} />}
            src='/images/title/management.png'
            onClick={prop.onClick}
            price="12000000"

          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='15.000.000 ریال'
            trend='پشتیبانی 24 ساعت'
            trendNumber='10 گیگ فضای ابری'
            title='شرکتی'
            benefits="220 پیامک رایگان"
            subtitle='ارسال پیامک تکی'
            icon={<CheckIcon sx={{ color: "green" }} />}
            subtitle2="ارسال پیامک به خارج از ایران"
            icon2={<CloseIcon sx={{ color: "red" }} />}
            subtitle3='بازگشت اعتبار پیام های ناموفق'
            icon3={<CheckIcon sx={{ color: "green" }} />}
            src='/images/title/architecture.jpg'
            onClick={prop.onClick}
            price="15000000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='17.500.000 ریال'
            color='warning'
            trend='پشتیبانی 24 ساعت'
            benefits="300 پیامک رایگان"
            trendNumber='15 گیگ فضای ابری'
            subtitle='ارسال پیامک تکی'
            icon={<CheckIcon sx={{ color: "green" }} />}
            subtitle2="ارسال پیامک به خارج از ایران"
            icon2={<CheckIcon sx={{ color: "green" }} />}
            subtitle3='بازگشت اعتبار پیام های ناموفق'
            icon3={<CheckIcon sx={{ color: "green" }} />}
            title='تجاری'
            src='/images/title/office.jpg'
            onClick={prop.onClick}
            price="17500000"
          />
        </Grid>
      </Grid>
      <Button variant='contained' sx={{ m: "10px" }} onClick={prop.onBack}>بازگشت</Button>

    </Box>
  )
}

export default ThirdPage
