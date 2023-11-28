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
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Languages from 'src/language/Languages'
import themeConfig from 'src/configs/themeConfig'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import SnackbarPopUp from '../Snackbar/SnackbarPopUp'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Close from 'mdi-material-ui/Close'
import { positions } from '@mui/system'
import { ImageText } from 'mdi-material-ui'
import { start } from 'nprogress'
import { DropzoneArea, DropzoneAreaBase } from 'mui-file-dropzone'

const TrophyImg = styled('img')({
  right: '10%',
  bottom: 50, width: "80%",
  height: '80%',
  position: 'absolute'
})

const TabWebsiteImage = () => {
  // ** Hooks
  const lan = Languages()
  const childRef = useRef(null)
  const files = []
  const childRef1 = useRef(null)
  const [message, setMessage] = useState("")
  const [imageCount, setImageCount] = useState(5)
  const [arrayOfImages, setArrayOfImages] = useState([])
  useEffect(async () => {

  }, [])

  const SaveInfoHandler = async () => {
    for (let index = 0; index < arrayOfImages.length; index++) {

      const Send = await fetch(`${themeConfig.servicesAddress}media/new`, {
        method: 'POST',
        body: JSON.stringify({}),
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
    }
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

  const refreshPage = () => {
    for (let i = 0; i < imageCount; i++) {
      const imgid = "imglogo" + (i + 1)
      const inputid = "input" + (i + 1)
      const input = document.getElementById(inputid).value = null
      const img = document.getElementById(imgid).src = null
      arrayOfImages[i] = { image: "" }
    }
  }
  const show = () => {
    const BaseFiles = []
    for (let index = 0; index < files.length; index++) {
      console.log(files[index])
      const fr = new FileReader()
      fr.readAsDataURL(files[index])
      fr.addEventListener("load", evnt => { BaseFiles.push(evnt.target.result) })
    }
    console.log(BaseFiles);
  }

  return (
    <CardContent>
      <SnackbarPopUp ref={childRef} severity={'success'} message={message} />
      <SnackbarPopUp ref={childRef1} severity={'error'} message={message} />
      <Box sx={{ marginTop: 3 }} >
        <Box>
          <DropzoneArea filesLimit={imageCount} onChange={(e) => { files = e }} />
        </Box>
        <Box >
          <Button variant='contained' onClick={SaveInfoHandler} sx={{ marginLeft: 3.5 }}>
            {lan.SaveChanges}
          </Button>
          <Button type='reset' onClick={refreshPage} variant='outlined' color='secondary'>
            {lan.Reset}
          </Button>
          <Button type='reset' onClick={show} variant='outlined' color='secondary'>
            نمایش
          </Button>
        </Box>
      </Box>
    </CardContent>
  )
}
export default TabWebsiteImage
