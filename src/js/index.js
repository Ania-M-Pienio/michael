import '../style.css';
import 'slick-carousel';
import './navbar';
import './bars';
// images
import landscape1 from '../../src/assets/landscape-1.jpg';
import landscape2 from '../../src/assets/landscape-2.jpg';
import landscape3 from '../../src/assets/landscape-3.jpg';
import about from '../../src/assets/about.png';
import tech from '../../src/assets/tech.jpg';
import tech2 from '../../src/assets/tech2.jpg';
import cert1 from '../../src/assets/cert-1.png';
import cert2 from '../../src/assets/cert-2.png';
import cert3 from '../../src/assets/cert-3.png';
import cert4 from '../../src/assets/cert-4.png';
import cert5 from '../../src/assets/cert-5.png';
import cert6 from '../../src/assets/cert-6.png';
import cert7 from '../../src/assets/cert-7.png';
import exp1 from '../../src/assets/experience-1.jpg';
import exp2 from '../../src/assets/experience-2.jpg';
import exp3 from '../../src/assets/experience-3.jpg';
import exp4 from '../../src/assets/experience-4.jpg';


$('.my-class').addClass('inactive');

$('.home-hero__slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  });



