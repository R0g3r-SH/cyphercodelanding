
import styles from './clients.module.css'
import mau from '../../../public/mau.jpg'
import StarIcon from '../../../public/StartIcon.jsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



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
            "img":mau,
            "nombre":"Mauricio",
            "review":"adsfasdfadsf",
            "stars":5,
            "puesto":"Data Analyst"
        },
        {
            "img":mau,
            "nombre":"Juan",
            "review":"adsfasdfadsf",
            "stars":3,
            "puesto":"Data Analyst"
        },
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
                
                
                
                {clientes.map((client) => (
                    
                
                    <div key={client.nombre} className={styles.reviewCard}>
                        <div className={styles.titleReview}>
                            <StarsRating count={client.stars}></StarsRating>
                            <p>{client.review}</p>
                        </div>
                        <div className={styles.clients}>
                            <img src={client.img} alt="client" />
                            <div className={styles.clientInfo}>
                                <p>{client.nombre}</p>
                                <p>{client.puesto}</p>
                            </div>
                        </div>
                    </div>
                
                
                ))}
                
                
                </div>
                </div>
            </div>
        </div>
    )
}
const StarsRating = ({count})=>{
    const startsArray = Array.from({length:count})
    return (
        <div style = {{display:'flex',alingItems:'center'}}>
            {startsArray.map((_,index)=>(
                <StarIcon/>
            ))}
        </div>
    )
}
export default Clients


