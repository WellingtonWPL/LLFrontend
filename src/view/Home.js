import React, {useState, useEffect} from 'react'
import { useNavigate }  from 'react-router-dom';
import api from '../helpers/Api';
import '../myStyles.css'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home(props){
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setSuggestions(data);
//       });
//   }, []);

//   let settings = {
//     infinite: false,
//     speed: 1000,
//     arrows: true,
//     slidesToShow: 5,
//     slidesToScroll: 4,

//     responsive: [
//       {
//         breakpoint: 960,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="container">
//       <h6 className="text-muted">Friend Suggestions</h6>
//       {suggestions.length === 0 ? (
//         <div className="spinner-border" role="status">
//           <span className="sr-only">Loading...</span>
//         </div>
//       ) : (
//         <Slider {...settings}>
//           {suggestions.map((current) => (
//             <div className="out" key={current.id}>
//               <div className="card">
//                 <img
//                   className="rounded-circle"
//                   alt={"users here"}
//                   src={`https://source.unsplash.com/random/${current.id}`}
//                   height={56}
//                   width={56}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{current.username}</h5>
//                   <small className="card-text text-sm-center text-muted">
//                     In your contacts
//                   </small>
//                   <br />
//                   <button className="btn btn-sm follow btn-primary">
//                     Follow
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       )}
//     </div>
//   );
// } 






    const [movie, setMovie] = useState('');
    const [movies, setMovies] = useState('');
    const [serie, setSerie] = useState('');
    const [series, setSeries] = useState('');
    const navigate = useNavigate();

    function getMovies(){
      api().get('/api/getMovies').then(response => {
        if (response.data.error) {
            console.log(response.data.error)
        } else {
            setMovies(response.data.return);
            return true;
        }
      })
    }

    function getSeries(){
      api().get('/api/getSeries').then(response => {
        if (response.data.error) {
            console.log(response.data.error)
        } else {
            setSeries(response.data.return);
            return true;
        }
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
        h2Style : {
            fontFamily: '"Copperplate", Fantasy',
            color: 'yellow'
        },

        bodyStyle : {
          backgroundColor: '#282639',
          height: '200px',
        },

        colStyleSenha : {
            margin: 'auto',
            display: 'flex'
        },

        fonte : {
            fontFamily: '"inter"',
            fontWeight: '600',
            color: 'white'
        },
        
        fonteSpan : {
            fontFamily: '"inter"',
            fontWeight: '400',
            color: '#9895b4'
        },

        fonteSpan2 : {
            fontFamily: '"inter"',
            fontWeight: '400',
            fontSize: '12px',
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

        buttonStyle : {
            width:'100%',
            display:'block',
            fontFamily: '"inter"',
            fontWeight: '600',
            color: 'black',
            backgroundColor: 'white',
            minHeight: '70px',
        },

        styleIcon : {
            marginLeft: '-50px', 
            marginTop: '25px',
            cursor: 'pointer',
            color: '#9895b4'
        },
    }
    
    return(
        <div>
          <div className="div_ini" style={style.bodyStyle}>
          </div>
          <div className="row">
              <div className="col-md-12" >
                  
                          {/* <form>
                              <div className="mb-3" style={style.text}>
                                  <div className="form-group mb-3 col-md-8" style={style.colStyle}>
                                      <h3 style={style.fonte}>Cadastre-se</h3>
                                      <span style={style.fonteSpan}>Acompanhe os melhores filmes e séries.</span>
                                  </div>
                                  <div className="form-group mb-3 col-md-8" style={style.colStyle}>
                                      <input type="text" name="nome" style={style.transparentInput} onChange={e => setNome(e.target.value)} value={nome} className="form-control" placeholder="Nome completo"></input>
                                  </div>
                                  <div className="form-group mb-3 col-md-8" style={style.colStyle}>
                                      <input type="email" name="email" style={style.transparentInput} onChange={e => setEmail(e.target.value)} value={email} className="form-control" placeholder="Email"></input>
                                  </div>
                                  <div className="form-group mb-3 col-md-8" style={style.colStyleSenha}>
                                      <input type="password" id="id_password" name="senha" style={style.transparentInput} onChange={e => setSenha(e.target.value)} value={senha} className="form-control" placeholder="Senha"></input>
                                      <i id="id_icon_pw" onClick={showPassword} className="far fa-eye" style={style.styleIcon}></i>
                                  </div>
                                  <div className="form-group mb-3 col-md-8" style={style.colStyle}>
                                      <span style={style.fonteSpan2}>Ao clicar em <b>cadastrar</b>, você está aceitando os Termos e Condições e a Política de Privacidade da Laon.</span>
                                  </div>
                                  <div className="form-group mb-3 col-md-8"  style={style.colStyleButton}>
                                      <button type="button" onClick={handleSubmit} style={style.buttonStyle} className="btn btn-end btn-block">Cadastrar</button>
                                  </div>
                              </div>
                          </form> */}
                      
              </div>
          </div> 
        </div>
        
    );
    
}


