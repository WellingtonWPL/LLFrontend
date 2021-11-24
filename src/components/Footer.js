import React, {useState} from 'react';
import { useNavigate, useLocation }  from 'react-router-dom';
import api from '../helpers/Api'
import logo from '../img/Logo.svg'

export default function Footer(props){

    const location = useLocation();
    const navigate = useNavigate();


    function redirect(){
        navigate("/home"); 
    }

 
    const headerStyle1 = {
        fontFamily: '"inter"',
        fontWeight: '600',
        borderTop: '0.1px solid #3e3c50',
        padding: "20px",
        left: "0",
        bottom: "0",
        height: "110px",
        width: "100%",
        marginTop:"100px"
    }

    const btnBackStyle = { 
        color: 'white',
        borderRadius: '50%',
        borderWidth: '0.02px',
        borderStyle: 'solid',
        borderColor: 'white',
        height: '40px',
        width: '40px' , 
        fontSize: '12px',
    }

    const containerStyle = {
        position: 'absolute',
        bottom: '0px'
    }


    const spanStyle = {
        fontFamily: '"inter"',
        fontWeight: '400',
        fontSize: '15px',
        color: '#9895b4'
    }

    const imgStyle = {
        // margin: 'auto',
        // minHeight: '-webkit-fill-available'
    }

    const div6Style = {
        margin:'auto',
        textAlign:'center'
    }

    const div6Style1 = {
        margin:'auto',
        textAlign:'left'
    }

    const teste = {
        justifyContent: 'center',
    }

   


 
    return(
        <div style={headerStyle1}>
            <div className="row">
                <div className="col-md-3" style={div6Style1}>
                    <span className="btn" style={spanStyle} onClick={redirect}>
                        <img style={imgStyle} src={logo}></img>
                    </span>
                </div>
                <div className="col-md-6" style={div6Style}>
                    <div className="row">
                        <div className="col">
                            <span className="btn" style={spanStyle}>Ínicio</span>
                        </div>
                        <div className="col">
                            <span className="btn" style={spanStyle}>Termos e Condições</span>
                        </div>
                        <div className="col">
                            <span className="btn" style={spanStyle}>Política de Privacidade</span>
                        </div>
                        <div className="col">
                            <span className="btn" style={spanStyle}>Ajuda</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3" >
                    <div className="row" style={teste}>
                        <div className="col-md-2">
                            <button className="btn btn-default" style={btnBackStyle}><i class="fab fa-facebook-f"></i></button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-default" style={btnBackStyle}><i class="fab fa-twitter"></i></button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-default" style={btnBackStyle}><i class="fab fa-youtube"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>         
        </div>
        
    ); 
}



