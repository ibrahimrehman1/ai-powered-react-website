import React from "react";
import { Breadcrumb, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BlogMedia, TabMedia } from "../Media";

export default function Blogs(props) {
  return (
    <div className="container bread">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/home">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
      </Breadcrumb>
      <h1 style={{ textAlign: "center" }}>Today's Blogs</h1>
      <BlogMedia content={props.content} />
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              className="card-head"
            >
              Image Heading 4
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {" "}
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="1"
              className="card-head"
            >
              Image Heading 5
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {" "}
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <TabMedia content={props.content} />
    </div>
  );
}
