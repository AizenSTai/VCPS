import { useState, useRef } from 'react'
import * as React from 'react'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import Languages from 'src/language/Languages'
import 'react-datepicker/dist/react-datepicker.css'
import { Card, Grid, ToggleButtonGroup, ToggleButton, FormControl, } from '@mui/material'
import { IMaskInput } from 'react-imask'

import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import { Cash } from 'mdi-material-ui'
import { NumberFormatBase, NumericFormat } from 'react-number-format'


export default function PhoneCharge(prop) {

  const BoxCustom = styled('Box')({
    backgroundSize: "contain", backgroundRepeat: "no-repeat",
    borderRadius: "8px",
    overflow: "hidden",
    display: 'flex',
    backgroundPosition: "center", height: "100px", width: "100px",
    margin: "0 auto",
  })

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
  const [hamrahChecked, setHamrahChecked] = useState(false)
  const [raitelChecked, setRaitelChecked] = useState(false)
  const [iranChecked, setIranChecked] = useState(false)
  const [cellPhoneNumber, setCellPhoneNumber] = useState('')
  const [primaryAlignment, setPrimaryAlignment] = useState()
  const [cashAmount, setCashAmount] = useState()
  const [amount, setAmount] = useState('0')
  const [mainShoppingOpen, setMainShoppingOpen] = useState(false)
  const [cellphoneOpen, setCellphoneOpen] = useState(false)

  const GrayScaleHandler = (prop) => {
    switch (prop) {
      case "hamrah":
        setIranChecked(false)
        setRaitelChecked(false)
        setHamrahChecked(true)
        break;
      case 'iran':
        setIranChecked(true)
        setRaitelChecked(false)
        setHamrahChecked(false)
        break;
      case "raitel":
        setIranChecked(false)
        setRaitelChecked(true)
        setHamrahChecked(false)
        break;
    }
  }

  const cellPhoneHandler = (event) => {
    if (event.target.value.length <= 11) {
      setCellPhoneNumber(event.target.value)
    }
  }

  const handleChange = (event, newAlignment) => {
    if (event.target.value != "") {
      setPrimaryAlignment(newAlignment)
      setMainShoppingOpen(true)
      setCellphoneOpen(false)
      if (event.target.value == 'straight') {
        setCellphoneOpen(true)
      }
    }
  }
  const handleCashChange = (event, newAlignment) => {

    if (event.target.value == "50hez") {
      setCashAmount(newAlignment);
      setAmount("50000")

    } else if (event.target.value == "100hez") {
      setCashAmount(newAlignment);
      setAmount("100000")
    }
    else if (event.target.value == "200hez") {
      setCashAmount(newAlignment);
      setAmount("200000")
    }
    else if (event.target.value == "500hez") {
      setCashAmount(newAlignment);
      setAmount("500000")

    }
    else if (event.target.value == "1000hez") {
      setCashAmount(newAlignment);
      setAmount("1000000")

    }
  }

  return (
    <Box >
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <Button variant='contained' sx={{ m: 5, mb: 1, width: "100px" }} onClick={prop.onBack}>بازگشت</Button>
        <Box sx={{ gap: "40px", display: "flex", flexDirection: "row", mt: 10, alignSelf: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
            <label onClick={() => { GrayScaleHandler('hamrah') }} style={{
              display: "flex", flexDirection: "column", border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              display: 'flex',
              boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
            }}>
              <BoxCustom sx={{
                mt: 5,
                backgroundImage: 'url("/images/bill/hamraheavval.png")',
                filter: ((hamrahChecked == true) ? "grayscale(0%)" : "grayscale(100%)")
              }} />
              <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض همراه اول</label>
              <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
            </label>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
            <label onClick={() => { GrayScaleHandler('iran') }} style={{
              display: "flex", flexDirection: "column", border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              display: 'flex',
              boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
            }}>
              <BoxCustom sx={{
                mt: 5,
                backgroundImage: 'url("/images/bill/irancell.png")',
                filter: ((iranChecked == true) ? "grayscale(0%)" : "grayscale(100%)")
              }} />
              <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض ایرانسل</label>
              <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
            </label>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
            <label onClick={() => { GrayScaleHandler('raitel') }} style={{
              display: "flex", flexDirection: "column", border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              display: 'flex',
              boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
            }}>
              <BoxCustom sx={{
                mt: 5,
                backgroundImage: 'url("/images/bill/raitel.png")',
                filter: ((raitelChecked == true) ? "grayscale(0%)" : "grayscale(100%)")

              }} />
              <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض رایتل</label>
              <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
            </label>
          </Box>
        </Box>
        <Box sx={{ mt: 10, mb: 6, alignSelf: "center" }}>
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={primaryAlignment}
            sx={{ direction: "ltr" }}
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="straight" sx={{ width: "150px", height: "75px", color: "gray", fontSize: "20px" }}>مستقیم</ToggleButton>
            <ToggleButton value="pincode" sx={{ width: "150px", height: "75px", color: "gray", fontSize: "20px" }}>پین</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Divider />
        {cellphoneOpen && <Box sx={{ display: "flex", flexDirection: "column", width: "25%", mt: 10, mb: 4, alignSelf: "center" }}>
          <TextField
            id="outlined-required"
            label="شماره تلفن"
            sx={{ direction: "ltr" }}
            value={cellPhoneNumber}
            onChange={cellPhoneHandler}
            InputProps={{
              startAdornment: <InputAdornment position="start"> +98 </InputAdornment>
            }}
          />
        </Box>}
        {mainShoppingOpen && <Box sx={{ mt: 6, width: "50%", display: "flex", flexDirection: "column", alignSelf: "center" }}>
          {/* <FormControl sx={{ margin: "0 auto", mb: 1, width: "50%" }}>
            <TextField
              id="outlined-required"
              label="مبلغ"
              value={amount}
              InputProps={{
                startAdornment: <InputAdornment position="start"> ریال </InputAdornment>, readOnly: true
              }}
            />
          </FormControl> */}
          <NumericFormat
            style={{ border: "1px solid #ddd", padding: "25px", borderRadius: "10px", textAlign: "center", fontSize: "1.375rem", alignSelf: "center", color: "green", width: "450px" }}
            thousandSeparator
            value={amount}
            readOnly
            suffix=' ریال '
          />

          <ToggleButtonGroup
            color="primary"
            exclusive
            value={cashAmount}
            sx={{ direction: "ltr", m: 10, display: "flex", border: "1px solid #ddd", flexDirection: "column" }}
            onChange={handleCashChange}
            aria-label="Platform"
          >
            <ToggleButton sx={{ height: "75px", color: "darkgreen", fontSize: "1.2rem" }} value="50hez">شارژ 50,000 ریالی</ToggleButton>
            <ToggleButton sx={{ height: "75px", color: "darkgreen", fontSize: "1.2rem" }} value="100hez">شارژ 100,000 ریالی</ToggleButton>
            <ToggleButton sx={{ height: "75px", color: "darkgreen", fontSize: "1.2rem" }} value="200hez">شارژ 200,000 ریالی</ToggleButton>
            <ToggleButton sx={{ height: "75px", color: "darkgreen", fontSize: "1.2rem" }} value="500hez">شارژ 500,000 ریالی</ToggleButton>
            <ToggleButton sx={{ height: "75px", color: "darkgreen", fontSize: "1.2rem" }} value="1000hez">شارژ 1,000,000 ریالی</ToggleButton>
          </ToggleButtonGroup>
        </Box>}
        {mainShoppingOpen && <Box sx={{ mt: 10, display: "flex", flexDirection: "column" }}>
          <Button variant='contained' fullWidth sx={{ alignSelf: "center", width: "200px", height: "60px", m: 5, fontSize: "1.2rem" }} >خرید شارژ</Button>
        </Box>}
      </Card>
    </Box>
  )
}
