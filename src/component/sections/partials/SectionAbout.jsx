
import React from 'react'; 
import PropTypes from 'prop-types';
import classNames from 'classnames';



const defaultProps = {
    children: null,
    tag: 'h2'
}


const SectionAbout = ({ className, children, ...props}) => {
    const classes = classNames( 'section-about', className);


    return (
        <div  {...props} className={classes}>
            <div className="container-xs">
                <h1>Overview</h1>
                {children}
            </div>
        </div>
    )
}

SectionAbout.defaultProps = defaultProps;

export default SectionAbout; 