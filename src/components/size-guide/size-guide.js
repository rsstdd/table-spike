import * as React from 'React';

import SocksSizeGuide from './socks-size-guide'
import MensSizeGuide from './mens-size-guide'
import MensBottomsSizeGuide from './mens-size-guide'

const SizeGuide = () => (
  <div id="size-chart" className="container">
    <div className="page-title">
      <h1>Sizing Help</h1>
      <p>Our guide for the perfect fit</p>
      <p>
        <b>Sizing can be tricky. Let one of our educators help you find the perfect fit.
        Book a complimentary video chat appointment today!</b>
      </p>
      <a
        target="_blank"
        href="https://www.lululemon-digitalconcierge.com/"
        className="button"
      >
        Book My Appointment
      </a>
    </div>

    <MensBottomsSizeGuide />
  </div>
);

export default SizeGuide;
