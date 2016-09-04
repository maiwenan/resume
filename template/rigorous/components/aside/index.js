import React from 'react';

export default function Aside(props) {
  const links = props.links;
  let linkNodes;

  if (!links) {
    return null;
  }
  linkNodes = links.map((link, i) => {
    return (
      <li className="link" key={i}>
        <a href={link.url}>{link.text}</a>
      </li>
    );
  });

  return (
    <aside>
      <ul className="links">
        {linkNodes}
      </ul>
    </aside>
  );
}
