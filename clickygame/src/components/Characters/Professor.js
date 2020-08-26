import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React, { Component } from 'react';



function Professor(props) {
   
    return (
        <Col lg={4} md={4} sm={4}>

            <Card>
                <Card.Img onClick={props.click} alt="Professor" src="/images/characters/professor.png" height="400" width="200" />
            </Card>

        </Col>
    )

}
export default Professor