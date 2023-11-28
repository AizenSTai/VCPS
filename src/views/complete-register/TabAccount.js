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

const TabAccount = () => {
  const lan = Languages()
  const [guildNO, setGuildNO] = useState(null)
  const [nameFa, setNameFa] = useState(null)
  const [nameEn, setNameEn] = useState(null)
  const [additionalData, setAdditionalData] = useState(null)
  const [guildCode, setGuildCode] = useState(null)
  const [guildId, setGuildId] = useState(null)
  const [managerNameFa, setManagerNameFa] = useState(null)
  const [managerNationalCode, setManagerNationalCode] = useState(null)
  const [mobile, setMobile] = useState(null)
  const [tel1, setTel1] = useState(null)
  const [tel2, setTel2] = useState(null)
  const [wholesaleLogo, setWholesaleLogo] = useState(null)
  const [nationalId, setNationalId] = useState(null)
  const [isRegistered, setIsRegistered] = useState(false)
  const inputRef = useRef()
  const childRef = useRef(null)
  const childRef1 = useRef(null)
  const [message, setMessage] = useState("")

  const data = JSON.stringify({
    GuildCode: guildCode, ManagerNameFa: managerNameFa, ManagerNationalCode: managerNationalCode
    , Mobile: mobile, AdditionalData: additionalData, GuildNo: guildNO, NameFa: nameFa, NameEn: nameEn
    , NationalId: nationalId, WholesaleLogo: wholesaleLogo, Tel1: tel1, Tel2: tel2
  })

  useEffect(async () => {
    SetUpHandler()
  }, [])

  const SetUpHandler = async () => {
    const token = localStorage.getItem('token')
    if (token != null && token != undefined) {
      const Send = await fetch(`${themeConfig.servicesAddress}shop/get`, {
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
    if (wholesaleLogo && nameFa && guildNO && guildCode && additionalData && mobile && managerNameFa && managerNationalCode
      && nationalId) {
      if (token != null && token != undefined) {
        const Send = await fetch(`${themeConfig.servicesAddress}shop/${statustext}`, {
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
    // console.log(obj)
    setWholesaleLogo(obj.wholesaleLogo)
    setNameFa(obj.nameFa)
    setNameEn(obj.nameEn)
    setNationalId(obj.nationalId)
    setGuildNO(obj.guildNo)
    setAdditionalData(obj.additionalData)
    setMobile(obj.mobile)
    setTel1(obj.tel1)
    setTel2(obj.tel2)
    setManagerNationalCode(obj.managerNationalCode)
    setManagerNameFa(obj.managerNameFa)
    setGuildCode(obj.guildCode)
  }
  const NameFaHandler = (event) => {
    setNameFa(event.target.value)
  }
  const NameEnHandler = (event) => {
    setNameEn(event.target.value)
  }
  const AdditionalDataHandler = (event) => {
    setAdditionalData(event.target.value)
  }
  const NationalIdHandler = (event) => {
    setNationalId(event.target.value)
  }
  const Tel2Handler = (event) => {
    setTel2(event.target.value)
  }
  const Tel1Handler = (event) => {
    setTel1(event.target.value)
  }
  const MobileHandler = (event) => {
    setMobile(event.target.value)
  }
  const ManagerNationalCodeHandler = (event) => {
    setManagerNationalCode(event.target.value)
  }
  const GuildCodeHandler = (event) => {
    setGuildCode(event.target.value)
  }
  const GuildNOHandler = (event) => {
    setGuildNO(event.target.value)
  }
  const ManagerNameFaHandler = (event) => {
    setManagerNameFa(event.target.value)
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
  const GuildIdHandler = (event) => {
    setGuildId(event.target.value)
  }

  const refreshPage = () => {
    // window.location.reload(false)
    setImageSrc()
    setWholesaleLogo("")
    setNameFa("")
    setNameEn("")
    setNationalId("")
    setGuildNO("")
    setAdditionalData("")
    setMobile("")
    setTel1("")
    setTel2("")
    setManagerNationalCode("")
    setManagerNameFa("")
    setGuildCode("")
  }
  return (
    <CardContent>
      <Grid container sx={{ height: 'auto', minHeight: "500px" }} spacing={1}>
        <SnackbarPopUp ref={childRef} severity={'success'} message={message} />
        <SnackbarPopUp ref={childRef1} severity={'error'} message={message} />
        <Grid container sm={8} sx={{ marginTop: 3 }} spacing={8}>
          <Grid item sm={4}>
            <TextField fullWidth label="نام کامل" value={nameFa} onChange={NameFaHandler} required InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{ direction: "ltr" }} item sm={4}>
            <TextField fullWidth label="نام کامل(انگلیسی)" value={nameEn} onChange={NameEnHandler} InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{}} item sm={4}>
            <TextField fullWidth label="نام کامل مدیر" value={managerNameFa} onChange={ManagerNameFaHandler} required InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{ direction: "ltr" }} item sm={4}>
            <TextField fullWidth label="شماره صنف" value={guildNO} onChange={GuildNOHandler} required InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{ direction: "ltr" }} item sm={4}>
            <TextField fullWidth label="نوع صنف" value={guildCode} onChange={GuildCodeHandler} required InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{ direction: "ltr" }} item sm={4}>
            <TextField fullWidth label="کد ملی مدیر" value={managerNationalCode} onChange={ManagerNationalCodeHandler} required InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{ direction: "ltr" }} item sm={4}>
            <TextField fullWidth label="شماره تلفن همراه" value={mobile} onChange={MobileHandler} required InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{ direction: "ltr" }} item sm={4}>
            <TextField fullWidth label="تلفن همراه 1" value={tel1} onChange={Tel1Handler} InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{ direction: "ltr" }} item sm={4}>
            <TextField fullWidth label="تلفن همراه 2" value={tel2} onChange={Tel2Handler} InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{ direction: "ltr" }} item sm={4}>
            <TextField fullWidth label="شماره ملی" value={nationalId} onChange={NationalIdHandler} required InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{}} item sm={8}>
            <TextField fullWidth label="سایر اطلاعات" multiline maxRows={2} value={additionalData} onChange={AdditionalDataHandler} required InputLabelProps={{ shrink: true, }} />
          </Grid>
          <Grid sx={{ position: "relative", height: "250px" }} item sm={12}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <input
                id='inputImage'
                accept='.jpg,.png,.bmp,.svg'
                ref={inputRef}
                type="file"
                value={undefined}
                multiple
                style={{ display: 'none' }}
                onChange={(e) => {
                  const [file] = e.target.files
                  // if (file) {
                  //   const image = document.getElementById('imglogo')
                  //   // image.src = URL.createObjectURL(file)
                  // }
                  const fr = new FileReader()
                  fr.readAsDataURL(file)
                  fr.addEventListener("load", evnt => { setWholesaleLogo(evnt.target.result), console.log(evnt.target.result) })
                  inputRef.current.value = undefined
                }}
              />
              <Box sx={{ width: "200px", height: "200px" }} >
                <Box sx={{ position: "relative" }}>
                  <img style={{ position: "absolute", width: "200px", height: "200px" }} id="imglogo" src={wholesaleLogo} />
                </Box>
              </Box>
              <Button sx={{ height: "50px", alignSelf: "end" }} variant='contained' onClick={() => { inputRef.current.click() }}>انتخاب لوگو *</Button>
            </Box>
          </Grid>
          {/* <Grid item sm={12}>
            <StyledTextField fullWidth label={lan.Address} />
          </Grid> */}
          <Grid item sm={12}>
            <Button variant='contained' onClick={SaveInfoHandler} sx={{ marginLeft: 3.5 }}>
              {lan.SaveChanges}
            </Button>
            <Button type='reset' onClick={refreshPage} variant='outlined' color='secondary'>
              {lan.Reset}
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={{ position: 'relative' }} sm={4}>
          <TrophyImg alt='trophy' src='/images/pages/pose-m-1.png' />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabAccount
