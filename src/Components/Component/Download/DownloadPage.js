import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const DownloadPage = ({ elementId, fileName }) => {

    const downloadFile = () => {
        const input = document.getElementById(elementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'pt', 'a2')
            pdf.addImage(imgData, 'JPEG', 0, 0)
            pdf.save(`${fileName}`)

        })
    }

    return (
        <div>
            <button onClick={downloadFile}><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></button>
        </div>
    );
};

export default DownloadPage;