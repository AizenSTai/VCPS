import { useState, Fragment, useRef } from 'react'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import Languages from 'src/language/Languages'
import { Input } from '@mui/material'
// ** Next Imports

import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import CircularProgress from '@mui/material/CircularProgress'
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
import { Origin } from 'mdi-material-ui'

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
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const RegisterPage = () => {
  // ** States

  const lan = Languages()

  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })
  const [pass, setPass] = useState('')
  const [user, setUser] = useState('')
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const data = JSON.stringify({ Email: user, Password: pass })

  // ** Hook

  const TrophyImg = styled('img')({
    height: 150,
    width: 150
  })

  const theme = useTheme()

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

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
    setPass(event.target.value)
  }

  const handleClickShowPassword = event => {
    setValues({ ...values, showPassword: !values.showPassword })
    setPass(event.target.value)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const usernameOnchangehandler = event => {
    setUser(event.target.value)
  }

  const submitHandler = async () => {
    // console.log(pass + user)
    setIsLoading(true)

    if (pass.length > 4 && user.length > 4) {
      if (user.includes("@")) {
        console.log(data)
        const Send = await fetch(`${themeConfig.servicesAddress}User/NewEmail`, {
          method: 'POST',
          body: data,
          headers: {
            'Access-Control-Allow-Origin': '*'
            // 'Content-type': 'application/json',
            // 'Access-Control-Allow-Headers': 'Content-Type',
            // 'Access-Control-Allow-Methods': 'POST',
            // 'Access-Control-Allow-Headers': 'X-Requested-With',
            // Authorization: `Bearer ${tkn}`
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
            setIsLoading(false)
            setMessage(Send.statusText)
            handleClickPopUp('error')
          }
        } else {
          setIsLoading(false)
          setMessage("خطای ارتباط با پایگاه داده")
          handleClickPopUp('error')
        }
      } else {
        setIsLoading(false)
        setMessage("ایمیل وارده صحیح نیست")
        handleClickPopUp('error')
      }
    } else {
      setIsLoading(false)
      setMessage("تعداد کاراکتر های وارده کافی نمیباشند")
      handleClickPopUp('error')
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 100 + 'px' }}>
      <Box className='content-center'>
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
            </Box>
            {/* <Input type='email' /> */}
            <SnackbarPopUp ref={childRef} severity={'success'} message={message} />
            <SnackbarPopUp ref={childRef1} severity={'error'} message={message} />
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-register-password'>ایمیل</InputLabel>
                <OutlinedInput
                  error={(!user.includes("@") && user.length > 0)}
                  autoFocus
                  fullWidth
                  id='username'
                  onChange={usernameOnchangehandler}
                  label='ایمیل'
                  type="email"
                  sx={{ marginBottom: 4 }}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-register-password'>{lan.Password}</InputLabel>
                <OutlinedInput
                  label='رمز عبور'
                  value={values.password}
                  id='auth-register-password'
                  onChange={handleChange('password')}
                  type='password'
                // endAdornment={
                //   <InputAdornment position='end'>
                //     <IconButton
                //       onChange={handleChange('password')}
                //       edge='end'
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //       aria-label='toggle password visibility'
                //     >
                //       {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                //     </IconButton>
                //   </InputAdornment>
                // }
                />
              </FormControl>
              {/* <FormControlLabel
                control={<Checkbox />}
                label={
                  <Fragment>
                  <span>I agree to </span>
                    <Link href='/' passHref>
                    <LinkStyled onClick={e => e.preventDefault()}>privacy policy & terms</LinkStyled>
                    </Link>
                    </Fragment>
                  }
                /> */}
              <Button
                fullWidth
                size='large'
                type='submit'
                onClick={submitHandler}
                variant='contained'
                sx={{ marginBottom: 7, mt: 7 }}
              >
                {!isLoading ? 'Sign up' : <CircularProgress color='info' size={60} />}
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography variant='body2'>
                  <Link passHref href='/pages/login'>
                    <LinkStyled>{lan.Signin}</LinkStyled>
                  </Link>
                </Typography>
                <Typography variant='body2' sx={{ marginLeft: 2 }}>
                  {lan.AlreadyHaveAccount}
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
    </div>
  )
}
RegisterPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
