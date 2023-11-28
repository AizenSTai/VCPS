import { Directions } from 'mdi-material-ui'

const themeConfig = {
  // ** Layout Configs
  templateName: 'درگاه جامع خدمات روستاییان' /* App Name */,
  // servicesAddress: "http://92.119.71.194:18030/",
  // servicesAddress: "http://10.10.0.22:8100/",
  servicesAddress: "http://45.156.184.225:8100/",
  mode: 'light' /* light | dark */,
  contentWidth: 'boxed' /* full | boxed */,
  // ** Routing Configs
  routingLoader: true /* true | false */,
  // ** Navigation (Menu) Configs
  menuTextTruncate: true /* true | false */,
  navigationSize: 270 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */
}

export default themeConfig
