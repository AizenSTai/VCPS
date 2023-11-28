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

const DepositRates = (prop) => {

    const [pass, setPass] = useState("9gshj-gfh-wej-lkjl")
    const data = JSON.stringify({ clientAddress: "127.0.0.0", acceptorCode: pass, length: 3, offset: 1 })

    const BankNationalcodeHandler = async () => {
        if (true) {
            // const client_Credentials = btoa("123:HB59BMAVFAZI0KFPXMOL")
            // console.log(client_Credentials)
            const Auth = await fetch(`https://sbxapi.izbank.ir/private/general-services/v1/getDepositRates`, {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Basic sDKDMNqkfiooksJSHDMNmBV'
                    // Authorization: `Bearer ${ localStorage.getItem('token') }`
                }
            })
            const response = await Auth.json()
            console.log(response)
        }
    }

    const labelAcceptorHandler = (prop) => {
        setPass(prop.target.value)
    }

    return (
        <Box sx={{ width: "75%", margin: "0 auto" }}>
            <Card sx={{ backgroundColor: "#FAFAFA" }}>
                <Button variant='contained' sx={{ display: "inline", m: 5, mb: 0 }} onClick={prop.onBack}>بازگشت</Button>
                <Box sx={{ display: "flex" }}>
                    <Typography sx={{ margin: "0 auto", border: "1px solid #ddd", borderRadius: "15px", fontSize: "1.1rem", p: 10, pt: 5, pb: 5 }}>نرخ سود سپرده</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "auto", minHeight: "200px", textAlign: "center" }}>
                    <Box sx={{ mb: 10, mt: 10 }}>
                        <TextField
                            id="outlined-required"
                            label="کد پذیرنده"
                            sx={{ direction: "ltr", width: "35%", minWidth: "250px" }}
                            onChange={labelAcceptorHandler}
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

export default DepositRates