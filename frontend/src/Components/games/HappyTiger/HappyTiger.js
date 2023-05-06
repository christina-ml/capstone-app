import React from 'react';
import './HappyTiger.scss';

const HappyTiger = () => {
  return (
    <div className="happyTiger">
        <div className="happyTiger__left-ear"></div>
        <div className="happyTiger__right-ear"></div>
        <div className="happyTiger__head"></div>
        <div className="happyTiger__hair-mask">
            <div className="happyTiger__hair-mask__hair"></div>
        </div>
        <div className="happyTiger__left-eye"></div>
        <div className="happyTiger__right-eye"></div>
        <div className="happyTiger__left-eye-happy"></div>
        <div className="happyTiger__right-eye-happy"></div>
        <div className="happyTiger__mouth"></div>
        <div className="happyTiger__tongue">
            <div className="happyTiger__tongue__tongueLine"></div>
        </div>
        <div className="happyTiger__smile-left"></div>
        <div className="happyTiger__smile-left-inner"></div>
        <div className="happyTiger__smile-right"></div>
        <div className="happyTiger__smile-right-inner"></div>
        <div className="happyTiger__nose">
            <div className="happyTiger__nose__noseTop"></div>
        </div>
        <div className="happyTiger__whiskerTopLeft"></div>
        <div className="happyTiger__whiskerBottomLeft"></div>
        <div className="happyTiger__whiskerTopRight"></div>
        <div className="happyTiger__whiskerBottomRight"></div>
    </div>
  )
}

export default HappyTiger;