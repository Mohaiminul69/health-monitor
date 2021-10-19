import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./doctors.css";

const Doctors = () => {
  /*
<---------------------------- Slider Data ---------------------------->
*/
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Fragment>
      <h1 className="display-2 mt-4 text-center text-uppercase">
        Available{" "}
        <span className="fw-bold textBlue mt-2 fw-light">Doctors</span>
      </h1>
      <Container>
        {/*
<---------------------------- Using Custom Slider ---------------------------->
        */}
        <Slider {...settings} className="mt-5">
          <div>
            <div className="availableDoctor">
              <img
                src="https://i.ibb.co/fFzRhNc/BD-Doctors-372x240.png"
                alt=""
              />
              <h1 className="textBlue fw-light mt-2">Abida Sultana</h1>
              <h6 className="text-danger">Dermatologist</h6>
              <p className="text-muted">
                MBBS, FCPS(DERMATOLOGY & VENAREOLOGY), DDV, Skin & Sex Disease
              </p>
              <Link to="/videoCall">
                <button className="btn btn-danger mb-3">Call Now</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="availableDoctor">
              <img
                src="https://i.ibb.co/wLnjVxS/Doctor-in-BD-372x240.png"
                alt=""
              />
              <h1 className="textBlue fw-light mt-2">A.F.M Selim</h1>
              <h6 className="text-danger">Gastroenterology</h6>
              <p className="text-muted">
                MBBS, FCPS, TRAINED IN THERAPEUTIC ENDOSCOPY (JAPAN),
                Gastroenterology
              </p>
              <Link to="/videoCall">
                <button className="btn btn-danger mb-3">Call Now</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="availableDoctor">
              <img
                src="https://i.ibb.co/fFzRhNc/BD-Doctors-372x240.png"
                alt=""
              />
              <h1 className="textBlue fw-light mt-2">Asma Khatun</h1>
              <h6 className="text-danger">Urologist</h6>
              <p className="text-muted">
                MBBS(DHAKA), MRCS(England), FCPS(Surgery), MS(UROLOGY), Urology
              </p>
              <Link to="/videoCall">
                <button className="btn btn-danger mb-3">Call Now</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="availableDoctor">
              <img
                src="https://i.ibb.co/wLnjVxS/Doctor-in-BD-372x240.png"
                alt=""
              />
              <h1 className="textBlue fw-light mt-2">A.F.M Selim</h1>
              <h6 className="text-danger">Cardiologist</h6>
              <p className="text-muted">
                MS (Ped. Surgery), FICS, EMSB (Australia), PhD, Child, Green
                Life Medical College Hospital
              </p>
              <Link to="/videoCall">
                <button className="btn btn-danger mb-3">Call Now</button>
              </Link>
            </div>
          </div>
        </Slider>
      </Container>
    </Fragment>
  );
};

export default Doctors;
