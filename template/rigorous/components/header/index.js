import React from 'react';

export default function Header(props) {
  const {
    name,
    alias,
    picture,
    jobDescription,
    contact
  } = props.basicInfo;
  const {
    phone,
    email,
    github,
    address
  } = contact;

  return (
    <header className="row">
      <figure className="header-qrcode">
        {picture ? (
          <img
            src={picture}
            alt={alias}
            className="qrcode-img invisible-lt-sm visible-print"
          />
        ) : null}
      </figure>
      <section className="title">
        <h1>{name}</h1>
        <h2>{jobDescription.join('/')}</h2>
      </section>
      <address>
        <ul className="contact">
          {phone ? (
            <li className="contact-phone">
              <a href={`tel://${phone}`}>{phone}</a>
            </li>
          ) : null}
          {email ? (
            <li className="contact-email">
              <a href={`emailto://${email}`}>{email}</a>
            </li>
          ) : null}
          {github ? (
            <li className="contact-github">
              <a href={github}>{github}</a>
            </li>
          ) : null}
          {address ? (
            <li className="contact-address">
              <span>{address}</span>
            </li>
          ) : null}
        </ul>
      </address>
    </header>
  );
}
