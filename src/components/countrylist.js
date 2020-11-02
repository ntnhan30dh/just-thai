import React from "react"
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'at', value: 'at', flag: 'at', text: 'Austria ' , as: 'a', href:'https://www.mjam.net/'},
  { key: 'cz', value: 'cz', flag: 'cz', text: 'Czech Republic ', as: 'a', href:'https://www.damejidlo.cz ' },
  { key: 'hu', value: 'hu', flag: 'hu', text: 'Hungary', as: 'a', href:'https://www.netpincer.hu' },
  { key: 'no', value: 'no', flag: 'no', text: 'Norway ', as: 'a', href:'https://www.foodora.no' },
  { key: 'se', value: 'se', flag: 'se', text: 'Sweden ', as: 'a', href:'https://www.foodora.se' },
  { key: 'fi', value: 'fi', flag: 'fi', text: 'Finland ', as: 'a', href:'https://www.foodora.fi' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina', as: 'a', href:'https://www.pedidosya.com.ar' },
  { key: 'cl', value: 'cl', flag: 'cl', text: 'Chile', as: 'a', href:'https://www.pedidosya.cl' },
  { key: 'pa', value: 'pa', flag: 'pa', text: 'Panama', as: 'a', href:'https://www.appetito24.com.pa' },
  { key: 'bo', value: 'bo', flag: 'bo', text: 'Bolivia', as: 'a', href:'https://www.pedidosya.com.bo' },
  { key: 'uy', value: 'uy', flag: 'uy', text: 'Uruguay ', as: 'a', href:'https://www.pedidosya.com.uy' },
  { key: 'do', value: 'do', flag: 'do', text: 'Dominican Republic', as: 'a', href:'https://www.pedidosya.com.do' },
]
const CountryList = () => {
  const action = (e, { value }) =>{
    console.log ("value", value)
  }
  return (
      <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
    onChange = {action}
  />
  )
}

export default CountryList
