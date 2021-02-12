import Home from './pages/Home'
import StoreProvider from './providers/StoreProvider'
import { initialState as storeInitialState } from './models/Store'

function App() {
  return (
    <StoreProvider value={storeInitialState}>
      <Home/>
    </StoreProvider>
  )
}

export default App;
