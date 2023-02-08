//import area
import ComponentE from './ComponentE'

//function defination area
function ComponentD(){
    //every function should return something
    return(
    <>
        <h3 className="comp-D">Hello from component D</h3>
        <ComponentE />
    </>
    )
}
//export area
export default ComponentD;