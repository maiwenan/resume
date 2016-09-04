import React from 'react';

export default function Skills(props) {
  const skillNodes = props.skills.map((skill, i) => {
    const listNodes = skill.list.map((text, j) => {
      return (
        <dd className="skills-item-description" key={j}>{text}</dd>
      );
    });

    return (
      <li className={`timeline-item skills-${skill.type}`} key={i}>
        <h3 className="timeline-title">
          <span className="skills-type">{skill.name}</span>
        </h3>
        <dl className="skills-description timeline-content">
          {listNodes}
        </dl>
      </li>
    );
  });

  return (
    <section className="skills">
      <div className="sec-title-wrapper">
        <h3 className="sec-title">
          <span className="sec-title-ch">技能</span>
          <span className="sec-title-en">Skills</span>
        </h3>
      </div>
      <div className="timeline-wrapper">
        <ul className="sec-content timeline">
          {skillNodes}
        </ul>
      </div>
    </section>
  );
}
