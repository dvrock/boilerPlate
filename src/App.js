import React, { Suspense, lazy, useEffect, useState } from "react";


import routes from "./Routes/AllRoutes";
import LoadingScreen from "./Shared/LoadingScreen/LoadingScreen";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Error from "./Shared/Error/Error";

import { store } from "./Store/store";

import { toast } from "react-toastify";
// React.lazy makes it really simple to tell Webpack and our application that certain files, and code can be loaded later in the application.
// const user = store.getState().Auth?.user?.user//
import MainLayout from "./Components/MainLayout";
function App() {



  return (
    <React.Fragment>
      <Routes>
        <Route path='*' element={<Error />} />
        {routes.map((route, i) => {
          let Component = route.component;
          return (
            <>
              <Route
                key={i}
                path={route.path}
                element={
                  <>


                    <MainLayout>
                      <Suspense fallback={<LoadingScreen />}>
                        <>
                          <Component
                          />
                        </>
                      </Suspense>
                    </MainLayout>



                  </>
                }
              />
            </>
          );
        })}
      </Routes>
    </React.Fragment>
  );
}

export default App;