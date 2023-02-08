//import area
import ComponentT from './ComponentT'
//function defination area
function ComponentS(){
    //every function should return something
    return(
        <div className = "container">
            <h1 className = "comp-s-head">Table of Content</h1>
            <div className = "row">
                <div className = "col col-style">Name</div>
                <div className = "col col-style">Age</div>
                <div className = "col col-style">DOB</div>
                <div className = "col col-style">Status</div>
            </div>
            <ComponentT />
        </div>
    )
}
//export area
export default ComponentS;