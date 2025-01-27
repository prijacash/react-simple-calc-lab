import React, { Component } from 'react'
import './App.css'

class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        operation: "+",
        sum: ''
    }

    setNum = (e) => {
        this.setState({
            [e.target.name]: Number.parseInt(e.target.value)
        })
    }

    setOperation = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setResult = (e) => {
        let calculation = 0
        if (this.state.operation === "+") {
            calculation = this.state.num1 + this.state.num2
        } else if (this.state.operation === "-") {
            calculation = this.state.num1 - this.state.num2
        } else if (this.state.operation === "*") {
            calculation = this.state.num1 * this.state.num2
        } else {
            calculation = this.state.num1 / this.state.num2
        }
        this.setState({
            result: calculation
        })
    }

    render() {
        return (
            <div className="container">
            <h1>Calculate with React!</h1>

                <div className="add">
                    <input 
                        type="number" 
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onChange={this.setNum}
                    />
                    
                    <select name="operation" onChange={this.setOperation}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>

                    <input 
                        type="number" 
                        name="num2"
                        placeholder="Enter your 2nd number"
                        value={this.state.num2}
                        onChange={this.setNum}
                    />

                    <button onClick={this.setResult}>=</button>
                    
                    <h3>Calculations results go here!</h3>

                    <p>{this.state.result}</p>
                </div>
            </div>
        )
    }
}
export default Calculator