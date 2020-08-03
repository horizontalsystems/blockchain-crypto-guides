import Meta from '../Meta'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'
import useDarkMode from 'use-dark-mode';

export default function Layout({ themeName, children }) {
  const darkMode = useDarkMode(false);

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
