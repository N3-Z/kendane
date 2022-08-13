import './style/style.scss';
import Home from './component/Home';
import Services from './component/Services';
import About from './component/About';
import Certificate from './component/Certificate';
import logo from './img/google.png'
// import Typical from 'react-typical'
// import logo from './img/logo.jfif'
import $ from 'jquery'

function App() {
  $(function() {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    })
  });
  function home(){
    $('*').animate({scrollTop: 0}, 1000)
  }
  function about(){
    let header_height = $('header').height()
    let home_height = $('#home').height()
    let service_height = $('#service').height()
    let certificate_height = $('#certificate').height()
    let total_height = certificate_height + service_height + home_height - header_height

    $('*').animate({scrollTop: total_height}, 1000)
  }
  function service(){
    let header_height = $('header').height()
    let home_height = $('#home').height()
    $('*').animate({scrollTop: home_height - header_height}, 1000)
  }
  return (
    <div className="App">
      <header className='shadow'>
        <div className='container'>
          <div className='header-logo'>
            <img src={logo} alt="" />
          </div>
          <div className='header-menu'>
            <a href="#home" onClick={home}>Home</a>
            <a href="#service" onClick={service}>Service</a>
            <a href="#about" onClick={about}>About Us</a>
          </div>
        </div>
      </header>
      
      <Home />
      <Services />
      <Certificate />
      <About />
      <footer>
        <div className='footer-detail'>
          <div>
            <span>ADDRESS </span>
            <p>
              Halte TransJakarta Dukuh Atas 1, RT.10/RW.11, Kuningan, Setia Budi, Setiabudi, South Jakarta City, Jakarta 10250
            </p>
          </div>
          <div className='detail-contact'>
            <p>
            kendane@email.com
            <br />
            082193851294
            </p>
          </div>
          
        </div>
        <div className='footer-s'>
          <div className='socialmedia'>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-linkedin"></a>
          </div>
          <div className='copy-right'>
            © Copyright Kendane 2022. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
