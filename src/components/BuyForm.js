import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import Form from "react-bootstrap/Form"
import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import { useContext} from "react"
import { UserContext } from "./ContextUser"

const Button=styled.button`
padding : 5px 8px ;
background-color: rgb(6, 198, 6) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
}
`
const Span=styled.span`
padding : 5px 8px ;
background-color: rgb(6, 198, 6) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
    cursor:pointer;
}
`

export default function BuyForm(){

    const {
        meta,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();
    const { erroredInputs, touchedInputs } = meta;
   
    const {handleCloseCheck,togglepage,togglebuy,toogleNombre_artvendus}=useContext(UserContext)

    const {cartTotal,emptyCart,totalItems}=useCart()

    const user=JSON.parse(localStorage.getItem('user'))

    function submit(e){
        e.preventDefault()
        if(erroredInputs.cardNumber===undefined && erroredInputs.expiryDate===undefined && erroredInputs.cvc===undefined){
            togglepage(false)
            togglebuy(true) 
            handleCloseCheck()
            toogleNombre_artvendus(totalItems)
            emptyCart() 
        }
     }

    return(
              <Form className="BuyForm-form" onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"  value={user.lastName}/>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicText">
                             <Form.Label>First Name</Form.Label>
                             <Form.Control type="text" value={user.firstName}/>
                     </Form.Group>
                     <div class="row">
                            <Form.Group  style={{ maxWidth: '15rem' }}>
                                    <Form.Label>Card number</Form.Label>
                                        <svg {...getCardImageProps({ images })} style={{marginLeft:"7px"}}/>
                                        <Form.Control
                                            {...getCardNumberProps()}
                                            isInvalid={touchedInputs.cardNumber && erroredInputs.cardNumber}
                                            placeholder="0000 0000 0000 0000"
                                            required
                                        />
                                    <Form.Control.Feedback type="invalid">{erroredInputs.cardNumber}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group  style={{ maxWidth: '10rem' }}>
                                    <Form.Label>Expiry date</Form.Label>
                                    <Form.Control
                                        {...getExpiryDateProps()}
                                        isInvalid={touchedInputs.expiryDate && erroredInputs.expiryDate}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{erroredInputs.expiryDate}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group  style={{ maxWidth: '9rem' }}>
                                    <Form.Label>CVC</Form.Label>
                                    <Form.Control
                                        {...getCVCProps()}
                                        isInvalid={touchedInputs.cvc && erroredInputs.cvc}
                                        placeholder="123"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{erroredInputs.cvc}</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group  style={{ maxWidth: '11.5rem' }}>
                                    <Form.Label>Total</Form.Label>
                                    <Form.Control
                                       value={cartTotal+" $"}
                                    />
                          </Form.Group>
                     </div><br />
                     <Span style={{backgroundColor:"rgba(0,0,0,0.6",marginRight:"15px"}} onClick={handleCloseCheck}> Cancel </Span>
                     <Button>Valid</Button>
              </Form>
             
    )
} 