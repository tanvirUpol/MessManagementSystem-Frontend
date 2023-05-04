import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useAuthContext } from './hooks/useAuthContext';

import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
// import Signup from './pages/Signup'
import Navbar from './components/Navbar'

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache()
})

function App() {

  const {user} = useAuthContext();

  return (
    <>
      <ApolloProvider client={client} >
        <BrowserRouter>
          <Navbar/>
          <div className="pages">
            <Routes>
              <Route
                path='/'
                element={user? <Home/>: <Navigate to='/login'/> }
              />
              <Route
                path='/login'
                element={!user? <Login/> :<Navigate to='/'/>}
              />
              {/* <Route
                path='/signup'
                element={!user? <Signup/> :<Navigate to='/'/>}
              /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}

export default App
