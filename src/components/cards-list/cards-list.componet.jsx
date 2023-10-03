import { Component } from "react";
import "./cards-list.style.css";
import Card from "../card/card.component";

class CardsList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return <Card monster={monster} />;
                })}
            </div>
        );
    }
}

export default CardsList;