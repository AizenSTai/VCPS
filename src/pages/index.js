// ** MUI Imports
import { Grid, Typography, Box, Button, Card } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ServiceButton from 'src/views/choose-service/buttonServiceStructuring'
import ServiceLink from 'src/views/choose-service/linkServiceStructuring'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import Voip from "src/views/choose-service/voips"
import Website from "src/views/choose-service/websites"
import Bill from "src/views/bill"
import NajaServices from 'src/views/choose-service/naja'
import CarServices from 'src/views/choose-service/Car'

const Dashboard = () => {

  const [hiwebOpen, setHiwebOpen] = useState(false)
  const [laizerOpen, setLaizerOpen] = useState(false)
  const [billOpen, setBillOpen] = useState(false)
  const [najaOpen, setNajaOpen] = useState(false)
  const [carOpen, setCarOpen] = useState(false)
  const routeServicehandler = (prop) => {
    if (prop == "hiweb") {
      setHiwebOpen(true)
    }
    else if (prop == "laizer") {
      setLaizerOpen(true)
    }
    else if (prop == "bill") {
      setBillOpen(true)
    }
    else if (prop == "naja") {
      setNajaOpen(true)
    }
    else if (prop == "car") {
      setCarOpen(true)
    }
  }

  const billingClickHandler = () => {
    router.push('/billing')
  }

  const payamak = (localStorage.getItem('payamak') != null ? localStorage.getItem('payamak') : 1 && localStorage.setItem("payamak", 1))
  const pose = (localStorage.getItem('pose') != null ? localStorage.getItem('pose') : 1 && localStorage.setItem("pose", 1))
  const bimeh = (localStorage.getItem('bimeh') != null ? localStorage.getItem('bimeh') : 1 && localStorage.setItem("bimeh", 1))
  const plane = (localStorage.getItem('plane') != null ? localStorage.getItem('plane') : 1 && localStorage.setItem("plane", 1))
  const hiweb = (localStorage.getItem('hiweb') != null ? localStorage.getItem('hiweb') : 1 && localStorage.setItem("hiweb", 1))
  const laizer = (localStorage.getItem('laizer') != null ? localStorage.getItem('laizer') : 1 && localStorage.setItem("laizer", 1))
  const bill = (localStorage.getItem('bill') != null ? localStorage.getItem('bill') : 1 && localStorage.setItem("bill", 1))
  const naja = (localStorage.getItem('naja') != null ? localStorage.getItem('naja') : 1 && localStorage.setItem("naja", 1))
  const car = (localStorage.getItem('car') != null ? localStorage.getItem('car') : 1 && localStorage.setItem("car", 1))

  const arr = [{ id: payamak, countType: "payamak", type: "link", height: 150, width: 150, subtitle: "مشاهده پنل", title: 'نیکا پیامک', icon: "/images/ServicesLogo/payamak.svg", ShowOnClick: true, src: "http://nikasms.ir" }, { id: pose, countType: "pose", type: "link", height: 150, width: 150, subtitle: "مشاهده پنل", title: 'خدمات کارتخوان', icon: "/images/ServicesLogo/nikasms3.jpg", ShowOnClick: true, src: "http://portalnika.ir" }, { id: bimeh, countType: "bimeh", type: "link", height: 90, width: 150, subtitle: "مشاهده پنل", title: 'بیمه', icon: "/images/ServicesLogo/bimeh.png", ShowOnClick: true, src: "https://nikatak.bimeh.com/thirdparty/planlist" }, { id: plane, countType: "plane", type: "link", height: 130, width: 150, subtitle: "مشاهده پنل", title: 'هواپیما', icon: "/images/ServicesLogo/plane.jpg", ShowOnClick: true, src: "https://nikatak.parvaz24.ir" }, { id: hiweb, countType: "hiweb", type: "button", height: 130, width: 130, subtitle: "مشاهده پنل", title: 'خدمات های - وب', icon: "/images/ServicesLogo/hiweb.png", ShowOnClick: true, src: "hiweb", onClick: ' / choose - service / websites', onclick: routeServicehandler }, { id: laizer, countType: "laizer", type: "button", height: 140, width: 140, subtitle: "مشاهده پنل", title: 'خدمات لایزر', icon: "/images/ServicesLogo/laizer.png", ShowOnClick: true, src: "laizer", onclick: routeServicehandler }, { id: bill, countType: "bill", type: "button", height: 150, width: 150, subtitle: "مشاهده پنل", title: 'خدمات قبوض', icon: "/images/ServicesLogo/ghabz.png", ShowOnClick: true, src: "bill", onclick: billingClickHandler }, { id: naja, countType: "naja", type: "button", height: 140, width: 120, subtitle: "مشاهده پنل", title: 'خدمات انتظامی', icon: "/images/ServicesLogo/naja.png", ShowOnClick: true, src: "naja", onclick: routeServicehandler }, { id: car, countType: "car", type: "button", height: 150, width: 150, subtitle: "مشاهده پنل", title: 'خدمات خودرو', icon: "/images/ServicesLogo/car.jpg", ShowOnClick: true, src: "car", onclick: routeServicehandler }]

  arr.sort(function (a, b) {
    return parseFloat(a.id) - parseFloat(b.id)
  }).reverse()
  const servicesClickHandler = () => {
    router.push('/choose-service')
  }
  const testHandler = async ()=>{

    let data = {username:"flip", password:"pashmak12"}
        console.log(data)
        const Send = await fetch(`http://37.114.253.205:8000/api/auth/`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-type': 'application/json',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'X-Requested-With',
            //   Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }).catch(err => {
            // console.log(err)
          })
          if(Send){

              console.log(await Send.json())
              
          }
  }
  const onBackHandler = () => {
    setBillOpen(false)
    setNajaOpen(false)
    setLaizerOpen(false)
    setHiwebOpen(false)
    setCarOpen(false)
  }

  const router = useRouter()
  return (
    <ApexChartWrapper sx={{ width: "95%", margin: "0 auto" }}>
      <Card>

        {hiwebOpen && <Website onBack={onBackHandler} />}
        {laizerOpen && <Voip onBack={onBackHandler} />}
        {billOpen && <Bill onBack={onBackHandler} />}
        {najaOpen && <NajaServices onBack={onBackHandler} />}
        {carOpen && <CarServices onBack={onBackHandler} />}
        {
          (!hiwebOpen && !laizerOpen && !billOpen && !najaOpen && !carOpen) &&
          <Grid Grid container spacing={6}>
            {/* <Grid item xs={12} md={4}>
            <Trophy />
          </Grid>
          <Grid item xs={12} md={8}>
            <StatisticsCard />
          </Grid> */}
            <Grid item xs={12} margin="10px" textAlign={'center'} >
              <Typography sx={{ textAlign: "start", color: "black", fontSize: "16px", p: 2, borderRadius: "5px", color: "white", width: "100%", backgroundColor: "#9257fd" }}>سرویس ها</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", justifyContent: "right", flexWrap: "wrap", gap: "15px", height: "auto", marginTop: "2%", mb: 5 }}>
                  {arr.map((itm) => {
                    if (itm.type == "link") {
                      return (
                        <ServiceLink
                          height={itm.height}
                          width={itm.width}
                          subtitle={itm.subtitle}
                          title={itm.title}
                          icon={itm.icon}
                          countType={itm.countType}
                          ShowOnClick={itm.ShowOnClick}
                          src={itm.src} />
                      )
                    }
                    else if (itm.type == "button") {
                      return (
                        <ServiceButton
                          height={itm.height}
                          width={itm.width}
                          subtitle={itm.subtitle}
                          title={itm.title}
                          icon={itm.icon}
                          ShowOnClick={itm.ShowOnClick}
                          src={itm.src}
                          countType={itm.countType}
                          onClick={itm.onclick} />
                      )
                    }
                  })}
                </Box>
                <Button onClick={servicesClickHandler} variant='contained' sx={{ minWidth: "200px", width: "200px", maxWidth: "225px", mb: 5 }}> مشاهده سرویس ها ... </Button>
                <Button variant='contained' onClick={testHandler}>click</Button>
                {/*<Box sx={{ mb: 5 }}>
                <ServiceButton
                  height={85}
                  width={100}
                  src="bill"
                  subtitle='مشاهده پنل'
                  title='خدمات قبوض'
                  ShowOnClick={true}
                  onClick={billingClickHandler}
                  icon='/images/ServicesLogo/nikasms3.jpg' />
              </Box> */}
              </Box>
              <Typography sx={{ textAlign: "start", color: "black", fontSize: "16px", p: 3, borderRadius: "5px", color: "white", width: "100%", backgroundColor: "#9257fd" }} />
            </Grid>
            {/* <Grid item xs={12} md={12} lg={12}>
            <DepositWithdraw />
          </Grid>
          <Grid item xs={12}>
            <Table />
          </Grid> */}
          </Grid>
        }
      </Card>
    </ApexChartWrapper >
  )
}

export default Dashboard
