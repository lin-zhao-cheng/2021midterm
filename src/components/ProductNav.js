import All from '../images/all-ico.png';
import Trending from '../images/trending-ico.png';
import Latest from '../images/latest-ico.png';
import View from '../images/view-ico.png';
import Download from '../images/download-ico.png';




export default function ProductNav({title}) {
    return (
        
        <div className="pnav-bar">
            <div className="pnav-search">
                <div className="pnav-search-block">
                    <img src={All} alt="All" className="pnav-search-img"></img>
                    <div className="pnav-search-text">ALL</div>
                </div>
                <div className="pnav-search-block">
                    <img src={Trending} alt="Trending" className="pnav-search-img  f01"></img>
                    <div className="pnav-search-text">TRENDING</div>
                </div>
                <div className="pnav-search-block">
                    <img src={Latest} alt="Latest" className="pnav-search-img f02"></img>
                    <div className="pnav-search-text">LATEST</div>
                </div>
                <div className="pnav-search-block">
                    <img src={View} alt="View" className="pnav-search-img"></img>
                    <div className="pnav-search-text">VIEWS</div>
                </div>
                <div className="pnav-search-block">
                    <img src={Download} alt="Download" className="pnav-search-img"></img>
                    <div className="pnav-search-text">DOWNLOADS</div>
                </div>

            </div>
        </div>

    );
 }