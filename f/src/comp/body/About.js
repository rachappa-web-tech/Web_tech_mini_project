// @flow strict
import '../../App.css';

import * as React from 'react';
import Creator from './Creator';
function About() {
    return (
        <div className='container-fluid  row'>
          <div className='m-2 '>
          <Creator  name="Ananya Prasad B" srn="PES1UG21CS079"   roll_no="22"/>
          </div>
          <div className='m-2 '>
          <Creator  name="Sahith Reddy" srn="PES1UG21CS056"   roll_no="66"/>
          </div>
          <div className='m-2 '>
          <Creator  name="Rachappa Biradar" srn="PES1UG19CS359"   roll_no="66"/>
          </div>
                  </div>

    );
};

export default About;


