import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ServiceButton from '../../buttonServiceStructuring'
import GetNationalCodeByDepositNumber from '../BankServices/NationalCodebyDepositNumber'
import Shahkar from '../BankServices/Shahkar'
import OtherBankSheba from '../BankServices/OtherBankSheba'
import MatchNationalbySheba from '../BankServices/MatchNationalbySheba'
import MatchNationalbyDeposit from '../BankServices/MatchNationalbyDeposit'
import MatchNationalbyCardNum from '../BankServices/MatchNationalbyCardNum'
import DepositNumByNational from '../BankServices/DepositNumByNational'
import ConvertShebaToDeposit from '../BankServices/ConvertShebaToDeposit'
import MatchMobilebySheba from '../BankServices/MatchMobilebySheba'
import MatchMobilebyDeposit from '../BankServices/MatchMobilebyDeposit'
import ShebaInfo from '../BankServices/ShebaInfo'
import DestinationMobile from '../BankServices/DestinationMobile'
import DestinationSheba from '../BankServices/DestinationSheba'
import DestinationDeposit from '../BankServices/DestinationDeposit'
import DestinationCard from '../BankServices/DestinationCard'
import DepositTransferCondition from '../BankServices/DepositTransferCondition'
import DepositRates from '../BankServices/DepositRates'
import CurrencyRate from '../BankServices/CurrencyRate'
import ChangePasswordCondition from '../BankServices/ChangePasswordCondition'
import Branches from '../BankServices/Branches'
import BillInfo from '../BankServices/BillInfo'
import AllAchTransactionReason from '../BankServices/AllAchTransactionReason'
import DepositToSheba from '../BankServices/DepositToSheba'
import CardToSheba from '../BankServices/CardToSheba'

