import React, {useState, useEffect} from 'react';
import "./Results.scss";
import Photo from '../Photo/Photo';
import background from "../../img/main-background.jpeg";
import {Link} from 'react-scroll';

const Results = () => {

    const [keyword, setKeyword] = useState("");
    

    const handleKeyword = (event) => {
        setKeyword(event.target.value);
    }

    const [photos, setPhotos] = useState([]);

    const fetchPhotos = () => {
        fetch(`https://api.unsplash.com/search/photos?query=${keyword}&per_page=1000&client_id=AKk1huq3qUDnn1yDd1iP7biIV-vrJBYpQ2sJ9SEioXA`)
            .then(resp => resp.json())
            .then(allPhotos => setPhotos(allPhotos.results))
    };
    
    useEffect(() => {
        fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPhotos();
    }

    return (
        <>
        <section 
        className="home" 
        style={{background:'url('+background+') no-repeat', backgroundSize:'cover'}}>
            <div className="main-container">
                    <h1>Unsplash</h1>
                    <p>The internet's source of 
                        <a 
                        className="unsplash-link" 
                        href="https://unsplash.com"> freely-usable images</a>.
                    </p>
                    <p>Powered by creators everywhere.</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        value={keyword} 
                        onChange={handleKeyword}/>
                        <Link 
                        to={"results-section"} 
                        smooth={true} 
                        offset={-40} 
                        delay={500} 
                        onClick={handleSubmit}>
                            <button id="search">Search</button>
                        </Link>
                    </form>
                </div>     
            </section>
        <section id="results-section">
            <div className="results-search-bar-wrapper">
                <form onSubmit={handleSubmit}>
                    <input 
                    className="results-search-bar" 
                    type="text" 
                    value={keyword} 
                    onChange={handleKeyword}/>
                </form>
            </div>
            <div className="results-photos-wrapper">
                {photos.length > 0 ? photos.map(photo =>
                    <div 
                    key={photo.id} 
                    className={"photo-wrapper"}>
                        <Photo 
                        key={photo.id} 
                        {...photo}
                        />
                    </div> 
                
                ) : <div className="results-empty">Type something!</div>}
            </div> 
        </section>
        </>
    )
}

export default Results
