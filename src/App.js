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
    isSaveButtonDisabled: true,
  };

  handleCkeckedChange = ({ target: { checked } }) => this.setState({
    cardTrunfo: checked,
  });

  validationCard = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const att1 = Number(cardAttr1);
    const att2 = Number(cardAttr2);
    const att3 = Number(cardAttr3);
    const soma = (att1 + att2 + att3);
    const validacao = 90;
    const valid = 210;

    this.setState({
      isSaveButtonDisabled: !(cardName.length > 0
        && cardDescription.length > 0
        && att1 >= 0 && att1 <= validacao
        && att2 >= 0 && att2 <= validacao
        && att3 >= 0 && att3 <= validacao
        && cardImage.length > 0
        && soma <= valid),
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }), this.validationCard);
  };

  render() {
    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          { ...this.state }
          onInputChange={ (event) => this.onInputChange(event) }
          handleCkeckedChange={ (event) => this.handleCkeckedChange(event) }
          /* isSaveButtonDisabled={ (event) => this.isSaveButtonDisabled(event) } */
        />
        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
