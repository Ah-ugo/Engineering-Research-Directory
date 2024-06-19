import React, { useEffect, useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useParams } from 'react-router-dom';


// import pdfJS from 'pdfjs-dist/build/pdf.js';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.js';
// var pdflib = require('pdfjs-dist/build/pdf.js');

// pdflib.GlobalWorkerOptions.workerPort = new pdfjsWorker();

// pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

export default function BookPreview() {
    const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
//   const {encodedData} = useParams()
    // const data = JSON.parse(decodeURIComponent(encodedData));
    const { encodedUrlLink } = useParams();
    const data = JSON.parse(decodeURIComponent(encodedUrlLink));
    console.log(encodedUrlLink)

    // Decode the URL parameter
    // const decodedData = decodeURIComponent(encodedUrlLink);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    const options = {
        cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
      };

    //   useEffect(() => {
    //     console.log('Encoded URL:', encodedUrlLink);
    //     const decodedUrl = decodeURIComponent(encodedUrlLink);
    //     console.log('Decoded URL:', decodedUrl);
    //   }, [encodedUrlLink]);
  return (
    <div className='mx-2'>
        <Document className={""} onLoadSuccess={onDocumentLoadSuccess} file={data?.pdfFile}>
            
        <Page pageNumber={pageNumber}/></Document>
        {/* {pdfjs.version} */}
        <p>
        Page {pageNumber} of {numPages}
      </p>
      
      
      
{/* <div class="bg-gray-200 max-w-lg p-36 container flex justify-center mx-auto"> */}
  <div class="flex justify-between sticky bottom-0 w-full z-20 flex-row mx-auto">
    <button disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)} type="button" class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
      <div class="flex flex-row align-middle">
        <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
        </svg>
        <p class="ml-2">Prev</p>
      </div>
    </button>
    <button disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)} type="button" class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
      <div class="flex flex-row align-middle">
        <span class="mr-2">Next</span>
        <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </div>
    </button>
  </div>
{/* </div> */}
    </div>
  )
}
