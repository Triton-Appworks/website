import ReactDOM from 'react-dom/client';
import './css/button.css';
import './css/index.css';
import logo from './images/TritonAppworks-blue.png';

const contactClick = () => {
  window.location.href = 'mailto:chris@tritonappworks.com'
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="homepage">
    <div className="overlay fade-in"></div>
    <div className="logo-container fade-in delay zoom-in">
      <img src={logo} alt="Triton Appworks LLC" className="logo" />
    </div>
    <div className='button-container'>
      <button onClick={contactClick} className="button email contact-button">Contact</button>
    </div>
    <footer className="footer">
      &copy; {new Date().getFullYear()} Triton Appworks LLC
    </footer>
  </div>
);
