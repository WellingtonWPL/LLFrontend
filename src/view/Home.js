import React, {useState, useEffect} from 'react'
import { useNavigate }  from 'react-router-dom';
import api from '../helpers/Api';
import config from '../config.json'
import Footer from '../components/Footer';
import '../myStyles.css'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home(){

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const navigate = useNavigate();

    const settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                },
            },
        ],
    }

    function getMovies(){
      api().get('/api/getMovies').then(response => {
        setMovies(response.data.return);
      },
      response => {
        alert('Não foi possível solicitar os dados!');
      })
    }

    function getSeries(){
      api().get('/api/getSeries').then(response => {
        setSeries(response.data.return);
      },
      response => {
        alert('Não foi possível solicitar os dados!');
      })
    }

    function selectMovie(movie){
        navigate('/detalhe', {state: {tipo: 'MOVIE', id:movie}})
    }
    
    function selectSerie(serie){
        navigate('/detalhe', {state: {tipo: 'SERIE', id:serie}})
        
    }

    useEffect(()=>{
      getMovies();
      getSeries();
    },[])
    

    const style = {
        bodyStyle : {
          backgroundColor: '#282639',
          height: '30vh',
        },

        fonte : {
            fontFamily: '"inter"',
            fontWeight: '600',
            color: 'white',
        },

        fonteSpan2 : {
            fontFamily: '"inter"',
            fontWeight: '600',
            fontSize: '15px',
            color: '#9895b4'
        },

        colStyle : {
           paddingTop:'30px'
        },

        rowStyle : {
            marginTop: '-23vh',
            height: '10%',
            maxWidth: '100%'
        },

        img : {
            cursor: 'pointer'
        },
    }
    
    return(
        <div>
            <div className="div_ini" style={style.bodyStyle}>
            </div>
            <div className="row" style={style.rowStyle}>
                <div className="col-md-12" >
                    <div className="container">
                        <h1 style={style.fonte}>Populares</h1>
                    </div>
                </div>
                <div className="col-md-12" style={style.colStyle}>
                    <div className="container">
                        <h6 className="text-muted" style={style.fonteSpan2}>FILMES</h6>
                        {movies.length === 0 ? (
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <Slider {...settings}>
                                {movies.map((current) => (
                                    <div className="out" key={current.id} >
                                        <span onClick={e => selectMovie(current.id)}>
                                            <img style={style.img}
                                                src={config.SERVER_URL+`/storage/app/movies/movie-${current.id}.png`}
                                            />
                                        </span>
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
                <div className="col-md-12" style={style.colStyle} >
                    <div className="container">
                        <h6 className="text-muted" style={style.fonteSpan2}>SÉRIES</h6>
                        {series.length === 0 ? (
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <Slider {...settings}>
                                {series.map((current) => (
                                    <div className="out" key={current.id}>
                                         <span onClick={e => selectSerie(current.id)}>
                                            <img
                                                src={config.SERVER_URL+`/storage/app/series/serie-${current.id}.png`}
                                                
                                            />
                                        </span>
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div> 
            </div>
            <Footer></Footer>
        </div>
        
    );
    
}


