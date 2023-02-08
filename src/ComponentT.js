//import area
import ComponentU from './ComponentU'
//function defination area
function ComponentT(){
    //every function should return something

    return(
        <div className = "comp-t">
            <textarea rows = "10" cols= "50" className = "text-area-style" >Text area provides some space to write something by your own. Write something here:-</textarea>
        <ComponentU />
        </div>
    )
}
//export area
export default ComponentT;