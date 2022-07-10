import { Provider } from 'react-redux';
import { store, persistor } from './store';
import AppRoutes from './routes';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  )
}

export default App
