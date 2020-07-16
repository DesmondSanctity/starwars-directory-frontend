import React, { Component } from 'react'
//stylesheet
import "../../styles/sass/details.scss";

export default class PeopleDetail extends Component {
    render() {

        const { people } = this.props;

        return (
            <div className='card'>
              <ul className="card-head">
                <li className="card-list">Name: {people.name}</li>
                <br></br>
                <li className="card-list">Gender: {people.gender}</li>
                <br></br>
                <li className="card-list">Mass: {people.mass}</li>
                <br></br>
                <li className="card-list">Height: {people.height}</li>
                <br></br>
                <li className="card-list">Skin Color: {people.skin_color}</li>
                <br></br>
                <li className="card-list">Eye Color: {people.eye_color}</li>
                <br></br>
                <li className="card-list">Home world: {people.homeworld}</li>
                <br></br>
                <li className="card-list">Films:
                {people.films.map((film, i) => <div key={i}><a href={film}>{film}</a></div>)
                } </li>
                <br></br>
                <li className="card-list">Species:
                {people.species.map((specie, i) => <div key={i}><a  href={specie}>{specie}</a></div>)
                } </li>
                <br></br>
                <li className="card-list">Starships:
                {people.starships.map((starship, i) => <div key={i}><a  href={starship}>{starship}</a></div>)
                } </li>
                <br></br>
                <li className="card-list">Vehicles:
                {people.vehicles.map((vehicle, i) => <div key={i}><a  href={vehicle}>{vehicle}</a></div>)
                } </li>
                <br></br>
              </ul>
            </div>
        )
    }
}
