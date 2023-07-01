export default function Newsletter() {

    function submit(e) {
        e.preventDefault()
        document.getElementById("text").value = ""
    }
    return (
        <section style={{backgroundColor : "rgb(6, 198, 6)" , height : "auto" , minHeight : "250px"}} className="container mt-5 d-flex flex-column align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1500" data-aos-easinf="linear">
            <p className="fw-bold text-white newsletter-p">Souscrivez à nos newsletter</p>
            <form className="newsletter-form" onSubmit={submit}>
                <input type="email" placeholder="example@gmail.com" required id="text" className="container"/>
                <input type="submit" value="S'abonner" className="mt-2"/>
            </form>
        </section>
    )
}