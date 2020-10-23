import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Header} from "./headerComponent";
import {Footer} from "./footerComponent";
import {Home} from "./homeComponent";
import {Blogs} from "./blogComponent";
import {Feedback} from "./feedbackComponent";


export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque"
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

