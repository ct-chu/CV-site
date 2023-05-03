import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataAstrophotoStarryNights, meta } from "../../content_option";

import "../../index.css";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

const Tabs = () => {

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const TabStar = () => {
    const [index, setIndex] = useState(-1);
    const slides = dataAstrophotoStarryNights;
    return (
      <div className="mb-5">
        <PhotoAlbum
          layout="rows"
          photos={slides}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    );
  };
  
  const TabCelestial = () => {
    return (
        <div>
        {dataAstrophotoStarryNights.map((data, i) => {
          return (
            <div key={i} className="po_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link}>view project</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return(
    <div>
      <div className="mb-5">
        <button
          className={activeTab === "tab1" ? "button_text button_text--current" : "button_text --tab1"}
          onClick={handleTab1}
          >
            Starry Nights
          </button>
        <button
          className={activeTab === "tab2" ? "button_text button_text--current" : "button_text"}
          onClick={handleTab2}
          >
            Celestial Objects
        </button>
        <hr className="t_border my-4 ml-0 text-left" />
      </div>
      <tabStar />
      <div className="mb-5 po_items_ho">
        {activeTab === "tab1" ? <TabStar /> : <TabCelestial />}
      </div>
  </div>
  );
};

export const Astrophotography = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Astrophotography | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-52 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Astrophotography </h1>{" "}
          </Col>
        </Row>
        <Tabs />
      </Container>
    </HelmetProvider>
  );
};
