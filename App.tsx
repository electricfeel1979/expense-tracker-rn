import {StatusBar} from 'expo-status-bar';
import Navigation from 'navigation';

import {ExpensesContextProvider} from './store';

const App = () => {
  console.log('test');
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <Navigation />
      </ExpensesContextProvider>
    </>
  );
};

export default App;
