import React from 'react';
import PropTypes from 'prop-types';
import './InfoBox.scss';
import { generateClassName } from '../../helpers/generateClassName';

const getTitleColor = (titleColor) => {
  return titleColor ? `Title__Text--${titleColor}` : '';
};

const InfoBox = (props) => (
  <div className="InfoBox">
    <div className="Title">
      <h1
        className={generateClassName(
          'Title__Text',
          [
            props.titleColor,
            props.fontSize
          ]
        )}
      >
        {props.title}
      </h1>
    </div>
    <div className="Info__Container">
      {
        props.infoItems.map((info, i, arr) => (
          <div
            className={generateClassName(
              'Info__Item',
              {
                single: arr.length === 1
              }
            )}
            key={`info-${i}`}
          >
            {
              info.topic && (
                <div className="InfoTopic">
                  <h2
                    className={generateClassName(
                      'InfoTopic__Text',
                      [
                        props.fontSize
                      ]
                    )}
                  >
                    {info.topic}
                  </h2>
                </div>
              )
            }
            <div className="InfoDescription">
              <div
                className={generateClassName(
                  'InfoDescription__Text',
                  [
                    props.fontSize
                  ]
                )}
              >
                {info.imageContainer && (
                  <div className="InfoDescription__ImageContainer">
                    <img src={info.imageContainer.image} style={info.imageContainer.imageStyle}/>
                  </div>
                )}
                {info.description && (
                  <p>
                    {info.description}
                  </p>
                )}
                {info.list && (
                  <ul>
                    {
                      info.list.items.map((elem, i) => (
                        <li key={`info.list.items.${i}`}>{elem}</li>
                      ))
                    }
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

InfoBox.propTypes = {
  title: PropTypes.string,
  infoItems: PropTypes.arrayOf(
    PropTypes.shape({
      topic: PropTypes.string,
      description: PropTypes.any
    })
  ).isRequired,
  titleColor: PropTypes.string,
  fontSize: PropTypes.string
};

export default InfoBox
