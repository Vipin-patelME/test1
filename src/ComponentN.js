// import area
import ComponentO from './ComponentO'
//function defination area
function ComponentN (){
    //every funtion should return somethig
    return(
        <>
        <div className = "comp-n">
            <form>
                <label htmlFor = "name-input" className = "name">First Name</label>
                <input id = "name-input" type = "text" />
                <br />
                <label htmlFor = "last-name" className = "name">Last Name</label>
                <input id = "last-name" type= "text" />
                <br />
                <label htmlFor = "contact-no" className = "name">Contact No</label>
                <input id = "contact-no" type= "number" />
                <br />
                <button type = "button" className = "btn btn-success">Register</button>
            </form>
            
        </div>
        <ComponentO />
        </>
    )
}
//export area
export default ComponentN;