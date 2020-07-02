import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/safety-badge.css'
import Mask from "../img/mask.svg"
import Check from '../img/check.svg'
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Button from "react-bootstrap/Button"
import Tooltip from "react-bootstrap/Tooltip"

function renderTooltip(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            FLAP Approved Safety Standards
        </Tooltip>
    )
}

const Example = () => (
    <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
        <span id="safety-badge">
            <img id="mask" className="img arrImg" src={Mask}/>
            <img id="check" className="img arrImg" src={Check}/>
        </span>
    </OverlayTrigger>
)

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
