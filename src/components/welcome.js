import { useEffect , useRef} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Typewriter from 'typewriter-effect/dist/core';

const Button = styled.button`
padding : 8px 15px ;
background-color: rgb(6, 198, 6) ;
color:white;
font-weight:600 ;
border-radius:5px ;
border :none ;
&:hover{
    background:none ;
    border:1px solid white ;
}
`
export default function Welcome() {

    const Navigate = useNavigate()

    const typewriterRef = useRef(null);

    useEffect(() => {
        const typewriter = new Typewriter(typewriterRef.current, {
            loop: true,
            delay: 50,
            deleteSpeed: 50,
        });

        typewriter
            .typeString('We present to you the paintings')
            .pauseFor(300)
            .deleteAll()
            .typeString('We present to you the imaginations')
            .pauseFor(300)
            .deleteAll()
            .typeString('We present to you the paintings, imaginations and the works of art')
            .pauseFor(300)
            .deleteAll()
            .typeString('Discover these works and you will not be disappointed')
            .pauseFor(300)
            .deleteAll()
            .typeString('Click on the green button at the bottom 👇 to discover the paintings')
            .pauseFor(300)
            .deleteAll()
            .start();

        return () => {
            typewriter.stop();
        };
    }, []);

    return (
        <section className="welcome">
            <h1 >Welcome to Art Charlot</h1>
            <div ref={typewriterRef} className="text-fit"></div>
            <Button onClick={() => { Navigate("/Products") }}><span className="shop">SHOP NOW</span></Button>
        </section>
    )
}

