import { Suspense } from "react";
import { Outlet } from "react-router-dom";


export const ShopsPage = () => {

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};