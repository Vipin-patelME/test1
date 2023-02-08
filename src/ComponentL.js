//import area
import ComponentM from './ComponentM'
//function defination area
function ComponentL(){
    //every function should return something
    return(
        <div>
            <ol className = "order-list">
                <li>Learning is a best habit in you whole life</li>
                <li>Learning has no end</li>
                <li>Learner never get defeat</li>
            </ol>
            <ComponentM />
        </div>
    )
}
//export area
export default ComponentL;