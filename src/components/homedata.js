import home1 from "../assets/home1.jpg"
import home2 from "../assets/home2.jpg"
import home3 from "../assets/home3.jpg"
import home4 from "../assets/home4.jpg"
import home5 from "../assets/home5.jfif"
import home6 from "../assets/home6.jpg"
import home7 from "../assets/home7.jpg"
import home8 from "../assets/home8.webp"

export default function Homedata(){
    return([
        {
            name:"Mountain" ,
            city:"Paris" ,
            max:"150" ,
            cost:"500 £" ,
            namecom:"Romeo DuBois" ,
            commentaire:"C'est vraiment vraiment vraiment super.C'est super chic" ,
            img:home1
        } ,
        {
            name:"Bridge" ,
            city:"Tokyo" ,
            max:"150" ,
            cost:"500 £",
            namecom:"Romeo DuBois",
            commentaire:"C'est vraiment vraiment vraiment super.C'est super chic",
            img:home2
        },
        {
            name:"Mountain" ,
            city:"Angeles", 
            max:"200" ,
            cost:"700 £" ,
            namecom:"Neymar Da Silva Santos Junior", 
            commentaire:"Très efficace pour vivre des moments de joie entre potes", 
            img:home7 ,
            help:"difference"
        },
        {
            name:"River" ,
            city:"Londre" ,
            max:"50" ,
            cost:"600 £" ,
            namecom:"Agatha Christy" ,
            commentaire:"Quelle belle vue!" ,
            img:home3 
        },
        {
            name:"Camp fire" ,
            city:"Rio" ,
            max:"350" ,
            cost:"1000 £" ,
            namecom:"Angélique KIDJO" ,
            commentaire:"C'est rejouissant et réchauffant." ,
            img:home4
        },
        {
            name:"Mountain" ,
            city:"Florence" ,
            max:"30" ,
            cost:"350 £" ,
            namecom:"Serena Williams" ,
            commentaire:"La végétation est impressionnate." ,
            img:home5
        },
        {
            name:"River" ,
            city:"Montréal" ,
            max:"180" ,
            cost:"800 £" ,
            namecom:"Selena Gomez" ,
            commentaire:"On a l'impression d'être dans un royaume enchanté." ,
            img:home6
        },
        {
                name:"Mountain and lake" ,
                city:"Rêne" ,
                max:"90" ,
                cost:"400 £" ,
                namecom:"Sophie Marceau" ,
                commentaire:"C'est un endroit charmant, relaxant et accueillant." ,
                img:home8
        }
    ])
}