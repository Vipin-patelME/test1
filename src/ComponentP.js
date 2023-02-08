//import area
import ComponentQ from './ComponentQ'
//function area
function ComponentP(){
    //every function should return something
    return(
        <>
        <div className = "comp-o">
            <div>
                <input className = "rdo-btn" id = "yes" type = "radio" name = "choice"/>
                <label  htmlFor = "yes" className = "lables">Yes</label>
            </div>
            <div>
                <input id = "no" type = "radio" name = "choice"/>
                <label  htmlFor = "no" className = "lables">No</label>
            </div>
        </div>
        <ComponentQ />
        </>
    );
};
//export area
export default ComponentP;