import AdvantageArt from "./AdvantageArt"
import AdvantageData from "./AdvantadeData"

export default function ImportanceArt(){
    const importances=AdvantageData().map(item=>{
        return <AdvantageArt {...item} />
    })
    return(
        <section className="importanceArt">
            <div className="title">
                <span></span><h1>Why Art?</h1><span></span>
             </div>
             <div className="importances">
                {importances}
             </div>
        </section>
    )
}