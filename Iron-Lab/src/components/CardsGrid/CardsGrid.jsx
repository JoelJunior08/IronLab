import Card from "../Card/Cards";
import "./CardsGrid.css"

function CardsGrid() {

    return(
        <section className="cards-grid">
            <Card titulo="Costas"></Card>
            <Card titulo="Peito"></Card>
            <Card titulo="Abdômen"></Card>
            <Card titulo="Bíceps"></Card>
            <Card titulo="Tríceps"></Card>
            <Card titulo="Ombro"></Card>

        </section>
    )
}

export default CardsGrid;