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
      nameFilter,
      filterChange,
      filterRare,
    } = this.props;
    return (
      <form>
        <input
          data-testid="name-input"
          type="text"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          data-testid="description-input"
          type="text"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <div className="powers">
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <input
          data-testid="image-input"
          type="text"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-input"
          value={ cardRare }
          name="cardRare"
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        {!hasTrunfo
          ? (
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
          ) : <p>Você já tem um Super Trunfo em seu baralho</p>}
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
        <div>
          <label htmlFor="name-filter">Filtrar por nome:</label>
          <input
            type="text"
            id="name-filter"
            name="nameFilter"
            value={ nameFilter }
            onChange={ filterChange }
            data-testid="name-filter"
          />
          <select
            data-testid="rare-filter"
            value={ filterRare }
            name="filterRare"
            onChange={ filterChange }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>
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
  nameFilter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
  filterRare: PropTypes.string.isRequired,
};

export default Form;
