import "./style-components/hero-style.css";
import hero from "../../images/flags-hero.png"

export default function Hero () {
    return (
        <div className="hero">
            <img src={hero} alt=""/>
            <h1>Countries Flags</h1>
            <p>Gallery of Countries Flags sorted by Alphabet</p>
        </div>
    )
}