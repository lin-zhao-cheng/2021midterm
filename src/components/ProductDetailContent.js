import down from '../images/small-download-ico.png';
import favor from '../images/small-favor-ico.png';
import like from '../images/small-like-ico.png';
import view from '../images/small-view-ico.png';
import Blike from '../images/pddel-like-big-ico.png';
import Bfavor from '../images/pddel-favor-big-ico.png';

import { Link } from 'react-router-dom';
import { Select } from 'antd';
import { Image } from 'antd';
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}





function ProductDetailContent({ product }) {  
    return (
        <div className="pddel-content-big">
            <Link to='/Maps'className="back-block">
                 <div className="back-bottom"></div>
                <div className="back-text">BACK</div>                        
            </Link>
            <div className="pddel-content">
                <div className="pddel-img-block">

                    <Image.PreviewGroup>
                     <Image alt="" className="pddel-main-image" src={product.image}/> 
                        <div className="pddel-small-img-block">
                                <Image  alt="" className="pddel-small-image" src={product.dtlimg01}/> 
                                <Image alt="" className="pddel-small-image" src={product.dtlimg02}/> 
                                <Image alt="" className="pddel-small-image" src={product.dtlimg03}/> 
                        </div>
                    </Image.PreviewGroup>
                     

                </div>
                <div className="pddel-text-block">
                    <div className="pddel-text-title">{product.title}</div>
                    <div className="pddel-text-intro">{product.intro}</div>
                    <div className="pddel-text-maker-area">
                        <img alt="" className="pddel-text-maker-img" src={product.makerimg}></img>
                        <div className="pddel-text-maker-name">{product.maker}</div>
                    </div>
                    <div className="pddel-text-list">
                        <div className="pddel-text-list-area">
                            <img className="pddel-text-list-ico" src={view}></img>
                            <div className="pddel-text-list-num">{product.view}</div>
                        </div>
                        <div className="pddel-text-list-area">
                            <img className="pddel-text-list-ico" src={like}></img>
                            <div className="pddel-text-list-num">{product.good}</div>
                        </div>
                        <div className="pddel-text-list-area">
                            <img className="pddel-text-list-ico" src={favor}></img>
                            <div className="pddel-text-list-num">{product.favorite}</div>
                        </div>
                        <div className="pddel-text-list-area">
                            <img className="pddel-text-list-ico" src={down}></img>
                            <div className="pddel-text-list-num">{product.download}</div>
                        </div>
                        
                    </div>
                    <div className="pddel-text-choose">
                        <div className="pddel-text-choose-area">
                            <div className="version-block">
                                <div className="version-text">Version:</div>
                                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>
                                        Disabled
                                    </Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>

                            </div>
                            <div className="edition-block">
                                <div className="edition-text">Edition:</div>
                                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>
                                            Disabled
                                        </Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                            </div>                            
                        </div>

                        <div>
                            <img src={Blike} alt="" className="pddel-like-bottom"/>
                            <img src={Bfavor} alt="" className="pddel-favor-bottom"/>                            
                        </div>

                    </div>
                    <div className="pddel-text-bottom">
                        <h1>ADD TO BAG</h1>
                    
                    </div>
                </div>
            </div>

        </div>

   
    );
 }
 
 export default ProductDetailContent;