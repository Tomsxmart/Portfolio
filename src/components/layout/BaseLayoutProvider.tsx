import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface BaseLayoutProviderProps {
  children?: React.ReactNode;
}

const BaseLayoutProvider: React.FC<BaseLayoutProviderProps> = ({
  children,
}) => {
  // the structure is a bit confusing at first since its a full screen scrolling page instead of a traditional structure
  // so instead of header footer being relative to the entire page - in this case it is relative to hero section
  // mainly for structuring purposes
  return (
    <>
      <Header />
      <main className="flex-grow flex">{children}</main>
      <Footer />
    </>
  );
};
export default BaseLayoutProvider;
