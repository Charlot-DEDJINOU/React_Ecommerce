export default function Newsletter(){

    function submit(e){
        e.preventDefault()
        document.getElementById("text").value=""
    }
    return(
        <section className="section-newsletter" data-aos="fade-up" data-aos-duration="1500" data-aos-easinf="linear">
            <div className="newsletter">
                <div className="newsletter-container">
                    <p className="newsletter-text">Souscrivez à nos newsletter</p>
                    <form className="newsletter-form" onSubmit={submit}>
                        <input type="email" placeholder="example@gmail.com" required id="text"/>
                        <input type="submit" value="S'abonner" />
                    </form>
                </div>
            </div>
        </section>
    )
}
