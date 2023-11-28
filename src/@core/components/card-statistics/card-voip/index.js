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
  const { title, onClick, subtitle, color, icon, stats, trend, trendNumber, src } = props

  return (
    <Card>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", height: "100px", margin: "0 auto", marginTop: "2%", marginBottom: "3%", width: "100%" }}>
        <Button fullWidth size='large' variant='contained' sx={{ fontSize: "20px" }} >
          {title}
        </Button>
      </Box>
    </Card>
  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
