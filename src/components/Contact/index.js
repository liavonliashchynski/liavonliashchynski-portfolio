import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (error) => {
          console.error('❌ Email send failed:', error);
          console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
          alert('Failed to send the message, please try again');
        },
      );
  };

  return (
    <>
      <div className="contact-page">
        <div className="contact-page-text-zone">
          <h1>Contact me</h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-page-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li>
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
              </ul>
            </form>
            <button className="contact-submit-button">SEND</button>
          </div>
        </div>
        {/* <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[49.8225, 19.0444]} />
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      {/* <div className="info-map">
        Liavon Liashchynski,
        <br />
        Polska,
        <br />
        Bielsko-Biała
        <br />
        <span>liavonliashchynski@proton.me</span>
      </div>
      <Loader type="pacman" /> */}
    </>
  );
};

export default Contact;
