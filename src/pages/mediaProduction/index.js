import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataVideo, dataThumb, meta } from "../../content_option";
import getFetch from "../../content_control/getFetch";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "./style.css";
import "../../index.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const Tabs = () => {

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
    // console.log("loaded?");
    // console.log(graphInfo.loaded);
  };

  // const handleTab3 = () => {
  //   setActiveTab("tab3");
  // };

  const TabVideo = () => {
    const [index, setIndex] = useState(-1);
    const slides = dataThumb;
    const videos = dataVideo;
    return (
      <div>
        <PhotoAlbum
          layout="rows"
          photos={slides}
          onClick={({ index }) => setIndex(index)}
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            <div style={{ position: "relative", ...wrapperStyle }}>
              {renderDefaultPhoto({ wrapped: true })}
              {photo.title && (
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    inset: "auto 0 0 0",
                    padding: 30,
                    textAlign: "center",
                  }}
                >
                  {photo.title}
                </div>
              )}
            </div>
          )}
        />
        <Lightbox
          styles={{ container: { backgroundColor: "rgba(0,0,0,.8)" } }}
          open={index >= 0}
          index={index}
          slides={videos}
          render={{
            slide: ({ slide: { type, src, width, height }, rect }) =>
              type === "youtube" ? (
                <iframe
                  width={Math.min(
                    width,
                    rect.width,
                    (width * rect.height) / height
                  )}
                  height={Math.min(
                    height,
                    rect.height,
                    (height * rect.width) / width
                  )}
                  src={src}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : null
          }}
          close={() => setIndex(-1)}
        />
      </div>
    );
  };

  //get image data from flickr api
  const graphInfo = getFetch("72177720308026902");

  //convert api response to image array
  const createPhotoArray = (item) => {
    let newItem = {};
    newItem.src = `https://live.staticflickr.com/${item.server}/${item.id}_${item.originalsecret}_o.jpg`;
    newItem.width = item.width;
    newItem.height = item.height;
    newItem.description = item.title;
    return newItem;
  };

  //update props "slides" to image array gotten from flickr when there is a tab change
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    if (graphInfo.loaded) {
      const dataGraphics = graphInfo.data.photoset.photo.map(createPhotoArray);
      setSlides(dataGraphics);
      // console.log("slides");
      // console.log(slides);
    };
  }, [activeTab]);

  const TabGraphics = () => {
    const [index, setIndex] = useState(-1);
    return (
      <div>
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
            plugins={[Captions]}
            captions={{descriptionTextAlign : "center"}}
          />
        </div>
      </div>
    );
  };

  // const TabIG = () => {
  //   return (
  //     <div>
  //       <h1>TBB</h1>
  //     </div>
  //   );
  // };

  function showWhichTab() {
    switch(activeTab){
      case "tab1": return <TabVideo/>;
      case "tab2": return <TabGraphics/>;
      // case "tab3": return <TabIG/>;
      default: <TabVideo/>;
    };
  };

  return (
    <div>
      <div>
        <button
          className={activeTab === "tab1" ? "button_text button_text--current" : "button_text --tab1"}
          onClick={handleTab1}
        >
          Video Production
        </button>
        <button
          className={activeTab === "tab2" ? "button_text button_text--current" : "button_text"}
          onClick={handleTab2}
        >
          Graphical Designs
        </button>
        {/* <button
          className={activeTab === "tab3" ? "button_text button_text--current" : "button_text"}
          onClick={handleTab3}
        >
          Stuff on instagram
        </button> */}
        <hr className="t_border my-4 ml-0 text-left" />
      </div>
      <div className="mb-5">
        {/* {activeTab === "tab1" ? <TabVideo /> : <TabGraphics />} */}
        {showWhichTab()}
      </div>
    </div>
  );
};

export const MediaProduction = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Gallery | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-52 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Gallery</h1>{" "}
          </Col>
        </Row>
        <Tabs />
      </Container>
    </HelmetProvider>
  );
};
