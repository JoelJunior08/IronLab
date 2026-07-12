import "./Cards.css";

function Card ({ titulo, imagem }){

return (
    <div className="card">
        <h2>{titulo}</h2>
        <img src={imagem} alt={titulo} />
    </div>
);
}
export default Card;