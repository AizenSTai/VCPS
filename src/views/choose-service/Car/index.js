import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import moment from 'jalali-moment'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import { Typography, Card, Grid } from '@mui/material'
import { blue } from '@mui/material/colors'
import themeConfig from 'src/configs/themeConfig'
import DateTimePicker from 'src/@core/theme/overrides/dateTimePicker'
import Export from 'src/views/ExportToPdf'
import userProfile from "src/Userprofile/userProfile";
import { set } from 'nprogress'
import jsPDF from 'jspdf'
// import { ResponsiveTooltipWrapper } from '@mui/lab/internal/pickers/wrappers/ResponsiveWrapper'
import html2canvas from 'html2canvas'
import { letterSpacing, style, textAlign } from '@mui/system'
import ChooseService from 'src/pages/BillingSellService'
import ServiceButton from 'src/views/choose-service/Car/carButtonStructuring'
import CarServicesInquiry from './carServicesinquiry'

export default function CarServices(prop) {

  const [carServicesOpen, setCarServicesOpen] = useState(false)
  const [displayableItems, setDisplayableItems] = useState(null)

  const routeServicehandler = () => {
    setCarServicesOpen(true)
  }
  const comeBackhandler = () => {
    setCarServicesOpen(false)
  }

  return (
    <Box>
      {carServicesOpen && <CarServicesInquiry onBack={comeBackhandler} displayables={displayableItems} />}
      {!carServicesOpen && <Card sx={{ backgroundColor: "#FAFAFA" }}>
        <Button variant='contained' sx={{ m: 5, mb: 1 }} onClick={prop.onBack}>بازگشت</Button>
        <Grid container sx={{ backgroundColor: "#FAFAFA" }} >
          <Grid item xs={12} margin="10px" textAlign={'center'} >
            <Box sx={{ display: "flex", justifyContent: "right", flexWrap: "wrap", gap: "30px", height: "auto", margin: "0 auto", marginTop: "1%", marginBottom: "3%", marginRight: "1%", marginLeft: "1%" }}>
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='roadwaytaxes'
                title='عوارض آزادراهی'
                icon='/images/ServicesLogo/roadway.png'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='penalty'
                title='جریمه و خلافی'
                icon='/images/ServicesLogo/carpenalty.webp'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='trafficbill'
                title='پرداخت طرح ترافیک'
                icon='/images/ServicesLogo/infractionpicture.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='marginpark'
                title='پارک حاشیه ای'
                icon='/images/ServicesLogo/marginpark.svg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='activeplates'
                title='استعلام پلاک های فعال'
                icon='/images/ServicesLogo/plate.svg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='negativescore'
                title='استعلام نمره منفی'
                icon='/images/ServicesLogo/negativescore.svg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='vehiclecard'
                title='وضعیت کارت و سند'
                icon='/images/ServicesLogo/vehiclecart.svg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='license'
                title='استعلام گواهی نامه'
                icon='/images/ServicesLogo/license.svg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='thirdpartycarbimeh'
                title='بیمه شخص ثالث خودرو'
                icon='/images/ServicesLogo/thirdpartycarbimeh.png'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='thirdpartymotorbimeh'
                title='بیمه شخص ثالث موتور'
                icon='/images/ServicesLogo/thirdpartymotorbimeh.png'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='bodybimeh'
                title='بیمه بدنه'
                icon='/images/ServicesLogo/bodybimeh.webp'
                onClick={routeServicehandler} />
              <ServiceButton
                height={150}
                width={150}
                carDisplayables={setDisplayableItems}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                CarType='bodybimehonetime'
                title='بیمه بدنه تک سفره'
                icon='/images/ServicesLogo/bodybimehonetime.jpg'
                onClick={routeServicehandler} />
            </Box>
          </Grid>
        </Grid >
      </Card>}
    </Box>
  )
}
