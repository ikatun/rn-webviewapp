import * as React from 'react';
import { WebView, SafeAreaView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: 'http://preview-app.appicbuilder.com' }} />
      </SafeAreaView>
    );
  }
}
