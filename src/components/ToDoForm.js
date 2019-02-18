import React from 'react'

class ToDoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           name: ''
        };
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.name.length) return
        else this.props.add(this.state.name);

    }
    handleChange = (e) => {
        let inputText = e.target.value
        if (inputText.length>3) {
           this.setState({
                name: inputText
           })
        } else return
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Treść listy
                </label>
                <input type="text" onChange={this.handleChange}></input>
                <button type="submit">Wyślij</button>
            </form>
        )
    }
}

export default ToDoForm;