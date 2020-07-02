import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './page-title.css';
import travelLogo from './../img/travel.png'

class PageTitle extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Container className="title-body">
                <img src={travelLogo} className="travel-img"/>
            </Container>
        );
    }
}

export default PageTitle;