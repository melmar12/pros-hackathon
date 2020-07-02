import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/safety-badge.css'
import Mask from "../img/mask.svg"
import Check from '../img/check.svg'
import Virus from '../img/virus.svg'

import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover";

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">
            FLAP Approved Safety Standards
            {/*<img id="virus" className="img arrImg" src={Virus}/>*/}
        </Popover.Title>
        <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Content>
    </Popover>
);

const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <span id="safety-badge">
            <img id="mask" className="img arrImg" src={Mask}/>
            <img id="check" className="img arrImg" src={Check}/>
        </span>
    </OverlayTrigger>
);


export default class SafetyBadge extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (<Example/>)
    }
}
