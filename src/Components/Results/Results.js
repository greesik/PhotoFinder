import React, {useState, useEffect} from 'react';
import "./Results.scss";
import Photo from '../Photo/Photo';

const Results = ({keyword}) => {

    const sampleKeyword = "ferrari";

    const [resultKeyword, setResultKeyword] = useState(sampleKeyword);

    const handleResultKeyword = (event) => {
        setResultKeyword(event.target.value);
    }

    const [photos, setPhotos] = useState([]);

    const fetchPhotos = () => {
        fetch(`https://api.unsplash.com/search/photos?query=${resultKeyword}&per_page=1000&client_id=AKk1huq3qUDnn1yDd1iP7biIV-vrJBYpQ2sJ9SEioXA`)
            .then(resp => resp.json())
            .then(allPhotos => setPhotos(allPhotos.results))
    };

    useEffect(() => {
        fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resultKeyword]);

    return (
        <section className="results-section">
            <div className="results-search-bar-wrapper">
                <form>
                    <input className="results-search-bar" type="text" value={resultKeyword} onChange={handleResultKeyword}/>
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
    )
}

export default Results
