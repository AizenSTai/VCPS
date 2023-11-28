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
import themeConfig from 'src/configs/themeConfig'
import userdata from "./userdata.json"

let DataUserIsSet = false
let userdatas = {
    Id: "",
    Namefa: "",
    Email: "",
    NationalCode: "",
    UserStatus: "",
    Lastlogin: "",
    Rolenameen: "",
    Rolenamefa: "",
    Username: "",
    RoleId: "",
    Mobile: "",
    UserIsActive: ""
}
const userProfile = async () => {
    if (!DataUserIsSet) {
        const token = localStorage.getItem('token')
        // if (token != null && token != undefined) {
        //     const Send = await fetch(`${themeConfig.servicesAddress}user/Profile`, {
        //         method: 'POST',
        //         headers:
        //         {
        //             'Access-Control-Allow-Origin': '*',
        //             'Content-type': 'application/json',
        //             'Access-Control-Allow-Headers': 'Content-Type',
        //             'Access-Control-Allow-Methods': 'POST',
        //             'Access-Control-Allow-Headers': 'X-Requested-With',
        //             Authorization: `Bearer ${localStorage.getItem('token')}`
        //         }
        //     }).catch(err => {
        //         console.log(err)
        //     })
        //     console.log(Send.json());
        //     if (Send != undefined) {
        //         const Response = await Send.json()
        //         userdata = {
        //             Id: Response.data[0].userId, Email: Response.data[0].email, Lastlogin: Response.data[0].lastlogin, Mobile: Response.data[0].mobile, Namefa: Response.data[0].namefa, NationalCode: Response.data[0].nationalCode, RoleId: Response.data[0].roleId
        //             , Rolenameen: Response.data[0].rolenameen, Rolenamefa: Response.data[0].rolenamefa
        //             , UserIsActive: Response.data[0].userIsActive, Username: Response.data[0].username, UserStatus: Response.data[0].userStatus,
        //         }
        //     }
        // }
        DataUserIsSet = true
    }
    return userdata
}

export default userProfile