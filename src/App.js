import {useState} from "react";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
const QRCode = require('qrcode.react');

const App = () => {
    const [value,setValue] = useState('')

    const createFileAndQRCode = (e) => {
        setValue(e.target.value)
    }

    const download = () => {
        if(value){
            htmlToImage.toPng(document.getElementById('qr-code'))
                .then(dataUrl =>  {
                    const link = document.createElement('a');
                    link.download = `${value}.jpeg`;
                    link.href = dataUrl;
                    link.click();
                })
        }
    }
  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
                <div className="text-center">
                    <h1>QR Code Generator</h1>
                    <div className="form-controls mt-4">
                        <input type="text" className="input" id="url" placeholder="URL" value={value} onChange={createFileAndQRCode}/>
                    </div>
                    <div className="mt-4 p-5 bg-purple position-relative">
                        <div className="save" onClick={download}>
                            <img src="/save.png" alt="Save"/>
                        </div>
                        <QRCode value={value} id="qr-code"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
