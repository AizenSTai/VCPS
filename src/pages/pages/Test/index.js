import { useState, useRef, forwardRef } from 'react'
import * as React from 'react'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'

// import CloseIcon from '@mui/icons-material/Close'

import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'
import jwt from 'jwt-decode'

// ** MUI Components

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import DatePicker from 'react-datepicker'
import CardActions from '@mui/material/CardActions'

import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
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

//////////////////////////////////////////////////////////////

const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const TestPage = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const handleMouseDownConfirmPassword = event => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid xs={12} item>
          <Card style={{ width: '600px', display: 'block', margin: 0 + ' auto', marginTop: '10vh', direction: 'rtl' }}>
            <CardHeader title='Multi Column with Form Separator' titleTypographyProps={{ variant: 'h6' }} />
            <Divider sx={{ margin: 0 }} />
            <form onSubmit={e => e.preventDefault()}>
              <CardContent>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      1. Account Details
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Username' placeholder='carterLeonard' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor='form-layouts-separator-password'> رمز عبور</InputLabel>
                      <OutlinedInput
                        label='Password'
                        value={values.password}
                        id='form-layouts-separator-password'
                        onChange={handlePasswordChange('password')}
                        type={values.showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              aria-label='toggle password visibility'
                            >
                              {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor='form-layouts-separator-password-2'>Confirm Password</InputLabel>
                      <OutlinedInput
                        value={values.password2}
                        label='Confirm Password'
                        id='form-layouts-separator-password-2'
                        onChange={handleConfirmChange('password2')}
                        type={values.showPassword2 ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              aria-label='toggle password visibility'
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownConfirmPassword}
                            >
                              {values.showPassword2 ? <EyeOutline /> : <EyeOffOutline />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  {/* <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid> */}
                  <Grid item xs={12}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>
                      2. Personal Info
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='First Name' placeholder='Leonard' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Last Name' placeholder='Carter' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>Country</InputLabel>
                      <Select
                        label='Country'
                        defaultValue=''
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                      >
                        <MenuItem value='UK'>UK</MenuItem>
                        <MenuItem value='USA'>USA</MenuItem>
                        <MenuItem value='Australia'>Australia</MenuItem>
                        <MenuItem value='Germany'>Germany</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                      <Select
                        multiple
                        value={language}
                        onChange={handleSelectChange}
                        id='form-layouts-separator-multiple-select'
                        labelId='form-layouts-separator-multiple-select-label'
                        input={<OutlinedInput label='Language' id='select-multiple-language' />}
                      >
                        <MenuItem value='English'>English</MenuItem>
                        <MenuItem value='French'>French</MenuItem>
                        <MenuItem value='Spanish'>Spanish</MenuItem>
                        <MenuItem value='Portuguese'>Portuguese</MenuItem>
                        <MenuItem value='Italian'>Italian</MenuItem>
                        <MenuItem value='German'>German</MenuItem>
                        <MenuItem value='Arabic'>Arabic</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DatePicker
                      selected={date}
                      showYearDropdown
                      showMonthDropdown
                      placeholderText='MM-DD-YYYY'
                      customInput={<CustomInput />}
                      id='form-layouts-separator-date'
                      onChange={date => setDate(date)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider sx={{ margin: 0 }} />
              <CardActions>
                <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                  Submit
                </Button>
                <Button size='large' color='secondary' variant='outlined'>
                  Cancel
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}
TestPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default TestPage
