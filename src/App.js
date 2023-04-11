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
    hasTrunfo: false,
    deck: [],
  };

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

  onSaveButtonClick = () => {
    // Aqui estou pegando o estado atual do baralho
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      deck,
    } = this.state;
    // Aqui estou criando uma nova carta
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    // Aqui estou adicionando a nova carta no estado do baralho e colocando os valores após a validação
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
    const { name, value, checked } = target;
    if (checked) {
      this.setState({
        cardTrunfo: checked,
      });
    }
    this.setState(() => ({
      [name]: value,
    }), this.validationCard);
  };

  handleDeleteChange = (carta) => {
    const { value } = carta.target;
    const { deck } = this.state;
    const cardDelete = deck
      .filter((card) => card.cardName !== value);
    const hasTrunfo = cardDelete.some((card) => card.cardTrunfo === true);
    if (!hasTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    this.setState(() => ({
      deck: cardDelete,
    }));
  };

  render() {
    const { deck } = this.state;
    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          { ...this.state }
          onInputChange={ (event) => this.onInputChange(event) }
          onSaveButtonClick={ (event) => this.onSaveButtonClick(event) }
        />
        {deck.map((card, index) => (
          <div key={ index }>
            <Card key={ card.cardName } { ...card } />
            <button
              value={ card.cardName }
              data-testid="delete-button"
              onClick={ this.handleDeleteChange }
            >
              Excluir
            </button>
          </div>))}
        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
