import React, { Suspense } from "react";
import Router from "./router/Router";

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <Router />
    </Suspense>
  );
};

export default App;
