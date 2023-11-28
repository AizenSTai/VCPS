// ** React Imports
import { useState, Fragment, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import CogOutline from 'mdi-material-ui/CogOutline'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import { Cellphone } from 'mdi-material-ui'
import Languages from 'src/language/Languages'
import userProfile from 'src/Userprofile/userProfile'
import themeConfig from 'src/configs/themeConfig'
// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const UserDropdown = props => {
  // ** States
  const [anchorEl, setAnchorEl] = useState(null)
  const [info, setInfo] = useState({})
  // ** Hooks
  const router = useRouter()
  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }
  const lan = Languages()
  useEffect(async () => {
    // const token = localStorage.getItem('token')
    // if (token != null && token != undefined) {
    //   const Send = await fetch(`${themeConfig.servicesAddress}user/Profile`, {
    //     method: 'POST',
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Content-type': 'application/json',
    //       'Access-Control-Allow-Headers': 'Content-Type',
    //       'Access-Control-Allow-Methods': 'POST',
    //       'Access-Control-Allow-Headers': 'X-Requested-With',
    //       Authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    //   }).catch(err => {
    //     console.log(err)
    //   })
    //   if (Send != undefined) {
    //     const Response = await Send.json()
    //     console.log(...Response.data);
    //     setInfo(...Response.data)
    //   }
    // }
    const data = await userProfile()
    setInfo(data)
  }, [])

  const handleDropdownClose = url => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }
  const handleDropdownLogout = url => {
    if (url) {
      router.push(url)
      localStorage.removeItem('token')
    }
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    direction: 'rtl',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.5rem',
      color: 'text.secondary'
    }
  }

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ mr: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar
          alt='John Doe'
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src='/images/avatars/1.png'
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: "auto", height: "auto", marginTop: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ direction: "rtl", pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar alt='John Doe' src='/images/avatars/1.png' sx={{ width: '2.5rem', height: '2.5rem' }} />
            </Badge>
            <Box sx={{ display: 'flex', marginRight: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 500 }}>{info.Rolenamefa}</Typography>
              <Typography sx={{ fontWeight: 600 }}>{info.Namefa}</Typography>
              <Typography variant='body2' sx={{ fontSize: '0.9rem', color: 'text.disabled' }}>
                {info.UserStatus}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 0, mb: 1 }} />
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <AccountOutline sx={{ marginLeft: 2 }} />
            <h1 style={{ direction: 'rtl', fontSize: 14 + 'px' }}>
              {lan.Username} : {info.Username}
            </h1>
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <EmailOutline sx={{ marginLeft: 2 }} />
            <h1 style={{ direction: 'rtl', fontSize: 14 + 'px' }}>
              {lan.Email} : {info.Email}
            </h1>
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <EmailOutline sx={{ marginLeft: 2 }} />
            <h1 style={{ direction: 'rtl', fontSize: 14 + 'px' }}>
              {lan.NationalCode} : IR {info.NationalCode}
            </h1>
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <EmailOutline sx={{ marginLeft: 2 }} />
            <h1 style={{ direction: 'rtl', fontSize: 14 + 'px' }}>
              {lan.Mobile} : IR {info.Mobile}
            </h1>
          </Box>
        </MenuItem>
        <Divider />
        {/* <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <CogOutline sx={{ marginRight: 2 }} />
            Settings
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <CurrencyUsd sx={{ marginRight: 2 }} />
            Pricing
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <HelpCircleOutline sx={{ marginRight: 2 }} />
            FAQ
          </Box>
        </MenuItem>
        <Divider />*/}
        <MenuItem sx={{ py: 2, direction: 'rtl', fontSize: "1.2rem", color: "darkred" }} onClick={() => handleDropdownLogout('/pages/login')}>
          <LogoutVariant sx={{ marginLeft: 2, color: 'darkred' }} />
          {lan.LogOut}
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default UserDropdown
