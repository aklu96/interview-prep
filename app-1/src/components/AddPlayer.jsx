import React from 'react';
import pickRandom from '../helpers/pickRandom';

class AddPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { name } = this.state;
    const { handleInputChange } = this;
    const { addPlayer } = this.props;
    return (
      <div>
        <div>Add a player below:</div>
        <input name="name" value={name} onChange={handleInputChange} placeholder="Name" />
        <button onClick={() => {
          addPlayer({
            name,
            cards: [pickRandom(), pickRandom()]
          });
        }}>Submit</button>
      </div>
    );
  }
}

export default AddPlayer;
