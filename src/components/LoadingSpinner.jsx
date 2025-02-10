import React from "react";
import ReactLoading from "react-loading";

const LoadingSpinner = () => {
  return (
    <div style={styles.loaderContainer}>
      <ReactLoading type="spinningBubbles" color="#6c63ff" height={100} width={100} />
    </div>
  );
};

// Inline CSS for centering the loader
const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#0d1117", // Dark background (adjust to match your theme)
  },
};

export default LoadingSpinner;
