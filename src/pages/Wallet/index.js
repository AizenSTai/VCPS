import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import 'react-datepicker/dist/react-datepicker.css'
import { Card, Grid, Radio, ToggleButtonGroup } from '@mui/material'
import { useRouter } from 'next/router'
import { height, maxWidth } from '@mui/system'
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
import Ussd from "src/views/choose-service/ussd"
import App from "src/views/choose-service/app"
import FactorBill from "src/views/choose-service/factorList"
import PayLine from 'src/views/choose-service/payLine'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import ServiceButton from 'src/views/choose-service/buttonServiceStructuring'
import ServiceLink from 'src/views/choose-service/linkServiceStructuring'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { RadioGroup, FormLabel, FormControl, FormControlLabel } from '@mui/material'
import { useEffect } from 'react'
import Divider from '@mui/material/Divider'
import { IMaskInput } from 'react-imask'
import RechargeWallet from 'src/views/RechargeWallet'

const steps = ['انتخاب سرویس', 'تایید فاکتور خرید', 'پرداخت ']

function numberWithCommas(x) {
  // console.log(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ChooseService(prop) {

  const [rechargeWalletOpen, setRechargeWalletOpen] = useState(false)

  const onShowHandler = () => {
    setRechargeWalletOpen(true)
  }

  const onBackHandler = () => {
    setRechargeWalletOpen(false)
  }
  return (
    <Box sx={{ width: "auto", height: "auto", margin: "0 auto" }}>
      {rechargeWalletOpen && <RechargeWallet onBack={onBackHandler} />}
      {!rechargeWalletOpen && <Card>
        <Box sx={{ minHeight: "550px", display: "flex", flexDirection: "column" }}>
          <Box sx={{ border: "1px solid #ddd", backgroundImage: "url(/images/ServicesLogo/wallet.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", height: "250px", display: "flex", flexDirection: "column", margin: "0 auto", mt: 5, mb: 5, width: "70%", borderRadius: "15px", height: "30%" }}>
            <Typography sx={{ pt: 6, fontSize: "1.375rem", color: "white", mb: 2, alignSelf: "center" }}>کیف پول دیجیتال شما</Typography>
            <Box sx={{ justifySelf: "center", alignSelf: "center", m: 15, pt: 20, display: "flex", mb: 30, mt: 10, flexDirection: "column" }}>
              <Box sx={{ justifySelf: "center", alignSelf: "center", borderRadius: "20px", backgroundColor: "rgba(10,10,10,.5)", height: "100px", width: "300px", display: "flex", flexDirection: "column" }}>
                <Typography sx={{ color: "white", mb: 3, mt: 3, alignSelf: "center" }}>موجودی : </Typography>
                <Typography sx={{ color: "white", mb: 15, alignSelf: "center" }}><span style={{ fontSize: "1.5rem" }}>{numberWithCommas(1100000)}</span>ریال</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "25%", margin: "0 auto" }}>
            <Button variant='contained' sx={{ pt: 5, pb: 5, pl: 15, pr: 15 }} onClick={onShowHandler}>شارژ کیف پول</Button>
          </Box>
        </Box>
      </Card >}
    </Box >
  )
}

export default ChooseService
