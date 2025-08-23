import AppHeader from './layout/AppHeader';
import GretaBase from './pages/samsa-vi/greta-station/GretaBase';
import ShipTerminal from './pages/ShipTerminal';

function App() {

  return (
    <div className="body">
      <AppHeader />
      <ShipTerminal />
      {/* <GretaBase /> */}
    </div>
  )
}

export default App
