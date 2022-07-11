import * as React from 'react';

class Hover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  handleMouseOver = () => this.setState(true);
  handleMouseOut = () => this.setState(false);

  render() {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default Hover;
