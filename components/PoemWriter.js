const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValid: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let rows = (e.target.value.split("\n"))
    this.setState({text: e.target.value, isValid: this.validate(rows)})
  }

  validate(rows) {
    return (rows.length === 3 &&
    rows[0].trim().split(' ').length >= 5 &&
    rows[1].trim().split(' ').length >= 3 &&
    rows[0].trim().split(' ').length >= 5)
  }

  render() {
    let error = !this.state.isValid ? 
      <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
      : ''
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleChange}/>
        {error}
      </div>
    );
  }
}

module.exports = PoemWriter;
