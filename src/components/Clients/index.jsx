
import styles from './clients.module.css'
import mau from '../../../public/mau.jpg'
import StarIcon from '../../../public/StartIcon.jsx';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/scrollbar';





const Clients = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const clientes = [
        {
            "img": mau,
            "nombre": "Mauricio",
            "review": "Amazing service! They were very attentive and professional. Highly recommended!",
            "stars": 5,
            "puesto": "Data Analyst"
        },
        {
            "img": mau,
            "nombre": "Daniel",
            "review": "Great experience overall. Some minor issues, but they were quick to resolve them.",
            "stars": 4,
            "puesto": "Software Engineer"
        },
        {
            "img": mau,
            "nombre": "Sofia",
            "review": "Exceptional quality and timely delivery. Exceeded my expectations!",
            "stars": 5,
            "puesto": "Project Manager"
        },
        {
            "img": mau,
            "nombre": "Luis",
            "review": "Good value for the price. Professional and easy to work with.",
            "stars": 4,
            "puesto": "Graphic Designer"
        },
        {
            "img": mau,
            "nombre": "Maria",
            "review": "Satisfied with the results, but there’s room for improvement.",
            "stars": 5,
            "puesto": "Marketing Specialist"
        },
        {
            "img": mau,
            "nombre": "Juan",
            "review": "Excellent team! They understood our needs and delivered high-quality work.",
            "stars": 5,
            "puesto": "UX Designer"
        },
        {
            "img": mau,
            "nombre": "Ana",
            "review": "The service was good, but communication could be better.",
            "stars": 5,
            "puesto": "Content Writer"
        },
        {
            "img": mau,
            "nombre": "Pedro",
            "review": "Very pleased with the final product. They are experts in what they do!",
            "stars": 5,
            "puesto": "Web Developer"
        },
        {
            "img": mau,
            "nombre": "Camila",
            "review": "High-quality results! Definitely will work with them again.",
            "stars": 5,
            "puesto": "Digital Marketing Specialist"
        },
        {
            "img": mau,
            "nombre": "Carlos",
            "review": "Good experience, but response times could be faster.",
            "stars": 4,
            "puesto": "Product Manager"
        }
    ]
    console.log(clientes)
    return (
        <div className={styles.container}>
            <div className={styles.companies}>
                <p>Companies We Have Worked With</p>
            </div>
            <div className={styles.reviews}>
                <p className={styles.think}>What Our <br/> Clientes Say <br/> About Us?</p>
                <div> 
                <div className={styles.Carrousel} >
                
                
                <Swiper
                 spaceBetween={50}
                 slidesPerView={3}

                 loop={true}>
                {clientes.map((client) => (
                    
                    <SwiperSlide key={client.nombre}>
                    <div className={styles.reviewCard}>
                        <div className={styles.titleReview}>
                            <StarsRating count={client.stars}></StarsRating>
                            <p>{client.review}</p>
                        </div>
                        <div className={styles.clients}>
                            <img src={client.img} alt="client" />
                            <div className={styles.clientInfo}>
                                <p className={styles.nombre}>{client.nombre}</p>
                                <p className={styles.puesto}>{client.puesto}</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                
                ))}
                </Swiper>
                </div>
                </div>
            </div>
        </div>
    )
}
const StarsRating = ({ count }) => {
    const startsArray = Array.from({ length: count });
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {startsArray.map((_, index) => (
                <StarIcon key={index} /> // Add a unique key for each StarIcon
            ))}
        </div>
    );
}
export default Clients


