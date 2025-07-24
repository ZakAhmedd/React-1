import globeImg from "../images/globe.png";

export default function Header() {
    return (
        <header>
            <img className="globe" src={globeImg} alt="globe icon"/>
            <span className="header-text">my travel journal.</span>
        </header>
    )
}