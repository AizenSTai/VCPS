// ** React Imports
import { useState, useRef } from 'react'
import * as React from 'react'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import Languages from 'src/language/Languages'
import CircularProgress from '@mui/material/CircularProgress'
// import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'
import { useRouter } from 'next/router'
import jwt from 'jwt-decode'
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

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

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
const TrophyImg = styled('img')({
  height: 150,
  width: 150
})

const LoginPage = () => {
  const lan = Languages()

  // ** State

  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  // ** Hook
  const PasswordRef = useRef(null)
  const UsernameRef = useRef(null)
  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const [message, setMessage] = useState("")
  const theme = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [PopShow, setPopShow] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const data = JSON.stringify({ username: user, password: pass })
  const data1 = JSON.stringify({ userId: 1 })

  const UsernameFocusHandler = (e) => {

    if (e.key === "Enter") {
      PasswordRef.current.focus()
      console.log('true');
    }
  }
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
    setPass(event.target.value)

    // console.log(pass + '  ' + event.target.value)
  }
  const snackHandleClick = () => {
    childRef.current.handleClick()
  }

  const snackHandleClick1 = () => {
    childRef1.current.handleClick()
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  function userOnchange(event) {
    setUser(event.target.value)
  }

  const handleClickPopUp = prop => {
    if (prop === 'success') {
      snackHandleClick()
    } else {
      snackHandleClick1()
    }
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const loginOnDoubleClick = () => {
    router.push('/')
  }
  const loginOnClick = async event => {
    // event.preventDefault()
    setIsLoading(true)
    if (user.length > 4 && pass.length > 4) {
      // if (user.includes("@")) {
      if (true) {
        const Send = await fetch(`${themeConfig.servicesAddress}authenticate/login`, {
          method: 'POST',
          body: data,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'X-Requested-With'
            // Authorization: `Bearer ${ localStorage.getItem('token') }`
          }
        }).catch(err => {
          console.log(err)
        })
        if (Send != undefined) {
          const Response = await Send.json()

          if (Send.status === 200) {
            if (localStorage.getItem('token')) {
              localStorage.removeItem('token')
              localStorage.setItem('token', Response.data.token)
            } else {
              localStorage.setItem('token', Response.data.token)
            }
            setIsLoading(false)
            setMessage("ورود موفق")
            handleClickPopUp('success')
            setTimeout(() => {
              router.push('/')
            }, 1500)
          } else {
            setMessage(Send.statusText)
            handleClickPopUp('error')
            setIsLoading(false)
          }
          // console.log(Send)
        } else {
          setIsLoading(false)
          setMessage("خطای ارتباط با پایگاه داده")
          handleClickPopUp('error')
        }

        // console.log(Send.status)


        // console.log(Response.data.token)

        // console.log(Response.)

      } else {
        setMessage("ایمیل وارده صحیح نیست")
        handleClickPopUp('error')
        setIsLoading(false)
      }
    } else {
      setMessage("تعداد کاراکتر های وارده کافی نمیباشند")
      handleClickPopUp('error')
      setIsLoading(false)
    }
  }

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 100 + 'px' }}>
      <Box>
        <Card sx={{ zIndex: 1 }}>
          <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)}!important` }}>
            <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

              {/* <Typography
                variant='h6'
                sx={{
                  mr: 3,
                  mt: 6,
                  lineHeight: 1,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '1.5rem !important'
                }}
              >
                {themeConfig.templateName}
              </Typography> */}
              <TrophyImg src='/images/misc/favicon.jpg' />
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', marginBottom: 6 }}>
                <p style={{ textAlign: "center" }}>
                  به
                </p>
                <p style={{ textAlign: "center", marginRight: "20px" }}>
                  درگاه جامع خدمات روستاییان
                </p>
                <p style={{ textAlign: "center" }}>
                  خوش آمدید
                  <sub> </sub>
                  <sub style={{ fontSize: "14px" }}>
                    نسخه آزمایشی
                  </sub>
                </p>
              </Typography>
              <Typography sx={{ direction: 'rtl', fontWeight: '600', fontSize: '14px', marginRight: 1 }} variant='body2'>
                {lan.PleaseSignin}
              </Typography>
            </Box>
            <SnackbarPopUp ref={childRef} severity={'success'} message={message} />
            <SnackbarPopUp ref={childRef1} severity={'error'} message={message} />
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-register-password'>{lan.Username}</InputLabel>
                <OutlinedInput
                  error={(user.length < 4)}
                  ref={UsernameRef}
                  autoFocus
                  // onKeyDown={UsernameFocusHandler}
                  fullWidth
                  id='username'
                  label={lan.Username}
                  sx={{ marginBottom: 4 }}
                  type="email"
                  onChange={userOnchange}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel
                  ref={PasswordRef}
                  htmlFor='auth-login-password'>{lan.Password}</InputLabel>
                <OutlinedInput
                  onKeyDown={(e) => { (e.key == "Enter") ? loginOnClick() : null }}
                  label='Password'
                  value={values.password}
                  id='auth-login-password'
                  onChange={handleChange('password')}
                  // type={values.showPassword ? 'text' : 'password'}
                  type='password'
                // endAdornment={
                //   <InputAdornment position='end'>
                //     <IconButton
                //       edge='end'
                //       onClick={handleClickShowPassword}
                //       onChange={handleChange('password')}
                //       onMouseDown={handleMouseDownPassword}
                //       aria-label='toggle password visibility'
                //     >
                //       {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                //     </IconButton>
                //   </InputAdornment>
                // }
                />
              </FormControl>
              <Box
                sx={{
                  mb: 4,
                  mt: 4,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'right'
                }}
              >
                <Link passHref href='/'>
                  <LinkStyled onClick={e => e.preventDefault()}>{lan.ForgotPassword}</LinkStyled>
                </Link>
              </Box>
              <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} onClick={loginOnClick}>
                {!isLoading ? lan.Login : <CircularProgress color='info' size={60} />}
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Typography variant='body2'>
                  <Link passHref href='/pages/register'>
                    <LinkStyled style={{ fontWeight: 500, fontSize: '16px' }}>{lan.CreateAnAccount}</LinkStyled>
                  </Link>
                </Typography>
              </Box>
              <Divider sx={{ my: 5 }}>or</Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Facebook sx={{ color: '#497ce2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Twitter sx={{ color: '#1da1f2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Github
                      sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300]) }}
                    />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={e => e.preventDefault()}>
                    <Google sx={{ color: '#db4437' }} />
                  </IconButton>
                </Link>
              </Box>
            </form>
            {/* {isLoading && <Box sx={{ m: 10, display: 'flex', justifyContent: "center" }}>
              <CircularProgress size={60} />
            </Box>} */}
          </CardContent>
        </Card>
        <FooterIllustrationsV1 />
      </Box>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
