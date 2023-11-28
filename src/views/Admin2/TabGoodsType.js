import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridCellEditStopReasons, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Button, ToggleButtonGroup, ToggleButton, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
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
import styled from '@emotion/styled'
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';


const emails = ['username@gmail.com', 'user02@gmail.com']
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

export default function TabGoodsType() {
  // const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [List, setList] = useState([])
  const [size, setSize] = useState()
  const [count, setCount] = useState()
  const [data, setData] = useState({ PicMaxQuantity: null, PicMaxSize: null })
  const childRef = useRef(null)
  const childRef1 = useRef(null)

  const columns = [
    { field: 'name', flex: 1,headerName: 'دسته کالا', editable: true, headerAlign: "center", headerClassName: 'super-app-theme--header' },
    { field: 'namelatina', flex: 1,headerName: 'دسته کالا لاتین', editable: true, headerAlign: "center", headerClassName: 'super-app-theme--header'},
    { field: 'description', flex: 3,headerName: 'توضیحات', editable: true, headerAlign: "center", headerClassName: 'super-app-theme--header'},
    {
      flex: 1,
      field: 'action',
      headerName: 'عملیات',
      // sortable: false,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      /* cellClassName: 'super-app-theme--cell'*/
      renderCell: params => {
        const onClick = async e => {
          e.stopPropagation() // don't select this row after clicking
          const tkn = localStorage.getItem('token')
          const api = params.api
          const thisRow = {}
          api
            .getAllColumns()
            .filter(c => c.field !== '__check__' && !!c)
            .forEach(c => (thisRow[c.field] = params.getValue(params.id, c.field)))
          setData({ PicMaxQuantity: null, PicMaxSize: null })
          setOpen(true)
          console.log(thisRow)
          // return alert(JSON.stringify(thisRow, null, 4))
        }
        return (
          <Button variant='contained' size='small' color='warning' sx={{ height: 'auto', width: '100%', color: 'darkblue', fontSize: '18px', m: 2 }} onClick={onClick}>
            ثبت تغیرات
          </Button>
        )
      }
    }
  ];

  const [rows,setRows] = useState([
    {
      id: 1,
      name: "mamad",
      namelatina: "mamali",
      age: 25,
    },
    {
      id: 3,
      name: "javat",
      namelatina: "javati",
      age: 19,
    },
    {
      id: 4,
      name: "ali",
      namelatina: "chafi",
      age: 28,
    },
    {
      id: 5,
      name: "amir",
      namelatina: "rashti",
      description: "بببببببببببببببببببببببببببببببقذدتدذنتشدذخدذدنتذدشنتذدشنمیدذنتشیدذنتشیدذثخفذهدذشدفندینتذدینتبدذیپدبذتدیتذادنیت",
      age: 23,
    },
  ]);
  const [selectedValue, setSelectedValue] = React.useState(emails[1])

  const onCellDoubleClickHandler = (prop) => {
    setSize(prop.row.picMaxSize)
    setCount(prop.row.picMaxQuantity)
  }
  const handleClose = value => {
    setOpen(false)
    setSelectedValue(value)
  }
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
  // const ChangeUserStatusHandler = async () => {
  //   const Send = await fetch(`${themeConfig.servicesAddress}mediasettings/delete`, {
  //     method: 'POST',
  //     // body: JSON.stringify(data),
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-type': 'application/json',
  //       'Access-Control-Allow-Headers': 'Content-Type',
  //       'Access-Control-Allow-Methods': 'POST',
  //       'Access-Control-Allow-Headers': 'X-Requested-With',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     }
  //   }).catch(err => {
  //     // console.log(err)
  //   })
  //   if (Send != undefined) {
  //     if (Send.status == 200) {
  //       handleClickPopUp('success')
  //       setCount("")
  //       setSize("")
  //       setRows([])
  //       await SetTableHandler()
  //     } else {
  //       handleClickPopUp('error')
  //     }
  //   } else {
  //     handleClickPopUp('error')
  //   }
  // }

  // const SetTableHandler = async () => {
  //   const Activated = await fetch(`${themeConfig.servicesAddress}mediasettings/get`, {
  //     method: 'POST',
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       'Content-type': 'application/json',
  //       'Access-Control-Allow-Headers': 'Content-Type',
  //       'Access-Control-Allow-Methods': 'POST',
  //       // "Content-type": "text/plain",
  //       'Access-Control-Allow-Headers': 'X-Requested-With',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     }
  //   }).catch(err => {
  //     // console.log(err)

  //   })
  //   if (Activated != undefined) {
  //     if (Activated.status == 200) {
  //       const setActive = await Activated.json()
  //       // console.log({ ...setActive.data, id: 1 })
  //       console.log(setActive.data)
  //       setList([{ ...setActive.data, id: 1 }])
  //       setRows([{ ...setActive.data, id: 1 }])
  //     }
  //   }
  // }

  // useEffect(async () => {
  //   SetTableHandler()
  // }, [])

  // const AddUpdateHandler = async () => {
  //   let statustext = ""
  //   if (rows.length == 0) {
  //     statustext = "New"
  //   } else {
  //     statustext = "Modify"
  //   }
  //   const commit = await fetch(`${themeConfig.servicesAddress}mediasettings/${statustext}`, {
  //     method: 'POST',
  //     body: JSON.stringify({ PicMaxQuantity: count, PicMaxSize: size }),
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       'Content-type': 'application/json',
  //       'Access-Control-Allow-Headers': 'Content-Type',
  //       'Access-Control-Allow-Methods': 'POST',
  //       // "Content-type": "text/plain",
  //       'Access-Control-Allow-Headers': 'X-Requested-With',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     }
  //   }).catch(err => {
  //     // console.log(err)

  //   })
  //   if (commit != undefined) {
  //     if (commit.status == 200) {
  //       SetTableHandler()
  //       handleClickPopUp('success')
  //       setCount("")
  //       setSize("")
  //     } else {
  //       handleClickPopUp('error')
  //     }
  //   } else {
  //     handleClickPopUp('error')
  //   }
  // }
  const SizeOnchangeHandler = (event) => {
    setSize(event.target.value)
  }
  const CountOnchangeHandler = (event) => {
    setCount(event.target.value)
  }

  return (
    <Box sx={{ minHeight: 750, width: '60%', margin: "0 auto" }}>
      <Box sx={{ m: 4 }}>
        <Typography>برای ادیت هر ردیف رو آن قسمت دو بار کلیک کنید</Typography>
      </Box>
      <DataGrid
        sx={{
          '& .super-app-theme--header': { backgroundColor: "#9257fd", color: "white" },
          boxShadow: 2,
          backgroundColor: '#e4dce6',
          mt: 1,
          ml: 3,
          textAlign: "center",
          mr: 3,
          color: '#320d3e',
          fontWeight: 800,
          height: 500,
          fontSize: "1rem",
          direction: 'rtl',
          '@media (max-width:1199px)': {
            '& .super-app-theme--header': {
              fontSize: "0.9rem"
            }
          }
        }}
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        onCellDoubleClick={(a) => console.log(a.row)}
      />
      <Box container sm={12} sx={{ display: "flex", margin: "0 auto", flexWrap: "wrap", mt: 10, gap: "40px", justifyContent: "center", mb: 10 }} >
        <TextField fullWidth multiline label="دسته کالا" value={count} sx={{ width: "40%" }} onChange={CountOnchangeHandler} />
        <TextField fullWidth label="دسته کالا لاتین" multiline value={size} sx={{ width: "40%" }} onChange={SizeOnchangeHandler} />
        <TextField fullWidth label="توضیحات دسته کالا" multiline minRows={3} value={size} sx={{ width: "70%" }} />
        <Button variant='contained' sx={{ width: "100px", height: "50px", alignSelf: "flex-end" }} >افزودن</Button>
      </Box>
      <SnackbarPopUp ref={childRef} severity={'success'} message={'عملیات موفق'} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={'عملیات ناموفق'} />
      {/* <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} func={ChangeUserStatusHandler} /> */}
    </Box>
  )
}
