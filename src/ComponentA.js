//import area
import ComponentB from "./ComponentB";
import './App.css'

//function defination area
function ComponentA (){

    //every function return something
    return <div className="d-flex flex-column justify-content-center">
        <h1 className="comp-A">Hello from component A</h1>
        <ComponentB />
        </div>
};

//export area
 export default ComponentA;