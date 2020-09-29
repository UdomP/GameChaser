import React from 'react'
import GetRegion from './getRegion'
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class dropDown extends React.Component{
    render(){
        return (
            <div class="dropdown">
                <button class = "btn btn-default dropdown-toggle" type = "button" id = "dropdownmenu" data-toggle="dropdown">
                    <GetRegion/>
                    <span class = "caret"></span>
                </button>
                        <ul class = "dropdown-menu dropdown-menu-right" aria-labelled-by="dropdownmenu">
                            <li><a href="#">east</a></li>
                            <li><a href="#">west</a></li>
                            <li><a href="#">central</a></li>
                        </ul>
            </div>
        )
    }
}
