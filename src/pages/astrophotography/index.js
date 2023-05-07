import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import getFetch from "../../content_control/getFetch";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import "./style.css";
import "../../index.css";
import "yet-another-react-lightbox/styles.css";

const Tabs = () => {

  const [activeTab, setActiveTab] = useState("NoTab");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const StarInfo = getFetch("72177720307975861");
  // console.log(StarInfo.loaded);
  const CelestialInfo = getFetch("72177720307992398");

  //convert api response to image array
  const createPhotoArray = (item) => {
    let newItem = {};
    newItem.src = `https://live.staticflickr.com/${item.server}/${item.id}_${item.originalsecret}_o.jpg`;
    newItem.width = item.width;
    newItem.height = item.height;
    newItem.description = item.title;
    return newItem;
  };

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (StarInfo.loaded && (activeTab === "NoTab" || activeTab === "tab1")) {
      const dataPhoto = StarInfo.data.photoset.photo.map(createPhotoArray);
      setSlides(dataPhoto);
      // console.log("dataPhoto");
      // console.log(dataPhoto);
    } else if (CelestialInfo.loaded && activeTab === "tab2") {
      const dataPhoto = CelestialInfo.data.photoset.photo.map(createPhotoArray);
      setSlides(dataPhoto);
    };
  }, [activeTab, StarInfo.data, CelestialInfo.data]);

  const TabStar = () => {
    const [index, setIndex] = useState(-1);
    return (
      <div className="animate__fadeIn animate__fadeOut animate__delay-5s">
        <PhotoAlbum
          layout="rows"
          photos={slides}
          onClick={({ index }) => setIndex(index)}
        />
        {/* {console.log("slides")}
        {console.log(slides)} */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
        {/* {console.log("TabStarRun")} */}
      </div>
    );
  };

  const TabCelestial = () => {
    const [index, setIndex] = useState(-1);
    return (
      <div>
        <PhotoAlbum
          layout="rows"
          photos={slides}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          styles={{ container: { backgroundColor: "rgba(0,0,0,.8)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    );
  };

  const ChooseAlbum = () => {
    return (
      <div className="mt-8" style={{ marginTop: 140 }}>
        <Row className="mt-5">
          <h2 style={{ marginBottom: 30 }}><center>Please choose a gallery:</center></h2>
          <center>
            <button
              className={"button_text --tab1 "}
              onClick={handleTab1}
              style={{ marginRight: 20 }}
            >
              Starry Nights
            </button>
            <button
              className={"button_text"}
              onClick={handleTab2}
              style={{ marginLeft: 20 }}
            >
              Celestial Objects
            </button>
          </center>
        </Row>
      </div>
    )
  };

  function topTabButton() {
    if (activeTab != "NoTab") {
      return (
        <div>
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
      )
    }
  };

  function showWhichTab() {
    switch (activeTab) {
      case "tab1": return <TabStar />;
      case "tab2": return <TabCelestial />;
      default: return <ChooseAlbum />;
    };
  };

  return (
    <div>
      {topTabButton()}
      <div className="mb-5">
        {/* {console.log(activeTab)} */}
        {showWhichTab()}
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
