import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import fblogo from "./assets/fblogo.jpg";
import postimage1 from "./assets/postImage.jpg";
import postimage2 from "./assets/home.jpg";
import postimage3 from "./assets/car.jpg"
import postimage4 from "./assets/random.jpg"
import postimage5 from "./assets/ship.jpg"
import postimage6 from "./assets/titanic.jpg"
import postimage7 from "./assets/foriegn.jpg"
import postimage8 from "./assets/bird.jpg"
import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import { RiShareForwardLine } from "react-icons/ri";
import "./style.css";

function Post () {
  return (
  <div className="main-container">
    <div className="header-container">
      <div className="user-info">
        <img src={fblogo} alt="userdp" className="logoimage" />
        <div>
          <h3>Owais Ikram</h3>
          <span>Monday at 11:00 AM</span>
        </div>
      </div>
      <SlOptions />
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
      debitis odio? Accusantium, nemo quae in iste facere praesentium
      cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
      omnis nesciunt sunt!
    </p>

    <img src={postimage1} alt="postimage" className="postimage" />

    <div className="react-container">
      <div className="emoji-container">
        <span>😍</span>
        <span>❤️</span>
        <span>😮</span>
        <p>lorem ipsum and 291 others</p>
      </div>

      <div className="comment-section">
        <p>85 comments</p>
      </div>
    </div>

    <div className="footer-container">
      <AiOutlineLike className="likeicone" />
      <LiaCommentSolid className="likeicone" />
      <RiShareForwardLine className="likeicone" />
    </div>
  </div>
  );
}

function Post2 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={fblogo} alt="userdp" className="logoimage" />
          <div>
            <h3>M.Saad</h3>
            <span>Friday at 09:00 PM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage2} alt="postimage2" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>lorem ipsum and 291 others</p>
        </div>
  
        <div className="comment-section">
          <p>85 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}

function Post3 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={fblogo} alt="userdp" className="logoimage" />
          <div>
            <h3>Zeeshan</h3>
            <span>Saturday at 01:59 PM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage3} alt="postimage3" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>lorem ipsum and 291 others</p>
        </div>
  
        <div className="comment-section">
          <p>85 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}

function Post4 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={fblogo} alt="userdp" className="logoimage" />
          <div>
            <h3>Anas Iqbal</h3>
            <span>Tuesday at 03:40 PM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage4} alt="postimage2" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>lorem ipsum and 291 others</p>
        </div>
  
        <div className="comment-section">
          <p>85 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}

function Post5 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={fblogo} alt="userdp" className="logoimage" />
          <div>
            <h3>Umair </h3>
            <span>Thursday at 07:38 PM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage5} alt="postimage2" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>lorem ipsum and 291 others</p>
        </div>
  
        <div className="comment-section">
          <p>85 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}

function Post6 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={fblogo} alt="userdp" className="logoimage" />
          <div>
            <h3>Sudaish Ahmed</h3>
            <span>Sunday at 04:20 PM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage6} alt="postimage2" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>lorem ipsum and 291 others</p>
        </div>
  
        <div className="comment-section">
          <p>85 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}

function Post7 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={fblogo} alt="userdp" className="logoimage" />
          <div>
            <h3>Sameer </h3>
            <span>Monday at 02:00 AM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage7} alt="postimage2" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>lorem ipsum and 291 others</p>
        </div>
  
        <div className="comment-section">
          <p>85 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}

function Post8 (){
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-info">
          <img src={fblogo} alt="userdp" className="logoimage" />
          <div>
            <h3>Faizan</h3>
            <span>Saturday at 09:00 PM</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum
        debitis odio? Accusantium, nemo quae in iste facere praesentium
        cupiditate. Earum voluptate quibusdam recusandae accusantium dicta ex
        omnis nesciunt sunt!
      </p>
  
      <img src={postimage8} alt="postimage2" className="postimage" />
  
      <div className="react-container">
        <div className="emoji-container">
          <span>😍</span>
          <span>❤️</span>
          <span>😮</span>
          <p>lorem ipsum and 291 others</p>
        </div>
  
        <div className="comment-section">
          <p>85 comments</p>
        </div>
      </div>
  
      <div className="footer-container">
        <AiOutlineLike className="likeicone" />
        <LiaCommentSolid className="likeicone" />
        <RiShareForwardLine className="likeicone" />
      </div>
    </div>
    );
}


function App() {
  return <div>
  <Post/>
  <Post2/>
  <Post3/>
  <Post4/>
  <Post5/>
  <Post6/>
  <Post7/>
  <Post8/>
  </div>
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
