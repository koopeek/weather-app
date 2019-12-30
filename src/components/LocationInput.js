import React from 'react';

class LocationInput extends React.Component {

  constructor() {
    super();
    this.state = {
      fraza: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({fraza: event.target.value});
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-3">
          <div className="field has-addons">
            <p className="control">
              <input type="text" className="input" value={this.state.fraza} onChange={this.handleChange} />
            </p>
            <p className="control">
              <button type="submit" className="button" onClick={() => this.props.onSubmit(this.state.fraza)}>Szukaj</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationInput;
