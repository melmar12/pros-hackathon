import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/safety-badge.css'
import Mask from "../img/mask.svg";
import Check from '../img/check.svg'

export default class SafetyBadge extends React.Component
{
    constructor(props)
    {
        super(props);
    }



    render()
    {
        return (
            <span id="safety-badge">
                <img id="mask" className="img arrImg" src={Mask}/>
                <img id="check" className="img arrImg" src={Check}/>
            </span>
        )
    }
}
