import React from 'react';
import './TestimonialPage.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function TestimonialPage() {
  return (
    <div className="testimonial-page-body">
      <div className="testimonial-glassy">
        <p className="testimonial">
          We are extremely pleased with the great contribution you have brought
          to the team, your{' '}
          <span className="testimonial-highlight">
            autonomy, professionalism and trustworthiness.{' '}
          </span>
          For future employers, there are certain qualities of Miiyu that will
          stand out form the crowd upon entry and will be a great assed to any
          organization.
        </p>
        <div className="testimonial-giver">
          <div className="quote-icon">
            <FormatQuoteIcon fontSize="inherit" />
          </div>
          <p className="testimonial-giver-profile">
            {' '}
            - Pauline Truong,{' '}
            <span className="testimonial-giver-profile-role">
              Cyber Security, Governance & Compliance Expert @ BDC
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialPage;
