import React, { Component } from 'react'
//stylesheet
import "../../styles/sass/details.scss";

export default class PlanetDetail extends Component {
    render() {

        const { planets } = this.props;
        console.log("planets", planets);

        return (
            <div className='card'>
              <ul className="card-head">
                <li className="card-list">Name: {planets.name}</li>
                <br></br>
                <li className="card-list">Climate: {planets.climate}</li>
                <br></br>
                <li className="card-list">Period: {planets.rotation_period}</li>
                <br></br>
                <li className="card-list">Orbital: {planets.orbital_period}</li>
                <br></br>
                <li className="card-list">Diameter:{planets.diameter}</li>
                <br></br>
                <li className="card-list">Gravity: {planets.gravity}</li>
                <br></br>
                <li className="card-list">Population: {planets.population}</li>
                <br></br>
                <li className="card-list">Terrain: {planets.terrain}</li>
                <br></br>
                <li className="card-list">Surface Water: {planets.surface_water}</li>
                <br></br>
                <li className="card-list">Residents: {planets.residents}</li>
                <br></br>
                <li className="card-list"> Films:
                {planets.films.map((film, i) => <div key={i}><a href={film}>{film}</a></div>)
                } </li>
                <br></br>
              </ul>
            </div>
        )
    }
}
