import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import moment from 'jalali-moment'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
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

const GetNationalCodeByDepositNumber = (prop) => {

    const [diposit, setDeposit] = useState("9gshj-gfh-wej-lkjl")
    const [pass, setPass] = useState("131-800-1000000-1")
    const data = JSON.stringify({ clientAddress: "127.0.0.0", acceptorCode: diposit, depositNumber: pass })

    const BankNationalcodeHandler = async () => {
        if (diposit != "" && pass != '') {
            // const client_Credentials = btoa("123:HB59BMAVFAZI0KFPXMOL")
            // console.log(client_Credentials)
            const Auth = await fetch(`https://sbxapi.izbank.ir/private/general-services/v1/getNationalCodeByDepositNumber`, {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Basic sDKDMNqkfiooksJSHDMNmBV',
                    // Authorization: `Bearer ${ localStorage.getItem('token') }`
                }
            })

            const response = await Auth.json()
            console.log(response)
            // const Send = await fetch(`https://sbxapi.izbank.ir/public/v1/getNationalCodeByDepositNumber/client/${'HB59BMAVFAZI0KFPXMOL'}`, {
            //   method: 'POST',
            //   body: data,
            //   headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     'Content-type': 'application/json',
            //     'bankId': 69,
            //     'channel': 'WEB',
            //     'Access-Control-Allow-Headers': 'Content-Type',
            //     'Access-Control-Allow-Methods': 'POST',
            //     'Access-Control-Allow-Headers': 'X-Requested-With'
            //     // Authorization: `Bearer ${ localStorage.getItem('token') }`
            //   }
            // }).catch(err => {
            //   console.log(err)
            // })
        }
    }
    const labelChangeHandler = (prop) => {
        setPass(prop.target.value)
    }

    const labelDepositHandler = (prop) => {
        setDeposit(prop.target.value)
    }

    return (
        <Box sx={{ width: "75%", margin: "0 auto" }}>
            <Card sx={{ backgroundColor: "#FAFAFA" }}>
                <Button variant='contained' sx={{ display: "inline", m: 5, mb: 0 }} onClick={prop.onBack}>بازگشت</Button>
                <Box sx={{ display: "flex" }}>
                    <Typography sx={{ margin: "0 auto", border: "1px solid #ddd", borderRadius: "15px", fontSize: "1.1rem", p: 10, pt: 5, pb: 5 }}>استعلام کد ملی با شماره حساب</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "auto", minHeight: "200px", textAlign: "center" }}>
                    <Box sx={{ mb: 10, mt: 10 }}>
                        <TextField
                            id="outlined-required"
                            label="کد پذیرنده"
                            sx={{ direction: "ltr", width: "35%", minWidth: "250px" }}
                            onChange={labelDepositHandler}
                        // InputProps={{
                        //   startAdornment: <InputAdornment position="start"> +98 </InputAdornment>
                        // }}
                        />
                    </Box>
                    <Box sx={{ mb: 10 }}>
                        <TextField
                            id="outlined-required"
                            label="شماره حساب"
                            sx={{ direction: "ltr", width: "35%", minWidth: "250px" }}
                            onChange={labelChangeHandler}
                        // InputProps={{
                        //   startAdornment: <InputAdornment position="start"> +98 </InputAdornment>
                        // }}
                        />
                    </Box>
                    <Button variant='contained' onClick={BankNationalcodeHandler} sx={{ width: "15%", minWidth: "150px", margin: "0 auto", mb: 5, height: "60px" }}>استعلام</Button>
                </Box>
            </Card >
        </Box >
    )
}

export default GetNationalCodeByDepositNumber