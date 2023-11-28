import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridCellEditStopReasons, GridColDef, GridApi, GridCellValue, useGridApiContext } from '@mui/x-data-grid'
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

export default function TabGoods() {

  ////////////// Brand And Goodstype Id Combobox Code

  function SelectEditInputCell(props) {
    const { id, value, field } = props;
    const apiRef = useGridApiContext();

    const handleChange = async (event) => {
      await apiRef.current.setEditCellValue({ id, field, value: event.target.value });
      apiRef.current.stopCellEditMode({ id, field });
    };
    {
      if (field == "goodstypeid") {
        return (
          <Select
            value={value}
            onChange={handleChange}
            size="medium"
            sx={{ height: 1 }}
            native
            autoFocus
          >
            <option>G Front-end Developer</option>
            <option>G UX Designer</option>
          </Select>
        );
      } else if (field == "brandid") {
        return (
          <Select
            value={value}
            onChange={handleChange}
            size="medium"
            sx={{ height: 1 }}
            native
            autoFocus
          >
            <option>B Front-end Developer</option>
            <option>B UX Designer</option>
          </Select>
        );
      } else {
        return null
      }
    }
  }
  SelectEditInputCell.propTypes = {

    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    value: PropTypes.any,
  };
  const renderSelectEditInputCell = (params) => {
    return <SelectEditInputCell {...params} />;
  };
  /////////////////////////////////////////////////////////////////////////////////////////

  // const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [List, setList] = useState([])
  const [size, setSize] = useState()
  const [count, setCount] = useState()
  const [data, setData] = useState({ PicMaxQuantity: null, PicMaxSize: null })
  const childRef = useRef(null)
  const childRef1 = useRef(null)

  const columns = [
    { field: 'name', flex: 1, headerName: 'کالا', editable: true, headerAlign: "center", headerClassName: 'super-app-theme--header' },
    { field: 'namelatina', flex: 1, headerName: 'کالا لاتین', editable: true, headerAlign: "center", headerClassName: 'super-app-theme--header' },
    { field: 'description', flex: 1.5, headerName: 'توضیحات', editable: true, headerAlign: "center", headerClassName: 'super-app-theme--header' },
    { field: 'goodstypeid', renderEditCell: renderSelectEditInputCell, flex: 1, headerName: 'دسته کالا', editable: true, headerAlign: "center", headerClassName: 'super-app-theme--header' },
    { field: 'brandid', renderEditCell: renderSelectEditInputCell, flex: 1, headerName: 'برند کالا', editable: true, headerAlign: "center", headerClassName: 'super-app-theme--header' },
    {
      flex: 1,
      field: 'action',
      headerName: 'عملیات',
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
      renderCell: params => {
        const onClick = async e => {
          e.stopPropagation()
          const tkn = localStorage.getItem('token')
          const api = params.api
          const thisRow = {}
          api
            .getAllColumns()
            .filter(c => c.field !== '__check__' && !!c)
            .forEach(c => (thisRow[c.field] = params.getValue(params.id, c.field)))
          setData({ PicMaxQuantity: null, PicMaxSize: null })
          setOpen(true)
        }
        return (
          <Button variant='contained' size='small' color='warning' sx={{ height: 'auto', width: '100%', color: 'darkblue', fontSize: '16px', m: 2 }} onClick={onClick}>
            ثبت تغیرات
          </Button>
        )
      }
    }
  ];

  const [rows, setRows] = useState([
    {
      id: 1,
      name: "mamad",
      namelatina: "mamali",
      age: 25,
      role: "fullstack"

    },
    {
      id: 3,
      name: "javat",
      namelatina: "javati",
      age: 19,
      role: "backend"
    },
    {
      id: 4,
      name: "ali",
      namelatina: "chafi",
      role: "backend"
      ,
      age: 28,
    },
    {
      id: 5,
      name: "amir",
      role: "frontend"
      ,
      namelatina: "rashti",
      description: "بببببببببببببببببببببببببببببببقذدتدذنتشدذخدذدنتذدشنتذدشنمیدذنتشیدذنتشیدذثخفذهدذشدفندینتذدینتبدذیپدبذتدیتذادنیت",
      age: 23,
    },
  ]);
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
  const SizeOnchangeHandler = (event) => {
    setSize(event.target.value)
  }
  const CountOnchangeHandler = (event) => {
    setCount(event.target.value)
  }

  return (
    <Box sx={{ minHeight: 750, width: '80%', margin: "0 auto" }}>
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
      // onCellDoubleClick={(a) => console.log(a.row)}
      />
      <Box container sm={12} sx={{ display: "flex", margin: "0 auto", flexWrap: "wrap", mt: 10, gap: "25px", justifyContent: "right", mb: 10 }} >
        <TextField fullWidth multiline label="کالا" value={count} sx={{ width: "30%" }} onChange={CountOnchangeHandler} />
        <TextField fullWidth label="کالا لاتین" multiline value={size} sx={{ width: "30%" }} onChange={SizeOnchangeHandler} />
          <FormControl sx={{ alignSelf: "center", width: "15%"}}>
            <InputLabel>برند</InputLabel>
            <Select label='برند' >
              <MenuItem sx={{ direction: "rtl" }} value="">هیچکدام</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ alignSelf: "center", width: "15%"}}>
            <InputLabel>دسته کالا</InputLabel>
            <Select label='دسته کالا' >
              <MenuItem sx={{ direction: "rtl" }} value="">هیچکدام</MenuItem>
            </Select>
          </FormControl>
        <TextField fullWidth label="توضیحات کالا" multiline minRows={3} value={size} sx={{ width: "60%" }} />        
        <Button variant='contained' sx={{ width: "100px", height: "50px", alignSelf: "flex-end",ml:3,marginRight:"auto" }} >افزودن</Button>
      </Box>
      <SnackbarPopUp ref={childRef} severity={'success'} message={'عملیات موفق'} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={'عملیات ناموفق'} />
    </Box>
  )
}
