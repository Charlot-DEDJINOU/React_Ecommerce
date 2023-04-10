import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form"
import styled from "styled-components"
import { useState } from "react";
import Toast from "react-bootstrap/Toast"
import ToastContainer from 'react-bootstrap/ToastContainer';

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

export default function Contact(){

    const Navigate=useNavigate()
    const [show, setShow] = useState(false);

    function verify(n){
        var j=0;
            for(var i=n-1;i>0;i--){
                var ele=document.getElementById(i)
                if(ele.value===""){
                    ele.style.outline="red"
                    ele.style.border="1px solid red"
                    ele.style.boxShadow="0px 0px 4px 1.5px red"
                    j=1 ;
                }
                  else{
                    ele.style.outline="rgb(6, 198, 6)"
                    ele.style.border="1px solid rgb(6, 198, 6)"
                    ele.style.boxShadow="0px 0px 4px 1.5px rgb(6, 198, 6)"
                    ele.removeAttribute("disabled")
                  }
            }
            if(j===1){
                var doc=document.getElementById(n)
                doc.setAttribute("disabled", "");
                doc.removeAttribute("style")
             }
            for(i=n+1;i<=3;i++){
                    ele=document.getElementById(i)
                    ele.removeAttribute("disabled")
                    ele.removeAttribute("style")
               }
           
    }

    function change(n){
        if(n!==3)
            document.getElementById(n).removeAttribute("style")
        else{
            var ele=document.getElementById(n)
            if(ele.value===""){
                     ele.removeAttribute("disabled")
                    ele.removeAttribute("style")
            }
            else{
                ele.style.outline="rgb(6, 198, 6)"
                ele.style.border="1px solid rgb(6, 198, 6)"
                ele.style.boxShadow="0px 0px 4px 1.5px rgb(6, 198, 6)"
            }
        }
    }
    
    function submit(e){
        e.preventDefault()
        var j=0
        for(var i=1;i<4;i++){
            var ele=document.getElementById(i)
            if(ele.value===""){
                ele.style.outline="red"
                ele.style.border="1px solid red"
                ele.style.boxShadow="0px 0px 4px 1.5px red"
                j=1 ;
             }
            }
        if(j===0){
            setShow(true) ;
            setTimeout(()=>{Navigate("/")},1500)
        }
}

    return(
        <section className="contact">
             <div className="contact-info">
             <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe title="iframe" className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Cotonou, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
                   <div className="form-reseau">
                        <div className="texte">
                            <h1 className="title">Contact Us</h1>
                            <h3 className="title">We are here to assist you</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum deleniti molestiae sunt placeat blanditiis at eius vel voluptatum reiciendis, dolore distinctio esse architecto facilis impedit! Distinctio officiis doloremque illo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum deleniti molestiae sunt placeat blanditiis at eius vel voluptatum reiciendis, dolore distinctio esse architecto facilis impedit! Distinctio officiis doloremque illo.</p>
                            <div className="reseau">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                            </div> 
                        </div>
                        <Form className="form" onSubmit={submit}>
                                 <Form.Group className="mb-3" controlId="formBasicText" >
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Fullname" id="1" onChange={()=>{change(1)}} onClick={()=>{verify(1)}}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" id="2" onChange={()=>{change(2)}} onClick={()=>{verify(2)}}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label>Message</Form.Label><br />
                                    <textarea className="message" placeholder="Message" id="3" onChange={()=>{change(3)}} onClick={()=>{verify(3)}}></textarea>
                                </Form.Group>
                                <Button variant="success" type="submit" >
                                    Submit
                                </Button>
                        </Form>
                   </div>
             </div>
             <ToastContainer  position="top-end">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation={true}>
                    <Toast.Header closeButton={false}>
                        <span style={{color:"rgb(6,198,6)",fontWeight:"bold"}}>Art Charlot</span>
                    </Toast.Header>
                    <Toast.Body>Message sent successfully</Toast.Body>
                 </Toast>
            </ToastContainer>
        </section>
    )
}