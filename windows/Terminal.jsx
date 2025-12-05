
const Terminal = () => {
    return(
        <>
        <div id="window-header">
            <p>Window Controls</p>
            <h2>Tech Stack</h2>
        
        </div>
        <div className="techstack">
            <p>
                <span>@bismay %</span>
                show techstack
            </p>
            <div className="label">
                <p className="w-32">Category</p>
                <p>Technologies</p>
            </div>

            <ul></ul>

            <div className="footnote">
                <p>
                    <Check size={20}/>
                </p>
            </div>
        </div>
        </>
    )
}


export default Terminal;
