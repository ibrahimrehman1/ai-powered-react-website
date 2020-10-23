import React from "react";
import Car1 from "../images/pic1.jpg";
import Car2 from "../images/pic2.jpg";
import Car3 from "../images/pic3.jpg";
import {Media, Carousel, Tab, Tabs} from "react-bootstrap";

export function HomeMedia(props){
    return(
        <div style={{position: "relative", top: "100px"}} className="container">
            {[1, 2, 3, 4, 5, 6].map((value, index)=>{
            return(
                <Media style={{marginBottom: "20px"}} key={index}>
                    <img
                        width={100}
                        height={100}
                        className={`mr-3  ${value > 3 ? "order-last": "order-first"}`}
                        src={value === 1 || value === 4 ? Car1 : value === 2 || value === 5 ? Car2 : value === 3 || value === 6 ? Car3 : 'null'}
                        alt="Generic placeholder" style={{marginLeft: value > 3 ? "15px": "none"}}
                    />
                    <Media.Body className={value > 3 ? "order-first" : "order-last"} >
                        <h5>Media Heading {value}</h5>
                        <p>
                        {props.content}
                        </p>
                    </Media.Body>
                </Media>
            )
            })}
        </div>
    )
}



export function CarouselMedia(){
    return(
        <Carousel style={{position: "relative", top: "50px"}}>
        {["First", "Second", "Third"].map((value, index)=>{
            return(
                <Carousel.Item key={index}>
                    <img
                    className="d-block w-100"
                    src={value === "First" ? Car1 : value === "Second" ? Car2 : value === "Third" ? Car3 : 'null'}
                    alt={`${value} slide`}
                    />
                    <Carousel.Caption>
                    <h3>{value} Car</h3>
                    <p style={{textAlign: "center"}}>This is my {value} Image.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })}
        </Carousel>
    )
}



export function BlogMedia(props){
    return(
        [1, 2, 3].map((value, index)=>{
            return(
                <Media style={{marginBottom: "20px"}} key={index}>
                    <img
                        width={100}
                        height={100}
                        className={`mr-3  ${value === 2 ? "order-last": "order-first"}`}
                        src={value === 1 ? Car1 : value === 2  ? Car2 : value === 3 ? Car3 : 'null'}
                        alt="Generic placeholder" style={{marginLeft: value === 2 ? "15px": "none"}}
                    />
                    <Media.Body className={value === 2 ? "order-first" : "order-last"} >
                        <h5>Media Heading {value}</h5>
                        <p>
                        {props.content}
                        </p>
                    </Media.Body>
                </Media>
            )
            })
    )
}

export function TabMedia(props){
    return(
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={{marginTop: "50px"}}>
            {
                [6, 7, 8].map((value, index)=>{
                    return(<Tab eventKey={value === 6 ? "home" : value === 7 ? "profile" : value === 8 ? "contact" : "abc" } title={`Image Heading ${value}`} key={index}>
                        <Media style={{marginBottom: "20px", marginTop: "50px"}}>
                            <img
                                width={150}
                                height={100}
                                className="mr-3"
                                src={value === 6 ? Car1 : value === 7  ? Car2 : value === 8 ? Car3 : 'null'}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Media Heading {value}</h5>
                                <p>
                                {props.content}
                                </p>
                            </Media.Body>
                        </Media>
                    </Tab>
                    )
                })
            }
        </Tabs>
    )
}