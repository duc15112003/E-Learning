import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {publicRoutes} from './route'
import {DefaultLayout} from "./component/DefaultLayout/index";
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page/>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
       

    </div>
  );
}

export default App;
