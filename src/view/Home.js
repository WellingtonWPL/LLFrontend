import React, {useState, useEffect, useMemo} from 'react'
import { useNavigate }  from 'react-router-dom';
import api from '../helpers/Api';
import config from '../config.json'
import Footer from '../components/Footer';
import '../myStyles.css'
import Swal from 'sweetalert2/src/sweetalert2'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import "bootstrap/dist/css/bootstrap.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home(props){
    
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const navigate = useNavigate();
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const renderMovies = useMemo(()=>(
        <div className="container">
            <h6 className="text-muted" style={style.fonteSpan2}>FILMES</h6>
            {movies.length === 0 ? (
                <div>
                    <span style={style.fonteSpan2}>Nenhum resultado encontrado</span>
                </div>
            ) : (
                <Carousel responsive={responsive} infinite={true}>
                    {movies.map((current) => (
                        <div className="out" key={current.id} >
                            <span onClick={e => selectMovie(current.id)}>
                                <img style={style.img}
                                    src={config.SERVER_URL+`/storage/app/movies/movie-${current.id}.png`}
                                />
                            </span>
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    ), [movies])

    const renderSeries = useMemo(()=>(
        <div className="container">
            <h6 className="text-muted" style={style.fonteSpan2}>SÉRIES</h6>
            {series.length === 0 ? (
                <div>
                    <span style={style.fonteSpan2}>Nenhum resultado encontrado</span>
                </div>
            ) : (
                <Carousel responsive={responsive} infinite={true}>
                    {series.map((current) => (
                        <div className="out" key={current.id}>
                                <span onClick={e => selectSerie(current.id)}>
                                <img style={style.img}
                                    src={config.SERVER_URL+`/storage/app/series/serie-${current.id}.png`}
                                    
                                />
                            </span>
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    ), [series])


    function getMovies(){
        let config = {
            headers: {'Authorization': 'Bearer '+ userToken}
        };
        api().get('/api/getMovies', config).then(response => {
            setMovies(response.data.return);
        },
        response => {
            Swal.fire({
                icon: 'error',
                title: 'Acesso negado!'
            })
            navigate('/login')
        })
    }

    function getSeries(){
        let config = {
            headers: {'Authorization': 'Bearer '+ userToken}
        };
        api().get('/api/getSeries', config).then(response => {
            setSeries(response.data.return);
        },
        response => {
            navigate('/login')
        })
    }

    function selectMovie(movie){
        navigate('/detalhe', {state: {tipo: 'MOVIE', id:movie}})
    }
    
    function selectSerie(serie){
        navigate('/detalhe', {state: {tipo: 'SERIE', id:serie}})
        
    }

    useEffect(()=>{
        setSeries(props.series);
        setMovies(props.movies);
    },[props.series, props.movies])

    useEffect(()=>{
        getMovies();
        getSeries();
    },[])
    

    
    
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
                    {renderMovies}
                </div>
                <div className="col-md-12" style={style.colStyle} >
                    {renderSeries}
                </div> 
            </div>
            <Footer></Footer>
        </div>
        
    );
    
}

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

    btnBackStyle : {
        color: 'white',
        borderRadius: '50%',
        borderWidth: '0.02px',
        borderStyle: 'solid',
        borderColor: 'white',
        height: '40px',
        width: '40px' , 
        fontSize: '12px',
    }
}
