import React from 'react';

import { connect } from 'react-redux';

import { activated, closed } from './redux';

// App.js
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.val.title || 'Message 1'}</h1>

        {this.props.val.title ? (
          <button onClick={this.props.closed}>Exit</button>
        ) : (
          <button
            onClick={() =>
              this.props.activated({ title: 'Message 2' })
            }
          >
            Click 
          </button>
        )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  val: state.val,
});

const mapDispatchToProps = {
  activated,
  closed,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;