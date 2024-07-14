// import React from "react";

// const LoadingSpinner = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
//     </div>
//   );
// };

// export default LoadingSpinner;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-500 to-slate-900">
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
