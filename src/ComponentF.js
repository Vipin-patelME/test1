//import area
import ComponentG from './ComponentG'
//function defination area
 function ComponentF (){
    //every function should return something

    return(
        <>
            <h5 className = "comp-f" >Hello from component F</h5>
            <ComponentG />
        </>
    );
 };
//export area
export default ComponentF;