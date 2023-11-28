import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
// import { GridCsvExportOptions } from '@mui/x-data-grid-pro'
// import { GridToolbar } from '@mui/x-data-grid'
// import { GridToolbarExport } from '@mui/x-data-grid'
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
import FactorList from 'src/views/choose-service/factorList'
import { Button, Card, Divider, StyledTextField, TextField, Checkbox, styled, MenuItem, Select, InputLabel, FormControl } from '@mui/material'

function SimpleDialog(props) {
  const { onClose, selectedValue, open, func } = props

  const handleClose = () => {
    onClose(selectedValue)
  }


  const handleListItemClick = value => {
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>رمز کاربر ریست شود؟</DialogTitle>
      <div>
        <Button
          onClick={() => {
            handleListItemClick('addAccount')
            func()
          }}
        >
          بله
        </Button>
        <Button onClick={() => handleListItemClick('addAccount')}>خیر</Button>
      </div>
    </Dialog>
  )
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
}

export default function ShoppingList(props) {
  const [rows, setRows] = useState([])
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)
  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const datas = JSON.stringify({
    pageIndex: 1,
    pageSize: 25,
    username: null,
    userRole: 'sa',
    nameFa: null,
    nationalCode: null
  })
  const TrophyImg = styled('img')({
    margin: 15,
    height: 100,
    width: 100
  })

  const snackHandleClick = () => {
    childRef.current.handleClick()
  }
  const snackHandleClick1 = () => {
    childRef1.current.handleClick()
  }
  const handleClickPopUp = prop => {
    if (prop === 'success') {
      snackHandleClick()
    } else {
      snackHandleClick1()
    }
  }
  const [billOpen, setBillOpen] = useState(false)
  const ResetUser = async () => {

    handleClickPopUp('success')
    const Send = await fetch(`${themeConfig.servicesAddress}user/list`, {
      method: 'POST',
      body: datas,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).catch(err => {
      console.log(err)
    })
    const Response = await Send.json()
    setRows([{ ...Response.data[0], btn: 'ریست' }])
  }
  // useEffect(async () => {
  //   const Send = await fetch(`${themeConfig.servicesAddress}user/list`, {
  //     method: 'POST',
  //     body: datas,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-type': 'application/json',
  //       'Access-Control-Allow-Headers': 'Content-Type',
  //       'Access-Control-Allow-Methods': 'POST',
  //       'Access-Control-Allow-Headers': 'X-Requested-With',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  //   const Response = await Send.json()
  //   setRows([{ ...Response.data[0], btn: 'ریست' }])
  // }, [])

  const [dataList, setDataList] = useState([
    { id: 1, type: "موتور", info: [{ id: 1, name: "blue", nameFa: "بهران" }, { id: 2, name: "red", nameFa: "ایتال" }, { id: 3, name: "far", nameFa: "فرش باف" }], count: 1, price: 150000 }

    , { id: 2, type: "تابلو", info: [{ id: 1, name: "yellow", nameFa: "آرین" }, { id: 2, name: "brown", nameFa: "ال ستا" }, { id: 3, name: "brown", nameFa: "ASK" }, { id: 4, name: "brown", nameFa: "آرمان رلز" }], count: 1, price: 1500000 }

    , { id: 3, type: "سیم بکسل", info: [], count: 1, price: 2500000 }

    , { id: 4, type: "ریل", info: [], count: 1, price: 150000 }

    , { id: 5, type: "کابین", info: [{ id: 1, name: "blue", nameFa: "استیل" }, { id: 2, name: "red", nameFa: "استیل-MDF" }], count: 1, price: 150000 }

    , { id: 6, type: "شاسی", info: [{ id: 1, name: "blue", nameFa: "ATM" }, { id: 2, name: "red", nameFa: "Medic" }], count: 1, price: 150000 }

    , { id: 7, type: "درب", info: [{ id: 1, name: "blue", nameFa: "لولا" }, { id: 2, name: "red", nameFa: "اتومات - بیابانی" }, { id: 3, name: "far", nameFa: "اتومات - یاران" }, { id: 3, name: "far", nameFa: "اتومات - روانکار" }], count: 1, price: 150000 }])
  const CountChangeHandler = (index, event) => {
  }
  const onBackhandler = () => {
    setBillOpen(false)
  }

  const openHandler = () => {
    setBillOpen(true)
  }

  return (
    <Box>
      {billOpen && <FactorList onBack={onBackhandler} serviceList={dataList} serviceName='رنگ' />}
      {!billOpen &&
        <Card sx={{ height: "auto" }}>
          <Button onClick={props.onBack} variant='contained' sx={{ m: 5, mb: 0 }}>بازگشت</Button>
          <Box sx={{ display: "flex", flexDirection: "column", m: 5, mt: 0 }}>
            <Box sx={{ margin: "0 auto", mb: 5 }}>
              <Typography sx={{ border: "1px solid gray", pl: 25, pr: 25, pb: 2, pt: 2, color: "black", borderRadius: "50px", fontSize: "1.375rem" }}>آسانسور</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "right", height: "50px", mb: 5 }}>
              <Box sx={{ ml: 5, display: "flex", width: "30%" }}>
                <Typography sx={{ width: "40%", color: "black", fontSize: "1rem", alignSelf: "center" }}>سفارش دهنده:</Typography>
                <TextField
                  fullWidth
                  id='Cost'
                  label="نام"
                  sx={{ width: "60%" }}
                />
              </Box >
              <Box sx={{ ml: 5, display: "flex", width: "30%" }}>
                <Typography sx={{ color: "black", fontSize: "1rem", alignSelf: "center", width: "40%" }}>شماره تماس:</Typography>
                <TextField
                  label="شماره"
                  fullWidth
                  id='Cost'
                  sx={{ width: "60%" }}
                />
              </Box>
              <Box sx={{ ml: 5, display: "flex", width: "30%" }}>
                <Typography sx={{ color: "black", fontSize: "1rem", alignSelf: "center", width: "40%" }}>محل تحویل:</Typography>
                <TextField
                  label="آدرس"
                  fullWidth
                  id='Cost'
                  sx={{ width: "60%" }}
                />
              </Box>
            </Box>
            <Divider />
            <Box>
              {/* <Box>
                <Typography>لیست شرکت ها</Typography>
              </Box> */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {/* <Box sx={{ border: "1px solid lightgray", display: "flex", gap: "10px", mt: 5 }}>
                <Checkbox
                inputProps={{ 'aria-label': 'Checkbox demo' }}
                defaultChecked
                />
                <TrophyImg src='/images/misc/favicon.jpg' />
                <FormControl sx={{ alignSelf: "center", width: "25%", ml: 5 }}>
                <InputLabel>مشخصات کالا</InputLabel>
                <Select label='مشخصات کالا' >
                <MenuItem sx={{ direction: "rtl" }} value='tenth'>10درصد </MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value='tenth'>10درصد </MenuItem>
                </Select>
                </FormControl>
                <Typography sx={{ mt: 5, ml: 3 }}>
                <InputLabel>قیمت</InputLabel>
                <span style={{ fontSize: "1.2rem" }}>
                    150000 toman
                  </span>
                  </Typography>
                  <Box>
                  <Typography sx={{ mt: 1, ml: 1 }}>
                  <InputLabel>تعداد</InputLabel>
                  <TextField
                  autoFocus
                  fullWidth
                  id='Cost'
                  sx={{ width: "60%" }}
                  />
                  </Typography>
                  </Box>
                  <Typography sx={{ mt: 5, ml: 5 }}>
                  <InputLabel>جمع کل</InputLabel>
                  <span style={{ fontSize: "1.2rem" }}>
                  150000 toman
                  </span>
                  </Typography>
                </Box> */}
                {dataList.map((itm, index) => {
                  return (
                    <Box sx={{ border: "1px solid lightgray", display: "flex", gap: "10px", mt: 2, borderRadius: "5px" }}>
                      <Typography sx={{ mr: 2, maxWidth: "100px", minWidth: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>{itm.type}</Typography>
                      <Checkbox
                        sx={{ height: "50%", alignSelf: "center" }}
                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                        defaultChecked={false}
                      />
                      <FormControl sx={{ alignSelf: "center", width: "10%", ml: 5, mr: 5 }}>
                        <InputLabel>ساخت</InputLabel>
                        <Select label='مشخصات' >
                          <MenuItem sx={{ direction: "rtl" }} value="">هیچکدام</MenuItem>
                          <MenuItem sx={{ direction: "rtl" }} value="china">چین</MenuItem>
                          <MenuItem sx={{ direction: "rtl" }} value="china">ایران</MenuItem>
                          <MenuItem sx={{ direction: "rtl" }} value="china">ترک</MenuItem>
                          <MenuItem sx={{ direction: "rtl" }} value="china">ایتالیا</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ alignSelf: "center", width: "30%", ml: 5, mr: 5 }}>
                        <InputLabel>مشخصات</InputLabel>
                        <Select label='مشخصات' >
                          <MenuItem sx={{ direction: "rtl" }} value="">هیچکدام</MenuItem>
                          {itm.info.map((select) => {
                            return (
                              <MenuItem sx={{ direction: "rtl" }} value={itm.id + '_' + select.name}>{select.nameFa}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                      <TrophyImg src='/images/misc/favicon.jpg' />
                      <Typography sx={{ alignSelf: "center", mr: 5, width: "15%" }}>
                        <InputLabel>قیمت</InputLabel>
                        <span style={{ fontSize: "1.2rem" }}>
                          {itm.price} تومان
                        </span>
                      </Typography>
                      <Typography sx={{ alignSelf: "center", ml: 1, width: "15%", mr: 5, ml: 10 }}>
                        <TextField
                          fullWidth
                          id='Cost'
                          label='واحد کالا'
                          onChange={(e) => { CountChangeHandler(index, e) }}
                        />
                      </Typography>
                      {/* <Typography sx={{ mt: 5 }}>
                      <InputLabel>جمع کل</InputLabel>
                      <span style={{ fontSize: "1.2rem" }}>
                      {itm.price * itm.count} تومان
                      </span>
                    </Typography> */}
                    </Box>
                  )
                })}
                <Button variant='contained' onClick={openHandler} sx={{ alignSelf: "center", mt: 5, justifySelf: "center" }}>سفارش</Button>
              </Box>
            </Box>
          </Box>
        </Card >
      }
    </Box>
  )
}
