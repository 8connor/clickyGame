import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React, { Component } from 'react';

function Fry(props) {
   
    return (
        <Col lg={4} md={4} sm={4}>

            <Card>
                <Card.Img onClick={props.click} alt="Fry" src="/images/characters/fry.png" height="400" width="200" />
            </Card>

        </Col>
    )

}

export default Fry