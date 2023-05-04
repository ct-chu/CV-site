import React from "react";
import "../home/style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { data404, meta } from "../../content_option";
import { Link } from "react-router-dom";
import photo404 from "../../assets/images/404_image.webp";

export const Page404 = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> 404 Not Found | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${photo404})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{data404.title}</h2>
                <p className="mb-1x">{data404.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/">
                    <div id="button_h" className="ac_btn btn">
                      Go Home
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
