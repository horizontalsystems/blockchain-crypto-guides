import Meta from '../Meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  )
}
