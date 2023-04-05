import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          data-testid="name-input"
          type="text"
          name="nome"
        />
        <textarea
          data-testid="description-input"
          type="text"
          name="descricao"
        />
        <div className="powers">
          <input
            data-testid="attr1-input"
            type="number"
            name="atributo1"
          />
          <input
            data-testid="attr2-input"
            type="number"
            name="atributo2"
          />
          <input
            data-testid="attr3-input"
            type="number"
            name="atributo3"
          />
        </div>
        <input
          data-testid="image-input"
          type="text"
          name="email"
        />
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="superTrunfo">
          Super Trunfo
          <checkbox data-testid="trunfo-input" id="superTrunfo" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
