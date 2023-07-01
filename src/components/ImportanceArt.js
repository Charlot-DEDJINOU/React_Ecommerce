import AdvantageArt from "./AdvantageArt"
import AdvantageData from "./AdvantadeData"

export default function ImportanceArt(){
    const importances=AdvantageData().map(item=>{
        return <AdvantageArt {...item} key = {item.id} />
    })
    return(
        <section className="importanceArt">
            <div className="title">
                <span></span><h1 style={{fontSize : "4vmin"}}>Why Art?</h1><span></span>
             </div>
             <div className="d-flex flex-wrap align-items-center justify-content-evenly py-25">
                {importances}
             </div>
        </section>
    )
}