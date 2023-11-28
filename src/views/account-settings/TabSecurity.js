// ** React Imports
import { useState, useRef } from 'react'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Languages from 'src/language/Languages'
// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import themeConfig from 'src/configs/themeConfig'

const TabSecurity = () => {
  // ** States
  const lan = Languages()
  const [values, setValues] = useState({
    newPassword: '',
    currentPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showCurrentPassword: false,
    showConfirmNewPassword: false
  })
  const [currentpass, setCurrentpass] = useState('')
  const [newpassA, setnewpassA] = useState('')
  const [newpassB, setnewpassB] = useState('')
  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const childRef2 = useRef(null)
  const childRef3 = useRef(null)
  const data = JSON.stringify({ oldPassword: currentpass, newPassword: newpassA })
  // Handle Current Password
  const handleCurrentPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
    setCurrentpass(event.target.value)
  }
  const onPassChangehandler = async prop => {
    const tkn = localStorage.getItem('token')
    if (currentpass.trim() != '' && newpassB.trim() != '' && newpassA.trim() != '') {

      if (newpassB.trim() == newpassA.trim()) {
        if (tkn !== null && tkn !== undefined) {
          const Send = await fetch(`${themeConfig.servicesAddress}user/ChangePassword`, {
            method: 'POST',
            body: data,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-type': 'application/json',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'X-Requested-With',
              Authorization: `Bearer ${tkn}`
            }
          }).catch(err => {
            console.log(err)
          })
          if (Send.status === 200) {
            if (localStorage.getItem('token')) {
              localStorage.removeItem('token')
              localStorage.setItem('token', Response.data.token)
            } else {
              localStorage.setItem('token', Response.data.token)
            }
            handleClickPopUp('success')
            setTimeout(() => {
              router.push('/')
            }, 1500)
          } else {
            handleClickPopUp('error')
          }
        } else {
          handleClickPopUp('error')
        }
      } else {
        handleClickPopUp('passNotsame')
      }
    } else {

      handleClickPopUp('fillTheblank')
    }
  }
  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
    // console.log(values)
  }

  const handleMouseDownCurrentPassword = event => {
    event.preventDefault()
  }
  const snackHandleClick = () => {
    childRef.current.handleClick()
  }
  const snackHandleClick1 = () => {
    childRef1.current.handleClick()
  }
  const snackHandleClick2 = () => {
    childRef2.current.handleClick()
  }
  const snackHandleClick3 = () => {
    childRef3.current.handleClick()
  }
  const handleClickPopUp = prop => {
    if (prop == 'success') {
      snackHandleClick()
    } else if (prop == 'error') {
      snackHandleClick1()
    } else if (prop == 'fillTheblank') {
      snackHandleClick2()
    } else if (prop == 'passNotsame') {
      snackHandleClick3()
    }
  }
  // Handle New Password
  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
    setnewpassA(event.target.value)
  }

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  const handleMouseDownNewPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
    setnewpassB(event.target.value)
  }

  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }

  const handleMouseDownConfirmNewPassword = event => {
    event.preventDefault()
  }

  return (
    <form>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={5} sx={{ direction: 'ltr' }}>
              <Grid item xs={12} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth required>
                  <InputLabel htmlFor='account-settings-current-password' required >
                    {lan.CurrentPassword}
                  </InputLabel>
                  <OutlinedInput
                    label='Current Password'
                    value={values.currentPassword}
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    onChange={handleCurrentPasswordChange('currentPassword')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          position='end'
                          aria-label='toggle password visibility'
                          onClick={handleClickShowCurrentPassword}
                          onChange={handleCurrentPasswordChange('currentPassword')}
                          onMouseDown={handleMouseDownCurrentPassword}
                        >
                          {values.showCurrentPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ marginTop: 6 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-new-password' required>
                    {lan.NewPassword}
                  </InputLabel>
                  <OutlinedInput
                    label='New Password'
                    value={values.newPassword}
                    id='account-settings-new-password'
                    onChange={handleNewPasswordChange('newPassword')}
                    type={values.showNewPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onClick={handleClickShowNewPassword}
                          aria-label='toggle password visibility'
                          onMouseDown={handleMouseDownNewPassword}
                          onChange={handleNewPasswordChange('newPassword')}
                        >
                          {values.showNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-confirm-new-password' required>
                    {lan.ConfirmNewPassword}
                  </InputLabel>
                  <OutlinedInput
                    label='Confirm New Password'
                    value={values.confirmNewPassword}
                    id='account-settings-confirm-new-password'
                    type={values.showConfirmNewPassword ? 'text' : 'password'}
                    onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          aria-label='toggle password visibility'
                          onClick={handleClickShowConfirmNewPassword}
                          onMouseDown={handleMouseDownConfirmNewPassword}
                          onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                        >
                          {values.showConfirmNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
            <img width={183} alt='avatar' height={256} src='/images/pages/pose-m-1.png' />
          </Grid>
        </Grid>
      </CardContent>
      <Divider sx={{ margin: 0 }} />
      <CardContent>
        <SnackbarPopUp ref={childRef} severity={'success'} message={'عملیات موفق'} />
        <SnackbarPopUp ref={childRef1} severity={'error'} message={'عملیات ناموفق'} />
        <SnackbarPopUp ref={childRef2} severity={'error'} message={'لطفا تمامی فیلد ها را پر کنید'} />
        <SnackbarPopUp ref={childRef3} severity={'error'} message={'رمز های عبور یکسان نیستند'} />
        <Box sx={{ mt: 1 }}>
          <Button variant='contained' onClick={onPassChangehandler} sx={{ marginLeft: 3.5 }}>
            {lan.SaveChanges}
          </Button>
          <Button
            type='reset'
            variant='outlined'
            color='secondary'
            onClick={() => setValues({ ...values, currentPassword: '', newPassword: '', confirmNewPassword: '' })}
          >
            {lan.Reset}
          </Button>
        </Box>
      </CardContent>
    </form>
  )
}

export default TabSecurity
