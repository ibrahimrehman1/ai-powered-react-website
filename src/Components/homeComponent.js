import React from "react";
import {HomeMedia, CarouselMedia} from "./mediaComponent";



export function Home(props){
    return(
        <React.Fragment>
            <CarouselMedia content={props.content}/>
            <HomeMedia content={props.content}/>
        </React.Fragment>

    )
}