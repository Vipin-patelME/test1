//import area
import ComponentI from './ComponentI'
//function defination area
function ComponentH (){
    //every function should return something

    return(
        <>
            <div className = 'comp-h d-flex flex-column justify-content-center'>
                <h1>We are here to help you</h1>
                <button className = " call-now btn btn-primary">Call Now</button>
                <ComponentI />
            </div>
        </>
    )
};
//export area
export default ComponentH;