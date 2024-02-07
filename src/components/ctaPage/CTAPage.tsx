import React from 'react';
import './CTAPage.css';

interface ICTAPage {
  id: string;
}
function CTAPage(props: ICTAPage) {
  return (
    <div id={props.id} className="cta-page-body">
      <h1 className="cta-page-heading">
        Thank you for taking the time to visit!{' '}
      </h1>
      <p className="cta-prompt">For more about me:</p>
      <div className="cta-links">
        <a
          className="cta-link"
          href={require('../../documents/Miiyu_Fujita_Resume_2024 (2).pdf')}
          target="_blank"
          rel="noreferrer"
        >
          My Resume
        </a>
        <a
          className="cta-link"
          href="https://www.linkedin.com/in/miiyu-fujita/"
          target="_blank"
          rel="noreferrer"
        >
          My LinkedIn
        </a>
        <a
          className="cta-link"
          href="https://github.com/miiyu-fujita"
          target="_blank"
          rel="noreferrer"
        >
          My GitHub
        </a>
        <a
          className="cta-link"
          href="mailto: miiyu.fujita@mail.mcgill.ca"
          target="_blank"
          rel="noreferrer"
        >
          My Email
        </a>
      </div>
    </div>
  );
}

export default CTAPage;
