import React from 'react';
import '@/assets/styles/globals.css';

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
