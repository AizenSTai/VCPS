import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Typography, Card, Grid, FormControl, Select, InputLabel, OutlinedInput, MenuItem, TextField, DialogActions, Input, InputAdornment } from '@mui/material'
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import ServiceButton from './najaButtonStructuring'
import NajaServicesInquiry from './najaServicesinquiry'
import styled from '@emotion/styled';
import PropTypes from 'prop-types'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText';
import { NumericFormat } from 'react-number-format';

const TrophyImg = styled('img')({
  height: "100%",
  width: "100%",
  borderBottomLeftRadius: "5px",
  borderTopLeftRadius: "5px"
})
const emails = ['username@gmail.com', 'user02@gmail.com']
function SimpleDialog(props) {
  const { onClose, open, func } = props
  const [twoDigit, setTwoDigit] = useState(null)
  const [cityId, setCityId] = useState(null)
  const [threeDigit, setThreeDigit] = useState(null)
  const [letter, setLetter] = useState("-")
  const [openDup, setOpenDup] = useState(false)
  const ThreeDigitRef = useRef(null)
  const LetterRef = useRef(null)
  const CityIdRef = useRef(null)
  const regex = /^[ا-یa-zA-Z]+$/
  const TwoDigitchangehandler = (e) => {
    if (!(regex.test(e.target.value))) {
      if (e.target.value.length <= 2) {
        setTwoDigit(e.target.value)
      }
    }
    if (e.target.value.length >= 2) {
      LetterRef.current.click()
      // ThreeDigitRef.current.focus()
    }
  }
  const CityIdchangehandler = (e) => {
    if (!(regex.test(e.target.value))) {
      if (e.target.value.length <= 2) {
        setCityId(e.target.value)
      }
    }
  }
  const ThreeDigitchangehandler = (e) => {
    if (!(regex.test(e.target.value))) {
      if (e.target.value.length <= 3) {
        setThreeDigit(e.target.value)
      }
    }
    if (e.target.value.length >= 3) {
      console.log("yess")
      CityIdRef.current.focus()
    }
  }
  const handleCloseDup = () => {
    setOpenDup(false)
  }
  const handleClose = () => {
    setLetter(null)
    setThreeDigit(null)
    setCityId(null)
    setTwoDigit(null)
    onClose()
  }
  const inputprops = { step: 300 }
  return (<>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ direction: "rtl" }}>افزودن پلاک خودرو</DialogTitle>
      <DialogContent>
        <DialogContentText>
          در این قسمت با اضافه کردن یک پلاک خودرو میتوانید در دسترسی سریع پلاک،این پلاک را مشاهده کنید
        </DialogContentText>
        <Box sx={{ border: "1px solid black", width: "100%", display: "flex", gap: "6px", height: "120px", mt: 5, borderRadius: "10px" }}>
          <Box sx={{ flex: "1" }}>
            <TrophyImg src='/images/misc/IranImagePlate.jpg' />
          </Box>
          <Box sx={{ flex: "1.4", display: "flex", flexDirection: "column", justifyContent: "end" }}>
            <TextField
              autoFocus
              id="outlined-required"
              variant='filled'
              sx={{ direction: "ltr", mb: 2 }}
              value={twoDigit}
              placeholder="--"
              InputProps={{ style: { fontSize: "3rem", textAlignLast: "center", backgroundColor: "white" } }}
              onChange={TwoDigitchangehandler}
            />
          </Box>
          <Box sx={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "end" }} >
            <Button sx={{ height: "85px", width: "100px", fontSize: "3rem", mb: 2, color: "#4d4d4d", bgcolor: "white", borderBottom: "1px solid #ddd" }} ref={LetterRef} onClick={() => { setOpenDup(true) }} >{letter}</Button>
          </Box>
          <Box sx={{ flex: "1.8", display: "flex", flexDirection: "column", justifyContent: "end" }} >
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment" ref={ThreeDigitRef} />
              <Input
                id="input-with-icon-adornment"
                value={threeDigit}
                placeholder="---"
                sx={{ direction: "ltr", mb: 2 }}
                inputProps={{ style: { fontSize: "3rem", textAlignLast: "center", backgroundColor: "white" } }}
                onChange={ThreeDigitchangehandler}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box sx={{ flex: "1.2", borderLeft: "1px solid gray", height: "5rem", pl: 2, pr: 2, marginBottom: "auto", marginTop: "auto" }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment" ref={CityIdRef} />
              <Input
                id="input-with-icon-adornment"
                value={cityId}
                placeholder="--"
                sx={{ direction: "ltr", mb: 2 }}
                inputProps={{ style: { fontSize: "3rem", textAlignLast: "center", backgroundColor: "white" } }}
                onChange={CityIdchangehandler}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={handleClose}>افزودن</Button>
      </DialogActions>
    </Dialog>
    <Dialog open={openDup} onClose={handleCloseDup}>
      <DialogTitle sx={{ direction: "rtl" }} >پلاک خودرو</DialogTitle>
      <DialogContent>
        <DialogContentText>
        </DialogContentText>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px",justifyContent:"center" }}>
          <Button onClick={() => { handleCloseDup(), setLetter("الف") }} sx={{ maxWidth: "5px" }} variant='contained' >الف</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ب") }} variant='contained'>ب</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("پ") }} variant='contained'>پ</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ت") }} variant='contained'>ت</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ث") }} variant='contained'>ث</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ج") }} variant='contained'>ج</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("چ") }} variant='contained'>چ</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ح") }} variant='contained'>ح</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("خ") }} variant='contained'>خ</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("د") }} variant='contained'>د</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ذ") }} variant='contained'>ذ</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ر") }} variant='contained'>ر</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ز") }} variant='contained'>ز</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ژ") }} variant='contained'>ژ</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("س") }} variant='contained'>س</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ش") }} variant='contained'>ش</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ص") }} variant='contained'>ص</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ض") }} variant='contained'>ض</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ط") }} variant='contained'>ط</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ظ") }} variant='contained'>ظ</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ع") }} variant='contained'>ع</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("غ") }} variant='contained'>غ</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ف") }} variant='contained'>ف</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ق") }} variant='contained'>ق</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ک") }} variant='contained'>ک</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("گ") }} variant='contained'>گ</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ل") }} variant='contained'>ل</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("م") }} variant='contained'>م</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ن") }} variant='contained'>ن</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("و") }} variant='contained'>و</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ه") }} variant='contained'>ه</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("ی") }} variant='contained'>ی</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("D") }} variant='contained'>D</Button>
          <Button onClick={() => { handleCloseDup(), setLetter("S") }} variant='contained'>S</Button>
        </Box>
      </DialogContent>
    </Dialog>
  </>
    // <div>
    //   <Button
    //     onClick={() => {
    //       handleClose()
    //       func()
    //     }}
    //   >
    //     بله
    //   </Button>
    //   <Button onClick={() => {handleClose()}}>خیر</Button>
    // </div>
  )
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
}

