import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo_1 from "./assets/photo-1.jpg";
import photo_2 from "./assets/photo-2.jpg";
import photo_3 from "./assets/photo-3.jpg";
import photo_4 from "./assets/photo-4.jpg";
import logo from "./assets/logo.jpg";

function App() {
    return (
        <>
            <header>
                <img src={logo} alt="logo" className="logo-img" />
                <p className="header-text">ГКУ-24М</p>
            </header>
            <div className="container">
                <h1>Спадщина, памʼять, ідентичність </h1>
                <div className="carousel-wrapper">
                    <Carousel infiniteLoop={true}>
                        <div>
                            <img src={photo_1} alt="image-1" />

                            <p className="legend">
                                Степан Шпинда під час Першої світової війни
                            </p>
                        </div>
                        <div>
                            <img src={photo_2} alt="image-1" />
                            <p className="legend">
                                Марися Шипак з родиною, Лемківщина
                            </p>
                        </div>
                        <div>
                            <img src={photo_3} alt="image-1" />
                            <p className="legend">
                                Степан та Іван Шпинди у Перемишлі, 1938 рік
                            </p>
                        </div>
                        <div>
                            <img src={photo_4} alt="image-1" />
                            <p className="legend">
                                Іван та Марися Шпинди у Підволочиську, 1946 рік
                            </p>
                        </div>
                    </Carousel>
                </div>
            </div>
            <footer>
                <p className="footer-text">
                    &copy; {new Date().getFullYear()}, developed by Ivan Shpynda
                </p>
            </footer>
        </>
    );
}

export default App;
