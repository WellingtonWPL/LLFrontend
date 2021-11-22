import React, {useState} from 'react'
import { useNavigate }  from 'react-router-dom';
import '../myStyles.css'

export default function Login(props){
   
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    // function handleSubmit(){
    //     const data = {
    //         email: email,
    //         senha: senha
    //     }

    //     api().get('/sanctum/csrf-cookie').then(() => {
    //         api().post('/api/teste', data).then(response => {
    //             if (response.data.error) {
    //                 console.log(response.data.error)
    //             } else {
    //                 console.log('sucesso')
    //                 return true;
    //             }
    //         })
    //     })
    // }
    
    const navigate = useNavigate();
    function handleSubmit(){
        props.login(email, senha);
        navigate('/home')
        
    }
    
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


    function showPassword() {
        const password = document.querySelector('#id_password');
        const icon = document.querySelector('#id_icon_pw');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        icon.classList.toggle('fa-eye-slash');
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
                                        <div className="form-group mb-3 col-md-8" style={style.colStyle}>
                                            <h3 style={style.fonte}>Entrar</h3>
                                            <span style={style.fonteSpan}>Bem vindo(a) de volta!</span>
                                        </div>
                                        <div className="form-group mb-3 col-md-8" style={style.colStyle}>
                                            <input type="email" name="email" style={style.transparentInput} onChange={e => setEmail(e.target.value)} value={email} className="form-control" placeholder="Email"></input>
                                        </div>
                                        <div className="form-group mb-3 col-md-8" style={style.colStyleSenha}>
                                            <input type="password" id="id_password" name="senha" style={style.transparentInput} onChange={e => setSenha(e.target.value)} value={senha} className="form-control" placeholder="Senha"></input>
                                            <i id="id_icon_pw" onClick={showPassword} className="far fa-eye" style={style.styleIcon}></i>
                                        </div>
                                        <div className="form-group mb-3 col-md-8"  style={style.colStyleButton}>
                                            <button type="button" onClick={handleSubmit} style={style.buttonStyle} className="btn btn-end btn-block">Entrar</button>
                                        </div>
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


