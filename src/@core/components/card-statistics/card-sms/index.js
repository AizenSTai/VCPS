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

const CardView = styled(Card)(({ theme }) => ({
  height: "100%",
  width: "100%",
  boxSizing: "border-box",
  backgroundRepeat: 'no-repeat',
  backgroundSize: "contain",
  backgroundPosition: "center",
  ":hover": {
    boxShadow: "2px 2px 10px",
  }

}))

const CardStatsVertical = props => {
  // ** Props
  const { title, onClick, subtitle, subtitle2, subtitle3, benefits, color, icon, icon3, icon2, stats, trend, trendNumber, src } = props

  return (
    <CardView >
      <Box sx={{ backgroundColor: "lightblue", width: "100%", height: "100%" }}>
        <Box sx={{ backgroundColor: "khaki", p: "5px", textAlign: "center", fontSize: "24px", fontWeight: "600", borderBottom: "1px groove #ccc" }}>
          {title}
          <br />
          <span style={{ fontSize: "18px", opacity: "80%" }}>{benefits}</span>
        </Box>
        <Box sx={{ p: "10px", textAlign: "center", display: "flex", justifyContent: "center", borderBottom: "1px groove #ccc", fontSize: "18px" }}>
          <Typography sx={{ textAlign: "right", flex: "1" }}>
            {subtitle}
          </Typography>
          <Typography >
            {icon}
          </Typography>
        </Box>
        <Box sx={{ p: "10px", textAlign: "center", display: "flex", justifyContent: "center", borderBottom: "1px groove #ccc", fontSize: "18px" }}>
          <Typography sx={{ textAlign: "right", flex: "1" }} >
            {subtitle2}
          </Typography>
          <Typography>
            {icon2}
          </Typography>
        </Box>
        <Box sx={{ p: "10px", textAlign: "center", display: "flex", justifyContent: "center", borderBottom: "1px groove #ccc", fontSize: "18px" }}>
          <Typography sx={{ textAlign: "right", flex: "1" }} >
            {subtitle3}
          </Typography>
          <Typography>
            {icon3}
          </Typography>
        </Box>
        <Box sx={{ p: "10px", textAlign: "center", borderBottom: "1px groove #ccc" }}>
          {stats}
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button fullWidth size='large' variant='contained' onClick={() => onClick(props.price)} sx={{ color: "white", fontSize: "20px", width: "100%", alignContent: "center", alignItems: "center", p: "10px", textAlign: "center", justifyContent: "center", borderBottom: "1px groove #ccc" }}>
            ثبت سفارش
          </Button>
        </Box>
      </Box>
    </CardView >
  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
