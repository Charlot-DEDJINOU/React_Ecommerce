import {Carousel} from '3d-react-carousal';
import Testomony from "./Testomony"
import TestomonytData from "./TestomonyData"
var testo=[]
for(let item of TestomonytData()){
    testo.push(<Testomony {...item} />)
}

export default  function Testomonies(){
      return (
        <section className="testomonies" data-aos="fade-right" data-aos-duration="1500" data-aos-easinf="linear" >
            <div className="title">
                <span></span><h1>Testomonies</h1><span></span>
             </div>
             <div style={{width:"100%",margin:"25px"}}>
                 <Carousel slides={testo} autoplay={true} interval={5000}  />
             </div>
        </section>
        
      );
    }