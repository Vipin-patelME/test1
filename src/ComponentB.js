//import area
import ComponentC from "./ComponentC";
//function defination area
function ComponentB (){
    //every function should return something
    return(
    <>
    <h1 className="comp-B">Hello from component B</h1>
    <ComponentC />
    </>);
};

//export area
export default ComponentB;