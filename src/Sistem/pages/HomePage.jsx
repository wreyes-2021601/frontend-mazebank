import React from 'react'
import MAZEBANK1 from '../../img/Mazebankcorre1'
// import MAZEBANK3 from "../../img/Mazebankcorre1.jpg"
// import MAZEBANK4 from "../../img/MAZEBANKEDIFICIO.jpg"
import { Cards } from '../../components/Cards'
import { Footer } from "../../components/FooterGood"


const HomePage = () => {
  return (
    <>
      <div>
        <h1 id="titulo">
          MazeBank
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">

                  <img id="slider-item" src={MAZEBANK1} className="d-flex " alt="..." />

                </div>
                <div className="carousel-item">

                  {/* <img id="slider-item" src={} className="d-flex " alt="..." /> */}

                </div>
                <div className="carousel-item">

                  {/* <img id="slider-item" src={} className="d-flex " alt="..." /> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />


      <Footer />
    </>
  )
}

export default HomePage
