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

const steps = ['انتخاب سرویس', 'تایید فاکتور خرید', 'پرداخت ']

function numberWithCommas(x) {
  // console.log(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ChooseService(prop) {
  const [cost, setCost] = useState(prop.price)
  const [preCost, setPreCost] = useState(0)
  const [percentCosts, setPercentCosts] = useState({ darsadGhest: "0" })
  const [ghests, setGhests] = useState(0)
  const [showSum, setShowSum] = useState(0)
  const [showEachGhest, setShowEachGhest] = useState(0)
  const [showLeft, setShowLeft] = useState(0)
  const [textFieldValue, setTextFieldValue] = useState(0)

  const handleSelectChange = (event) => {
    switch (event.target.value) {
      case 'tenth': {
        setPreCost(0.1)
        break;
      }
      case 'twenth': {
        setPreCost(0.2)
        break;
      }
      case 'third': {
        setPreCost(0.3)
        break;
      }
      case 'forth': {
        setPreCost(0.4)
        break;
      }
      case 'fifth': {
        // setPreCost(0.5 * cost)
        setPreCost(0.5)
        break;
      }
    }
  }

  const eventCalcHandler = () => {
    setShowLeft(cost - preCost)
    setShowSum(ghests)
    // console.log(percentCosts)
    // console.log(cost)
    // console.log(preCost)
    // console.log(allSum);
  }
  useEffect(() => {
    if (ghests != 0 && percentCosts.darsadGhest != '0' && preCost != 0 && cost != 0) {

      setShowLeft(cost - (cost * preCost))
      setShowSum((cost - (preCost * cost)) + ((cost - (preCost * cost)) * (ghests * percentCosts.darsadGhest)))
      setShowEachGhest(Math.ceil(((cost - (preCost * cost)) + ((cost - (preCost * cost)) * (ghests * percentCosts.darsadGhest))) / ghests))
    }
  }, [ghests, cost, preCost, percentCosts])

  const handleGhestSelectChange = (event) => {
    switch (event.target.value) {
      case 'one': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (1 * percentCosts.darsadGhest)))
        setGhests(1)
        break
      }
      case 'two': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (2 * percentCosts.darsadGhest)))
        setGhests(2)
        break
      }
      case 'three': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (3 * percentCosts.darsadGhest)))
        setGhests(3)
        break
      }
      case 'four': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (4 * percentCosts.darsadGhest)))
        setGhests(4)
        break
      }
      case 'five': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (5 * percentCosts.darsadGhest)))
        setGhests(5)
        break
      }
      case 'six': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (6 * percentCosts.darsadGhest)))
        setGhests(6)
        break
      }
      case 'seven': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (7 * percentCosts.darsadGhest)))
        setGhests(7)
        break
      }
      case 'eight': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (8 * percentCosts.darsadGhest)))
        setGhests(8)
        break
      }
      case 'nine': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (9 * percentCosts.darsadGhest)))
        setGhests(9)
        break
      }
      case 'ten': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (10 * percentCosts.darsadGhest)))
        setGhests(10)
        break
      }
      case 'eleven': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (11 * percentCosts.darsadGhest)))
        setGhests(11)
        break
      }
      case 'tweleve': {
        // setAllSum((cost - preCost) + ((cost - preCost) * (12 * percentCosts.darsadGhest)))
        setGhests(12)
        break
      }
    }
  }

  function costOnchange(event) {
    // console.log('ran');
    // let number = event.target.value.replace(",", "");
    // if (number.test(",")) {
    //   console.log('true');
    //   number = number.replace(",", "");
    // }

    setCost((event.target.value).replace(",", ""))
    setTextFieldValue()
    // Seprate3digit.current. = numberWithCommas(event.target.value)
  }
  return (
    <Box sx={{ width: '100%', margin: "0 auto" }}>
      <Card sx={{ height: "800px", backgroundColor: "#fafafa" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5, mb: 5 }}>
          <Typography sx={{ border: "1px solid lightgray", pr: 15, pl: 15, pt: 5, pb: 5 }}>{prop.price}</Typography>
          {/* <TextField
            autoFocus
            fullWidth
            id='Cost'
            label='قیمت کالا'
            value={textFieldValue}
            sx={{ marginBottom: 4 }}
            onChange={costOnchange}
          /> */}
        </Box>
        <Box sx={{ width: "50%", margin: "0 auto", display: "flex", flexDirection: "column", minWidth: "450px", mb: 5, border: "1px solid lightgray", borderRadius: "5px", padding: "10px" }}>
          <Box sx={{ display: "flex", gap: "25px", margin: "0 auto", marginBottom: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label onClick={() => { setPercentCosts({ darsadGhest: "0.0195" }), console.log('percent ran') }} style={{
                display: "flex", flexDirection: "column", border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                display: 'flex',
                boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer"
              }}>
                {/* <img src="/images/payimages/saderat.jpg" alt="Option 2" style={{
                margin: "5px", borderRadius: "10px", height: "100px", width: "100px"
              }} /> */}
                <Box sx={{
                  backgroundImage: 'url("/images/payimages/mellat.jpg")', backgroundSize: "contain", backgroundRepeat: "no-repeat",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: 'flex',
                  margin: "5px",
                  backgroundPosition: "center", height: "80px", width: "80px",
                }} />
                <input type="radio" name="test" value="big" size="big" style={{ marginBottom: "10px", transform: "scale(1.5)" }} />
              </label>
            </Box>
            <Box >
              <label onClick={() => { setPercentCosts({ darsadGhest: "0.02" }), console.log('percent ran') }} style={{
                display: "flex", flexDirection: "column", border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                display: 'flex',
                boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer"
              }}>
                {/* <img src="/images/payimages/saderat.jpg" alt="Option 2" style={{
                margin: "5px", borderRadius: "10px", height: "100px", width: "100px"
              }} /> */}
                <Box sx={{
                  backgroundImage: 'url("/images/payimages/saderat.jpg")', backgroundSize: "contain", backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: 'flex',
                  margin: "5px",
                  backgroundPosition: "center", height: "80px", width: "80px",
                }} />
                <input type="radio" name="test" value="big" size="big" style={{ marginBottom: "10px", transform: "scale(1.5)" }} />
              </label>
            </Box>
            <Box>
              <label onClick={() => { setPercentCosts({ darsadGhest: "0.021" }), console.log('percent ran') }} style={{
                display: "flex", flexDirection: "column", border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                display: 'flex',
                boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer"
              }}>
                {/* <img src="/images/payimages/saderat.jpg" alt="Option 2" style={{
                margin: "5px", borderRadius: "10px", height: "100px", width: "100px"
              }} /> */}
                <Box sx={{
                  backgroundImage: 'url("/images/payimages/tejarat.jpg")', backgroundSize: "contain", backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: 'flex',
                  margin: "5px",
                  backgroundPosition: "center", height: "80px", width: "80px",
                }} />
                <input type="radio" name="test" value="big" size="big" style={{ marginBottom: "10px", transform: "scale(1.5)" }} />
              </label>
            </Box>
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth>
              <InputLabel>پیش پرداخت</InputLabel>
              <Select onChange={handleSelectChange} label='پیش پرداخت' >
                <MenuItem sx={{ direction: "rtl" }} value='tenth'>10درصد | {numberWithCommas(Math.ceil(cost * 0.1))} تومان</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value='twenth'>20درصد  =  {numberWithCommas(Math.ceil(cost * 0.2))} تومان</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value='third'>30درصد  =  {numberWithCommas(Math.ceil(cost * 0.3))} تومان</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value='forth'>40درصد  =  {numberWithCommas(Math.ceil(cost * 0.4))} تومان</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value='fifth'>50درصد  =  {numberWithCommas(Math.ceil(cost * 0.5))} تومان</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 2 }}>
              <FormControl fullWidth sx={{ display: "flex", marginRight: "auto" }}>
                <InputLabel>تعداد اقساط</InputLabel>
                <Select onChange={handleGhestSelectChange} label='تعداد اقساط' >
                  <MenuItem sx={{ direction: "rtl" }} value='one'>1 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='two'>2 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='three'>3 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='four'>4 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='five'>5 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='six'>6 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='seven'>7 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='eight'>8 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='nine'>9 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='ten'>10 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='eleven'>11 قسط</MenuItem>
                  <MenuItem sx={{ direction: "rtl" }} value='tweleve'>12 قسط</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ mt: 2, mb: 2, border: "1px solid lightgray", borderRadius: "5px", padding: "15px" }}>
            <Typography >الباقی : {numberWithCommas(showLeft)} تومان</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 2, mb: 2, border: "1px solid lightgray", borderRadius: "5px", padding: "15px" }}>
            <Typography >مبلغ هر قسط : {numberWithCommas(showEachGhest)} تومان</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 2, mb: 2, border: "1px solid lightgray", borderRadius: "5px", padding: "15px" }}>
            <Typography >جمع کل : {numberWithCommas(showSum)} تومان</Typography>
          </Box>
          <Button variant='contained' sx={{ width: "25%", margin: "0 auto" }}>پرداخت</Button>
        </Box>
      </Card>
    </Box >
  )
}

export default ChooseService
