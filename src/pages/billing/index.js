import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import 'react-datepicker/dist/react-datepicker.css'
import { Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { height } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Network from "src/views/choose-service/network"
import Sms from "src/views/choose-service/sms"
import Voip from "src/views/choose-service/voips"
import Website from "src/views/choose-service/websites"
import Bill from "src/views/bill"
import Ussd from "src/views/choose-service/ussd"
import App from "src/views/choose-service/app"
import FactorBill from "src/views/choose-service/factorList"
import PayLine from 'src/views/choose-service/payLine'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import ServiceButton from 'src/views/choose-service/buttonServiceStructuring'
import ServiceLink from 'src/views/choose-service/linkServiceStructuring'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function ChooseService() {


  return (
    <Box sx={{ width: '100%', margin: "0 auto" }}>
      <Bill />
    </Box >
  )
}

export default ChooseService
