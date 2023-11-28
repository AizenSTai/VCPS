import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';
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
import { TextField, MenuItem, Select, InputAdornment, FormControl, InputLabel } from '@mui/material'
// import { Toolbar } from '@mui/material'
import { NumberFormatBase, NumericFormat } from 'react-number-format'
import { Information, Script } from 'mdi-material-ui'
import { styled, useTheme } from '@mui/material/styles'

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ color: "black", width: 300, height: 50 }}>
      <GridToolbarQuickFilter placeholder='جستجو  ...... ' sx={{ border: "3px solid darkgray", fontSize: "20px" }} />
    </GridToolbarContainer>
  );
}
function numberWithCommas(x) {
  // console.log(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const inputImageHandler = () => {
  const input = document.getElementById('inputImage')
  const image = document.getElementById('blah')
  // console.log(input)
  // console.log(image)
  console.log(input.files)
  const [file] = input.files
  if (file) {
    image.src = URL.createObjectURL(file)
    return URL.createObjectURL(file)
  }
}

export default function AddingPage(props) {

  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const [id, setId] = useState(null)
  const [product, setproduct] = useState(null)
  const [info, setInfo] = useState(null)
  const [made, setMade] = useState(null)
  const [cost, setCost] = useState(null)
  const [selectItem, setSelectItem] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [imgOpen, setImgOpen] = useState(false)
  const TrophyImg = styled('img')({
    bottom: 50,
    height: 50,
  })

  const columns = [
    {
      field: 'userId',
      headerName: 'ردیف',
      headerClassName: 'super-app-theme--header',
      flex: 0.4,
      headerAlign: 'center',
    },
    {
      field: 'product',
      headerName: 'نوع کالا',
      headerClassName: 'super-app-theme--header',
      flex: 1.5,
      headerAlign: 'center',

    },
    {
      field: 'made',
      headerName: 'ساخت',
      headerClassName: 'super-app-theme--header',
      flex: 1.5,
      headerAlign: 'center'
    },
    {
      width: 75,
      field: 'image',
      headerAlign: 'center',
      headerName: 'عکس',
      headerClassName: 'super-app-theme--header',
      renderCell: params => {
        // console.log(params.formattedValue)
        return (
          (<TrophyImg alt='image' src={params.formattedValue} />)
        )
      }
    },
    {
      field: 'info',
      headerName: 'مشخصات کالا',
      headerClassName: 'super-app-theme--header',
      flex: 5,
      headerAlign: 'center'
    },
    {
      field: 'cost',
      headerName: 'قیمت',
      headerClassName: 'super-app-theme--header',
      flex: 2,
      headerAlign: 'center'
    }
  ]

  const [rows, setRows] = useState([
    { userId: "1", made: 'ایران', image: '/images/misc/trophy.png', product: "رنگ", info: "خاکستری", cost: "60,000,000 تومان" },
    { userId: "2", made: 'ایتالیا', image: '/images/misc/paypal.png', product: "رنگ", info: "سفید", cost: "40,000,000 تومان" },
    { userId: "3", made: 'ترک', image: '/images/misc/chart.png', product: "رنگ", info: "قهوه ای", cost: "30,000,000 تومان" },
    { userId: "4", made: 'چین', image: '/images/misc/favicon.jpg', product: "سیمان", info: "سفید 15 کیلویی", cost: "100,000,000 تومان" },
  ])

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

  const onCellClickhandker = (prop) => {
    setImgOpen(true)
    setId(prop.row.userId)
    setCost(prop.row.cost)
    setInfo(prop.row.info)
    setproduct(prop.row.product)
    setMade(prop.row.made)
    setImageFile(prop.row.image)
  }
  const onDeleteClickhandler = () => {
    const rowsDouble = rows
    // const leftRows = rowsDouble.map((itm, index) => {
    //   if (itm.userId != id) {
    //     return itm
    //   } else {
    //     return null
    //   }
    // })
    const leftRows = []
    rowsDouble.forEach(element => {
      if (element.userId != id) {
        leftRows.push(element)
      }
    });
    // console.log([leftRows])
    setRows(leftRows)
    setproduct("")
    setCost("")
    setId("")
    setInfo("")
    setMade("")
    setSelectItem("")
    setImageFile("")
    const pic = document.getElementById('blah')
    pic.src = "#"
    setImgOpen(false)
  }
  const costOnchangehandler = (prop) => {
    setCost(prop.target.value)
  }
  const infoOnchangehandler = (prop) => {
    setInfo(prop.target.value)
  }
  const madeOnchangehandler = (prop) => {
    setMade(prop.target.value)
  }

  const onAddClickhandler = () => {
    // rowsDouble.push({ userId: (rows.length + 1), product: product, info: info, cost: cost })
    if (cost != null && info != null && product != null && made != null && imageFile != null) {
      setRows([...rows, { userId: (rows.length + 1), image: imageFile, product: product, made: made, info: info, cost: cost }])
    }
    setproduct("")
    setCost("")
    setId("")
    setInfo("")
    setMade("")
    setSelectItem("")
    setImageFile("")
    const pic = document.getElementById('blah')
    pic.src = "#"
    setImgOpen(false)
  }
  const add2PercentClickhandler = () => {
    const rowsDouble = rows
    const leftRows = []
    rowsDouble.forEach(element => {
      const precost = element.cost
      var maincost = precost.replace('تومان', '')
      while (maincost.includes(',')) {
        maincost = maincost.replace(',', '')
      }
      maincost = numberWithCommas(Math.ceil(parseInt(maincost) + parseInt(maincost) * 0.01)) + ' تومان '
      leftRows.push({ userId: element.userId, image: element.image, product: element.product, made: element.made, info: element.info, cost: maincost })
    })
    setRows(leftRows)
  }
  const Subtract2PercentClickhandler = () => {
    const rowsDouble = rows
    const leftRows = []
    rowsDouble.forEach(element => {
      const precost = element.cost
      var maincost = precost.replace('تومان', '')
      while (maincost.includes(',')) {
        maincost = maincost.replace(',', '')
      }
      maincost = numberWithCommas(Math.ceil(parseInt(maincost) - parseInt(maincost) * 0.01)) + ' تومان '
      leftRows.push({ userId: element.userId, image: element.image, product: element.product, made: element.made, info: element.info, cost: maincost })
    })
    setRows(leftRows)
  }
  const onEditClickhandler = () => {
    const rowsDouble = rows

    const leftRows = []
    rowsDouble.forEach(element => {
      if (element.userId != id) {
        leftRows.push(element)
      } else if (element.userId == id) {
        leftRows.push({ userId: element.userId, product: product, image: imageFile, made: made, info: info, cost: cost })
      }
    })
    setRows(leftRows)
    setproduct("")
    setCost("")
    setId("")
    setInfo("")
    setMade("")
    setSelectItem("")
    const pic = document.getElementById('blah')
    pic.src = "#"
    setImgOpen(false)
  }
  const handleSelectChange = (event) => {
    // console.log(event.target)
    if (event.target.value == 'color') {
      setproduct('رنگ')
      setSelectItem('color')
    } else if (event.target.value == 'cement') {
      setproduct('سیمان')
      setSelectItem('cement')
    } else {
      setproduct("")
      setSelectItem('')
    }
  }
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();
  const inputRef = useRef();
  return (
    <Box sx={{ height: "auto", width: '100%' }}>
      <Button onClick={props.onBack} variant='contained' sx={{ m: 5, mb: 0 }}>بازگشت</Button>
      <Box sx={{ margin: "0 auto", width: "30%", mb: 6 }}>
        <Typography sx={{ border: "1px solid gray", pl: 25, pr: 25, pb: 2, pt: 2, color: "black", borderRadius: "50px", fontSize: "1.375rem", textAlign: "center" }}>لیست کالا</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "left" }}>
        <Button variant='contained' sx={{ ml: 3 }} onClick={Subtract2PercentClickhandler}>کاهش -1% قیمت</Button>
        <Button variant='contained' sx={{ ml: 3 }} onClick={add2PercentClickhandler}>افزایش +1% قیمت</Button>
      </Box>
      <DataGrid
        disableExtendRowFullWidth={false}
        sx={{
          '& .super-app-theme--header': { backgroundColor: "#9257fd", color: "white" },
          boxShadow: 2,
          backgroundColor: '#e4dce6',
          mt: 2,
          ml: 3,
          mb: 6,
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
        components={{ Toolbar: CustomToolbar }}
        onCellDoubleClick={onCellClickhandker}
        // //this is sooooo important getRowId :)))))))))
        // getRowId={row => row.userId}
        getRowId={row => row.userId}
        // getRowId={}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      <Box sx={{ display: "flex", justifyContent: "right", flexDirection: "column", height: "auto", m: 5, mb: 5, borderRadius: "10px", border: "1px solid #ddd" }}>
        <Box sx={{ display: "flex", m: 2, gap: "10px", justifyContent: "right", flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", width: "20%", alignSelf: "flex-start", mt: 4, position: "relative", minWidth: "200px" }}>
            <Typography sx={{ width: "50%", color: "black", fontSize: "1rem", alignSelf: "center", textAlign: "center", minWidth: "80px" }}> انتخاب کالا :</Typography>
            <FormControl sx={{ alignSelf: "center", width: "10%" }}>
              <InputLabel></InputLabel>
              <Select sx={{ color: "white" }} onChange={handleSelectChange} value={selectItem} variant='filled' >
                <MenuItem sx={{ direction: "rtl" }} value="">هیچکدام</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value="color">رنگ</MenuItem>
                <MenuItem sx={{ direction: "rtl" }} value="cement">سیمان</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              value={product}
              id='product'
              variant='filled'
              defaultValue=' '
              InputProps={{
                readOnly: true
              }}
              sx={{ width: "50%", alignSelf: "center" }}
            />
          </Box >
          <Box sx={{ display: "flex", width: "20%", alignSelf: "flex-start", mt: 4, minWidth: "200px" }}>
            <Typography sx={{ color: "black", fontSize: "1rem", alignSelf: "center", textAlign: "center", width: "20%", minWidth: "60px" }}>ساخت : </Typography>
            <TextField
              value={made}
              fullWidth
              defaultValue=' '
              id='info'
              multiline
              onChange={madeOnchangehandler}
              maxRows={2}
              variant='filled'
              InputLabelProps={{ shrink: false }}
              sx={{ width: "80%", alignSelf: "center" }}
            />
          </Box>
          <Box sx={{ display: "flex", width: "25%", alignSelf: "flex-start", mt: 4, minWidth: "250px" }}>
            <Typography sx={{ color: "black", fontSize: "1rem", alignSelf: "center", textAlign: "center", width: "30%", minWidth: "80px" }}>مشخصات : </Typography>
            <TextField
              value={info}
              fullWidth
              defaultValue=' '
              id='info'
              multiline
              onChange={infoOnchangehandler}
              maxRows={2}
              variant='filled'
              InputLabelProps={{ shrink: false }}
              sx={{ width: "70%", alignSelf: "center" }}
            />
          </Box>
          <Box sx={{ display: "flex", width: "30%", alignSelf: "flex-start", mt: 4, minWidth: "300px" }}>
            <Typography sx={{ color: "black", fontSize: "1rem", alignSelf: "center", textAlign: "center", width: "40%" }}> قیمت کالا :</Typography>
            <NumericFormat
              style={{ width: "60%", border: "1px solid #ddd", padding: "10px", height: "60px", borderRadius: "10px", textAlign: "center", fontSize: "1rem", alignSelf: "center", color: "green", }}
              thousandSeparator
              onChange={costOnchangehandler}
              // value={amount}
              value={cost}
              suffix=' تومان '
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "5px", ml: 5, flexDirection: "row", flexWrap: "wrap", marginTop: "auto", mb: 4, minWidth: "600px" }}>
          <Box sx={{ flex: 5 }} >
            <Typography sx={{ marginRight: "5px", fontSize: "1.5rem", mb: 5 }}>آپلود عکس</Typography>
            <Box sx={{ display: "flex", gap: "25px", flexWrap: "wrap" }} >
              <Button sx={{ height: "50px" }} variant='contained' onClick={() => { inputRef.current.click(), setImgOpen(true) }}>انتخاب عکس</Button>
              <input
                id='inputImage'
                accept='.jpg,.png,.bmp,.svg'
                ref={inputRef}
                type="file"
                multiple
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = inputImageHandler()
                  setImageFile(file)
                  // console.log(imagefile)
                  if (fileNames.length > 0) {
                    fileNames.map((name) => {
                      removeFile(name)
                    })
                  }
                  setFiles(e, 'a');
                  inputRef.current.value = null;
                }}
              />
              {imgOpen && <Box sx={{ borderTop: "1px solid black", width: "200px", height: "200px" }} >
                {/* {console.log(fileNames)} */}
                <Box sx={{ position: "relative" }}>
                  {imgOpen && <img style={{ position: "absolute", width: "200px", height: "200px" }} id="blah" src={imageFile} />}

                  {/* <ul style={{ position: "absolute", top: "210px" }}>
                    {fileNames.length != 0 &&

                      <li>{fileNames[fileNames.length - 1]}</li>
                    }
                  </ul> */}
                </Box>
              </Box>}
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "5px", flex: 1, alignSelf: "flex-end", maxHeight: "40px" }}>
            <Button variant='contained' size='small' color='error' onClick={onDeleteClickhandler}>حذف</Button>
            <Button size='large' onClick={onEditClickhandler} variant='contained'>ویرایش</Button>
            <Button size='large' onClick={onAddClickhandler} variant='contained'>جدید</Button>
          </Box>
        </Box>
      </Box>
      <SnackbarPopUp ref={childRef} severity={'success'} message={'عملیات موفق'} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={'عملیات ناموفق'} />
    </Box >
  )
}

