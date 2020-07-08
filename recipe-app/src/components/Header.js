import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          Recipe Picker App
        </h1>
        <h3 onClick={this.props.loadData}>
          {this.props.tagline}
        </h3>
      </header>
    )
  }
}

export default Header;