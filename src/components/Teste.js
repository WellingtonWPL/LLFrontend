import React, {Component} from 'react';
import api from '../helpers/Api'
// import api from "../helpers/Api";

// axios.defaults.baseURL = "http://localhost/";


class Teste extends Component{
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
            api().post('/teste', {pessoa: this.state}).then(response => {
                if (response.data.error) {
                    console.log(response.data.error)
                } else {
                    console.log('sucesso')
                }
            })
        })

    }

    // sendForm = e => {
    //     e.preventDefault();
        
    //     api.post("api/teste", {
    //         pessoa: this.state
    //     })
    //         .then(res => {
    //             console.log(res);
    //         }).catch((err) => {
    //             console.error("ops! ocorreu um erro" + err);
    //     }); // this one failed with 419 csrf token mismatch
        
    // }


    render(){
        return(
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-12 align-self-center">
                        <div className="card" style={{borderRadius: '25px'}}>
                            <div className="card-header" >
                                <h3>Login</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.sendForm}>
                                    <div className="form-group mb-3">                                            
                                        <label>Nome:</label>
                                        <input type="text" name="nome" onChange={this.handleInput} value={this.state.nome} className="form-control" placeholder="Digite aqui seu nome!"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary btn-sm btn-end">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Teste

