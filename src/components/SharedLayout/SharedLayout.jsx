import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </>
  );
};