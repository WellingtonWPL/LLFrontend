import React, {useState} from 'react'
import { useNavigate }  from 'react-router-dom';
import api from '../helpers/Api'
import '../myStyles.css'


export default function Detalhe(props){
    const [img, setImg] = useState('');
    
    
    function getDetalhes(id, tipo){
        api().get('/api/getDetalhes/'+id+'/'+tipo).then(response => {
            if (response.data.error) {
                console.log(response.data.error)
            } else {
                setImg(response.data.return);
                return true;
            }
        })
    }

    if(props.typeStream == 'MOVIE'){
        getDetalhes(props.movieId, props.typeStream)
    }
    else if(props.typeStream == 'SERIE'){
        getDetalhes(props.serieId, props.typeStream)
    }

    getDetalhes(props.movieId);

    const style = {
        cardStyle: {
            borderRadius: '10px',
            backgroundColor: '#282639'
        },

        h2Style : {
            fontFamily: '"Copperplate", Fantasy',
            color: 'yellow'
        },

        bodyStyle : {
            margin: '0 auto',
            marginTop: '5%'
        },

        colStyle : {
            margin: 'auto'
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
            <div className="container" style={style.bodyStyle}>
                <div className="row">
                    <div className="col-md-6" style={style.colStyle}>
                        <div className="card" style={style.cardStyle}>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3" style={style.text}>
                                        {/* <div className="form-group mb-3 col-md-8" style={style.colStyle}>
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
                                            <i id="id_icon_pw" className="far fa-eye" style={style.styleIcon}></i>
                                        </div>
                                        <div className="form-group mb-3 col-md-8" style={style.colStyle}>
                                            <span style={style.fonteSpan2}>Ao clicar em <b>cadastrar</b>, você está aceitando os Termos e Condições e a Política de Privacidade da Laon.</span>
                                        </div>
                                        <div className="form-group mb-3 col-md-8"  style={style.colStyleButton}>
                                            <button type="button" onClick={handleSubmit} style={style.buttonStyle} className="btn btn-end btn-block">Cadastrar</button>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}


