import Mybagbom from "../images/mybagbom.png"
import Mybagimg from "../images/shopbag.png"


export default function MybagContent({title}) {
    return (
        <div>
            <div className="mybag-title">My Bag</div>
            <div className="mybag-content mybag-flex">
                <img src={Mybagimg} className="mybag-img"></img>
            </div>
            <div><img src={Mybagbom} className="mybag-bomimg"></img></div>
            <div className="mybag-bomimg-color"></div>
       </div>
    );
 }