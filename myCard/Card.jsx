 import profilePic from './assets/photo_2023-09-26_12-05-38.jpg'

 function Card(){

    return(
        <div className="card">
            <img className = "card-image" src={profilePic} alt="profile picture" />
            <h2 className = "card-title">Fateme Delagah</h2>
            <p className = "card-text">Web developer</p>
        </div>
    );
 }

 export default Card