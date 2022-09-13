import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Home from "./home";
import Router from "../../router";
import {Tooltip, OverlayTrigger} from "react-bootstrap";


export class Main extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <React.Fragment>
                <Header />
                    <Router />
                    <div className="chatbot">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>
                                    <strong>Chatbot</strong>.
                                </Tooltip>
                            }
                        >
                        <span className="fa fa-comments"></span>
                        </OverlayTrigger>
                    </div>
                <Footer />
            </React.Fragment>
        )
    }
}


export function Homepage(props){
    return(
        <Home content={props.content}/>
    )
}

