import React from 'react';
import './CTAPage.css';
function CTAPage() {
  return (
    <div className="cta-page-body">
      <h1 className="cta-page-heading">
        Thank you for taking the time to visit!{' '}
      </h1>
      <p className="cta-prompt">For more about me:</p>
      <div className="cta-links">
        <a
          className="cta-link"
          href={require('../../documents/Miiyu_Fujita_Resume_2023 (5).pdf')}
          target="_blank"
        >
          My Resume
        </a>
        <a
          className="cta-link"
          href="https://www.linkedin.com/in/miiyu-fujita/"
          target="_blank"
        >
          My LinkedIn
        </a>
        <a
          className="cta-link"
          href="https://github.com/miiyu-fujita"
          target="_blank"
        >
          My GitHub
        </a>
        <a
          className="cta-link"
          href="mailto: miiyu.fujita@mail.mcgill.ca"
          target="_blank"
        >
          My Email
        </a>
      </div>
    </div>
  );
}

export default CTAPage;
