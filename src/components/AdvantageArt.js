export default function AdvantageArt(props){
    return(
        <div className="importance">
                <div className="importance-title">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                    <h4>{props.name}</h4>
                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                </div>
                <p className="texte-small">{props.texte}</p>
        </div>
    )
}