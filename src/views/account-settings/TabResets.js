import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
// import { GridCsvExportOptions } from '@mui/x-data-grid-pro'
// import { GridToolbar } from '@mui/x-data-grid'
// import { GridToolbarExport } from '@mui/x-data-grid'
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
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import themeConfig from 'src/configs/themeConfig'
// import { Toolbar } from '@mui/material'

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

export default function DataGridDemo() {
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
  const data = JSON.stringify({ userId: 0 })
  const columns = [
    {
      width: 75,
      field: 'action',
      headerName: 'ریست',
      sortable: false,
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
          setOpen(true)

          return alert(JSON.stringify(thisRow, null, 4))
        }

        return (
          <Button sx={{ height: 'auto', width: '100%', color: 'darkblue', fontSize: '20px' }} onClick={onClick}>
            ریست
          </Button>
        )
      }
    },
    {
      field: 'userId',
      headerName: 'آیدی',
      headerClassName: 'super-app-theme--header',
      width: 60,
      headerAlign: 'center'
    },
    {
      field: 'username',
      headerName: 'نام کاربری',
      width: 150,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'namefa',
      headerName: 'نام',
      width: 150,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'mobile',
      headerName: 'تلفن',
      width: 160,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'nationalCode',
      headerName: 'کد ملی',
      width: 140,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'rolenamefa',
      headerName: 'سطح کاربر',
      width: 90,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'userStatus',
      headerName: 'وضعیت',
      width: 80,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'email',
      headerName: 'ایمیل',
      width: 300,
      headerClassName: 'super-app-theme--header',
      editable: false
    }
  ]
  const [selectedValue, setSelectedValue] = React.useState(emails[1])

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
  const ResetUser = async () => {
    // console.log('hi')
    //   const Send = await fetch('http://nodex.microsis.net/user/ResetPassword', {
    //     method: 'POST',
    //     body: data,
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Content-type': 'application/json',
    //       'Access-Control-Allow-Headers': 'Content-Type',
    //       'Access-Control-Allow-Methods': 'POST',
    //       'Access-Control-Allow-Headers': 'X-Requested-With',
    //       Authorization: `Bearer ${tkn}`
    //     }
    //   }).catch(err => {
    //     console.log(err)
    //   })
    //   const Reponse = await Send.json()
    //   console.log(Response)
    // console.log(user)
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
  useEffect(async () => {
    // console.log('im in')
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
    // console.log(Send)
    const Response = await Send.json()
    // console.log(Response)
    setRows([{ ...Response.data[0], btn: 'ریست' }])
  }, [])

  return (
    <Box sx={{ height: 625, width: '100%' }}>
      <DataGrid
        sx={{
          m: '2px',
          boxShadow: 2,
          backgroundColor: 'white',
          color: '#320d3e',
          fontWeight: 800,
          fontSize: 18,
          direction: 'rtl',
          // '& .super-app-theme--cell': {
          //   backgroundColor: 'darkgrey',
          //   color: 'black',
          //   fontWeight: '600',
          //   cursor: 'pointer',
          //   alignContent: 'center',
          //   outline: '8px solid #c6d7eb',
          //   outlineOffset: '-8px',
          //   justifyContent: 'center',
          //   boxShadow: '0.5px 0.5px 1px'
          // },
          // '& .super-app-theme--cell:hover': {
          //   boxShadow: '0 0 0',
          //   outline: '10px solid #c6d7eb',
          //   outlineOffset: '-10px'
          // }
          '@media (max-width:1199px)': {
            '& .super-app-theme--header': {
              fontSize: 16,
              width: 'auto'
            }
          }
        }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // components={{ Toolbar: GridToolbar }}
        // onCellClick={event => {
        //   // console.log(event)
        //   if (event.field === 'action') {
        //     setUser(event)
        //     setOpen(true)
        //   }
        // }}
        getRowId={row => row.userId}
        experimentalFeatures={{ newEditingApi: true }}
      />
      <SnackbarPopUp ref={childRef} severity={'success'} message={'عملیات موفق'} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={'عملیات ناموفق'} />
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} func={ResetUser} />
    </Box>
  )
}
