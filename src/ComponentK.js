//import area
import ComponentL from './ComponentL'

//function defination area
function ComponentK (){
    //every function should return something 
    return(
        <div>
            <ul className = "comp-k-list">
                <li>Wakeup erly in the morning</li>
                <li>Doing workout after getting fresh</li>
                <li>Have some break fast</li>
            </ul>
            <h1 className = "learning-head">Something about Learning</h1>

            <ComponentL />
        </div>
    )
}
//export area
export default ComponentK;