import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import 'react-datepicker/dist/react-datepicker.css'
import { Card, Divider, Grid } from '@mui/material'
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
import BankServices from 'src/views/choose-service/Bank'
import { useEffect } from 'react'
import PhoneCharge from 'src/views/choose-service/phoneCharge'
import NajaServices from 'src/views/choose-service/naja'
import BankIranZaminService from 'src/views/choose-service/BankIranZaminService/BankIranZamin'
import CarServices from 'src/views/choose-service/Car'

const steps = ['انتخاب سرویس', 'تایید فاکتور خرید', 'پرداخت ']

function numberWithCommas(x) {
  // console.log(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function ChooseService() {
  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set())
  const [laizerOpen, setLaizerOpen] = useState(false)
  const [hiWebOpen, setHiWebOpen] = useState(false)
  const [billOpen, setBillOpen] = useState(false)
  const [voipValue, setVoipValue] = useState("0")
  const [websiteValue, setWebsiteValue] = useState("0")
  const [bankOpen, setBankOpen] = useState(false)
  const [phoneChargeOpen, setPhoneChargeOpen] = useState(false)
  const [najaOpen, setNajaOpen] = useState(false)
  const [bankIranZaminOpen, setBankIranZaminOpen] = useState(false)
  const [bankType, setBankType] = useState(null)
  const [carOpen, setCarOpen] = useState(false)
  const childRef = useRef(null)

  const setServicesValuehandler = (prop, value) => {
    if (prop == "website") {
      setWebsiteValue(value)
    }
    else if (prop == "voip") {
      setVoipValue(value)
    }
    snackHandleClick()
  }

  const isStepOptional = step => {
    return step === 1
  }

  const isStepSkipped = step => {
    return skipped.has(step)
  }

  const snackHandleClick = () => {
    childRef.current.handleClick()
  }
  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }
    if (activeStep < steps.length) {
      setActiveStep(prevActiveStep => prevActiveStep + 1)
    }
    setSkipped(newSkipped)
  }
  const comeBackhandler = () => {
    setHiWebOpen(false)
    setLaizerOpen(false)
    setBillOpen(false)
    setBankOpen(false)
    setPhoneChargeOpen(false)
    setNajaOpen(false)
    setBankIranZaminOpen(false)
    setCarOpen(false)
  }

  // useEffect(() => {
  //   console.log(bankType)
  // })

  const routeServicehandler = (prop) => {
    if (prop == "hiweb") {
      setHiWebOpen(true)
    }
    else if (prop == "laizer") {

      setLaizerOpen(true)
    }
    else if (prop == "bill") {

      setBillOpen(true)
    } else if (prop == 'keshavarzi' || prop == 'meli' || prop == 'sepah' || prop == 'tejarat' || prop == 'saderat' || prop == 'resalat' || prop == 'maskan' || prop == 'ghardeshghari' || prop == 'pasarghad' || prop == 'shahr' || prop == 'saman' || prop == 'ayande' || prop == 'eghtesad' || prop == 'sarmaye' || prop == 'sina' || prop == 'tosee') {
      setBankOpen(true)
    } else if (prop == 'phonecharge') {
      setPhoneChargeOpen(true)
    } else if (prop == 'naja') {
      setNajaOpen(true)
    } else if (prop == 'iranzamin') {
      setBankIranZaminOpen(true)
    } else if (prop == "car") {
      setCarOpen(true)
    }
  }
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }


  return (
    <Box sx={{ width: '95%', margin: "0 auto" }}>
      <SnackbarPopUp ref={childRef} severity={'success'} message={'سرویس افزوده شد'} />
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep == 0 && (
            <Box >
              {/* {networkOpen && <Network onSetvalue={setServicesValuehandler} onBack={comeBackhandler} />} */}
              {/* {smsOpen && <Sms onBack={comeBackhandler} onSetvalue={setServicesValuehandler} />} */}
              {laizerOpen && <Voip onBack={comeBackhandler} onSetvalue={setServicesValuehandler} />}
              {/* {ussdOpen && <Ussd onBack={comeBackhandler} onSetvalue={setServicesValuehandler} />} */}
              {hiWebOpen && <Website onBack={comeBackhandler} onSetvalue={setServicesValuehandler} />}
              {billOpen && <Bill onBack={comeBackhandler} onSetvalue={setServicesValuehandler} />}
              {bankOpen && <BankServices onBack={comeBackhandler} bank={bankType} onSetvalue={setServicesValuehandler} />}
              {bankIranZaminOpen && <BankIranZaminService onBack={comeBackhandler} bank={bankType} onSetvalue={setServicesValuehandler} />}
              {phoneChargeOpen && <PhoneCharge onBack={comeBackhandler} bank={bankType} onSetvalue={setServicesValuehandler} />}
              {najaOpen && <NajaServices onBack={comeBackhandler} />}
              {carOpen && <CarServices onBack={comeBackhandler} />}
              {/* {appOpen && <App onBack={comeBackhandler} onSetvalue={setServicesValuehandler} />} */}

              {(!laizerOpen && !hiWebOpen && !billOpen && !bankOpen && !phoneChargeOpen && !najaOpen && !bankIranZaminOpen && !carOpen) && <Card sx={{ backgroundColor: "#FAFAFA" }}>
                {(!laizerOpen && !hiWebOpen && !billOpen && !bankOpen && !phoneChargeOpen && !najaOpen && !bankIranZaminOpen && !carOpen) && <Stepper
                  sx={{
                    width: "95%",
                    margin: "0 auto"
                    ,
                    mt: 5,
                    height: '70px',
                    backgroundColor: 'white',
                    backgroundImage: 'linear-gradient( 95deg,rgb(215,215,215) 0%,rgb(250,250,250) 50%,rgb(215,215,215) 100%)'
                  }}
                  activeStep={activeStep}
                >
                  {steps.map((label, index) => {
                    const stepProps = {}
                    const labelProps = {}
                    if (isStepOptional(index)) {
                    }
                    if (isStepSkipped(index)) {
                      stepProps.completed = false
                    }

                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    )
                  })}
                </Stepper>}
                <Grid container sx={{ backgroundColor: "#FAFAFA" }} >
                  <Grid item xs={12} margin="10px" textAlign={'center'} >
                    <Typography sx={{ textAlign: "start", m: 8, mr: "2%", color: "black", fontSize: "18px", }}>خدمات عمومی نیکاتک :</Typography>
                    <Box sx={{ display: "flex", justifyContent: "right", flexWrap: "wrap", gap: "30px", height: "auto", margin: "0 auto", marginTop: "2%", marginBottom: "3%", marginRight: "1%", marginLeft: "1%" }}>
                      <ServiceLink
                        height={150}
                        width={150}
                        subtitle='مشاهده پنل'
                        title='نیکا پیامک'
                        icon='/images/ServicesLogo/payamak.svg'
                        ShowOnClick={true}
                        src='http://nikasms.ir' />
                      <ServiceLink
                        height={150}
                        width={150}
                        subtitle='مشاهده پنل'
                        title='خدمات کارتخوان'
                        icon='/images/ServicesLogo/ghabz.png'
                        ShowOnClick={true}
                        src='http://portalnika.ir' />
                      <ServiceLink
                        height={90}
                        width={150}
                        subtitle='مشاهده پنل'
                        title='بیمه'
                        icon='/images/ServicesLogo/bimeh.png'
                        ShowOnClick={true}
                        src='https://nikatak.bimeh.com/thirdparty/planlist' />
                      <ServiceLink
                        height={150}
                        width={150}
                        subtitle='مشاهده پنل'
                        title='هواپیما'
                        icon='/images/ServicesLogo/plane.jpg'
                        ShowOnClick={true}
                        src='https://nikatak.parvaz24.ir/' />
                      <ServiceButton
                        height={130}
                        width={130}
                        src="hiweb"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='خدمات های-وب'
                        icon='/images/ServicesLogo/hiweb.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={130}
                        width={130}
                        src="laizer"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='خدمات لایزر'
                        icon='/images/ServicesLogo/laizer.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="phonecharge"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='خرید شارژ'
                        icon='/images/ServicesLogo/phonecharge.jpg'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={140}
                        width={120}
                        src="naja"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='خدمات انتظامی'
                        icon='/images/ServicesLogo/naja.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="car"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='خدمات خودرو'
                        icon='/images/ServicesLogo/car.jpg'
                        onClick={routeServicehandler} />
                      {/* <ServiceButton
                        height={85}
                        width={100}
                        src="bill"
                        subtitle='مشاهده پنل'
                        title='خدمات قبوض'
                        icon='/images/ServicesLogo/nikasms3.jpg'
                        onClick={routeServicehandler} /> */}
                    </Box>
                    <Divider />
                    <Typography sx={{ textAlign: "start", m: 8, mr: "2%", color: "black", fontSize: "18px", }}>خدمات بانکداری باز :</Typography>
                    <Box sx={{ display: "flex", justifyContent: "right", flexWrap: "wrap", gap: "30px", height: "auto", margin: "0 auto", marginTop: "2%", marginBottom: "3%", marginRight: "1%", marginLeft: "1%" }}>
                      <ServiceButton
                        height={150}
                        width={150}
                        src="keshavarzi"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک کشاورزی'
                        onBankType={setBankType}
                        icon='/images/Bank/keshavarzi.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="meli"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک ملی'
                        onBankType={setBankType}
                        icon='/images/Bank/meli.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="sepah"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک سپه'
                        onBankType={setBankType}
                        icon='/images/Bank/sepah.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="tejarat"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک تجارت'
                        icon='/images/Bank/tejarat.jpg'
                        onBankType={setBankType}
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="saderat"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک صادرات'
                        icon='/images/Bank/saderat.png'
                        onBankType={setBankType}
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="resalat"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک رسالت'
                        icon='/images/Bank/resalat.png'
                        onBankType={setBankType}
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="maskan"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک مسکن'
                        onBankType={setBankType}
                        icon='/images/Bank/maskan.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="ghardeshghari"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        onBankType={setBankType}
                        title='بانک گردشگری'
                        icon='/images/Bank/ghardeshghari.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="pasarghad"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        onBankType={setBankType}
                        title='بانک پاسارگاد'
                        icon='/images/Bank/pasarghad.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="shahr"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک شهر'
                        onBankType={setBankType}
                        icon='/images/Bank/shahr.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="saman"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک سامان'
                        onBankType={setBankType}
                        icon='/images/Bank/saman.jpg'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="ayande"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک آینده'
                        onBankType={setBankType}
                        icon='/images/Bank/ayande.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="eghtesad"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        onBankType={setBankType}
                        title='بانک اقتصاد نوین'
                        icon='/images/Bank/eghtesad.png'
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="sarmaye"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک سرمایه'
                        icon='/images/Bank/sarmaye.png'
                        onBankType={setBankType}
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="sina"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک سینا'
                        icon='/images/Bank/sina.png'
                        onBankType={setBankType}
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="tosee"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک توسعه تعاون'
                        icon='/images/Bank/tosee.png'
                        onBankType={setBankType}
                        onClick={routeServicehandler} />
                      <ServiceButton
                        height={150}
                        width={150}
                        src="iranzamin"
                        ShowOnClick={true}
                        subtitle='مشاهده پنل'
                        title='بانک ایران زمین'
                        icon='/images/Bank/iranzamin.png'
                        onBankType={setBankType}
                        onClick={routeServicehandler} />
                    </Box>
                  </Grid>
                </Grid >
              </Card>}
              {(!laizerOpen && !hiWebOpen && !billOpen && !bankOpen && !phoneChargeOpen && !najaOpen && !bankIranZaminOpen && !carOpen) && <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button variant='contained' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: "3.5%" }}>
                  قبلی
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />

                <Button variant='contained' onClick={handleNext} disabled={(activeStep === steps.length) || (websiteValue == "0" && voipValue == "0")} sx={{ ml: "3.5%" }}>
                  بعدی
                </Button>
              </Box>}
            </Box >
          )
          }
          {
            activeStep == 1 && (
              <Box>
                <Card>
                  {(!voipOpen && !websiteOpen) && <Stepper
                    sx={{
                      width: "95%",
                      margin: "0 auto"
                      ,
                      height: '70px',
                      backgroundColor: 'white',
                      backgroundImage: 'linear-gradient( 95deg,rgb(215,215,215) 0%,rgb(250,250,250) 50%,rgb(215,215,215) 100%)'
                    }}
                    activeStep={activeStep}
                  >
                    {steps.map((label, index) => {
                      const stepProps = {}
                      const labelProps = {}
                      if (isStepOptional(index)) {
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false
                      }

                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      )
                    })}
                  </Stepper>}
                  <FactorBill serviceList={[
                    // {Val: numberWithCommas(networkValue), Name: "سرویس اینترنت"}
                    // , { Val: numberWithCommas(smsValue), Name: "سرویس پیامک" }
                    // , { Val: numberWithCommas(ussdValue), Name: "سرویس کد دستوری" }
                    , { Val: numberWithCommas(voipValue), Name: "سرویس ویپ" }
                    , { Val: numberWithCommas(websiteValue), Name: "سرویس وبسایت" }]} totalCost={numberWithCommas(sumOforders())} />
                </Card>
                {(!voipOpen && !websiteOpen) && <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button variant='contained' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: "3.5%" }}>
                    قبلی
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />

                  <Button variant='contained' onClick={handleNext} disabled={(activeStep === steps.length) || (websiteValue == "0" && voipValue == "0")} sx={{ ml: "3.5%" }}>
                    پرداخت
                  </Button>
                </Box>}
              </Box>
            )
          }
          {
            activeStep == 2 && (
              <Box>
                <Card >
                  {(!voipOpen && !websiteOpen) && <Stepper
                    sx={{
                      width: "95%",
                      margin: "0 auto"
                      ,
                      height: '70px',
                      backgroundColor: 'white',
                      backgroundImage: 'linear-gradient( 95deg,rgb(215,215,215) 0%,rgb(250,250,250) 50%,rgb(215,215,215) 100%)'
                    }}
                    activeStep={activeStep}
                  >
                    {steps.map((label, index) => {
                      const stepProps = {}
                      const labelProps = {}
                      if (isStepOptional(index)) {
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false
                      }

                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      )
                    })}
                  </Stepper>}
                  <Card sx={{
                    width: "50%", border: "1px solid #ddd", height: "80%", margin: "0 auto", marginTop: "2%", marginBottom: "2%"
                  }}>

                    <Typography sx={{ textAlign: "start", m: "10px", mr: "10px", color: "black", fontSize: "16px", }}>لطفا یک درگاه پرداخت انتخاب کنید</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", margin: "5%" }}>
                      <PayLine />
                    </Box>
                    <Box sx={{ margin: "0 auto", marginBottom: "5%", width: "300px" }}>
                      <Typography sx={{ color: "white", backgroundColor: "Green", borderRadius: "15px", padding: "15px", fontSize: "18px" }}>مبلغ کل :  {sumOforders() !== 0 ? numberWithCommas(sumOforders()) : 0} ریال</Typography>
                    </Box>
                  </Card>
                </Card>
                {(!voipOpen && !websiteOpen && !billOpen) && <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button variant='contained' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: "3.5%" }}>
                    قبلی
                  </Button>

                </Box>}
              </Box>
            )
          }
          {
            activeStep == 3 && (
              <Box>
                <Card sx={{ height: '500px' }}></Card>
              </Box>
            )
          }

        </React.Fragment >)
      }
    </Box >
  )
}

export default ChooseService
