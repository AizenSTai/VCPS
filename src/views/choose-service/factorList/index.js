import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import SnackbarPopUp from 'src/views/Snackbar/SnackbarPopUp'
import moment from 'jalali-moment'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import themeConfig from 'src/configs/themeConfig'
import DateTimePicker from 'src/@core/theme/overrides/dateTimePicker'
import Export from 'src/views/ExportToPdf'
import userProfile from "src/Userprofile/userProfile";
import { set } from 'nprogress'
import jsPDF from 'jspdf'
// import { ResponsiveTooltipWrapper } from '@mui/lab/internal/pickers/wrappers/ResponsiveWrapper'
import html2canvas from 'html2canvas'
import { letterSpacing, style, textAlign } from '@mui/system'
import ChooseService from 'src/pages/BillingSellService'

export default function factorList(prop) {
  const [rows, setRows] = useState([])
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)

  const ExportDataHandler = async () => {
    await Export(prop.serviceList)
  }
  const exportComponent = (items) => {
    const report = new jsPDF("portrait", "pt", "a4", true);
    report.html(document.querySelector('#exportDiv')).then(() => {
      // report.setFont('Symbol', 'Bold')
      report.setLanguage('fa-IR')
      report.setFontSize("10px")
      report.save('report.pdf');
    });
  }
  const exportComponent2 = () => {
    if (false) {
      const input = document.getElementById('exportDiv');
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png')
          const pdf = new jsPDF()
          pdf.addImage(imgData, 'JPEG', 0, 0)
          // pdf.output('dataurlnewwindow')
          pdf.save("download.pdf")
        })
    }
    if (true) {
      html2canvas(document.getElementById("exportDiv")).then((canvas) => {
        const img = canvas.toDataURL("image/png")

        const pdf = new jsPDF("portrait", "pt", "a4")
        pdf.setLanguage('fa-IR')
        const imgProperties = pdf.getImageProperties(img)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width
        pdf.addImage(img, "JPEG", 0, 0, pdfWidth, pdfHeight)
        pdf.save("shipping_label.pdf")

      });
    }
  }
  const finalPrice = 0
  prop.serviceList.forEach(element => {
    finalPrice += element.price * element.count
  })
  function numberWithCommas(x) {
    // console.log(x);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const [ghestOpen, setGhestOpen] = useState(true)
  const date = moment().locale('fa').format('YYYY/M/D')
  const [name, setName] = useState({})
  userProfile().then(itm => setName(itm))
  let count = 0
  return (
    <Box>
      {ghestOpen && <ChooseService price={finalPrice + finalPrice * 0.09} />}
      {!ghestOpen && <Box sx={{ direction: "rtl", height: 'auto', width: '100%' }}>
        <Button onClick={prop.onBack} variant='contained' sx={{ m: 5 }}>بازگشت</Button>

        <div className="card">
          <div className="card-body">
            <div className="container mb-5 mt-3">
              <div className="row d-flex align-items-baseline">
                <div className="col-xl-9">
                  <p style={{ color: '#7e8d9f', fontSize: '20px' }}>
                    <strong>شماره فاکتور :</strong>
                  </p>
                </div>
                <div className="col-xl-3 float-end">
                  <button
                    type="button"
                    className="btn btn-primary text-capitalize"
                    onClick={exportComponent2}
                    style={{ backgroundColor: '#60bdf3' }}
                  >
                    بارگیری فاکتور
                  </button>
                </div>
                <hr />
              </div>

              <div id='exportDiv' className="container" style={{ wordBreak: "normal", letterSpacing: "0" }} >
                <br />
                <div className="col-md-12">
                  <div className="text-center">
                    <i className="fab fa-mdb fa-4x ms-0" style={{ color: '#5d9fc5' }}></i>
                    <p className="pt-0" >مبین وان</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8">
                    <ul className="list-unstyled">
                      <li className="text-muted">
                        به شخص : <span style={{ color: '#5d9fc5' }}>{name.Namefa}</span>
                      </li>
                      <li className="text-muted">Street, City</li>
                      <li className="text-muted">State, Country</li>
                      <li className="text-muted">
                        <i className="fas fa-phone"></i> 123-456-789
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4">
                    <p className="text-muted">صورت حساب</p>
                    <ul className="list-unstyled">
                      <li className="text-muted">
                        <i className="fas fa-circle" style={{ color: '#84b0ca' }}></i>
                        {/* <span className="fw-bold">ID:</span>#123-456 */}
                      </li>
                      <li className="text-muted">
                        <i className="fas fa-circle" style={{ color: '#84b0ca' }}></i>
                        <span className="fw-bold">تاریخ: {date}</span>
                      </li>
                      <li className="text-muted">
                        <i className="fas fa-circle" style={{ color: '#84b0ca' }}></i>
                        <span className="me-1 fw-bold">وضعیت:</span
                        ><span className="badge bg-warning text-black fw-bold">
                          پرداخت نشده</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row my-2 mx-1 justify-content-center">
                  <table className="table table-striped table-borderless">
                    <thead style={{ backgroundColor: '#84b0ca', className: "text-white" }}>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">نوع کالا</th>
                        <th scope="col">توضیحات</th>
                        <th scope="col">تعداد</th>
                        <th scope="col">قیمت واحد سرویس</th>
                        <th scope="col">قیمت کل </th>
                      </tr>
                    </thead>
                    {/* {console.log(prop.serviceList)} */}
                    <tbody>
                      {(prop.serviceList != undefined) &&
                        prop.serviceList.map((itm) => {
                          count++
                          return <tr>
                            <th scope="row">{count}</th>
                            <td>{prop.serviceName}</td>
                            <td>{itm.info[0].nameFa}</td>
                            <td>1</td>
                            <td>{itm.price} تومان</td>
                            <td>{itm.count * itm.price}</td>
                          </tr>
                        })}
                    </tbody>
                  </table>
                </div>
                <Box sx={{ display: "flex", justifyContent: "left", ml: 5 }}>
                  <p className="text-black">
                    <span> مبلغ کل : </span>
                    <span style={{ fontSize: '20px' }}>{numberWithCommas(finalPrice)}</span> ريال
                  </p>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "left", ml: 5 }}>
                  <p className="text-black">
                    <span>مالیات بر ارزش افزوده 9% : </span>
                    <span style={{ fontSize: '20px' }}>{numberWithCommas(finalPrice + finalPrice * 0.09)}</span> ريال
                  </p>
                </Box>
                <hr />
                <div className="row">
                  <div className="col-xl-10">
                    <p>از خرید شما متشکریم</p>
                  </div>
                </div>
              </div>
            </div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant='contained' sx={{ justifySelf: "center", width: "150px", ml: 4 }}>پرداخت</Button>
              <Button variant='contained' sx={{ justifySelf: "center", width: "150px" }}>پرداخت اقساطی</Button>
            </Box>
          </div>
        </div>
      </Box >}
    </Box>
  )
}
