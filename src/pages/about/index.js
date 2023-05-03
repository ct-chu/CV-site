import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataAbout, meta, languages, worktimeline, skills, experience, volunteer } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">{dataAbout.title}</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
            <div>
              <div className="pb-5">
                <img scr="../../assets/images/profilePic.webp" width="300" height="300" />
              </div>
              <p>Name: {dataAbout.name}</p>
              <p>Year of Birth: {dataAbout.birthYear}</p>
              <p>Location: {dataAbout.location}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="4">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="8">
            {skills.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Languages</h3>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {languages.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.lang}</th>
                      <td>{data.level}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="4">
            <h3 className="color_sec py-4">Work Experiences</h3>
          </Col>
          <Col lg="8">
            {experience.map((data, i) => {
              const mode = data.partTime ? "part-time" : "full-time";
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc"> <b> {data.startYear} - {data.endYear} <br />
                    {data.post}, {mode}<br /> </b>
                    {data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="4">
            <h3 className="color_sec py-4">Volunteer Experiences</h3>
          </Col>
          <Col lg="8">
            {volunteer.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc"> <b> {data.startYear} - {data.endYear} <br />
                    {data.post}<br /> </b>
                    {data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* <Row className=" sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row> */}
        {/* <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="8">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row> */}

      </Container>
    </HelmetProvider>
  );
};
