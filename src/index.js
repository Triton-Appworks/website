import ReactDOM from 'react-dom/client';
import './css/button.css';
import './css/index.css';
import logo from './images/TritonAppworks-blue.png';

const appsClick = (event) => {
  event.target.blur();
};
const utilitiesClick = (event) => {
  event.target.blur();
};
const contactClick = (event) => {
  window.location.href = "mailto:chris@tritonappworks.com";
  event.target.blur();
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="homepage fade-in">
    <div className="overlay fade-in-delay1s"></div>
    <div className="logo-container fade-in-delay2s zoom-in-delay1s">
      <img src={logo} alt="Triton Appworks LLC" className="logo" />
    </div>
    <div className="button-container fade-in-delay3s zoom-in-delay2s">
      <button onClick={appsClick} className="button applications apps-button">Apps</button>
      <button onClick={utilitiesClick} className="button tools utils-button">Utilities</button>
      <button onClick={contactClick} className="button email contact-button">Contact</button>
    </div>
    <footer className="footer fade-in-delay4s zoom-in-delay3s">
      &copy; {new Date().getFullYear()} Triton Appworks LLC
    </footer>
  </div>
);
