import "./App.css";
import Home from "./containers/Home";
import Header from "./containers/Header";
import GlobalContextProvider from "./context/globalContext";

function App() {
  
    return (
        <div className="App">
            <GlobalContextProvider>
                <Header />
                <Home />
            </GlobalContextProvider>
        </div>
    );
}

export default App;
