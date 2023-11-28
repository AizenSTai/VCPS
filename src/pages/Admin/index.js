import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import Languages from 'src/language/Languages'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import 'react-datepicker/dist/react-datepicker.css'
import TabActiveWebsite from 'src/views/Admin/TabActiveWebsite'
import TabActiveWebsiteCondition from 'src/views/Admin/TabActiveWebsiteCondition'
import TabActiveWebsiteImage from 'src/views/Admin/TabActiveWebsiteImage'
import TabWebsiteImageSettings from 'src/views/Admin/TabWebsiteImageSettings'

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
  const [value, setValue] = useState('UsersList')

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
            value='UsersList'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>لیست کاربران</TabName>
              </Box>
            }
          />
          <Tab
            value='UsersWebsiteTextList'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>لیست شرایط</TabName>
              </Box>
            }
          />
          <Tab
            value='UsersWebsiteImageList'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>لیست عکس ها</TabName>
              </Box>
            }
          />
          <Tab
            value='UsersWebsiteImageSettings'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName sx={{ fontSize: '20px', fontWeight: '600' }}>تنظیمات عکس ها</TabName>
              </Box>
            }
          />
        </TabList>
        <TabPanel sx={{ p: 0 }} value='UsersList'>
          <TabActiveWebsite />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='UsersWebsiteTextList'>
          <TabActiveWebsiteCondition />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='UsersWebsiteImageList'>
          <TabActiveWebsiteImage />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='UsersWebsiteImageSettings'>
          <TabWebsiteImageSettings />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings
