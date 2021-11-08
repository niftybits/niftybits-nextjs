import React from "react";
import Header from "components/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
