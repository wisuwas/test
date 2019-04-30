import styled from 'styled-components';

export const AlignMiddleImage = styled.img`vertical-align:middle`;

const getBgColor = (color) => {
  switch (color) {
    case 'blue':
      return '#053570';
    case 'gold':
      return '#ce9838';
    case 'sliver':
    default:
      return '#939498';
  }
};

const getColor = (color) => {
  switch (color) {
    case 'blue':
      return '#bcbdc1';
    case 'gold':
      return '#8e5b26';
    case 'sliver':
    default:
      return '#fff';
  }
};

export const BadgeTableCell = styled.td`  
  position: ${props => props.startBadge ? "relative" : null };

  &::before {
    content: ${props => props.startBadge && props.hasRibbon ? "''" : null };
    position: absolute;
    height: ${props => props.rowLen * 101 }%;
    top: 0;
    left: -26px;
    width: 26px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    background-color: ${props => getBgColor(props.badge)};
  }
  
  &::after {
    text-transform: uppercase;
    transform: translate(-50%, -50%) rotate(-90deg);
    position: absolute;
    top: ${props => props.rowLen * 50 }%;
    left: -10px;
    font-size: 14px;
    content: '${props => props.hasRibbon && props.startBadge ? props.badge : null }';
    color: ${props => getColor(props.badge)};
  }
`;
