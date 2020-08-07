import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';
import Meta from '../Meta'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'

function Layout({ children }) {
  const darkMode = useDarkMode();
  const [modal, setModal] = useState(null)

  return (
    <>
      <Meta />
      <Header darkMode={darkMode} showModal={setModal} />
      <Modal modal={modal} showModal={setModal} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
