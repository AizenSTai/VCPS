import { useState, useRef } from 'react'
import * as React from 'react'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import Languages from 'src/language/Languages'
import 'react-datepicker/dist/react-datepicker.css'
import { Card, Grid } from '@mui/material'
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

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const BoxCustom = styled('Box')({
  backgroundSize: "contain", backgroundRepeat: "no-repeat",
  borderRadius: "8px",
  overflow: "hidden",
  display: 'flex',
  backgroundPosition: "center", height: "100px", width: "100px",
  margin: "0 auto",
})
const TrophyImg = styled('img')({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  padding: 8,
})


const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const Bill = (prop) => {

  const lan = Languages()

  const [estelamInfo, setEstelamInfo] = useState({ Text: "شناسه قبض", Label: "شناسه" })
  const childRef = useRef(null)
  const [estelamMosbat, setEstelamMosbat] = useState(false)
  const childRef1 = useRef(null)
  const childRef2 = useRef(null)
  const [shenaseValue, setShenaseValue] = useState(null)
  const [selectedGhabz, setSelectedGhabz] = useState(null)
  const [prefix, setPrefix] = useState(null)
  const router = useRouter();

  const snackHandleClick = () => {
    childRef.current.handleClick()
  }

  const snackHandleClick1 = () => {
    childRef1.current.handleClick()
  }
  const snackHandleClick2 = () => {
    childRef2.current.handleClick()
  }
  const ShenaseHandler = (event) => {
    setShenaseValue(event.target.value)
    if (event.target.value == "") {
      setEstelamMosbat(false)
    }
  }
  const EstelamStatusHandler = () => {
    if (selectedGhabz != null) {
      if (shenaseValue != null) {
        setEstelamMosbat(true)
      } else {
        snackHandleClick2()
      }
    } else {
      snackHandleClick1()
    }
  }
  const EstelamLabelHandler = (itm) => {
    setSelectedGhabz(itm)
    if (itm == "gas") {
      setEstelamInfo({ Text: "شماره اشتراک :", Label: "شماره اشتراک" })
    } else if (itm == "aab") {
      setEstelamInfo({ Text: "شناسه قبض آب :", Label: "شناسه قبض" })
    } else if (itm == "barg") {
      setEstelamInfo({ Text: "شناسه قبض برق :", Label: "شناسه قبض" })
    } else if (itm == "telefon") {
      setEstelamInfo({ Text: "شماره تلفن :", Label: "شماره تلفن" })
    }
  }

  return (

    <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "95%", flexWrap: "wrap", gap: "30px", height: "auto", margin: "0 auto" }} >
      <SnackbarPopUp ref={childRef} severity={'success'} message={'استعلام موفقیت آمیز بود'} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={'لطفا یک مورد را انتخاب نمایید'} />
      <SnackbarPopUp ref={childRef2} severity={'error'} message={'لطفا فیلد خالی را پر نمایید'} />
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "95%", margin: "0 auto", flexWrap: "wrap", gap: "30px", height: "auto", mb: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%", height: "" }}>
          <label onClick={() => { EstelamLabelHandler('aab'), setPrefix('') }} style={{
            display: "flex", flexDirection: "column", border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            display: 'flex',
            boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
          }}>
            <BoxCustom sx={{
              mt: 5,
              backgroundImage: 'url("/images/bill/aab.png")'
            }} />
            <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض آب</label>
            <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
          </label>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
          <label onClick={() => { EstelamLabelHandler('barg'), setPrefix('') }} style={{
            display: "flex", flexDirection: "column", border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            display: 'flex',
            boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
          }}>
            <BoxCustom sx={{
              mt: 5,
              backgroundImage: 'url("/images/bill/barg.png")'
            }} />
            <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض برق</label>
            <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
          </label>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
          <label onClick={() => { EstelamLabelHandler('gas'), setPrefix('') }} style={{
            display: "flex", flexDirection: "column", border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            display: 'flex',
            boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
          }}>
            <BoxCustom sx={{
              mt: 5,
              backgroundImage: 'url("/images/bill/gas.png")'
            }} />
            <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض گاز</label>
            <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
          </label>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
          <label onClick={() => { EstelamLabelHandler('telefon'), setPrefix('021') }} style={{
            display: "flex", flexDirection: "column", border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            display: 'flex',
            boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
          }}>
            <BoxCustom sx={{
              mt: 5,
              backgroundImage: 'url("/images/bill/mokhaberat.png")'
            }} />
            <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض تلفن</label>
            <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
          </label>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
          <label onClick={() => { EstelamLabelHandler('telefon'), setPrefix('+98') }} style={{
            display: "flex", flexDirection: "column", border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            display: 'flex',
            boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
          }}>
            <BoxCustom sx={{
              mt: 5,
              backgroundImage: 'url("/images/bill/hamraheavval.png")'
            }} />
            <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض همراه اول</label>
            <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
          </label>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
          <label onClick={() => { EstelamLabelHandler('telefon'), setPrefix('+98') }} style={{
            display: "flex", flexDirection: "column", border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            display: 'flex',
            boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
          }}>
            <BoxCustom sx={{
              mt: 5,
              backgroundImage: 'url("/images/bill/irancell.png")'
            }} />
            <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض ایرانسل</label>
            <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
          </label>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
          <label onClick={() => { EstelamLabelHandler('telefon'), setPrefix('+98') }} style={{
            display: "flex", flexDirection: "column", border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            display: 'flex',
            boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
          }}>
            <BoxCustom sx={{
              mt: 5,
              backgroundImage: 'url("/images/bill/raitel.png")'
            }} />
            <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>قبض رایتل</label>
            <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
          </label>
        </Box>
        {/* <Box sx={{ display: "flex", flexDirection: "column", minWidth: "130px", width: "12%" }}>
          <label onClick={() => { EstelamLabelHandler('telefon'), setPrefix('+98') }} style={{
            display: "flex", flexDirection: "column", border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            display: 'flex',
            boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer", fontSize: "16px"
          }}>
            <BoxCustom sx={{
              mt: 5,
              backgroundImage: 'url("/images/bill/roadway.png")'
            }} />
            <label style={{ display: "block", fontWeight: "600", margin: "0 auto", marginTop: "15px", marginBottom: "15px" }}>عوارض آزاد راه</label>
            <input type="radio" name="test" value="big" size="big" style={{ margin: "15px", transform: "scale(1.5)" }} />
          </label>
        </Box> */}
      </Box>
      <Divider />

      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "right", height: "100px", width: "95%", margin: "0 auto", mb: 5 }}>
        <Box>
          <Typography sx={{ borderBottom: "1px solid #ddd", width: "60px", pb: 2 }}>استعلام</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ ml: 1, display: "flex", width: "30%" }}>
            <Typography sx={{ width: "35%", color: "black", fontSize: "1rem", alignSelf: "center" }}>{estelamInfo.Text}</Typography>
            {/* <TextField
              fullWidth
              id='Cost'
              label={estelamInfo.Label}
              sx={{ width: "60%" }}
              value={shenaseValue}
              onChange={ShenaseHandler}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            /> */}
            <TextField
              fullWidth
              value={shenaseValue}
              onChange={ShenaseHandler}
              label={estelamInfo.Label}
              id="content"
              sx={{ m: 1, direction: "ltr", width: '60%' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">{prefix}</InputAdornment>,
              }}
            />
          </Box >
          <Button sx={{ mr: 5 }} onClick={EstelamStatusHandler} variant='contained'>استعلام</Button>
        </Box>
      </Box>
      {estelamMosbat && <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "right", width: "95%", margin: "0 auto", mb: 5 }}>
        <Box>
          <Typography sx={{ borderBottom: "1px solid #ddd", width: "100px", pb: 2, mb: 2 }}>اطلاعات قبض</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ ml: 1, display: "flex", width: "30%", flexDirection: "column" }}>
            <Typography sx={{ width: "35%", color: "black", fontSize: "1rem", mb: 4 }}>شناسه : {shenaseValue}</Typography>
            <Typography sx={{ width: "35%", color: "black", fontSize: "1rem", mb: 4 }}>بدهی میان دوره : </Typography>
            <Typography sx={{ width: "35%", color: "black", fontSize: "1rem", mb: 4 }}>بدهی پایان دوره : </Typography>
            <Button sx={{ mr: 50, width: "100px" }} variant='contained'>پرداخت</Button>
          </Box >
        </Box>
      </Box>}
    </Card>

  )
}

export default Bill
