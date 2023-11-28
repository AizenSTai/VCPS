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
import { Button, Divider, Grid, Paper } from '@mui/material'
import { bottom } from '@popperjs/core'

const Item = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
}));

const CardView = styled(Card)(({ theme }) => ({
  ":hover": {
    boxShadow: "1px 1px 5px",
  }
}))

const CardStatsVertical = props => {
  // ** Props
  const { title, onClick, subtitle, subtitle2, subtitle3, benefits, color, icon, icon3, icon2, stats, trend, trendNumber, src } = props

  return (
    <CardView >
      <Grid justifyContent="center"
        alignItems="center" direction={'row'} container sx={{ height: "6rem" }}>
        <Grid item xs={2}>
          <Item >
            {icon}
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ color: "black", fontSize: "26px" }}>
            {subtitle}
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item sx={{ color: "green", fontSize: "26px" }}>
            {stats}
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Button fullWidth onClick={() => onClick(props.price)} size='large' variant='contained' sx={{ width: "100%", fontSize: "16", color: "white" }}>سفارش</Button></Item>
        </Grid>
      </Grid>
    </CardView >
  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
