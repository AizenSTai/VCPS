import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
// import { GridCsvExportOptions } from '@mui/x-data-grid-pro'
// import { GridToolbar } from '@mui/x-data-grid'
// import { GridToolbarExport } from '@mui/x-data-grid'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Button, ToggleButtonGroup, ToggleButton, Grid, TextField } from '@mui/material'
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

export default function TabActiveWebsiteCondition() {
  const [rows, setRows] = useState([])
  const [status, setStatus] = useState(0)
  const [toggleSelected, setToggleSelected] = useState("DeActive")
  const [open, setOpen] = useState(false)
  const [activatedList, setActivatedList] = useState([])
  const [deActivatedList, setDeActivatedList] = useState([])
  const [saleCondition, setSaleCondition] = useState()
  const [openningDescription, setOpenningDescription] = useState()
  const [data, setData] = useState({ WholesaleId: null })
  const childRef = useRef(null)
  const childRef1 = useRef(null)

  const columns = [
    {
      field: 'id',
      headerName: 'شناسه',
      headerClassName: 'super-app-theme--header',
      flex: 0.6,
      headerAlign: 'center'
    },
    {
      flex: 0.8,
      field: 'action',
      headerName: 'فعال/غیرفعال',
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
          setData({ WholesaleId: thisRow.wholesaleId })
          setOpen(true)

          // return alert(JSON.stringify(thisRow, null, 4))
        }

        return (
          <Button variant='contained' size='small' color='warning' sx={{ height: 'auto', width: '100%', color: 'darkblue', fontSize: '20px', m: 2 }} onClick={onClick}>
            {(status == 1) ? "غیر فعال" : "فعال"}
          </Button>
        )
      }
    },
    {
      field: 'wholesaleId',
      headerName: 'شماره فروشگاه',
      headerClassName: 'super-app-theme--header',
      flex: 1,
      headerAlign: 'center'
    },
    {
      field: 'openningDescription',
      headerName: 'توضیحات',
      flex: 2,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'saleCondition',
      headerName: 'شرایط',
      headerClassName: 'super-app-theme--header',
      flex: 2,
      headerAlign: 'center'
    },
    {
      field: 'isActive',
      headerName: 'وضعیت',
      flex: 0.6,
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      editable: false
    },
    {
      field: 'confirmUsername',
      headerName: 'تایید کننده',
      flex: 0.8,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'recordUsername',
      headerName: 'ثبت کننده',
      flex: 0.9,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
  ]
  const [selectedValue, setSelectedValue] = React.useState(emails[1])

  const onCellDoubleClickHandler = (prop) => {
    setSaleCondition("")
    setOpenningDescription("")
    setSaleCondition(prop.row.saleCondition)
    setOpenningDescription(prop.row.openningDescription)
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
  const ChangeUserStatusHandler = async () => {
    let statustext = null
    if (status == 1) {
      statustext = 'ModifyDeActivate'
    } else {
      statustext = 'ModifyActivate'
    }
    const Send = await fetch(`${themeConfig.servicesAddress}saleinformation/${statustext}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).catch(err => {
      // console.log(err)
    })
    if (Send != undefined) {
      if (Send.status == 200) {
        handleClickPopUp('success')
        setSaleCondition("")
        setOpenningDescription("")
        setRows([])
        await SetTableHandler()
      } else {
        handleClickPopUp('error')
      }
    } else {
      handleClickPopUp('error')
    }
  }
  const handleChange = (event, newAlignment) => {
    // setAlignment(event.target);
    if (event.target.value == "Active") {
      setToggleSelected("Active");
      setStatus(1)
      setRows([...activatedList])
    } else if (event.target.value == "DeActive") {
      setToggleSelected("DeActive");
      setStatus(0)
      setRows([...deActivatedList])
    }
  }

  const SetTableHandler = async () => {
    const Activated = await fetch(`${themeConfig.servicesAddress}saleinformation/ActivatedList`, {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        // "Content-type": "text/plain",
        'Access-Control-Allow-Headers': 'X-Requested-With',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).catch(err => {
      // console.log(err)
    })
    const DeActivated = await fetch(`${themeConfig.servicesAddress}saleinformation/DeActivatedList`, {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        // "Content-type": "text/plain",
        'Access-Control-Allow-Headers': 'X-Requested-With',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).catch(err => {
      // console.log(err)
    })
    if (DeActivated != undefined) {
      if (DeActivated.status == 200) {
        const setDeActive = await DeActivated.json()
        setDeActivatedList([...setDeActive.data])
        if (status == 0) {
          setRows([...setDeActive.data])
        }
      }
    }
    if (Activated != undefined) {
      if (Activated.status == 200) {
        const setActive = await Activated.json()
        setActivatedList([...setActive.data])
        if (status == 1) {
          setRows([...setActive.data])
        }
      }
    }
  }

  useEffect(async () => {
    SetTableHandler()
  }, [])

  return (
    <Box sx={{ minHeight: 750, width: '100%' }}>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={toggleSelected}
        sx={{ direction: "ltr", m: 4, mt: 8 }}
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="Active">لیست شرایط فعال</ToggleButton>
        <ToggleButton value="DeActive">لیست شرایط غیر فعال</ToggleButton>
      </ToggleButtonGroup>
      <DataGrid
        sx={{
          '& .super-app-theme--header': { backgroundColor: "#9257fd", color: "white" },
          boxShadow: 2,
          backgroundColor: '#e4dce6',
          mt: 1,
          ml: 3,
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
        getRowId={row => row.wholesaleId}
        onCellDoubleClick={onCellDoubleClickHandler}
        experimentalFeatures={{ newEditingApi: true }}
      />
      <Grid container sm={12} sx={{ marginTop: 3, width: "95%", margin: "0 auto" }} spacing={8}>
        <Grid sx={{ minHeight: "200px" }} item sm={6}>
          <TextField fullWidth label="توضیحات سایت" multiline value={openningDescription} InputProps={{
            readOnly: true
          }} />
        </Grid>
        <Grid sx={{ minHeight: "200px" }} item sm={6}>
          <TextField fullWidth label="شرایط فروش" multiline value={saleCondition} InputProps={{
            readOnly: true
          }} />
        </Grid>
      </Grid>
      <SnackbarPopUp ref={childRef} severity={'success'} message={'عملیات موفق'} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={'عملیات ناموفق'} />
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} func={ChangeUserStatusHandler} />
    </Box>
  )
}
