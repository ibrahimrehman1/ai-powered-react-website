import React from "react";
import {Breadcrumb, Form, Button, ButtonGroup} from "react-bootstrap";
import {Link} from "react-router-dom";


export function Feedback(){
    return(
        <div className="container bread">
        <Breadcrumb>
                <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>Feedback</Breadcrumb.Item>
        </Breadcrumb>
        <h1 style={{textAlign: "center"}}>Feedback Form</h1>
        <Form style={{marginTop: "50px"}} onSubmit={(event)=>{alert("Form has been Submitted!");event.preventDefault()}}>
            <Form.Group>
                <Form.Label className="col-12 offset-md-3 col-md-4" style={{paddingLeft: "0px"}}>First Name</Form.Label>
                <Form.Control name="firstname" id="firstname" className="col-12 col-md-6 offset-md-3" type="text"/>
            </Form.Group>
            <Form.Group>
                <Form.Label className="col-12 offset-md-3 col-md-4" style={{paddingLeft: "0px"}}>Last Name</Form.Label>
                <Form.Control name="lastname" id="lastname" className="col-12 col-md-6 offset-md-3" type="text"/>
            </Form.Group>
            <Form.Group>
                <Form.Label className="col-12 offset-md-3 col-md-4" style={{paddingLeft: "0px"}}>Email Address</Form.Label>
                <Form.Control name="email" id="email" className="col-12 col-md-6 offset-md-3" type="email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label className="col-12 offset-md-3 col-md-4" style={{paddingLeft: "0px"}}>Feedback</Form.Label>
                <Form.Control as="textarea" rows={8} className="col-12 col-md-6 offset-md-3"/>
            </Form.Group>
            <Form.Group className="text-center">
                <ButtonGroup>
                    <Button variant="danger" style={{padding: "10px"}} type="submit">Submit</Button>
                    <Button variant="success" style={{padding: "10px"}} type="reset">Reset</Button>
                </ButtonGroup>
            </Form.Group>
        </Form>
        </div>
    )
}