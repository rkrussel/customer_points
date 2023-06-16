import './App.css'
import CustomerTable from './components/customer-table/CustomerTable'

function App() {
  return (
    <div className="App" data-testId="App">
      <header className="App-header">
        <h1>Points Calculator</h1>
        <CustomerTable />
      </header>
    </div>
  )
}

export default App
