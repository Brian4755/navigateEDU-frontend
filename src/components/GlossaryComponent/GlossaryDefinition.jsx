import "./GlossaryDefinition.css"

import browserImg from "../../images/Browser.png"
import urlImg from "../../images/URL.png"
import hyperLinkImg from "../../images/Hyperlink.png"
import searchEngineImg from "../../images/SearchEngine.png"
import softwareImg from "../../images/Software.png"
import programImg from "../../images/Program.png"
import websiteImg from "../../images/Website.png"
import tabsImg from "../../images/Tabs.png"
import bookmarksImg from "../../images/Bookmarks.png"
import bButtonImg from "../../images/BackButton.png"
import fButtonImg from "../../images/ForwardButton.png"
import refreshImg from "../../images/Refresh.png"
import historyImg from "../../images/History.png"

const GlossaryDefinition = (props) => {
    let Gdefinitions = {
        Browser: "A software Program that lets you view digital content on the internet.",
        URL: 'The address that identifies a webpage on the internet. It usually starts with "http://" or "https://" followed by the domain name and specific page.',
        Hyperlink: "A clickable link on a webpage that redirects users to another webpage or resource when clicked.",
        "Search Engine": "A clickable link on a webpage that redirects users to another webpage or resource when clicked.",
        Software: "The programs, applications, and other operating information used by a computer.",
        Program: "A series of coded software instructions to control the operation of a computer or other machine. Sometimes also referred to as an application.",
        Website: "A collection of webpages and related content accessible through a specific domain or URL.",
        Tabs: "A second or further document or page that can be opened on your web browser.",
        Bookmarks: 'A method of saving the address of a web page. Sometimes they are referred to as “favorites".',
        "Back Button": "A common web browser feature that navigates to the previous web page you were on.",
        "Forward Button": 'The Forward button becomes active after you use the Back button. This functions as an easy way to return back to the page you were on before you clicked the “back” button.',
        Refresh: "A way to reload or update what is being displayed or stored in your browser. For example, if you are on a web page, refreshing the page asks the site to send your computer the newest version of the page you're viewing.",
        History: "A list of web sites that you have visited recently. If you can’t remember the address of a page you visited yesterday, you can open the history and locate it quickly.",
    }

    let imagePaths = {
        Browser: browserImg,
        URL: urlImg,
        Hyperlink: hyperLinkImg,
        "Search Engine": searchEngineImg,
        Software: softwareImg,
        Program: programImg,
        Website: websiteImg,
        Tabs: tabsImg,
        Bookmarks: bookmarksImg,
        "Back Button": bButtonImg,
        "Forward Button": fButtonImg,
        Refresh: refreshImg,
        History: historyImg,
    }

    return (
        <div className="glossary-component">
            <h1>{props.definitions}</h1>
            <p>{Gdefinitions[props.definitions]}</p>
            <img src={imagePaths[props.definitions]} alt="background img" className="glossaryBG" />
        </div>
    )
}

export default GlossaryDefinition



// const backgroundImage = {
    //     backgroundImage: `url(${imagePaths.d})`,
    //     border: "1px solid red",
    //     backgroundSize: "100px",
    //     height: "100%",
    //     width: "100%"
    // } style={backgroundImage}

    //<div className="glossary-component">
    // < h1 > { props.definitions }</ >
    //   <p>{Gdefinitions[props.definitions]}</p>
    //   <img src={imagePaths[props.definitions]} alt="123" height="50px" width="50px" />
    // </div >



//  < img src = { require({ imagePaths[props.definitions]}) } alt = "123" height = "50px" width = "50px" />




// import BrowserImage from '../../images/Browser.png';
// import URLImage from '../../images/URL.png';
// import HyperlinkImage from '../../images/Hyperlink.png';

//let imagePaths = {
// Browser: BrowserImage,
// URL: URLImage,
// Hyperlink: HyperlinkImage,



//let imagePaths = {
// Browser: "../../images/Browser.png",
// URL: "../../images/URL.png",
// Hyperlink: "../../images/Hyperlink.png",
// "Search Engine": "../../images/SearchEngine.png",
// Software: "../../images/Software.png",
// Program: "../../images/Program.png",
// Website: "../../images/Website.png",
// Tabs: "../../images/Tabs.png",
// Bookmarks: "../../images/Bookmarks.png",
// "Back Button": "../../images/BackButton.png",
// "Forward Button": "../../images/ForwardButton.png",
// Refresh: "../../images/Refresh.png",
// History: "../../images/History.png",
// }



// return (
//     <div className="glossary-component">
//         <h1>{props.definitions}</h1>
//         <p>{Gdefinitions[props.definitions]}</p>
//         <img src={require('../../images/Browser.png')} alt="123" height="50px" width="50px" />
//     </div>
// )