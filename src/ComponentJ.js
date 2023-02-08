// import area
import ComponentK from './ComponentK';
import './App.css'
// function defination area

function ComponentJ (){
    //every function should return something

    return(
        <div>
            <h1>Happy Learning</h1>
            
            <label className = "label-style" htmlFor = "text-in">Enter your name hete</label>
            <input  id = "text-in" type = "text" />
            <ComponentK />
        </div>
    )
}
// export area
export default ComponentJ;