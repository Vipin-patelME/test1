//import are
import ComponentJ from './ComponentJ';
import './App.css'
//function definantion area
function ComponentI (){
    //every function should return something
    return(
        <div>
            <p className = "comp-i-para">Nothing to worry <span className = "comp-i-span">You are at initial phase</span></p>
            <ComponentJ />
        </div>
    )
}
//export area
export default ComponentI;