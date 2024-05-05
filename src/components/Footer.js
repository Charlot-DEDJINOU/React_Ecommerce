import {Link} from "react-router-dom"
import styled from "styled-components"

const Linkfooter=styled(Link)`
   color: black ;
   text-decoration:none ;
   color:white ;
   &:hover{
    color : rgb(6, 198, 6) ;
   }
`
export default function Footer(){
    return(
        <footer>
                <div className="info-footer">
                        <div className="content">
                              <h4>Coordonnées</h4>
                              <div className="lien">
                                    <span>Tel: +229 59105267</span>
                                    <span>Email: charlot@gmail.com</span>
                                    <span>Adresse: Abomey-Calavi</span>
                              </div>
                        </div>
                        <div className="content">
                              <h4>Lien utiles</h4>
                              <div className="lien">
                                    <Linkfooter to="/">Home</Linkfooter>
                                    <Linkfooter to="/products">All products</Linkfooter>
                                    <Linkfooter to="/Contact">Contacts</Linkfooter>
                              </div>
                        </div>
                        <div className="content">
                              <h4>Contribuer</h4>
                              <div className="lien">
                                    <Linkfooter to="/Contact">Faire des suggestion</Linkfooter>
                                    <Linkfooter to="/Contact">Signaler un problème</Linkfooter>
                              </div>
                        </div>
                        <div className="content">
                              <h4>Title</h4>
                              <div className="lien">
                                    <Linkfooter>Facebook</Linkfooter>
                                    <Linkfooter>Twitter</Linkfooter>
                                    <Linkfooter>Youtube</Linkfooter>
                                    <Linkfooter>Linkedin</Linkfooter>
                              </div>
                        </div>
                </div>
                <p className="texte-footer mb-3">Copyright@2022 Art Charlot Allright reserved</p>
                <div className="mb-3 mx-2">
                  Created by 
                  <a
                      href="https://charlot-dedjinou.vercel.app"
                      className="fw-bold text-white text-decoration-none"
                  >
                  Charlot DEDJINOU</a>
                  </div>
         </footer>
    )
}