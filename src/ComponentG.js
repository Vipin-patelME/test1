//import area
import ComponentH from "./ComponentH";
import './App.css'
//function defination area
function ComponentG(){
    //every function should return something
    return(
        <div className = "comp-g d-flex justify-content-center">
            <p>Hello from Component G</p>
            <ComponentH />
        </div>
    );
};
//export area
export default ComponentG;