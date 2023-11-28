// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import Languages from 'src/language/Languages'
const navigation = props => {
  const lan = Languages()
  return [
    {
      icon: HomeOutline,
      title: lan.Dashboard,
      path: '/',
      tab: "main"
    },
    {
      title: lan.AccountSettings,
      icon: AccountCogOutline,
      path: '/account-settings',
      tab: 'profile'
    },

    // {
    //   sectionTitle: lan.Pages
    // },
    // {
    //   title: lan.Login,
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: lan.MapRegisterForm,
    //   icon: GoogleCirclesExtended,
    //   path: '/pages/Test'
    // },
    {
      title: 'تکمیل ثبت نام',
      icon: AccountPlusOutline,
      path: '/complete-register',
      // openInNewTab: true
      tab: 'profile'
    },
    // {
    //   title: 'قبوض خدماتی',
    //   icon: AccountPlusOutline,
    //   path: '/choose-service',
    //   tab: 'service'
    // },
    {
      title: 'قبوض خدماتی',
      icon: AccountPlusOutline,
      path: '/billing',
      tab: 'service'
    },
    {
      title: 'سایر سرویس ها',
      icon: AccountPlusOutline,
      path: '/choose-service',
      tab: 'service'
    },
    {
      title: 'فروش کالا',
      icon: AccountPlusOutline,
      path: '/shoppingList',
      tab: 'others'
    },
    {
      title: 'افزودن کالا',
      icon: AccountPlusOutline,
      path: '/AddProduct',
      tab: 'others'
    },
    {
      title: 'کیف پول',
      icon: AccountPlusOutline,
      path: '/Wallet',
      tab: 'others'
      // openInNewTab: true
    },
    {
      title: 'تراکنش ها',
      icon: AccountPlusOutline,
      path: '/TransactionReport',
      tab: 'reports'
      // openInNewTab: true
    },
    {
      title: 'ادمین',
      icon: AccountPlusOutline,
      path: '/Admin',
      tab: 'others'
      // openInNewTab: true
    },
    {
      title: 'ادمین 2',
      icon: AccountPlusOutline,
      path: '/Admin2',
      tab: 'others'
      // openInNewTab: true
    }
    // ,
    // {
    //   title: 'شارژ حساب',
    //   icon: AccountPlusOutline,
    //   path: '/TransactionReport',
    //   tab: 'others'
    //   // openInNewTab: true
    // }

  ]
}

export default navigation
