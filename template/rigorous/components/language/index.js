import React from 'react';

export default function Language(props) {
  const lanNodes = props.language.map((item, i) => {
    const certNodes = item.certificate.map((cert, j) => {
      const percent = Math.ceil(cert.score / cert.full * 100);

      return (
        <div className="language-cert-wrapper" key={j}>
          <dt className="language-cert-type">{cert.type}</dt>
          <dd className="progress language-cert-score">
            <div style={{width: `${percent}%`}} className="progress-bar">
              <span className="progress-label">{cert.score}</span>
            </div>
          </dd>
        </div>
      );
    });
    const descNodes = item.description.map((desc, j) => {
      return (
        <li className="language-desc-item" key={j}>{desc}</li>
      );
    });

    return (
      <div className="sec-content" key={i}>
        <dl className="language-certificates">
          {certNodes}
        </dl>
        <ul className="language-description">
          {descNodes}
        </ul>
      </div>
    );
  });

  return (
    <section className="language">
      <div className="sec-title-wrapper">
        <h3 className="sec-title">
          <span className="sec-title-ch">语言水平</span>
          <span className="sec-title-en">Language</span>
        </h3>
      </div>
      {lanNodes}
    </section>
  );
}
