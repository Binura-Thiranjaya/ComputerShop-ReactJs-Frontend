import Navbar from '../components/navbar.jsx';
import Body from '../components/body.jsx';
import Footer from '../components/footer.jsx';

export default function homepage() {
  return (
    <div>
        <Navbar />
        <div className='container'>
          <Body />
        </div>
        <Footer />
    </div>
  )
}
