//import area
import ComponentV from './ComponentV'

//function defination area
function ComponentU(){
    //every function should return something
    return(
        <div className = "comp-u">
            <h1 className = "todays-news">News:-</h1>
            <h2>Headlines-</h2>
            <ComponentV />
        </div>
    )
}
//export default
export default ComponentU;