import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
    return (
        <>
            <header>
                <img src="../public/logo.jpg" alt="logo" className="logo-img" />
                <p className="header-text">ГКУ-24М</p>
            </header>
            <div className="container">
                <h1>Спадщина, памʼять, ідентичність </h1>
                <div className="carousel-wrapper">
                    <Carousel infiniteLoop={true}>
                        <div>
                            <img src="../public/photo-1.jpg" alt="image-1" />

                            <p className="legend">
                                Степан Шпинда під час Першої світової війни
                            </p>
                        </div>
                        {/* <div>
                        <img src="../public/photo-2.jpg" alt="image-1" />
                        <p className="legend">Родинне весілля на Лемківщині</p>
                    </div> */}
                        <div>
                            <img src="../public/photo-3.jpg" alt="image-1" />
                            <p className="legend">
                                Марися Шипак з родиною, Лемківщина
                            </p>
                        </div>
                        <div>
                            <img src="../public/photo-4.jpg" alt="image-1" />
                            <p className="legend">
                                Степан та Іван Шпинди у Перемишлі, 1938 рік
                            </p>
                        </div>
                        <div>
                            <img src="../public/photo-5.jpg" alt="image-1" />
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
