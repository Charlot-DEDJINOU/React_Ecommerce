import Product from "./product";
import Productdata from "./productdata";

const homeproducts=Productdata().filter((f)=>f.id<5).map(produts=>{
    return <Product {...produts} />
})


export default function HomeProducts(){

    return(
        <section className="homeproducts" data-aos="fade-top" data-aos-duration="1500">
             <div className="title">
                <span></span><h1>Our Products</h1><span></span>
             </div>
             <div className="products" id="products">
                  {homeproducts}
             </div>
        </section>
    )
}