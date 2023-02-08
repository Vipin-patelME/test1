// import area
import ComponentP from './ComponentP'
//function defination area
function ComponentO (){
    //every function should return something
    return (
        <>
        <div className = "Comp-o">
            <select className = "Select-comp">
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
                <option>BiSexual</option>
            </select>
            
        </div>
        <ComponentP />
        </>
    )
}
//export area
export default ComponentO;