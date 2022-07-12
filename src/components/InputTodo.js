/* eslint-disable */
import React from 'react';

class InputTodo extends React.Component {
state = {
  title: '',
}

handleSubmit = (e) => {
  e.preventDefault();
  if (this.state.title.trim()) {
    this.props.addTodoItemProps(this.state.title);
    this.setState({
      title: '',
    });
  } else {
    alert('Please write item');
  }
}

onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
}

render() {
  const [title] = this.state;
  return (
    <form className="form-container" onSubmit={this.handleSubmit}>
      <input
        className="input-text"
        type="text"
        placeholder="Add Todo..."
        name="title"
        value={title}
        onChange={this.onChange}
      />
      <button className="input-submit" type="submit">Submit</button>
    </form>
  );
}
}

export default InputTodo;
