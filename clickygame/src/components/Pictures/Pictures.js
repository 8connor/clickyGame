import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Fry from "../Characters/Fry";
import Leela from "../Characters/Leela";
import Bender from "../Characters/Bender";
import Amy from "../Characters/Amy";
import Hermes from "../Characters/Hermes";
import Professor from "../Characters/Professor";
import Zoidberg from "../Characters/Zoidberg";
import React, { Component } from 'react';
import "./pictures.css";

class Pictures extends Component {

    shuffle = (charArr) => {
        charArr.sort((a, b) => {
            return 0.5 - Math.random();
        })



        return charArr
    }

    handleClick = (e) => {
        e.preventDefault();


        this.shuffle(this.state.charArr);


        console.log(e.target.alt)

        if (e.target.alt === "Fry") {
            this.state.Fry = true
            console.log(this.state.Fry)
        } if (e.target.alt === "Leela") {
            this.state.Leela = true
            console.log(this.state.Leela)
        } if (e.target.alt === "Amy") {
            this.state.Amy = true
            console.log(this.state.Amy)
        } if (e.target.alt === "Zoidberg") {
            this.state.Zoidberg = true
            console.log(this.state.Zoidberg)
        } if (e.target.alt === "Professor") {
            this.state.Professor = true
            console.log(this.state.Professor)
        } if (e.target.alt === "Hermes") {
            this.state.Hermes = true
            console.log(this.state.Hermes)
        }if (e.target.alt === "Bender") {
            this.state.Bender = true
            console.log(this.state.Bender)
        }

        this.forceUpdate()
    }

    state = {
        charArr: [
            <Fry click={this.handleClick} />,
            <Leela click={this.handleClick} />,
            <Zoidberg click={this.handleClick} />,
            <Amy click={this.handleClick} />,
            <Professor click={this.handleClick} />,
            <Hermes click={this.handleClick} />,
            <Bender click={this.handleClick} />
        ],
        Fry: false,
        Leela: false,
        Zoidberg: false,
        Amy: false,
        Professor: false,
        Hermes: false,
        Bender: false
    }




    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.charArr
                    }
                </Row>
            </Container>
        );
    }
}


export default Pictures