import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import Languages from 'src/language/Languages'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

import TabAccount from 'src/views/complete-register/TabAccount'
import TabWebsiteText from 'src/views/complete-register/TabWebsiteText'
import TabWebsiteImage from 'src/views/complete-register/TabWebsiteImage'

import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const lan = Languages()
  const [value, setValue] = useState('initializeWebsite')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='initializeWebsite'
            label={
              <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <AccountOutline />
                <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>اطلاعات پایه</TabName>
              </Box>
            }
          />
          <Tab
            value='websiteText'
            label={
              <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <AccountOutline />
                <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>اطلاعات متنی سایت</TabName>
              </Box>
            }
          />
          <Tab
            value='websiteImage'
            label={
              <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <AccountOutline />
                <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>عکس های سایت</TabName>
              </Box>
            }
          />
        </TabList>
        <TabPanel sx={{ p: 0 }} value='initializeWebsite'>
          <TabAccount />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='websiteText'>
          <TabWebsiteText />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='websiteImage'>
          <TabWebsiteImage />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings
