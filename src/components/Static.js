import { UserContext } from "./ContextUser"
import { useContext } from "react"

export default function Static(){
    const {nombre_visiteurs,nombre_artvendus}=useContext(UserContext)

    return(
        <section className="Static">
            <div className="Static-item">
                <p className="number">{nombre_visiteurs}</p>
                <p className="texte">Nombre de visiteurs</p>
            </div>
            <div className="Static-item">
                <p className="number">{nombre_artvendus}</p>
                <p className="texte">Nombre d'arts vendus</p>
            </div>
            <div className="Static-item">
                <p className="number">145</p>
                <p className="texte">Nombre d'expositions</p>
            </div>
            <div className="Static-item">
                <p className="number">29</p>
                <p className="texte">Nombre de partenaires</p>
            </div>
        </section>
    )
}