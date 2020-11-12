import React from 'react';

import { GithubIcon } from 'src/components/Icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <a
          href="https://github.com/starter-code/binge"
          target="_blank"
          rel="noreferrer"
        >
          Checkout the code on Github
          <GithubIcon />
        </a>
      </section>
    </footer>
  );
};
