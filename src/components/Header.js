import React, {Component} from 'react';
import api from '../helpers/Api'
import logo from '../img/Logo.svg'

function Header(){
    const headerStyle = {
        fontFamily: '"inter", semibold, regular',
        borderBottom: '0.1px solid #3e3c50'
    }

    const labelStyle = {
        fontFamily: '"inter", semibold, regular',
        color: 'white',
        marginLeft: '15px' 
    }

    const labelStyle2 = {
        fontFamily: '"inter", semibold, regular',
        color: 'white'
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
        margin: 'auto',
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


    return(
        <div style={headerStyle}>
            <title>Laon Streaming</title>
            <div className="container" style={containerStyle}>
                <div className="row">
                    <div className="col-md-2" style={div6Style}>
                        <span className="btn" style={spanStyle}>
                            <button className="btn btn-default" style={btnBackStyle}><i className="fas fa-arrow-left"></i></button>
                            <label style={labelStyle}> VOLTAR</label>
                        </span>
                    </div>
                    <div className="col-md-8" style={div6Style}>
                        <img style={imgStyle} src={logo}></img>
                    </div>
                    <div className="col-md-2" style={div6Style}>
                        <span className="btn " style={spanStyle}>
                            <label style={labelStyle2}> CADASTRAR</label>
                        </span>
                    </div>
                </div>
            </div>          
        </div>
    ); 
}

export default Header

