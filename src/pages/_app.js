import Router from 'next/router'
import { ToastContainer } from 'react-toastify'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

NProgress.configure({}) //showSpinner: false
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position='top-center'></ToastContainer>
    </>
  );

}
