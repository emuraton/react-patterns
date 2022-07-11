import * as React from 'react';
import styled from 'styled-components';

class Hover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  handleMouseOver = () => this.setState({ hovered: true });
  handleMouseOut = () => this.setState({ hovered: false });

  render() {
    return (
      <Wrapper
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        {this.props.render(this.state)}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  /* width: 20%; */
`;

export default Hover;
