import Header from './Header'
import Footer from './Footer'

export function BaseLayout ({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
