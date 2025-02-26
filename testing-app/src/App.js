import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"

import Body from "./components/Body";
import Header from "./components/Header";
function AppLayout() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />
        }
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
