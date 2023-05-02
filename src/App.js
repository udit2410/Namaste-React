import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/aboutUs";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./components/Error";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

  },
  {
    path: "/aboutUs",
    element: <AboutUs />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);




