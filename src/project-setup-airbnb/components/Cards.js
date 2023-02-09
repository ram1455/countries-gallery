import "./style-components/cards-style.css"
import star from "../../images/Star 1.png"
import noflag from "../../images/no-image-flag-default.png"



export default function Cards ({item}) {
    return (
        <div className="cards">
            <img className="country-flag" src={item.flag ? item.flag : noflag} alt=""/>
            <h1 className="country-name">{item.name}</h1>
            <p className="country-code">{item.code ? "#"+item.code : ''}</p>
            {/* <a target={"_blank"} href={item.flag}>full flag image</a> */}
        </div>
    )
}




            // <div className="rating">
            // <img className="star" src={star} alt="" />
            // <p className="rating-point">{item.stats.rating}</p>
            // <p className="rating-from">({item.stats.reviewCount}).{item.location}</p>
            // </div>

            // <div>
            //     <p className="title">{item.title}</p>
            //     <p className="description">{item.description}</p>
            //     <p className="from"> <span className="price">From ${item.price}</span> / person</p>
            // </div>





