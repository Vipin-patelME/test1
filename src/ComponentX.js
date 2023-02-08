//import area
import ComponentY from './ComponentY'

//function defination area
function ComponentX(){
    //every function should return something
    return(
    <>
        <p className = "news-details">Microsoft has announced that its Edge browser and Bing search engine now leverage the power of AI (artificial intelligence) to "deliver better search, more complete answers, a new chat experience, and the ability to generate content." Bing search is using an upgraded version of AI technology that underpins ChatGPT. The technology is developed by OpenAI, the maker of ChatGPT. Microsoft unveiled these updates a day after Google unveiled Bard, its ChatGPT rival. Bard uses Google's own language model called LaMDA, while ChatGPT leverages the GPT 3 module.</p>
        <ComponentY />
    </>
    )
}

//export area
export default ComponentX;