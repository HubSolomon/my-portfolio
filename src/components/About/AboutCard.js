import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Solomon Adjei </span>
            from <span className="purple"> Hannover, Germany.</span>
            <br />
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer and developer with experience creating
            custom websites with ReactJs, JavaScript, HTML5, CSS3,NodeJs,Express, Shopify app using ReactJs, Wordpress, nodejs, Veujs
            and Mobile App using Flatter,.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hosting Podcast
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
