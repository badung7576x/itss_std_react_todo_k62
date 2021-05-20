import React, { useState, useEffect } from 'react'

import FirebaseService from "../services/firebaseService";

function UploadAvatar({ userImage, onImageSelected }) {
  
  const [showModal, setShowModal] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(userImage);
  
  useEffect(() => {
    setAvatarUrl(userImage)
  }, [])

  const handleImage = async (e) => {
    const image = e.target.files[0];
    const imageUrl = await FirebaseService.uploadAvatarToStorage(image);
    
    onImageSelected(imageUrl);
    setAvatarUrl(imageUrl);
    setShowModal(!showModal)
  };

  const handleClick = () => {
    setShowModal(!showModal)
  };

  const Avatar = () => {
    if (!avatarUrl) {
      return <i className="fas fa-user"></i>
    } else {
      return (
        <figure class="image">
          <img src={avatarUrl} />
        </figure>
      )
    }
  }

  return (
    <div>
      <div className={`modal ${showModal ? "is-active" : ""}`}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="file is-boxed" style={{justifyContent: "center"}}>
            <label class="file-label">
              <input class="file-input" type="file" name="resume" onChange={handleImage} />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">画像を選択してください</span>
              </span>
            </label>
          </div>
          <button class="modal-close is-large" aria-label="close" onClick={handleClick}></button>
        </div>
      </div>
      
      <button onClick={handleClick} class="button is-primary is-inverted">
        <span class="icon">
          <Avatar />
        </span>
      </button>
    </div >
  );
}

export default UploadAvatar