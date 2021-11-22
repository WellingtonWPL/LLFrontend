import React, {useState} from 'react';
import { useNavigate, useLocation }  from 'react-router-dom';
import api from '../helpers/Api'
import logo from '../img/Logo.svg'

export default function Header(props){

    const location = useLocation();
    const navigate = useNavigate();


    function redirect(){
        navigate("/login"); 
    }

 
    const headerStyle1 = {
        fontFamily: '"inter"',
        fontWeight: '600',
        backgroundColor: '#282639',
        borderBottom: '0.1px solid #3e3c50'
    }

    const headerStyle2 = {
        fontFamily: '"inter"',
        fontWeight: '600',
        borderBottom: '0.1px solid #3e3c50'
    }


    const labelStyle = {
        fontFamily: '"inter"',
        fontWeight: '600',
        color: 'white',
        marginLeft: '15px', 
        cursor: 'pointer'
    }

    const labelStyle2 = {
        fontFamily: '"inter"',
        fontWeight: '600',
        color: 'white',
        cursor: 'pointer'
    }

    const btnBackStyle = {
        color: 'white',
        borderRadius: '50%',
        borderWidth: '0.02px',
        borderStyle: 'solid',
        borderColor: 'white'
    }

    const containerStyle = {
        minWidth: '-webkit-fill-available'
    }


    const spanStyle = {
        margin: 'auto'
    }

    const imgStyle = {
        margin: 'auto',
        minHeight: '-webkit-fill-available'
    }

    const div6Style = {
        display: 'flex',
        marginTop: '25px',
        marginBottom: '25px'
    }

 
    function redirectPage(){
        if(props.authUser == true){
            props.logout();
            navigate("/login");
        }else{
            if(location.pathname == '/login'){
                navigate("/cadastro");
            }else{
                navigate("/login");
            }
        }
    }


    return(
        <div style={location.pathname == '/home' || location.pathname == '/detalhe' ? headerStyle1 : headerStyle2}>
            <div className="container" style={containerStyle}>
                <div className="row">
                    <div className="col-md-2" style={div6Style}>
                        <span className="btn" style={spanStyle} onClick={redirect}>
                            <button className="btn btn-default" style={btnBackStyle}><i className="fas fa-arrow-left"></i></button>
                            <label style={labelStyle}> VOLTAR</label>
                        </span>
                    </div>
                    <div className="col-md-8" style={div6Style}>
                        <img style={imgStyle} src={logo}></img>
                    </div>
                    <div className="col-md-2" style={div6Style}>
                        <span className="btn " style={spanStyle} onClick={redirectPage}>
                            {location.pathname == '/cadastro' && props.authUser == false ? <label style={labelStyle2}>LOGIN</label> : (props.authUser == true ? <label style={labelStyle2}>LOGOUT</label> : <label style={labelStyle2}>CADASTRAR</label>)}
                        </span>
                    </div>
                </div>
            </div>          
        </div>
    ); 
}



