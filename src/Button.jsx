import React from 'react';

class Button extends React.Component {
  render() {
    const { classes, click, children } = this.props;
    return <button className={classes} onClick={click}>{children}</button>;
  }
}
 
export default Button;