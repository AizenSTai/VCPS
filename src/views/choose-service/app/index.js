// ** React Imports
import { useState, useRef } from 'react'
import * as React from 'react'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import Languages from 'src/language/Languages'
import 'react-datepicker/dist/react-datepicker.css'
import { Card, Grid } from '@mui/material'

// import CloseIcon from '@mui/icons-material/Close'

// ** Next Imports

import Link from 'next/link'
import { useRouter } from 'next/router'
import jwt from 'jwt-decode'

// ** MUI Components

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import { left, right } from '@popperjs/core'
import FifthPage from 'src/views/choose-service/app/FifthPage'

// ** Styled Components

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const app = (prop) => {
  const lan = Languages()
  // ** State

  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  // ** Hook

  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const router = useRouter();
  const snackHandleClick = () => {
    childRef.current.handleClick()
  }

  const snackHandleClick1 = () => {
    childRef1.current.handleClick()
  }
  const ClickEv = (event) => {
    // localStorage.setItem("applist", event)
    // router.push('/choose-service')
    prop.onSetvalue('app', event)

    prop.onBack()


  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 100 + 'px', zIndex: "1" }}>
      <Box>
        <Card sx={{ zIndex: 1 }}>
          <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
            <Box sx={{ mb: 6 }}>
              <Typography sx={{ direction: 'rtl', fontWeight: '600', fontSize: '20px' }} variant='body2'>
                لطفا یک سرویس را انتخاب کنید:
              </Typography>
            </Box>
            <SnackbarPopUp ref={childRef} severity={'success'} message={'ورود موفق'} />
            <SnackbarPopUp ref={childRef1} severity={'error'} message={'ورود ناموفق'} />
            <Box>
              <Card >
                <Grid sm={12}>
                  <FifthPage onBack={prop.onBack} onClick={ClickEv} />
                </Grid>
              </Card>
            </Box>
          </CardContent>
        </Card>
        <FooterIllustrationsV1 />
      </Box>
    </div>
  )
}

export default app
