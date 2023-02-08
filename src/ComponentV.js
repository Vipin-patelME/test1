//import area
import ComponentW from './ComponentW'
//function defination area
function ComponentV(){
    //every function should return something
    return(
        <div>
            <ol className = "news-headlines">
                <li>Microsoft unveils upgraded ChatGPT-powered Bing search, Edge browser to rival Google.</li>
                <li>Bing search is using an upgraded version of AI technology that underpins chatbot ChatGPT.</li>
                <li>The technology is developed by OpenAI, the maker of ChatGPT.</li>
                <li>Microsoft unveiled these updates a day after Google unveiled Bard, its ChatGPT rival.</li>
            </ol>
            <ComponentW />
        </div>
    )
}
//export area
export default ComponentV;