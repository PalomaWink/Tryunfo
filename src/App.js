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
    deck: [],
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

  // Criar uma função onSaveButtonClick;
  // Passar a função via props para o form;
  // Criar um estado para o baralho (vai ser o baralho de cartas), começa com um array vazio
  // Na função do onSaveButtonClick setar o estado do baralho;

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deck,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [...deck, newCard],
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
          onSaveButtonClick={ (event) => this.onSaveButtonClick(event) }
        />
        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
