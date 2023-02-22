import React, { Component } from 'react';
import '../src/academic-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Academics extends Component{
  render() {
    return (
      <div className="academic-page">
        
        <h2>Academic Programs</h2>
        <div className="program-list">
          <div className="program">
            <h3>Computer Science</h3>
            <p>
              The Department of Computer Science at the University of Colombo
              offers a range of undergraduate and postgraduate programs in
              computer science, including a Bachelor of Science in Computer
              Science and a Master of Science in Computer Science.
            </p>
          </div>
          <div className="program">
            <h3>Mathematics</h3>
            <p>
              The Department of Mathematics at the University of Colombo offers a
              range of undergraduate and postgraduate programs in mathematics,
              including a Bachelor of Science in Mathematics and a Master of
              Science in Mathematics.
            </p>
          </div>
          <div className="program">
            <h3>Physics</h3>
            <p>
              The Department of Physics at the University of Colombo offers a
              range of undergraduate and postgraduate programs in physics,
              including a Bachelor of Science in Physics and a Master of Science
              in Physics.
            </p>
          </div>
        </div>
      </div>
    );
  }
}




