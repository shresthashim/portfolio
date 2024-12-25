import React, { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ClimbingBoxLoader
        speedMultiplier={1.2}
        color={"#F37A24"}
        loading={loading}
        size={30}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  ) : null;
};

export default Loading;
