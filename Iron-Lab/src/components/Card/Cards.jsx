import "./Cards.css";
import {Link} from "react-router-dom";

function Card ({ titulo, imagem, link }){

return (
    <Link to={link} className="card">
        <h2>{titulo}</h2>
        <img src={imagem} alt={titulo} />
    </Link>
);
}
export default Card;