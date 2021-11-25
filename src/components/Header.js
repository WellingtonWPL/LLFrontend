import React, {useState} from 'react';
import { useNavigate, useLocation }  from 'react-router-dom';
import api from '../helpers/Api'
import logo from '../img/Logo.svg'
import '.././myStyles.css'

export default function Header(props){

    const location = useLocation();
    const navigate = useNavigate();
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [busca, setBusca] = useState('');

    function redirect(){
        navigate(-1); 
    }
 
    function redirectPage(){
        if(userToken){
            let config = {
                headers: {'Authorization': 'Bearer '+ userToken}
            };
            
            api().post('/api/logout', null, config).then(response => {
                sessionStorage.removeItem('token');
                navigate("/login");
            },
            response => {
                alert('Ocorreu um erro inesperado');
            })
        }else{
            if(location.pathname == '/login'){
                navigate("/cadastro");
            }else{
                navigate("/login");
            }
        }
    }

    function search(){
        const hide = document.querySelector('#busca');
        const attrib = hide.style.display;
        if(attrib == 'none'){
            hide.style.display = 'flex';
        }
        else{
            let config = {
                headers: {'Authorization': 'Bearer '+ userToken}
            };

            if(!/\S/.test(busca)){
                api().get('/api/getSeries', config).then(response => {
                    props.setSeries(response.data.return);
                });
                api().get('/api/getMovies', config).then(response => {
                    props.setMovies(response.data.return);
                });
            }else{
                api().get('/api/search/'+busca, config).then(response => {
                    props.setMovies(response.data.return.movies)
                    props.setSeries(response.data.return.series)
                },
                response => {
                    alert('Ocorreu um erro inesperado');
                })
            } 
        }
    }

    function _handleKeyDown(e){
        if (e.key === 'Enter') {
            search();
        }
    }

    return(
        <div style={location.pathname == '/home' || location.pathname == '/detalhe' ? style.headerStyle1 : style.headerStyle2}>
            <div className="container" style={style.containerStyle}>
                <div className="row">
                    <div className="col-md-2" style={style.div6Style}>
                        <span className="btn" style={style.spanStyle} onClick={redirect}>
                            <button className="btn btn-default float-right" style={style.btnBackStyle}><i className="fas fa-arrow-left"></i></button>
                            <label style={style.labelStyle}> VOLTAR</label>
                        </span>
                    </div>
                    {location.pathname == '/home' ? (
                        <div className="col-md-8" style={style.div8Style}>
                            <input id="busca" type="text" style={style.transparentInput} onChange={e => setBusca(e.target.value)} value={busca} onKeyDown={_handleKeyDown} onBlur={search} className="form-control busca hide" placeholder="Filme, Série, Elenco ou Produção"></input>
                            <button className="btn btn-default" style={style.btnBackStyle} onClick={search}><i className="fas fa-search"></i></button>
                        </div>
                    ) : (
                        <div className="col-md-8" style={style.div6Style}>
                            <img style={style.imgStyle} src={logo}></img>
                        </div>
                    )}
                    
                    <div className="col-md-2" style={style.div6Style}>
                        <span className="btn " style={style.spanStyle} onClick={redirectPage}>
                            {location.pathname == '/cadastro' && !userToken ? <label style={style.labelStyle2}>LOGIN</label> : (userToken ? <label style={style.labelStyle2}>LOGOUT</label> : <label style={style.labelStyle2}>CADASTRAR</label>)}
                        </span>
                    </div>
                </div>
            </div>          
        </div>
    ); 
}

const style = {
    headerStyle1 : {
        fontFamily: '"inter"',
        fontWeight: '600',
        backgroundColor: '#282639',
        borderBottom: '0.1px solid #3e3c50'
    },
    
    headerStyle2 : {
        fontFamily: '"inter"',
        fontWeight: '600',
        borderBottom: '0.1px solid #3e3c50'
    },
    
    
    labelStyle : {
        fontFamily: '"inter"',
        fontWeight: '600',
        color: 'white',
        marginLeft: '15px', 
        cursor: 'pointer'
    },
    
    labelStyle2 : {
        fontFamily: '"inter"',
        fontWeight: '600',
        color: 'white',
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
    },
    
    containerStyle : {
        minWidth: '-webkit-fill-available'
    },
    
    
    spanStyle : {
        margin: 'auto'
    },
    
    imgStyle : {
        margin: 'auto',
        minHeight: '-webkit-fill-available'
    },
    
    div6Style : {
        display: 'flex',
        marginTop: '25px',
        marginBottom: '25px'
    },
    
    div8Style : {
        display: 'flex',
        marginTop: '30px',
        marginBottom: '25px',
        justifyContent: 'right'
    },
    
    transparentInput : {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border:'none',
        borderBottom: '0.1px solid #9895b4',
        width:'50%',
        color: '#9895b4',
        boxSizing: 'border-box',
        paddingLeft: '25px',
        marginRight: '20px',
        outline: 'none',
        display: 'none'
    }
}


