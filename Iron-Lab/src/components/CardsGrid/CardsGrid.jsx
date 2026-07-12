import Card from "../Card/Cards";
import "./CardsGrid.css"
import peito from "../../assets/peito.png"
import costas from "../../assets/costas.png"
import abdomen from "../../assets/abdomen.png"
import biceps from "../../assets/biceps.png"
import triceps from "../../assets/triceps.png"
import ombro from "../../assets/ombro.png"
import perna from "../../assets/perna.png"
import mobilidade from "../../assets/mobilidade.png"

function CardsGrid() {

    return(
        <section className="cards-grid">
            <Card 
                titulo="Peito" 
                imagem={peito}
                link="/grupo/peito"
            />
            <Card 
                titulo="Costas" 
                imagem={costas}
                link="/grupo/costas"
            />
            <Card 
                titulo="Abdômen" 
                imagem={abdomen}
                link="/grupo/abdomen"
            />
            <Card 
                titulo="Bíceps" 
                imagem={biceps}
                link="/grupo/biceps"
            />
            <Card 
                titulo="Tríceps" 
                imagem={triceps}
                link="/grupo/triceps"
            />
            <Card 
                titulo="Ombro" 
                imagem={ombro}
                link="/grupo/ombro"
            />
            <Card 
                titulo="Perna" 
                imagem={perna}
                link="/grupo/perna"
            />
            <Card 
                titulo="Mobilidade" 
                imagem={mobilidade}
                link="/grupo/mobilidade"
            />
        </section>
    )
}

export default CardsGrid;