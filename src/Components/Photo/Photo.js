import React, {useState} from 'react'
import "./Photo.scss";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Photo = ({alt_description, urls, user}) => {

    const customStyles = {
        content : {
          height                : '90%',  
          width                 : '80%',  
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          boxSizing             : 'border-box',
        }
      };

    const [modalIsOpen, setIsOpen] = useState(false);
    
    const handleOpenModal = () => {
      setIsOpen(true);
    }

    const handleCloseModal = (event) => {
      event.stopPropagation();
      setIsOpen(false);
    }

    return (
        <div className="photo-details" onClick={handleOpenModal}>
            <img className="photo" src={urls.small} style={{objectFit:'contain'}} alt={alt_description}/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
                >
                    <header className="modal-header">
                        <div className="modal-author-wrapper">
                            <img className="modal-author-photo" src={user.profile_image.medium} alt=""/>
                            <div className="modal-author-details">
                                <h2 className="modal-author">{user.name}</h2>
                                <a 
                                className="modal-author-instagram" 
                                target={"_blank"}
                                rel="noreferrer" 
                                href={`https://www.instagram.com/${user.instagram_username}`}
                                >@{user.instagram_username}
                                    </a>
                            </div>
                        </div>
                    </header>
                    <div className="modal-cargo">
                        <img className="modal-photo" src={urls.regular} style={customStyles} alt={alt_description}/>
                    </div>
            </Modal>
        </div>
    )
}

export default Photo
