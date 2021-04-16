import { Carousel } from 'antd';
import c01 from '../images/co1.png';
import c02 from '../images/co2.png';
import c03 from '../images/co3.png';
import c04 from '../images/co4.png';
import logo from '../images/big-logo.png';
import maps from '../images/maps.png';
import packs from '../images/texurepacks.png';
import mods from '../images/mods.png';

const contentStyle = {
    height: '411px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default function Content({title}) {
    return (
       <div className="content">
           <div className="content-news">
               <div className="contentnews-title">NEWS</div>
               <div className="contentnews-carousel">
                    <Carousel autoplay>
                        <div>
                        <h3 style={contentStyle}><img src={c01} alt="c01" className="carousel-img"></img></h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}><img src={c02} alt="c02" className="carousel-img"></img></h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}><img src={c03} alt="c03" className="carousel-img"></img></h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}><img src={c04} alt="c04" className="carousel-img"></img></h3>
                        </div>
                    </Carousel>,
               </div>
           </div>

           <div className="content-shop">
               <div className="content-between"></div>
               <div className="cshop-area">
                   <div className="cshop-box">
                        <img src={maps} alt="maps" className="cshop-img "></img>
                        <div className="cshop-masks"><div>MAPS</div></div>
                   </div>
                   <div className="cshop-box">
                       <img src={packs} alt="packs" className="cshop-img "></img>
                       <div className="cshop-masks"><div >Texture Packs</div></div>
                   </div>
                   <div className="cshop-box">
                        <img src={mods} alt="mods" className="cshop-img "></img>
                        <div className="cshop-masks"><div>Mods</div></div>
                   </div>
                   
               </div>
            </div>
            <div className="content-about">
                    <img src={logo} alt="logo" className="content-about-logo"></img>
                    <div className="content-about-buttom">
                        <div className="content-about-buttom-text">About us</div>
                    </div>
            </div>
       </div>
    );
 }