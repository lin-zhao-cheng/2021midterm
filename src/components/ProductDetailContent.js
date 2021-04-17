import down from '../images/small-download-ico.png';
import favor from '../images/small-favor-ico.png';
import like from '../images/small-like-ico.png';
import view from '../images/small-view-ico.png';


function ProductDetailContent({ product }) {  
    return (
        <div className="pddel-content">
                <div className="pddel-img-block">
                     <img alt="" className="pddel-main-image" src={product.image}/> 
                     <div className="pddel-small-img-block">
                            <img alt="" className="pddel-small-image" src={product.dtlimg01}/> 
                            <img alt="" className="pddel-small-image" src={product.dtlimg02}/> 
                            <img alt="" className="pddel-small-image" src={product.dtlimg03}/> 
                     </div>

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
                    <div className="pddel-text-choose"></div>
                    <div className="pddel-text-bottom"></div>
                </div>


        </div>

    //    <Row gutter={[32, 32]}>
    //      <Col 
    //        lg={{ span: 8, offset: 2 }}
    //      >
    //       <img
    //          alt=""
    //          className="product-image"
    //          src={product.image}
    //       />           
    //      </Col>
    //      <Col 
    //        lg={{ span: 12 }}
    //      >
    //       <div className="product-info--detail">
    //          <h2 className="product-category">
    //             {product.category}
    //          </h2>
    //          <h1 className="product-name product-name--large">
    //             {product.name}
    //          </h1>
    //          <p className="product-description">{product.description_long}</p>
    //          <div className="product-price-wrap">
    //             <p className="product-price product-price--large">
    //                US${product.price}.00
    //             </p>
    //             <AddToCart />
    //          </div>
    //       </div>           
    //      </Col>
    //    </Row>
    );
 }
 
 export default ProductDetailContent;