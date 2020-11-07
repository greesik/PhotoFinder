import React, {useState} from 'react';
import "./Home.scss";

const Home = () => {

    const [keyword, setKeyword] = useState("");

    const handleKeyword = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <div>
            <form action="">
                <input type="text" value={keyword} onChange={handleKeyword}/>
            </form>
        </div>
    )
}

export default Home
