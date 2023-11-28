// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import { Button, Divider, Grid } from '@mui/material'
import { bottom } from '@popperjs/core'

const TrophyImg = styled('img')({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  padding: 4,
  borderRadius: "10px"
})

const CarButton = props => {

  const { title, ShowOnClick, carDisplayables, CarType, countType, onClick, subtitle, icon, src, height, width } = props
  // let num = 1
  // num = localStorage.getItem(countType)
  // console.log(CarType)
  // console.log(carDisplayables)
  return (
    <Card sx={{
      boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 20%) !important', borderRadius: '10px', width: "14%", transition: "0.6s ease"
      , borderBottom: '1px solid #f1f2f2', overflow: 'hidden', mb: 1, minWidth: "160px", height: "220px", minHeight: "220px", maxHeight: "220px", '&:hover': {
        boxShadow: '0.5rem 1rem 1rem rgb(0 0 0 / 20%) !important',
        transform: "translate(-0.5px,-0.5px)"
      }
    }}>
      {/* <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", height: "100px", margin: "0 auto", marginTop: "2%", marginBottom: "3%", width: "100%" }}> */}
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
        <Box>
          <TrophyImg sx={{ height: height, width: width, maxHeight: "135px" }} src={icon} />
        </Box>
        <Box sx={{ marginTop: "auto" }}>
          <Typography
            variant='h6'
            sx={{
              mt: 1,
              mb: 2,
              color: "#3d3783",
              maxHeight: "40px",
              lineHeight: 1,
              fontWeight: 500,
              textTransform: 'uppercase',
              fontSize: '0.9rem !important',
              cursor: "default"
            }}
          >
            {title}
          </Typography>
          {ShowOnClick && <Button fullWidth size='large' onClick={() => { onClick != null && onClick(src), (carDisplayables != null && CarType != null) && carDisplayables(CarType) }} variant='contained' sx={{ borderRadius: "30px", width: "auto", m: 5, mb: 2, mt: "0", fontSize: "0.7rem" }} >
            {subtitle}
          </Button>}
        </Box>
      </Box>
    </Card>
  )
}

export default CarButton

CarButton.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
