import React, { lazy } from "react";




const routes = [
    {
        path: "/",
        component: lazy(() => import("../Pages/Home")),
        exact: true,
    
      },
  {
    path: "/*",
    component: lazy(() => import("../Shared/Error/Error")),
    exact: true,

  }
];

export default routes;