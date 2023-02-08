//import area
import ComponentS from './ComponentS'
//function defination area
function ComponentR(){
    //every function should return something
    return(
        <>
            <p className = "intro-para">I am feeling tired right now,
                i need something to eat
            </p>
            <ComponentS />
        </>
    )
}
//export area
export default ComponentR;