import React from 'react';
import {Page, Toolbar, Fab, Segment} from 'react-onsenui';

class App extends React.Component {
  render() {
    return(
      <div>
        <Page
        renderFixed={() => <Fab></Fab>}
        renderToolbar={() => <Toolbar>...</Toolbar>}
        contentStyle={{padding: 40}}>
          <h1>Bootstrapped with OnsenUI</h1>
          <p>List of <a href="https://onsen.io/v2/api/react/" target="_blank">OnsenUI</a> component</p>
      </Page>
      </div>
    );
  }
}

export default App;