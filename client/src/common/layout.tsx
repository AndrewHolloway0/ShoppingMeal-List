import { Outlet } from "react-router-dom";
import { Suspense } from 'react'
import Header from "./header"
import { pageLoader } from "./pageLoader"

export default function Layout() {
  return (
    <>
    <Header />
    {/* <div className="pageContent"> */}
      <Suspense fallback={pageLoader()}>
        <Outlet />
      </Suspense>
    {/* </div> */}
    </>
  )
}
