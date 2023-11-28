import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import moment from 'jalali-moment'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
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
import ServiceButton from '../buttonServiceStructuring'

export default function BankServices(prop) {

  const [bankServicesOpen, setBankServicesOpen] = useState(true)
  // const [acountopenningOpen, setAcountopenningOpen] = useState(false)
  // const [inventoryOpen, setInventoryOpen] = useState(false)
  // const [billinquiryOpen, setBillinquiryOpen] = useState(false)
  // const [tenbanktransferOpen, setTenbanktransferOpen] = useState(false)
  // const [loaninfoOpen, setLoaninfoOpen] = useState(false)
  // const [loanpaymentOpen, setLoanpaymentOpen] = useState(false)
  // const [inquiryaccountidOpen, setInquiryaccountidOpen] = useState(false)
  // const [shabanumberinquiryOpen, setShabanumberinquiryOpen] = useState(false)
  // const [transfercashOpen, setTransfercashOpen] = useState(false)
  // const [payatransfercashOpen, setPayatransfercashOpen] = useState(false)
  // const [satnapaymentinquiryOpen, setSatnapaymentinquiryOpen] = useState(false)
  // const [checkinquiryOpen, setCheckinquiryOpen] = useState(false)

  const routeServicehandler = () => {
  }

  return (
    <Box>
      {bankServicesOpen && <Card sx={{ backgroundColor: "#FAFAFA" }}>
        <Button variant='contained' sx={{ m: 5, mb: 1 }} onClick={prop.onBack}>بازگشت</Button>
        <Grid container sx={{ backgroundColor: "#FAFAFA" }} >
          <Grid item xs={12} margin="10px" textAlign={'center'} >
            <Box sx={{ display: "flex", justifyContent: "right", flexWrap: "wrap", gap: "30px", height: "auto", margin: "0 auto", marginTop: "1%", marginBottom: "3%", marginRight: "1%", marginLeft: "1%" }}>
              <ServiceButton
                height={140}
                width={170}
                src="acountopenning"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='افتتاح حساب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="inventory"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام مانده حساب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="billinquiry"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام صورت حساب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="tenbanktransfer"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='10 گردش آخر'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="loaninfo"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام اطلاعات وام'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="loanpayment"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='پرداخت وام'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="inquiryaccountid"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام شماره حساب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="shabanumberinquiry"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام شماره شبا'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="transfercash"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='انتقال وجه'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="payatransfercash"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='انتقال وجه پایا'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="satnapaymentinquiry"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام وجه ساتنا'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="checkinquiry"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام برگه چک'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
            </Box>
          </Grid>
        </Grid >
      </Card>}
    </Box>
  )
}
