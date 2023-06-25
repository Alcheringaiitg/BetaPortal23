import React, { Component } from "react";
import Carousel from "./components/Carousel";
import EventsComponent from "./components/eventsComponent";
import EventsIntro from "./components/eventsIntro";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
const images1 = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  "https://images.unsplash.com/photo-1686476020928-1834ccef445b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1686318591060-c9ea73937b1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1672243776119-6e2ce94c6258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
];
const title1 = "Proshows";
const title2 = "pronites";
const title3 = "creators-camp";
const title4 = "critical-damage";
const title5 = "informals";
const link1 = "https://www.youtube.com/";

class EventsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar ></Navbar>
        <EventsIntro />
        <div>
          <EventsComponent images={images1} title={title1} link={link1} />
          <EventsComponent images={images1} title={title2} link={link1} />
          <EventsComponent images={images1} title={title3} link={link1} />
          <EventsComponent images={images1} title={title4} link={link1} />
          <EventsComponent images={images1} title={title5} link={link1} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default EventsPage;
