import { useParams } from "react-router-dom";
import Productdata from "./productdata";

export default function Detail(){

    const {idproduct}=useParams()
    const product=Productdata()[idproduct-1]
    return(
        <section className="details">
            <div className="productdetail">
                <img src={product.img} alt=""/>
                <div className="productinfo">
                    <p><span>Name</span> :{"  "+product.name[0].toUpperCase()+product.name.slice(1)}</p>
                    <p><span>Price</span> :{"  "+product.price+" $"}</p>
                    <p><span>Detail</span> :<i className="p">{"  "+product.detail}</i></p>
                </div>
           </div>
        </section>
    )
}