import React from 'react';

export default function Education(props) {
  const education = props.education || [];
  const eduNodes = education.map((item, i) => {
    const honorNodes = item.honor.map((text, j) => {
      return (
        <dd className="education-honor">{text}</dd>
      );
    });

    return (
      <li className={`timeline-item education-${item.type}`} key={i}>
        <h3 className="timeline-title">
          <time className="education-time">{`${item.start} ~ ${item.end}`}</time>
        </h3>
        <dl className="education-description timeline-content">
          <dt className="education-name">{item.name}</dt>
          <dd className="education-major">{item.major}</dd>
          {honorNodes}
        </dl>
      </li>
    );
  });

  return (
    <section className="education">
      <div className="sec-title-wrapper">
        <h3 className="sec-title">
          <span className="sec-title-ch">教育经历</span>
          <span className="sec-title-en">Education</span>
        </h3>
      </div>
      <div className="timeline-wrapper">
        <ul className="sec-content timeline">
          {eduNodes}
        </ul>
      </div>
    </section>
  );
}
