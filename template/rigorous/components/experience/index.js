import React from 'react';

export default function Experience(props) {
  const expNodes = props.experience.map((exp, i) => {
    const projectNodes = exp.projects.map((project, j) => {
      const taskNodes = project.description.map((desc, k) => {
        return (
          <dd className="experience-task" key={k}>{desc}</dd>
        );
      });

      return (
        <li className={`timeline-item experience-${exp.type}`} key={j}>
          <h3 className="timeline-title">
            <span className="experience-place">{project.name}</span>
            {exp.type === 'company' ? (
              <time className="experience-time">{`${project.start} ~ ${project.end}`}</time>
            ) : (
              <span className="experience-title-aside">
                {project.repo ? (
                  <a
                    href={project.repo}
                    className="experience-project-link"
                  >源代码</a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    className="experience-project-link"
                  >Demo</a>
                ) : null}
              </span>
            )}
          </h3>
          <dl className="experience-description timeline-content">
            {exp.type === 'company' ? (
              <dt className="experience-position">{project.position}</dt>
            ) : null}
            {taskNodes}
          </dl>
        </li>
      );
    });

    return (
      <div key={i}>
        <div className="timeline-wrapper">
          <ul className="sec-content timeline">
              <li className={`timeline-item experience-split-${exp.type}`}>
                <h3 className="timeline-title">
                  {exp.type === 'company' ? (
                    <span className="experience-place">
                      <time>{`${exp.start} ~ ${exp.end} `}</time>
                      就职于{exp.name}
                    </span>
                  ) : (
                    <span className="experience-place">个人项目</span>
                  )}
                </h3>
              </li>
            {projectNodes}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <section className="experience">
      <div className="sec-title-wrapper">
        <h3 className="sec-title">
          <span className="sec-title-ch">项目与工作经验</span>
          <span className="sec-title-en">Experience</span>
        </h3>
      </div>
      {expNodes}
    </section>
  );
}
