import Meta from '../Meta'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <Modal />
      <main>{children}</main>
      <Footer />
    </>
  )
}
