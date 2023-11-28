import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
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
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import themeConfig from 'src/configs/themeConfig'
import { Button, Card, Divider, StyledTextField, TextField, Checkbox, styled, MenuItem, Select, InputLabel, FormControlTypeMap, Grid } from '@mui/material'
import ServiceButton from 'src/views/choose-service/buttonServiceStructuring'
import ServiceLink from 'src/views/choose-service/linkServiceStructuring'
import ShoppingPage from 'src/views/AddProduct/AddingPage'

// import { Toolbar } from '@mui/material'
export default function Store(props) {


  const [shoppingPageOpen, setShoppingPageOpen] = useState(false)

  const routeServicehandler = (prop) => {
    if (prop == "subcategory") {
      setShoppingPageOpen(true)
    }
  }
  const comeBackhandler = () => {
    setShoppingPageOpen(false)
  }

  return (
    <Box>
      <Card>
        {shoppingPageOpen && <ShoppingPage onBack={comeBackhandler} />}
        {!(shoppingPageOpen) && <Card sx={{ backgroundColor: "#FAFAFA" }}>
          <Button onClick={props.onBack} variant='contained' sx={{ m: 5 }}>بازگشت</Button>
          <Grid container sx={{ backgroundColor: "#FAFAFA" }} >
            <Grid item xs={12} margin="10px" textAlign={'center'} >
              <Typography sx={{ textAlign: "start", m: "10px", mr: "2%", color: "black", fontSize: "16px", }}>برای سفارش هر سرویس،بر روی افزونه آن کلیک کنید.</Typography>
              <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px", height: "auto", margin: "0 auto", marginTop: "2%", marginBottom: "3%", marginRight: "1%", marginLeft: "1%" }}>
                <ServiceButton
                  height={85}
                  width={100}
                  src="subcategory"
                  subtitle='مشاهده پنل'
                  title='رنگ'
                  ShowOnClick={false}
                  icon='/images/ServicesLogo/nikasms3.jpg'
                  onClick={routeServicehandler} />
                <ServiceButton
                  height={85}
                  width={100}
                  src="subcategory"
                  subtitle='مشاهده پنل'
                  title='آسانسور'
                  ShowOnClick={true}
                  icon='/images/ServicesLogo/nikasms3.jpg'
                  onClick={routeServicehandler} />
                <ServiceButton
                  height={85}
                  width={100}
                  src="subcategory"
                  subtitle='مشاهده پنل'
                  title='آهن'
                  icon='/images/ServicesLogo/nikasms3.jpg'
                  onClick={routeServicehandler} />
                <ServiceButton
                  height={85}
                  width={100}
                  src="subcategory"
                  subtitle='مشاهده پنل'
                  title='سیمان'
                  icon='/images/ServicesLogo/nikasms3.jpg'
                  onClick={routeServicehandler} />
                <ServiceButton
                  height={85}
                  width={100}
                  src="subcategory"
                  subtitle='مشاهده پنل'
                  title='گچ'
                  icon='/images/ServicesLogo/nikasms3.jpg'
                  onClick={routeServicehandler} />
                <ServiceButton
                  height={85}
                  width={100}
                  src="subcategory"
                  subtitle='مشاهده پنل'
                  title='آسانسور'
                  icon='/images/ServicesLogo/nikasms3.jpg'
                  onClick={routeServicehandler} />
                <ServiceButton
                  height={85}
                  width={100}
                  src="subcategory"
                  subtitle='مشاهده پنل'
                  title='سنگ'
                  icon='/images/ServicesLogo/nikasms3.jpg'
                  onClick={routeServicehandler} />
                <ServiceButton
                  height={85}
                  width={100}
                  src="subcategory"
                  subtitle='مشاهده پنل'
                  title='سرامیک'
                  icon='/images/ServicesLogo/nikasms3.jpg'
                  onClick={routeServicehandler} />
              </Box>
            </Grid>
          </Grid >
        </Card>}
      </Card>
    </Box>
  )
}
