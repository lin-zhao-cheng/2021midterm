import Logout from "../images/log-out.png"

export default function MemberProfile({title}) {
    return (
       <div className="member-content">
           <div className="member-content-iner">
                <div>
                    <div className="member-img">
                        <div className="member-name-bg">
                            <div className="member-name">陳彥融</div>
                        </div>
                        
                    </div>
                    <div className="member-nav">
                        <img src={ Logout} alt="" className="logout-img"></img>
                    </div>
                </div>
           </div>
       </div>
    );
 }