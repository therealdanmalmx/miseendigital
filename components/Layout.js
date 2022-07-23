import Navbar from './base/Navbar'
import Footer from './base/Footer'

function Layout({children}) {

  return (
    <>
        <Navbar />
            <main>
                {children}
            </main>
        <Footer />
    </>
  )
}

export default Layout;