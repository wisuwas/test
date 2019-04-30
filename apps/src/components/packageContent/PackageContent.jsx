import React from 'react'
import PropTypes from 'prop-types'
import './PackageContent.scss'

const PackageContent = (props) => {
    return (
        <div style={{textAlign: 'left', padding: '0px 50px 0px 50px'}}>
            {props.content.map((item,idx) => (
                <div key={idx}>
                    {item.header && <><div className="PackageContent TextHeader">{item.header}</div><br/></>}
                    {item.subheader && <><div className="PackageContent TextSubheader">{item.subheader}</div><br/></>}
                    {item.content && <><div className="PackageContent TextContent">{item.content}</div><br/></>}
                </div>
            ))}
        </div>
    )
}

PackageContent.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            subheader: PropTypes.string,
            content: PropTypes.string
        })
    )
}

export default PackageContent;
