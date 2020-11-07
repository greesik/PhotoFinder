import React, {useState, useEffect} from 'react';
import "./Results.scss";
import Photo from '../Photo/Photo';

const Results = ({keyword}) => {

    const sampleKeyword = "island";

    const [photos, setPhotos] = useState([]);

    const fetchPhotos = () => {
        fetch(`https://api.unsplash.com/search/photos?query=${sampleKeyword}&per_page=1000&client_id=AKk1huq3qUDnn1yDd1iP7biIV-vrJBYpQ2sJ9SEioXA`)
            .then(resp => resp.json())
            .then(allPhotos => setPhotos(allPhotos.results))
    };

    useEffect(() => {
        fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="results-section">
            <div className="results-search-bar-wrapper">
                <form>
                    <input className="results-search-bar" type="text" placeholder="results-baja" value={keyword}/>
                </form>
            </div>
            <div className="results-photos-wrapper">
                {photos ? photos.map(photo =>
                    <div 
                    key={photo.id} 
                    className={"photo-wrapper"}>
                        <Photo 
                        key={photo.id} 
                        {...photo}
                        />
                    </div> 
                
                ) : <div>There is no such photo in our database</div>}
            </div> 
        </section>
    )
}

export default Results
