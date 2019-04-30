import React from 'react';
import './withDropDown.scss';
import { generateClassName } from '../../helpers/generateClassName';
import withLink from '../withLink';

const withDropDown = (wrappedComponent) => (
  class extends React.Component {
    static defaultProps = {
      openByHover: false,
      openByClick: false
    };

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

    onToggleMenu = () => {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen
      }));
    };

    render() {
      const offsetFixStyle = this.props.dropDown &&
        this.props.dropDown.offset && {
        right: `${this.props.dropDown.offset}px`
      };
      return React.createElement(
        this.props.wrapperType || 'div',
        {
          className: `DropDown ${this.props.wrapperClassName || ''}`,
          onMouseEnter: this.props.openByHover ? this.onMouseEnter : null,
          onMouseLeave: this.props.openByHover ? this.onMouseLeave : null,
          onClick: this.props.openByClick ? this.onToggleMenu : null,
          'data-active': this.state.isOpen
        },
        [
          React.createElement(
            wrappedComponent,
            {
              ...this.props,
              isDropDownOpen: this.state.isOpen,
              key: 'wrapped-component'
            }
          ),
          this.props.dropDown && (
            <ul
              className={`${generateClassName('DropDown__Container', {active: this.state.isOpen})} ${this.props.containerClassName || ''}`}
              data-active={this.state.isOpen}
              key='drop-down'
              style={offsetFixStyle}
            >
              {
                this.props.dropDown.items.map((item, i) => (
                  <li className={`DropDown__ListItem ${this.props.listItemClassName || ''}`} key={`dd-li-${i}`}>
                    {
                      withLink(
                        item.link,
                        <span className={`DropDown__Item ${this.props.itemClassName || ''}`}>{item.text}</span>,
                        `link-dd-${i}`
                      )
                    }
                  </li>
                ))
              }
            </ul>
          )
        ]
      )
    }
  }
);



export default withDropDown;
