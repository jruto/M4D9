import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
// import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import Registration from './components/Registration'
import RegistrationAlt from './components/Registration_alt'
import fantasyBooks from './fantasyBooks.json'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
        <Route path="/" exact render={() => <BookList books={fantasyBooks} />} />
        <Route path="/register" exact component={Registration} />
        <Route path="/register-alt" exact component={RegistrationAlt} />
      </header>
    </div>
    </Router>
  )
}

export default App
