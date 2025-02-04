import React, { useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Docview = ({ pdfUrl }) => {
  const defaultLayout = defaultLayoutPlugin();
  const zoom = zoomPlugin();

  return (
    <div style={{ height: "750px" }}>
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
    <Viewer fileUrl={pdfUrl} plugins={[defaultLayout, zoom]} />
</Worker>

    </div>
  );
};

export default Docview;
