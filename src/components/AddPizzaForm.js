import * as React from 'react'

export default class AddPizzaForm extends React.Component {

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //this.props.dispatch
    

    if (this.state.name && this.state.description) {
      this.props.addPizza({
        name: this.state.name,
        description: this.state.description,
        ingredients: []
      })
    }
    this.setState({
      name:'',
      description:''
    })
  }

  render() {
    return (<div>
      <h2>Add a pizza</h2>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}