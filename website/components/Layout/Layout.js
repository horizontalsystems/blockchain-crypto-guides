import Meta from '../Meta'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'
import useDarkMode from 'use-dark-mode';

export default function Layout({ children }) {
  const darkMode = useDarkMode();

  return (
    <>
      <Meta />
      <Header darkMode={darkMode} />
      <Modal />
      <main>{children}</main>
      <Footer />
    </>
  )
}
