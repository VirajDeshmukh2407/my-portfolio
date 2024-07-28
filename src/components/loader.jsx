import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../pages/effect.css";
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r glowing-effect from-slate-600 to-slate-900">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSpinner}
            className="text-slate-800 text-6xl animate-spin"
          />
        </div>
        <div className="loader bg-slate-700 rounded-full w-32 h-32 border-t-4 border-b-4 border-white-600 animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
