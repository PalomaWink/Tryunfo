import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  };

  handleCkeckedChange = ({ target: { checked } }) => this.setState({
    cardTrunfo: checked,
  });

  render() {
    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          { ... this.state }
          onInputChange={ (event) => this.onInputChange(event) }
          handleCkeckedChange={ (event) => this.handleCkeckedChange(event) }
        />
        <Card
          { ... this.state }
        />
      </div>
    );
  }
}

export default App;
