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
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-voip'
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

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

const SecondPage = (prop) => {
  return (
    <Box sx={{ height: 'auto', transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='3.500.000 ریال'
            trend='پشتیبانی 24 ساعت'
            trendNumber='10 گیگ فضای ابری'
            title='TDLTE اینترنت'
            subtitle='20 کاربره'
            icon={<BriefcaseVariantOutline />}
            src='/images/title/architecture.jpg'
            onClick={prop.onClick}
            price="3500000"
          />
        </Grid>
        <Grid item xs={6}>
          <CardStatisticsVerticalComponent
            stats='3.750.000 ریال'
            color='warning'
            trend='پشتیبانی 24 ساعت'
            trendNumber='15 گیگ فضای ابری'
            subtitle='30 کاربره'
            title='سیم کارت'
            icon={<HelpCircleOutline />}
            src='/images/title/office.jpg'
            onClick={prop.onClick}
            price="3750000"
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default SecondPage
