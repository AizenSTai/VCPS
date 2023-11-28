import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue, GridToolbarQuickFilter, GridToolbarContainer } from '@mui/x-data-grid'
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

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ color: "black", width: 300, height: 50 }}>
      <GridToolbarQuickFilter placeholder='جستجو  ...... ' sx={{ border: "3px solid darkgray", fontSize: "20px" }} />
    </GridToolbarContainer>
  );
}

export default function TransactionReport() {
  // const [rows, setRows] = useState([{ id: 1, Id: "1", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "سنتدلنتسیدذ", RRN: "123345", PAN: "543223", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" }])
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
      field: 'userId',
      headerName: 'شناسه',
      headerClassName: 'super-app-theme--header',
      flex: 0.5,
      headerAlign: 'center'
    },
    {
      field: 'SaleReferenceId',
      headerName: 'شماره فاکتور',
      flex: 1.1,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'BankName',
      headerName: 'درگاه پرداخت',
      flex: 1.1,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'Note',
      headerName: 'شرح پرداخت',
      flex: 1.1,
      headerClassName: 'super-app-theme--header',
      editable: false,
      headerAlign: 'center'
    },
    {
      field: 'RRN',
      headerName: 'شناسه پیگیری',
      flex: 1.2,
      headerClassName: 'super-app-theme--header',
      editable: false
    },
    {
      field: 'PAN',
      headerName: 'کارت پرداخت',
      flex: 1.1,
      headerClassName: 'super-app-theme--header',
      editable: false
    },
    {
      field: 'TransactionDateTime',
      headerName: 'تاریخ تراکنش',
      flex: 1.1,
      headerClassName: 'super-app-theme--header',
      editable: false
    },
    {
      field: 'FinalAmount',
      headerName: 'مبلغ تراکنش',
      flex: 1.1,
      headerClassName: 'super-app-theme--header',
      editable: false
    },
    {
      field: 'State',
      headerName: 'وضعیت',
      flex: 0.6,
      headerClassName: 'super-app-theme--header',
      editable: false
    }

  ]
  const rows = [
    { userId: "1", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "5456443223", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "نا موفق" },
    { userId: "2", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "543233323", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" },
    { userId: "3", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "54322223", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" },
    { userId: "4", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "543223", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" },
    { userId: "5", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "523", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" },
    { userId: "6", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "54324523", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" },
    { userId: "7", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "54322223", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" },
    { userId: "8", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "54313223", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" },
    { userId: "9", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "54378223", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" },
    { userId: "10", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "54399223", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" },
    { userId: "11", SaleReferenceId: "123456789", BankName: "بانک ملت", Note: "شرحی موجود نیست", RRN: "123345", PAN: "54328823", TransactionDateTime: "2021/10/30", FinalAmount: "1200000", State: "موفق" }
  ]

  const snackHandleClick = () => {
    childRef.current.handleClick()
  }
  const snackHandleClick1 = () => {
    childRef1.current.handleClick()
  }
  const SearchFocus = useRef()
  const handleClickPopUp = prop => {
    if (prop === 'success') {
      snackHandleClick()
    } else {
      snackHandleClick1()
    }
  }
  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <Typography sx={{ m: 5, mt: 8, display: "block", fontWeight: "600", fontSize: "22px" }}>لیست تراکنش های شما : </Typography>
      {/* <Typography sx={{ display: "inline-block", mb: 1, mt: 2, pt: 2, pb: 2, pr: 5, pl: 5, border: "1px solid #60bdf3", cursor: "pointer" }}>جستجو</Typography> */}
      <DataGrid
        disableExtendRowFullWidth={false}
        sx={{
          '& .super-app-theme--header': { backgroundColor: "#9257fd", color: "white" },
          boxShadow: 2,
          backgroundColor: '#e4dce6',
          mt: 15,
          ml: 3,
          mr: 3,
          color: '#320d3e',
          fontWeight: 800,
          height: 700,
          fontSize: "1rem",
          direction: 'rtl',
          '@media (max-width:1199px)': {
            '& .super-app-theme--header': {
              fontSize: "0.9rem",
            }
          }
        }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        components={{ Toolbar: CustomToolbar }}
        // onCellClick={(event) => { console.log(event) }}
        // //this is sooooo important getRowId :)))))))))
        getRowId={row => row.userId}
        // getRowId={}
        experimentalFeatures={{ newEditingApi: true }}
      />
      <SnackbarPopUp ref={childRef} severity={'success'} message={'عملیات موفق'} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={'عملیات ناموفق'} />
    </Box>
  )
}

