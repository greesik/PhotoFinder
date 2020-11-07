import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import "./Home.scss";
import Results from "../../Components/Results/Results";

const Home = () => {

    const [keyword, setKeyword] = useState("");

    const handleKeyword = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <Router>
                <Switch>
        <section>
            <form action="/results">
                <input type="text" value={keyword} onChange={handleKeyword}/>
            </form>
            
                    <Route path={`/results`}>
                        <Redirect to="/results" />
                    </Route>
                
        </section>
        </Switch>
            </Router>
    )
}

export default Home
