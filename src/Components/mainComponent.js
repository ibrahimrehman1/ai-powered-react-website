import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Header} from "./headerComponent";
import {Footer} from "./footerComponent";
import {Home} from "./homeComponent";
import {Blogs} from "./blogComponent";
import {Feedback} from "./feedbackComponent";
import {Tooltip, OverlayTrigger} from "react-bootstrap";


export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, empus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
        }
    }
    render(){
        return(
            <React.Fragment>
                <Header />
                    <Switch>
                        <Route path="/home" component={()=><Homepage content={this.state.content}/>}/>
                        <Route path="/blogs" component={()=><Blogs content={this.state.content}/>}/>
                        <Route path="/feedback" component={Feedback}/>
                        <Redirect to="/home" />
                    </Switch>
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


function Homepage(props){
    return(
        <Home content={props.content}/>
    )
}

