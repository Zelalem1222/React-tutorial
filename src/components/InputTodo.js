import React from "react";

class InputTodo extends React.Component {
   
state = {
    title: ''
}

handleSubmit = e => {
    e.preventDefault();
    if(this.state.title.trim()){
        this.props.addTodoItemProps(this.state.title)
        this.setState({
            title:''
        })
    } else {
        alert("Please write item")
    }
    
}


onChange = (e)=> {
    this.setState({
        [e.target.name]:e.target.value
    })
}


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add Todo..." name='title' value={this.state.title} onChange={this.onChange}/>
            <button type="submit">Submit</button>
          </form>
        )
    }
}

export default InputTodo