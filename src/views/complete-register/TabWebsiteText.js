// ** React Imports
import { useState, useEffect, useRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Languages from 'src/language/Languages'
import themeConfig from 'src/configs/themeConfig'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import SnackbarPopUp from '../Snackbar/SnackbarPopUp'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import { positions } from '@mui/system'

const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    right: 0,
    textAlign: "center"
  },
  "& .MuiInputLabel-shrink": {
    margin: "0 auto",
    position: "absolute",
    right: "0",
    left: "0",
    top: "-3px",
    width: "150px", // Need to give it a width so the positioning will work
    background: "white", // Add a white background as below we remove the legend that had the background so text is not meshing with the border
    display: "none" //if you want to hide it completly
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& legend ": {
      display: "none"
    }
  }
});
const TrophyImg = styled('img')({
  right: '10%',
  bottom: 50, width: "80%",
  height: '80%',
  position: 'absolute'
})

const TabWebsiteText = () => {
  // ** Hooks
  const lan = Languages()
  const [saleCondition, setSaleCondition] = useState()
  const [isRegistered, setIsRegistered] = useState(false)
  const [openningDescription, setOpenningDescription] = useState()
  const inputRef = useRef()
  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const [message, setMessage] = useState("")

  const data = JSON.stringify({ SaleCondition: saleCondition, OpenningDescription: openningDescription })

  useEffect(async () => {
    SetUpHandler()
  }, [])

  const SetUpHandler = async () => {
    const token = localStorage.getItem('token')
    if (token != null && token != undefined) {
      const Send = await fetch(`${themeConfig.servicesAddress}saleinformation/get`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'X-Requested-With',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).catch(err => {
        // console.log(err)
      })
      if (Send != undefined) {
        if (Send.status == 200) {
          const Response = await Send.json()
          // console.log(Response.data)
          setIsRegistered(true)
          setParams(Response.data)
        }
      }
    }
  }
  const SaveInfoHandler = async () => {
    const token = localStorage.getItem('token')
    const statustext = ""
    if (isRegistered == true) {
      statustext = "Modify"
    } else {
      statustext = "New"
    }
    if (saleCondition && openningDescription) {
      if (token != null && token != undefined) {
        const Send = await fetch(`${themeConfig.servicesAddress}saleinformation/${statustext}`, {
          method: 'POST',
          body: data,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'X-Requested-With',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }).catch(err => {
          console.log(err)
        })
        if (Send != undefined) {
          if (Send.status == 200) {
            SetUpHandler()
            setMessage("اطلاعات با موفقیت ثبت گردید")
            handleClickPopUp('success')
          } else {
            setMessage("عملیات ناموفق")
            handleClickPopUp('error')
          }
        } else {
          setMessage("عملیات ناموفق")
          handleClickPopUp('error')
        }
      }
    } else {
      setMessage("لطفا تمامی فیلد های ضروری را پر کنید")
      handleClickPopUp('error')
    }
  }
  const setParams = (obj) => {
    setSaleCondition(obj.saleCondition)
    setOpenningDescription(obj.openningDescription)
  }

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
  const OpenningDescriptionHandler = (event) => {
    setOpenningDescription(event.target.value)
  }
  const SaleConditionHandler = (event) => {
    setSaleCondition(event.target.value)
  }

  const refreshPage = () => {
    setSaleCondition("")
    setOpenningDescription("")
  }
  return (
    <CardContent>
      <SnackbarPopUp ref={childRef} severity={'success'} message={message} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={message} />
      <Grid container sm={12} sx={{ marginTop: 3 }} spacing={8}>
        <Grid sx={{ minHeight: "200px" }} item sm={6}>
          <TextField fullWidth label="توضیحات سایت" multiline value={openningDescription} rows={6} onChange={OpenningDescriptionHandler} required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid sx={{ minHeight: "200px" }} item sm={6}>
          <TextField fullWidth label="شرایط فروش" multiline value={saleCondition} rows={6} onChange={SaleConditionHandler} required InputLabelProps={{ shrink: true, }} />
        </Grid>
        <Grid item sm={12}>
          <Button variant='contained' onClick={SaveInfoHandler} sx={{ marginLeft: 3.5 }}>
            {lan.SaveChanges}
          </Button>
          <Button type='reset' onClick={refreshPage} variant='outlined' color='secondary'>
            {lan.Reset}
          </Button>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabWebsiteText
