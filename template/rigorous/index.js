import React from 'react';
import Aside from './components/aside';
import Education from './components/education';
import Experience from './components/experience';
import Header from './components/header';
import Language from './components/language';
import Skills from './components/skills';
import Footer from './components/footer';
import './less';

export default function (props) {
  console.log(props);

  return (
    <div>
      <Aside links={props.links} />
      <div className="container">
        <main>
          <Header basicInfo={props.basicInfo} />
          <article className="content row">
            <article className="column-6 first column">
              <Education education={props.education} />
              <Language language={props.language} />
              <Skills skills={props.skills} />
            </article>
            <article className="column-6 last column">
              <Experience experience={props.experience} />
            </article>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}
