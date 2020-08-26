import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React, { Component } from 'react';


function Hermes(props) {
   
    return (
        <Col lg={4} md={4} sm={4}>

            <Card>
                <Card.Img onClick={props.click} alt="Hermes" src="/images/characters/Hermes.png" height="400" width="200" />
            </Card>

        </Col>
    )

}
export default Hermes