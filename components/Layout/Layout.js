import Meta from '../Meta'
import Header from '../Header'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
