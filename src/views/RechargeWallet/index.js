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
import { Button, Card, Divider, StyledTextField, TextField, Checkbox, styled, MenuItem, Select, InputLabel, FormControl, FormHelperText, useFormControl, Input, InputAdornment, ToggleButtonGroup, ToggleButton } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import PayLine from '../choose-service/payLine'

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

export default function RechargeWallet(props) {

  const TextFieldValue = useRef()
  const [primaryAlignment, setPrimaryAlignment] = useState('5mil')
  const [amount, setAmount] = useState("50000000")
  const handleChange = (event, newAlignment) => {
    // setAlignment(event.target);
    if (event.target.value == "5mil") {
      setPrimaryAlignment(newAlignment);
      setAmount("50000000")

    } else if (event.target.value == "10mil") {
      setPrimaryAlignment(newAlignment);
      setAmount("100000000")
    }
    else if (event.target.value == "50mil") {
      setPrimaryAlignment(newAlignment);
      setAmount("500000000")

      console.log(TextFieldValue.current);
    }

  }

  const valueChangeHandler = (event) => {
    // setAmount(event.target.value)
  }

  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Card>
        <Button onClick={props.onBack} variant='contained' sx={{ mr: 5, mt: 5 }}>بازگشت</Button>
        <Box sx={{ display: "flex", m: 5, flexDirection: "column" }}>
          <Box>
            <Typography>مبلغ افزایش موجودی را وارد کنید.</Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column", mt: 5, mb: 5 }}>
            <FormControl sx={{ margin: "0 auto", mb: 1 }}>
              <TextField
                required
                id="outlined-required"
                label="مبلغ مورد نظر"
                sx={{ m: 1, width: '80%' }}
                defaultValue={amount}
                ref={TextFieldValue}
                value={amount}
                onChange={valueChangeHandler}
                InputProps={{
                  startAdornment: <InputAdornment position="start"> ریال </InputAdornment>,
                }}
              />
            </FormControl>
            <Typography sx={{ margin: "0 auto", fontSize: "0.8rem", mb: 8 }}>مبلغ وارد شده باید بین 100,000 ریال تا 100,000,000 ریال باشد</Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={primaryAlignment}
              sx={{ direction: "ltr", margin: "auto auto" }}
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="5mil">5000000 ریال</ToggleButton>
              <ToggleButton value="10mil">10000000 ریال</ToggleButton>
              <ToggleButton value="50mil">50,000,000 ریال</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          {true && <Box sx={{ width: "auto" }}>
            <Typography sx={{ mb: 5 }}>درگاه پرداخت را انتخاب کنید.</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
              <Box sx={{ display: "flex", gap: "25px", margin: "0 auto", marginBottom: "20px" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <InputLabel
                    // onClick={() => { setPercentCosts({ darsadGhest: "0.0195" }), console.log('percent ran') }}                    
                    sx={{
                      display: "flex", flexDirection: "column", border: "1px solid #ddd",
                      borderRadius: "10px",
                      overflow: "hidden",
                      display: 'flex',
                      boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer"
                    }}>
                    {/* <img src="/images/payimages/saderat.jpg" alt="Option 2" style={{
                margin: "5px", borderRadius: "10px", height: "100px", width: "100px"
              }} /> */}
                    <Box sx={{
                      backgroundImage: 'url("/images/payimages/mellat.jpg")', backgroundSize: "contain", backgroundRepeat: "no-repeat",
                      borderRadius: "8px",
                      overflow: "hidden",
                      display: 'flex',
                      margin: "5px",
                      backgroundPosition: "center", height: "80px", width: "80px",
                    }} />
                    <input disabled={!amount} type="radio" name="test" value="big" size="big" style={{ marginBottom: "10px", transform: "scale(1.5)" }} />
                  </InputLabel>
                </Box>
                <Box >
                  <InputLabel
                    //  onClick={() => { setPercentCosts({ darsadGhest: "0.02" }), console.log('percent ran') }} 
                    sx={{
                      display: "flex", flexDirection: "column", border: "1px solid #ddd",
                      borderRadius: "10px",
                      overflow: "hidden",
                      display: 'flex',
                      boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer"
                    }}>
                    {/* <img src="/images/payimages/saderat.jpg" alt="Option 2" style={{
                margin: "5px", borderRadius: "10px", height: "100px", width: "100px"
              }} /> */}
                    <Box sx={{
                      backgroundImage: 'url("/images/payimages/saderat.jpg")', backgroundSize: "contain", backgroundRepeat: "no-repeat",
                      borderRadius: "10px",
                      overflow: "hidden",
                      display: 'flex',
                      margin: "5px",
                      backgroundPosition: "center", height: "80px", width: "80px",
                    }} />
                    <input disabled={!amount} type="radio" name="test" value="big" size="big" style={{ marginBottom: "10px", transform: "scale(1.5)" }} />
                  </InputLabel>
                </Box>
                <Box>
                  <InputLabel
                    // onClick={() => {
                    //   setPercentCosts({ darsadGhest: "0.021" })
                    //   , console.log('percent ran')
                    // }}

                    sx={{
                      display: "flex", flexDirection: "column", border: "1px solid #ddd",
                      borderRadius: "10px",
                      overflow: "hidden",
                      display: 'flex',
                      boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff', cursor: "pointer"
                    }}>
                    {/* <img src="/images/payimages/saderat.jpg" alt="Option 2" style={{
                margin: "5px", borderRadius: "10px", height: "100px", width: "100px"
              }} /> */}
                    <Box sx={{
                      backgroundImage: 'url("/images/payimages/tejarat.jpg")', backgroundSize: "contain", backgroundRepeat: "no-repeat",
                      borderRadius: "10px",
                      overflow: "hidden",
                      display: 'flex',
                      margin: "5px",
                      backgroundPosition: "center", height: "80px", width: "80px",
                    }} />
                    <input disabled={!amount} type="radio" name="test" value="big" size="big" style={{ marginBottom: "10px", transform: "scale(1.5)" }} />
                  </InputLabel>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button disabled={!amount} variant='contained' sx={{ width: "15%" }} >پرداخت</Button>
            </Box>
          </Box>}
        </Box>
      </Card>
    </Box>
  )
}
