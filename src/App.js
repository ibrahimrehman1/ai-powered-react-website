import React from "react";
import {Main} from "./Components/mainComponent";
import {BrowserRouter} from "react-router-dom"; 

export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
            
        )
    }
}