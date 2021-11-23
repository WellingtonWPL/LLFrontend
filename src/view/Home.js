import React, {useState, useEffect} from 'react'
import { useNavigate }  from 'react-router-dom';
import api from '../helpers/Api';
import '../myStyles.css'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home(props){
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

    const [movie, setMovie] = useState('');
    const [movies, setMovies] = useState([]);
    const [serie, setSerie] = useState('');
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

    function selectMovie(){
        props.movie(movie);
        navigate('/detalhe')
    }
    
    function selectSerie(){
      props.serie(serie);
      navigate('/detalhe')
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
        
        fonteSpan : {
            fontFamily: '"inter"',
            fontWeight: '400',
            color: '#9895b4'
        },

        fonteSpan2 : {
            fontFamily: '"inter"',
            fontWeight: '600',
            fontSize: '15px',
            color: '#9895b4'
        },

        transparentInput : {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            border: '0.1px solid #9895b4',
            minHeight: '70px',
            color: '#9895b4',
            boxSizing: 'border-box',
            paddingLeft: '25px'
        },

        text : {
            marginTop: '10%',
            marginBottom: '10%'
        },

        colStyleButton : {
            paddingBottom: '5%',
            paddingTop: '1rem',
            margin: 'auto',
            display: 'flex'
        },

        colStyle : {
        //    marginTop: '20px'
           paddingTop:'30px'
        },

        styleIcon : {
            marginLeft: '-50px', 
            marginTop: '25px',
            cursor: 'pointer',
            color: '#9895b4'
        },

        rowStyle : {
            marginTop: '-23vh',
            heigth: '10%',
            maxWidth: '100%'
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
                                    <div className="out" key={current.id}>
                                        <img
                                            className="rounded-circles"
                                            alt={"users here"}
                                            src={`http://localhost/teste/LLBackend/storage/app/movies/movie-${current.id}.png`}
                                            
                                        />
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
                                        <img
                                            className="rounded-circles"
                                            alt={"users here"}
                                            src={`http://localhost/teste/LLBackend/storage/app/series/serie-${current.id}.png`}
                                            
                                        />
                                        
                                        
                                       
                                        
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div> 
            </div>
        </div>
        
    );
    
}


