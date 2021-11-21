import React, {Component} from 'react'

import api from '../helpers/Api'
import Header from '../components/Header'

class Login extends Component{
    state = {
        nome: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    sendForm = e => {
        e.preventDefault();
        api().get('/sanctum/csrf-cookie').then(() => {
            api().post('/api/teste', {pessoa: this.state}).then(response => {
                if (response.data.error) {
                    console.log(response.data.error)
                } else {
                    console.log('sucesso')
                }
            })
        })

    }
    page = {
        backgroundColor: '#1F1D2F',
        width: 'auto'
    }

    cardStyle = {
        borderRadius: '10px',
        backgroundColor: '#282639'
    }

    h2Style = {
        fontFamily: '"Copperplate", Fantasy',
        color: 'yellow'
    }

    bodyStyle = {
        minHeight: '75vh',
        maxWidth: 'auto',
        backgroundColor: '#1F1D2F',
        margin: '0 auto',
        marginTop: '5%'
    }

    colStyle = {
        margin: 'auto'
    }

    render(){
        return(
            <div style={this.page}>
                <Header></Header>
                <div className="container" style={this.bodyStyle}>
                    <div className="row">
                        <div className="col-md-6" style={this.colStyle}>
                            <div className="card" style={this.cardStyle}>
                                <div className="card-body">
                                    <form onSubmit={this.sendForm}>
                                        <div className="form-group mb-3 col-md-4" style={this.colStyle}>                                            
                                            <label>Email:</label>
                                            <input type="mail" name="nome" onChange={this.handleInput} value={this.state.nome} className="form-control" placeholder="Nome"></input>
                                        </div>
                                        <div className="form-group mb-3 col-md-4" style={this.colStyle}>                                            
                                            <label>Senha:</label>
                                            <input type="password" name="senha" onChange={this.handleInput} value={this.state.senha} className="form-control" placeholder="Senha"></input>
                                        </div>
                                        <div className="form-group mb-3 col-md-4" style={{textAlign: 'center'}} style={this.colStyle}>
                                            <button style={{float: 'none'}} type="submit" className="btn btn-primary btn-sm btn-end">Enviar</button>
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
}

export default Login

