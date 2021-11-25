import React, {useState, useEffect, route} from 'react'
import { useNavigate, useLocation, Link }  from 'react-router-dom';
import api from '../helpers/Api';
import config from '../config.json'
import Footer from '../components/Footer';
import Swal from 'sweetalert2/src/sweetalert2'


export default function Detalhe(){
    const [item, setItem] = useState({});
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(userToken){
            if(state){
                let config = {
                    headers: {'Authorization': 'Bearer '+ userToken}
                };
                api().get('/api/getDetalhes/'+ state.tipo  +'/'+ state.id, config).then(response => {
                        let data = response.data.return;
                        data.categorias = data.categorias.split(',');
                        setItem(data);
                    },
                    response => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Não foi possível solicitar os dados!'
                        })
                       
                    })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Ocorreu um erro inesperado!'
                })
            }
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Acesso negado!'
            })
            navigate('/login')
        }
        
    },[])

    const {state} = useLocation();
    let caminho = null;
    if(userToken){
        const { tipo, id } = state; // Read values passed on state
        caminho = state.tipo == 'MOVIE' ? '/storage/app/movies/movie' : '/storage/app/series/serie';
    }

    return(
        <div>
            <div className="div_ini" style={style.bodyStyle}>
            </div>
            {/* <div className="row" style={style.rowStyle}> */}
            {item.id == null ? (
                <div></div>
            ) : (
                    <div className="row" style={style.rowStyle}>
                        <div className="col-md-3">
                            <img style={style.img}
                                src={config.SERVER_URL+`${caminho}-${item.id}.png`}
                            />
                            <div className="form-group mb-3 col-md-12"  style={style.colStyleButton}>
                                <button type="button" onClick={()=> window.open(item.trailer, "_blank")} style={style.buttonStyle} className="btn btn-end btn-block">Assistir trailer</button>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row" style={style.rowS}>
                                <div className="row" >
                                    <div className="col-md-6">
                                        <h2 style={style.fonte}>{item.nome}</h2>
                                    </div>
                                </div>
                                <br/>
                                <div className="row" >
                                    <div className="col-md-6">
                                        <span style={style.fonteSpan2}><b>Título original: </b>{item.titulo}</span>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-3">
                                        <span style={style.fonteSpan2}><b>Ano: </b>{item.ano}</span>
                                    </div>
                                </div>
                                {state.tipo == 'MOVIE' ? (
                                    <div className="row" >
                                        <div className="col-md-3">
                                            <span style={style.fonteSpan2}><b>Duração: </b>{item.duracao}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="row" >
                                        <div className="col-md-5">
                                            <div className="row" >
                                                <div className="col-md-4">
                                                    <span style={style.fonteSpan2}><b>Temporadas: </b>{item.temporadas}</span>
                                                </div>
                                                <div className="col-md-4">
                                                    <span style={style.fonteSpan2}><b>Episódios: </b>{item.episodios}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <br/><br/>
                                <div className="row" >
                                    <div className="col-md-5">
                                        <div className="row" >
                                        {item.categorias.map((current, idx) => (
                                            <div className="col-md-2 m-1" key={idx} style={style.categorias}>
                                                <span style={style.fonte}>{current}</span>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <br/><br/><br/><br/>
                            </div>
                            <div className="row" style={style.rowS}>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <h5 style={style.titulos}><b>Sinopse</b></h5>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-12">
                                        <p style={style.fonteSpan2}>{item.sinopse}</p>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-6">
                                        <h5 style={style.titulos}><b>Elenco</b></h5>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 style={style.titulos}><b>Prêmios</b></h5>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-6">
                                        <p style={style.fonteSpan2}>{item.elenco}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p style={style.fonteSpan2}>{item.premios}</p>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-6">
                                        {state.tipo == 'MOVIE' ? (
                                            <h5 style={style.titulos}><b>Diretor</b></h5>
                                        ) : (
                                            <h5 style={style.titulos}><b>Criador(es)</b></h5>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <h5 style={style.titulos}><b>Avaliações</b></h5>
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-md-6">
                                        {state.tipo == 'MOVIE' ? (
                                            <p style={style.fonteSpan2}>{item.diretor}</p>
                                        ) : (
                                            <p style={style.fonteSpan2}>{item.criador}</p>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <p style={style.fonteSpan2}>IMDb: {item.avaliacao}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/><br/><br/>
                        <Footer style={style.footer}></Footer>
                    </div>
                    
            )}
            
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
        fontWeight: '400',
        fontSize: '15px',
        color: '#9895b4'

    },

    buttonStyle : {
        width:'240px',
        display:'block',
        fontFamily: '"inter"',
        fontWeight: '600',
        color: 'black',
        backgroundColor: 'white',
        minHeight: '70px',
    },

    colStyleButton : {
        paddingBottom: '5%',
        paddingTop: '1rem',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center'
    },

    colStyle : {
       paddingTop:'30px'
    },

    rowStyle : {
        marginTop: '-23vh',
        maxWidth: '100%',
        position: 'absolute'
    },
    
    img : {
        height: '350px'
    },

    titulos:{
        paddingBottom: '5px',
        borderBottom: '0.1px solid #3e3c50',
        fontFamily: '"inter"',
        fontWeight: '600',
        fontSize: '15px',
        color: 'white'
    },

    categorias:{
        border: '0.1px solid #3e3c50',
        WebkitBorderRadius: '500px',
        fontFamily: '"inter"',
        fontWeight: '400',
        fontSize: '15px',
        color: '#9895b4',
        marginLeft: '5%',
        textAlign: 'center'
    },

    rowS:{
        position: 'inherit'
    },

    footer:{
        position:"fixed"
    }
    
}

