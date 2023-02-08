//import area
import ComponentD from './ComponentD'
import './App.css'
//function defination area
function ComponentC(){
    //function should return something 
    return (
        <>
            <h2 className='comp-c'>hello from Component C</h2>
            <ComponentD />
        </>
    ) ;
}
//export area
export default ComponentC;
