import React from 'react';

class ProgressRing extends React.Component {
    constructor(props) {
      super(props);
  
      const { radius, stroke } = this.props;
  
      this.normalizedRadius = radius - stroke * 2;
      this.circumference = this.normalizedRadius * 2 * Math.PI;
    }
}

export default ProgressRing