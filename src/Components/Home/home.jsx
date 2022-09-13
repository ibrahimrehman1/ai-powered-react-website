import React from "react";
import { HomeMedia, CarouselMedia } from "../Media";

export default function Home(props) {
  return (
    <React.Fragment>
      <CarouselMedia content={props.content} />
      <HomeMedia content={props.content} />
    </React.Fragment>
  );
}
