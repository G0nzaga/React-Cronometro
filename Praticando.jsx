import React, {Component} from "react";
import './Praticando.css'

class Praticando extends Component{

    constructor(props){
        super(props);
        this.state ={
            numero: 0,
            botao: 'Go'
        };

        this.timer = null;
        this.go = this.go.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    go(){

        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer)
                this.timer = null;
                this.state.botao = "Go";
        }else{

            this.timer = setInterval(() =>{
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100);
            state.botao = 'Pause';
        }
        this.setState(state)


    }

    limpar(){
        if(this.timer !== null){
            clearInterval(this.timer)
                this.timer = null;
        }

        let state = this.state;
        state.numero = 0;
        state.botao = 'Go';
        this.setState(state);

    }





    render(){
        return(
            <div className="container">
                <img src={require('../assets/cronometro.png')} className='img'/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="btn" onClick={this.go}>{this.state.botao}</a><br />
                    <a className="btn" onClick={this.limpar}>Stop</a>
                </div>
            </div>
        )
    }
}

export default Praticando;