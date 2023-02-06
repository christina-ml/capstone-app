import React from "react";
import "./QrCode.scss";

import qrCode from "../../assets/qrCode.jpeg";

const QrCode = () => {
    return (
    <div className="qrCode">
        <div className="qrCode__container">
            <div>
                <img src={qrCode} alt="QR code" />
            </div>
            <div className="qrCode__container__scanLabel">
                Scan Me
            </div>
        </div>
    </div>
    );
};

export default QrCode;
