import "@/styles/global.css";

import { ThemeProvider } from "next-themes";
import PropTypes from "prop-types";

import Name from "@/components/name";
import NavBar from "@/components/nav-bar";
import { useTagManager } from "@/lib/gtm";

const App = ({ Component, pageProps }) => {
  useTagManager();

  return (
    <ThemeProvider attribute="class">
      <Name />
      <NavBar />
      <main className="flex flex-col flex-grow py-12 w-full">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </main>
      <p className="mx-auto mt-2 mb-8 text-sm text-center">
        &copy; Copyright 2021, Siddharth Adusumelli, All Rights Reserved.
      </p>
    </ThemeProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

export default App;
