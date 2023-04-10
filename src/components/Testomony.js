export default function Testomony(props){
   
    return(
        <div className="testomony">
              <img src={props.img} alt=""/>
              <h3>{props.name}</h3>
              <p className="job">{props.job}</p>
              <p className="commentaire">{props.commentaire}</p>
              <p>{props.etoile===4 ? <span className="etoile">☆☆☆☆</span> :<span className="etoile">☆☆☆☆☆</span>}</p>
        </div>
    )
}