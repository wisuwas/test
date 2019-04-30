import React from 'react';
import Term from './Term';

const withTerm = (wrappedComponent, text, floatingLink = false, style = {}) => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      }
    }

    onMouseEnter = () => {
      this.setState({
        isOpen: true
      })
    };

    onMouseLeave = () => {
      this.setState({
        isOpen: false
      })
    };

    onToggle = () => {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen
      }));
    };

    render() {
      return React.createElement(
        wrappedComponent,
        {
          ...this.props,
          isTermOpen: this.state.isOpen,
          key: 'wrapped-component',
          termComponent: (
            <Term
              onMouseLeave={this.onMouseLeave}
              onMouseEnter={this.onMouseEnter}
              onToggle={this.onToggle}
              isOpen={this.state.isOpen}
              terms={this.props.terms}
              floatingLink={floatingLink}
              style={style}
            >
              {text}
            </Term>
          ),
          termContainerClass: 'Term__Container'
        }
      );
    }
  }
);



export default withTerm;
