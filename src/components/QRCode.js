import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function QRCode({ value }) {
  return <QRCodeCanvas value={value} size={200} />;
}

export default QRCode;
