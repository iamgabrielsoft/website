
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import logo from '../../../assets/images/olawore.jpg'

const Logo = ({className, ...props }) => {
    const classes = classNames( 'brand', className );
    return (
      <div {...props} className={classes}>
        <h1 className="m-0">
          <Link to="/">    
            <Image src={logo} alt="Open" width={75} height={75} />
          </Link>
        </h1>
      </div>
    );
  }
      
  export default Logo;      