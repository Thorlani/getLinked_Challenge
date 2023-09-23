import React, { useEffect } from "react";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Register from "./Register";
const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.addEventListener("load", () => {
      const preloader = document.querySelector(".preloader");

      setTimeout(() => {
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
        preloader.classList.add("preloader-finished");
      }, 3000);
    });
  }, []);

  return (
    <>
      <div className="preloader">
        <div className="w-fit h-fit flex flex-col justify-center items-center gap-8">
          <h3 className="text-white lg:text-xl font-clash-display tracking-wider">
            Loading your{" "}
            <span className="bg-purple p-2 lg:p-3 rounded-lg">
              Get<span className="text-strong-pink">Linked</span>
            </span>{" "}
            experience...
          </h3>
          <div className="spinner">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
