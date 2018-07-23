import React from 'react';

export default () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"/>
      <style jsx>{`
        .loading-spinner {
          border: 10px solid rgba(192,192,192,0.4);
          border-top: 10px solid #f2f2f2;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
          margin-left: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
