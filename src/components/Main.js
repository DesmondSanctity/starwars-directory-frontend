import React from "react";
import { Redirect } from "react-router-dom";

//import components
import { Card, Button, CardColumns } from "react-bootstrap";

//import images
import Logo from "../images/Logo";

//stylesheet
import "../styles/sass/main.scss";
import "../styles/sass/breakpoints.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      redirect: false,
      goto: false,
      somewhere: false,
    };
  }
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/people" />;
    }
  };
  goTo = () => {
    this.setState({
      goto: true,
    });
  };
  handleClick = () => {
    if (this.state.goto) {
      return <Redirect to="/planets" />;
    }
  };
  goSomewhere = () => {
    this.setState({
      somewhere: true,
    });
  };
  keyPress = () => {
    if (this.state.somewhere) {
      return <Redirect to="/starships" />;
    }
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <Logo />
        </header>
        <CardColumns>
          <Card bg="info">
            <Card.Body>
              <Card.Title>People</Card.Title>
              {this.renderRedirect()}
              <Button className="btn-style" onClick={this.setRedirect}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
          <Card bg="danger">
            <Card.Body>
              <Card.Title>Planets</Card.Title>
              {this.handleClick()}
              <Button className="btn-style" onClick={this.goTo}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
          <Card bg="warning">
            <Card.Body>
              <Card.Title>Starships</Card.Title>
              {this.keyPress()}
              <Button className="btn-style" onClick={this.goSomewhere}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </CardColumns>
        <div className="tagline">
          Built and designed for Front-end Developer Test{" "}
          <a href="www.https://github.com/random-guys/swapi-frontend-developer-test/">
            on Github
          </a>
          ,<a href="https://swapi.dev">using the starwars Api.</a>
        </div>
      </div>
    );
  }
}

export default Main;
