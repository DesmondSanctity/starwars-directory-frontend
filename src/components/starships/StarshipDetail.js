import React, { Component } from 'react'
//stylesheet
import "../../styles/sass/details.scss";

export default class StarshipDetail extends Component {
    render() {

        const { starships } = this.props;

        return (
            <div className='card'>
              <ul className="card-head">
                <li className="card-list">Name: {starships.name}</li>
                <br></br>
                <li className="card-list">Model: {starships.model}</li>
                <br></br>
                <li className="card-list">Manufacturer: {starships.manufacturer}</li>
                <br></br>
                <li className="card-list">Cost: {starships.cost_in_credits}</li>
                <br></br>
                <li className="card-list">Length: {starships.length}</li>
                <br></br>
                <li className="card-list">Max Speed: {starships.max_atmosphering_speed}</li>
                <br></br>
                <li className="card-list">Passengers: {starships.passengers}</li>
                <br></br>
                <li className="card-list">Cargo: {starships.cargo_capacity}</li>
                <br></br>
                <li className="card-list">Consumables: {starships.consumables}</li>
                <br></br>
                <li className="card-list">Hyperdrive: {starships.hyperdrive_rating}</li>
                <br></br>
                <li className="card-list">MGLT: {starships.MGLT}</li>
                <br></br>
                <li className="card-list">Starship Class: {starships.starship_class}</li>
                <br></br>
                <li className="card-list">Pilots: {starships.pilots}</li>
                <br></br>
                <li className="card-list">Films:
                {starships.films.map((film, i) => <div><a key={i} href={film}>{film}</a></div>)
                } </li>
                </ul>
            </div>
        )
    }
}
