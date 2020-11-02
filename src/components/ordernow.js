import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import CountryList from './countrylist'
import orderNowPic from "../images/oderNowPic.png"



function OrderNow() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>
        <img src={orderNowPic} alt="logo" />
        </Button>}
    >
      <Modal.Header>Please select the country</Modal.Header>
      <Modal.Content >
        <Modal.Description>
        </Modal.Description>
        <CountryList/>
      </Modal.Content>
    </Modal>
  )
}

export default OrderNow