export default function BankIranZaminService(prop) {

  const [nationalcodeOpen, setNationalcodeOpen] = useState(false)
  const [shahkarOpen, setShahkarOpen] = useState(false)
  const [otherBankShebaOpen, setOtherBankShebaOpen] = useState(false)
  const [matchNationalbyShebaOpen, setMatchNationalbyShebaOpen] = useState(false)
  const [matchNationalbyDepositOpen, setMatchNationalbyDepositOpen] = useState(false)
  const [matchNationalbyCardNumOpen, setMatchNationalbyCardNumOpen] = useState(false)
  const [depositNumByNationalOpen, setDepositNumByNationalOpen] = useState(false)
  const [convertShebaToDepositOpen, setconvertShebaToDepositOpen] = useState(false)
  const [matchMobilebyShebaOpen, setMatchMobilebyShebaOpen] = useState(false)
  const [matchMobilebyDepositOpen, setMatchMobilebyDepositOpen] = useState(false)
  const [shebaInfoOpen, setShebaInfoOpen] = useState(false)
  const [destinationMobileOpen, setDestinationMobileOpen] = useState(false)
  const [destinationShebaOpen, setDestinationShebaOpen] = useState(false)
  const [destinationDepositOpen, setDestinationDepositOpen] = useState(false)
  const [destinationCardOpen, setDestinationCardOpen] = useState(false)
  const [despositTransferConditionOpen, setDespositTransferConditionOpen] = useState(false)
  const [despositRatesOpen, setDespositRatesOpen] = useState(false)
  const [currencyRateOpen, setCurrencyRateOpen] = useState(false)
  const [changePasswordConditionOpen, setChangePasswordConditionOpen] = useState(false)
  const [branchesOpen, setBranchesOpen] = useState(false)
  const [billInfoOpen, setBillInfoOpen] = useState(false)
  const [allAchTransactionReasonOpen, setAllAchTransactionReasonOpen] = useState(false)
  const [depositToShebaOpen, setDepositToShebaOpen] = useState(false)
  const [cardToShebaOpen, setCardToShebaOpen] = useState(false)

  const routeServicehandler = (prop) => {
    if (prop == "nationalcodebydeposite") {
      setNationalcodeOpen(true)
    } else if (prop == 'shahkar') {
      setShahkarOpen(true)
    } else if (prop == 'otherbanksheba') {
      setOtherBankShebaOpen(true)
    } else if (prop == 'matchnationalbysheba') {
      setMatchNationalbyShebaOpen(true)
    } else if (prop == 'matchnationalbydeposit') {
      setMatchNationalbyDepositOpen(true)
    } else if (prop == "matchnationalbycardnum") {
      setMatchNationalbyCardNumOpen(true)
    } else if (prop == "depositnumBynational") {
      setDepositNumByNationalOpen(true)
    } else if (prop == "convertshebatodeposit") {
      setconvertShebaToDepositOpen(true)
    } else if (prop == "matchmobilebysheba") {
      setMatchMobilebyShebaOpen(true)
    } else if (prop == "matchmobilebydeposit") {
      setMatchMobilebyDepositOpen(true)
    } else if (prop == "shebainfo") {
      setShebaInfoOpen(true)
    } else if (prop == "destinationmobile") {
      setDestinationMobileOpen(true)
    } else if (prop == "destinationsheba") {
      setDestinationShebaOpen(true)
    } else if (prop == "destinationdeposit") {
      setDestinationDepositOpen(true)
    } else if (prop == "destinationcard") {
      setDestinationCardOpen(true)
    } else if (prop == "deposittransfercondition") {
      setDespositTransferConditionOpen(true)
    } else if (prop == "depositrates") {
      setDespositRatesOpen(true)
    } else if (prop == "currencyrate") {
      setCurrencyRateOpen(true)
    } else if (prop == "changepasswordcondition") {
      setChangePasswordConditionOpen(true)
    } else if (prop == "branches") {
      setBranchesOpen(true)
    } else if (prop == "billinfo") {
      setBillInfoOpen(true)
    } else if (prop == "allachtransactionreason") {
      setAllAchTransactionReasonOpen(true)
    } else if (prop == "deposittosheba") {
      setDepositToShebaOpen(true)
    } else if (prop == "cardtosheba") {
      setCardToShebaOpen(true)
    }
  }

  const onBackHandler = () => {
    setOtherBankShebaOpen(false)
    setShahkarOpen(false)
    setNationalcodeOpen(false)
    setMatchNationalbyShebaOpen(false)
    setMatchNationalbyDepositOpen(false)
    setMatchNationalbyCardNumOpen(false)
    setDepositNumByNationalOpen(false)
    setconvertShebaToDepositOpen(false)
    setMatchMobilebyShebaOpen(false)
    setMatchMobilebyDepositOpen(false)
    setShebaInfoOpen(false)
    setDestinationMobileOpen(false)
    setDestinationShebaOpen(false)
    setDestinationDepositOpen(false)
    setDestinationCardOpen(false)
    setDespositTransferConditionOpen(false)
    setDespositRatesOpen(false)
    setCurrencyRateOpen(false)
    setChangePasswordConditionOpen(false)
    setBranchesOpen(false)
    setBillInfoOpen(false)
    setAllAchTransactionReasonOpen(false)
    setDepositToShebaOpen(false)
    setCardToShebaOpen(false)
  }

  return (
    <Box>
      {shahkarOpen && <Shahkar onBack={onBackHandler} />}
      {otherBankShebaOpen && <OtherBankSheba onBack={onBackHandler} />}
      {nationalcodeOpen && <GetNationalCodeByDepositNumber onBack={onBackHandler} />}
      {matchNationalbyShebaOpen && <MatchNationalbySheba onBack={onBackHandler} />}
      {matchNationalbyDepositOpen && <MatchNationalbyDeposit onBack={onBackHandler} />}
      {matchNationalbyCardNumOpen && <MatchNationalbyCardNum onBack={onBackHandler} />}
      {depositNumByNationalOpen && <DepositNumByNational onBack={onBackHandler} />}
      {convertShebaToDepositOpen && <ConvertShebaToDeposit onBack={onBackHandler} />}
      {matchMobilebyShebaOpen && <MatchMobilebySheba onBack={onBackHandler} />}
      {matchMobilebyDepositOpen && <MatchMobilebyDeposit onBack={onBackHandler} />}
      {shebaInfoOpen && <ShebaInfo onBack={onBackHandler} />}
      {destinationMobileOpen && <DestinationMobile onBack={onBackHandler} />}
      {destinationShebaOpen && <DestinationSheba onBack={onBackHandler} />}
      {destinationDepositOpen && <DestinationDeposit onBack={onBackHandler} />}
      {destinationCardOpen && <DestinationCard onBack={onBackHandler} />}
      {despositTransferConditionOpen && <DepositTransferCondition onBack={onBackHandler} />}
      {despositRatesOpen && <DepositRates onBack={onBackHandler} />}
      {currencyRateOpen && <CurrencyRate onBack={onBackHandler} />}
      {changePasswordConditionOpen && <ChangePasswordCondition onBack={onBackHandler} />}
      {branchesOpen && <Branches onBack={onBackHandler} />}
      {billInfoOpen && <BillInfo onBack={onBackHandler} />}
      {allAchTransactionReasonOpen && <AllAchTransactionReason onBack={onBackHandler} />}
      {depositToShebaOpen && <DepositToSheba onBack={onBackHandler} />}
      {cardToShebaOpen && <CardToSheba onBack={onBackHandler} />}

      {(!nationalcodeOpen && !shahkarOpen && !otherBankShebaOpen && !matchNationalbyShebaOpen && !matchNationalbyDepositOpen && !matchNationalbyCardNumOpen && !depositNumByNationalOpen && !convertShebaToDepositOpen && !matchMobilebyShebaOpen && !matchMobilebyDepositOpen && !shebaInfoOpen && !destinationMobileOpen && !destinationShebaOpen && !destinationDepositOpen && !destinationCardOpen && !despositTransferConditionOpen && !despositRatesOpen && !currencyRateOpen && !changePasswordConditionOpen && !branchesOpen && !billInfoOpen && !allAchTransactionReasonOpen && !depositToShebaOpen && !cardToShebaOpen) && <Card sx={{ backgroundColor: "#FAFAFA" }}>
        <Button variant='contained' sx={{ m: 5, mb: 1 }} onClick={prop.onBack}>بازگشت</Button>
        <Grid container sx={{ backgroundColor: "#FAFAFA" }} >
          <Grid item xs={12} margin="10px" textAlign={'center'} >
            <Box sx={{ display: "flex", justifyContent: "right", flexWrap: "wrap", gap: "30px", height: "auto", margin: "0 auto", marginTop: "1%", marginBottom: "3%", marginRight: "1%", marginLeft: "1%" }}>
              <ServiceButton
                height={140}
                width={170}
                src="nationalcodebydeposite"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='دریافت کد ملی با شماره حساب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="shahkar"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='شاهکار'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="otherbanksheba"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام شماره شبا سایر بانکها'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="matchnationalbysheba"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='تطابق کد ملی با شماره شبا'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="matchnationalbydeposit"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='تطابق کد ملی با شماره حساب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="matchnationalbycardnum"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='تطابق کد ملی با شماره کارت'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="depositnumBynational"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='موجودیت سپرده بر مبنای کد ملی'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="convertshebatodeposit"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='تبدیل شبا به حساب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="matchmobilebysheba"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='تطابق شماره موبایل با شماره کارت'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="matchmobilebydeposit"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='تطابق شماره موبایل با شماره حساب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="shebainfo"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='استعلام شماره شبا'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="destinationmobile"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='لیست شماره موبایل های پر مخاطب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="destinationsheba"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='لیست شماره شبا های پر مخاطب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="destinationdeposit"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='لیست شماره سپرده های پر مخاطب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="destinationcard"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='لیست شماره کارت های پر مخاطب'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="deposittransfercondition"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='دریافت پیام شرایط انتقال وجه'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="depositrates"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='نرخ سود سپرده'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="currencyrate"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='لیست نرخ ارزها'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="changepasswordcondition"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='دریافت پیام شرایط تغییر رمز عبور'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="branches"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='لیست شعبه های بانک'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="billinfo"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='دریافت اطلاعات قبض'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="allachtransactionreason"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='لیست کد بابت ها برای انتقال وجه پایا'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="deposittosheba"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='تبدیل حساب به شبا'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              <ServiceButton
                height={140}
                width={170}
                src="cardtosheba"
                ShowOnClick={true}
                subtitle='مشاهده پنل'
                title='تبدیل شماره کارت به شماره شبا'
                icon='/images/logos/khadamatBank.jpg'
                onClick={routeServicehandler} />
              {/*........................................................... */}
            </Box>
          </Grid>
        </Grid >
      </Card>}
    </Box >
  )
}
