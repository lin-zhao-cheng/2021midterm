import down from '../images/small-download-ico.png';
import favor from '../images/small-favor-ico.png';
import like from '../images/small-like-ico.png';
import view from '../images/small-view-ico.png';

export default function ProductItem( { product }) {
    return (
    //   <section className="col-md-6 col-lg-4 pt-4 p-md-3 p-lg-4">
        <div className="pd-block">
            <img  src={product.image} alt={product.name} className="pd-img"/>
            <div className="pd-text-block">
                <div className="pd-text-title">{product.title}</div>
                {/* <div className="pd-text-intro">{product.intro}</div> */}
                <div className="pd-text-maker">By {product.maker}</div>
                <div className="pd-text-bottom-area">
                    <div className="pd-text-bottom-view ff">
                        <img src={view} alt="view"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.view}</div>
                    </div>
                    <div className="pd-text-bottom-like ff">
                        <img src={like} alt="like"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.good}</div>
                    </div>
                    <div className="pd-text-bottom-favor ff">
                        <img src={favor} alt="favor"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.favorite}</div>
                    </div>
                    <div className="pd-text-bottom-down ff">
                        <img src={down} alt="down"className="pd-text-bottom-icon"/>
                        <div className="pd-text-bottom-num">{product.download}</div>
                    </div>
                </div>
            </div>
            {/* <a href="/">
                <img className="w-100"
                    src={product.image}
                    alt={product.name} />
            </a>
            <div className="p-4">
                <h6 className="text-white opacity-2 mb-1">
                    {product.category}
                </h6>
                <h5 className="text-white mb-3">
                    {product.name}
                </h5>
                <p className="text-white opacity-3 mb-3">
                  {product.description}
                </p>
                <div className="d-flex justify-content-between">
                    <a href="/" className="text-decoration-none text-color-1">
                        See More
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span
                        className="text-white opacity-3">
                        USD {product.price}.00
                    </span>
                </div>
            </div> */}
        </div>
     // </section>
    );
  }