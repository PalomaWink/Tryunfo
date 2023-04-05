import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <input
          data-testid="name-input"
          type="text"
          name="nome"
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          data-testid="description-input"
          type="text"
          name="descricao"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <div className="powers">
          <input
            data-testid="attr1-input"
            type="number"
            name="atributo1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <input
            data-testid="attr2-input"
            type="number"
            name="atributo2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <input
            data-testid="attr3-input"
            type="number"
            name="atributo3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <input
          data-testid="image-input"
          type="text"
          name="email"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select data-testid="rare-input" value={ cardRare } onChange={ onInputChange }>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="superTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="superTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
