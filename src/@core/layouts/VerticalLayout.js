// ** React Imports
import { useState, useEffect } from 'react'
import jwt from 'jwt-decode'
import { useRouter } from 'next/router'

// ** MUI Imports
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Components
import AppBar from './components/vertical/appBar'
import Navigation from './components/vertical/navigation'
import Footer from './components/shared-components/footer'
import ScrollToTop from 'src/@core/components/scroll-to-top'
import userProfile from 'src/Userprofile/userProfile'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: "row"
})

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transform: 'translate(-260px,0)',

  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const VerticalLayout = props => {
  // ** Props
  const { settings, children, scrollToTop } = props

  // ** Vars
  const { contentWidth } = settings
  const navWidth = themeConfig.navigationSize

  // ** States
  const [navVisible, setNavVisible] = useState(false)
  const [show, setShow] = useState(false)
  const router = useRouter()

  useEffect(async () => {
    const validtoken = localStorage.getItem('token')
    if (validtoken != null && validtoken != undefined) {
      if (validtoken.length > 10) {
        const Decoded = jwt(validtoken)
        const date = Math.floor(new Date().getTime() / 1000.0)
        if (Decoded.exp <= date) {
          router.push('/pages/login')
        } else {
          const data = await userProfile()
          setShow(true)

        }
      } else {
        router.push('/pages/login')
      }
    } else {
      router.push('/pages/login')
    }
  }, [])

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <>
      {show && (
        <VerticalLayoutWrapper sx={{ direction: 'ltr' }} className='layout-wrapper'>
          <Navigation
            navWidth={navWidth}
            navVisible={navVisible}
            setNavVisible={setNavVisible}
            toggleNavVisibility={toggleNavVisibility}
            {...props}
          />
          <MainContentWrapper className='layout-content-wrapper'>
            <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />

            <ContentWrapper
              className='layout-page-content'
              sx={{
                ...(contentWidth === 'boxed' && {
                  mx: 'auto',
                  '@media (min-width:1440px)': { maxWidth: 1440 },
                  '@media (min-width:1200px)': { maxWidth: '100%' },
                  '@media (max-width:1199px)': {
                    transform: 'translate(0,0)'
                  },
                  direction: 'rtl'
                })
              }}
            >
              {children}
            </ContentWrapper>
            <Footer {...props} />
            {/* <DatePickerWrapper sx={{ zIndex: 11 }}>
              <Box id='react-datepicker-portal'></Box>
            </DatePickerWrapper> */}
          </MainContentWrapper>
        </VerticalLayoutWrapper>

      )}

      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  )
}

export default VerticalLayout
