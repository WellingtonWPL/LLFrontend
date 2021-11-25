import React from 'react';
import { useNavigate, useLocation }  from 'react-router-dom';
import logo from '../img/Logo.svg'

export default function Footer(){

    const navigate = useNavigate();


    function redirect(){
        navigate("/home"); 
    }

    return(
        <div style={style.headerStyle1}>
            <div className="row">
                <div className="col-md-3" style={style.div6Style1}>
                    <span className="btn" style={style.spanStyle} onClick={redirect}>
                        <img style={style.imgStyle} src={logo}></img>
                    </span>
                </div>
                <div className="col-md-6" style={style.div6Style}>
                    <div className="row">
                        <div className="col">
                            <span className="btn" onClick={redirect} style={style.spanStyle}>Ínicio</span>
                        </div>
                        <div className="col">
                            <span className="btn" style={style.spanStyle}>Termos e Condições</span>
                        </div>
                        <div className="col">
                            <span className="btn" style={style.spanStyle}>Política de Privacidade</span>
                        </div>
                        <div className="col">
                            <span className="btn" style={style.spanStyle}>Ajuda</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3" >
                    <div className="row" style={style.redes}>
                        <div className="col-md-2">
                            <button className="btn btn-default" style={style.btnBackStyle}><i className="fab fa-facebook-f"></i></button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-default" style={style.btnBackStyle}><i className="fab fa-twitter"></i></button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-default" style={style.btnBackStyle}><i className="fab fa-youtube"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>         
        </div>
        
    ); 
}


const style = {
    headerStyle1:{
        fontFamily: '"inter"',
        fontWeight: '600',
        borderTop: '0.1px solid #3e3c50',
        padding: "20px",
        left: "0",
        bottom: "0",
        height: "110px",
        width: "100%",
        marginTop:"100px"
    },

    btnBackStyle:{ 
        color: 'white',
        borderRadius: '50%',
        borderWidth: '0.02px',
        borderStyle: 'solid',
        borderColor: 'white',
        height: '40px',
        width: '40px' , 
        fontSize: '12px',
    },

    containerStyle:{
        position: 'absolute',
        bottom: '0px'
    },


    spanStyle:{
        fontFamily: '"inter"',
        fontWeight: '400',
        fontSize: '15px',
        color: '#9895b4'
    },

    imgStyle:{
        // margin: 'auto',
        // minHeight: '-webkit-fill-available'
    },

    div6Style:{
        margin:'auto',
        textAlign:'center'
    },

    div6Style1:{
        margin:'auto',
        textAlign:'left'
    },

    redes:{
        justifyContent: 'center',
    },
}