export default function NajaServices(prop) {

  const [najaServicesOpen, setNajaServicesOpen] = useState(false)
  const [displayableItems, setDisplayableItems] = useState(null)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const ResetUser = () => {

  }
  const routeServicehandler = () => {
    setNajaServicesOpen(true)
  }
  const comeBackhandler = () => {
    setNajaServicesOpen(false)
  }
  const PlateStructureHandler = (props) => {
    return (
      <Box sx={{ bgcolor: "white", border: "1px solid black", width: "100%", display: "flex", gap: "4px", height: "50px", borderRadius: "5px" }}>
        <Box sx={{ display:"flex",width:"10%",minWidth:"10%" }}>
          <TrophyImg src='/images/misc/IranImagePlate.jpg' />
        </Box>
        <Box sx={{display: "flex", width:"20%",flexDirection: "column", justifyContent: "end" }} >
          <Typography sx={{ direction: "ltr", fontSize: "2rem" }}>{props.a}</Typography>
        </Box>
        <Box sx={{display: "flex",width:"25%", flexDirection: "column" }} >
          <Typography sx={{ textAlign: "left",textAlign:"center", fontSize: "2rem", mb: 0 }} >{props.b}</Typography>
        </Box>
        <Box sx={{display: "flex", width:"30%",flexDirection: "column", justifyContent: "end" }} >
          <Typography sx={{ direction: "ltr", fontSize: "2rem" }}>{props.c}</Typography>
        </Box>
        <Box sx={{borderLeft: "1px solid gray",width:"18%", height: "80%", pl: 2,pr: 2, marginBottom: "auto", marginTop: "auto",display:"flex",flexDirection:"column",justifyContent:"center" }}>
          <Box sx={{fontWeight:"600" }}>ایران</Box>
          <Box sx={{margin:"0 auto" }}>
          <Typography sx={{ direction: "ltr", fontSize: "1.2rem", textAlign: "center", }}>{props.d}</Typography>
          </Box>
        </Box>
      </Box>
    )
  }
  return (
    <Box>
      {najaServicesOpen && <NajaServicesInquiry onBack={comeBackhandler} displayables={displayableItems} />}
      {!najaServicesOpen && <Card sx={{ backgroundColor: "#FAFAFA", minWidth: "600px" }}>
        <Button variant='contained' sx={{ m: 5, mb: 1 }} onClick={prop.onBack}>بازگشت</Button>
        <Grid container sx={{ backgroundColor: "#FAFAFA" }} >
          <Grid item xs={12} margin="10px" textAlign={'center'} >
            <Box sx={{ height: "100px", width: "50%",minWidth:"600px", bgcolor: "white", borderRadius: "10px", display: "flex", gap: "25px", p: 3, m: "0 auto", mb: 10, boxShadow: "2px 2px 4px #ddd" }}>
              <Box sx={{ height: "70%", width: "25%", marginTop: "auto", marginBottom: "auto" }}>
                <Button variant='contained' sx={{ height: "100%", width: "100%", fontSize: "1rem" }} onClick={() => { setOpen(true) }}>افزودن پلاک</Button>
              </Box>
              <Box sx={{ width: "50%",minWidth:"50%",maxWidth:"50%" }}>
                <FormControl sx={{ alignSelf: "center", width: "100%" }}>
                  <InputLabel>پلاک</InputLabel>
                  <Select sx={{ height: "75px",direction:"ltr" }} label='پلاک' >
                    <MenuItem sx={{ direction: "rtl" }} value="">هیچکدام</MenuItem>
                    <MenuItem sx={{ direction: "" }} value="a" ><PlateStructureHandler a="24" b="الف" c="558" d="78" /></MenuItem>
                    <MenuItem sx={{ direction: "" }} value="b" ><PlateStructureHandler a="32" b="ب" c="123" d="81" /></MenuItem>
                    <MenuItem sx={{ direction: "" }} value="c" ><PlateStructureHandler a="48" b="ج" c="664" d="64" /></MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width:"30px",height:"60px",minWidth:"30px",minHeight:"60px",maxHidth:"30px",maxHeight:"60px", marginTop: "auto", marginBottom: "auto" }}>
                <Button variant='contained' sx={{ height: "100%", width: "100%" }}><CachedOutlinedIcon sx={{ fontSize: "3rem" }} /></Button>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "right", flexWrap: "wrap", gap: "30px", height: "auto", margin: "0 auto", marginTop: "1%", marginBottom: "3%", marginRight: "1%", marginLeft: "1%" }}>
              <ServiceButton
                height={150}
                width={130}
                najaDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                NajaType='license'
                title='استعلام گواهی نامه'
                icon='/images/ServicesLogo/license.svg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                najaDisplayables={setDisplayableItems}
                NajaType='negativescore'
                src="inventory"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام نمره منفی'
                icon='/images/ServicesLogo/negativescore.svg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                najaDisplayables={setDisplayableItems}
                NajaType='existedplates'
                src="billinquiry"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام پلاک های فعال'
                icon='/images/ServicesLogo/plate.svg'
                onClick={routeServicehandler} />

              <ServiceButton
                height={150}
                width={150}
                najaDisplayables={setDisplayableItems}
                src="tenbanktransfer"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                NajaType='vehiclecart'
                title='کارت و سند خودرو'
                // نیازمند پلاک
                icon='/images/ServicesLogo/vehiclecart.svg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                najaDisplayables={setDisplayableItems}
                src="loaninfo"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                NajaType='vehicleinfractions'
                title='استعلام تخلفات خودرو'
                // نیازمند پلاک
                icon='/images/ServicesLogo/carpenalty.webp'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                najaDisplayables={setDisplayableItems}
                src="loanpayment"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                NajaType='infractionpictures'
                title='استعلام تصویر تخلف'
                icon='/images/ServicesLogo/infractionpicture.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                najaDisplayables={setDisplayableItems}
                src="inquiryaccountid"
                ShowOnClick={true}
                NajaType='infractionsum'
                subtitle='مشاهده پنل'
                title='استعلام تجمیع تخلفات'
                icon='/images/ServicesLogo/infractions.png'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                najaDisplayables={setDisplayableItems}
                NajaType='noexit'
                src="shabanumberinquiry"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام ممنوع الخروجی'
                icon='/images/ServicesLogo/noexit.png'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                najaDisplayables={setDisplayableItems}
                src="transfercash"
                NajaType='passport'
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='اطلاعات گذرنامه'
                icon='/images/ServicesLogo/passport.jpg'
                onClick={routeServicehandler} />
            </Box>
          </Grid>
        </Grid >
      </Card>}
      <SimpleDialog open={open} onClose={handleClose} func={ResetUser} />
    </Box>
  )
}
