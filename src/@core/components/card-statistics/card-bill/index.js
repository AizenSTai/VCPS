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

const BoxView = styled(Box)(({ theme }) => ({
  background: "white",
  boxSizing: "border-box",
  m: "0px",
  p: "0px",
  borderRadius: "10px",
  overflow: "hidden",
  display: 'flex',
  border: "1px solid #ddd",
  boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff',
  ":hover": {
    boxShadow: "0 15px 15px 3px #d2d2d2, inset 0 0 1px 1px #00b1ff",
  }

}))

const CardStatsVertical = props => {
  // ** Props
  const { title, onClick, subtitle, color, icon, stats, trend, trendNumber, src } = props

  return (
    <Box >
      <Typography>تیدذنت یشدنتد نتدلذشثنت دذلتنشقد لنذشدنتر دیسبنتدنشستلر</Typography>
      <Button fullWidth /*onClick={() => onClick(props.price)}*/ size='large' variant='contained' sx={{ fontSize: "20px", display: "flex", color: "white", alignSelf: "flex-end" }}>سفارش</Button>
    </Box>
  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
