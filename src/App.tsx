import Home from './pages/Home'
import { initialState } from './models/Store'
import StoreProvider from './providers/StoreProvider'

function App() {
  return (
    <StoreProvider value={initialState}>
      <Home/>
    </StoreProvider>
  )
}

export default App;
