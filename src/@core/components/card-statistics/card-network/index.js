import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
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
  const { title, onClick, subtitle, subtitle2, subtitle3, benefits, color, icon, icon3, icon2, stats, trend, trendNumber, src } = props
  const theme = useTheme();
  return (
    <BoxView sx={{ background: "white", boxSizing: "border-box", m: "0px", p: "0px", borderRadius: "10px", overflow: "hidden", display: 'flex', border: "1px solid #ddd", boxShadow: '0 2px 3px 0 #d2d2d2, inset 0 0 1px 1px #00b1ff' }}>
      <Box
        sx={{ backgroundImage: "url(/images/title/network-ship.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "300px" }}
      />
      <Box sx={{ display: 'flex' }}>
        <CardContent >
          <Typography component="div" variant="h5">
            {stats}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {subtitle}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {subtitle2}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {subtitle3}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', position: "relative", alignItems: 'center', pl: 1, pb: 1, flex: "1" }}>
          <Button fullWidth onClick={() => onClick(props.price)} size='large' variant='contained' sx={{ fontSize: "20px", display: "flex", color: "white", alignSelf: "flex-end" }}>سفارش</Button>
        </Box>
      </Box>

    </BoxView>
  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
