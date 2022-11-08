import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'


const NotFoundView = () => {
  window.top.document.title = '404 Fixxo.'
  return (
    <>
        <MainMenuSection />
        <div className="container d-flex justify-content-center align-items-center" style= { { height: "500px" } }>
          <h1>404 - Page Not Found, suck it</h1>
        </div>
        <div style={{ position: "fixed", bottom : "0"}}>
        <FooterSection />
        </div>


    </>
  )
}

export default NotFoundView