import React from "react";

import send from "../../images/icons/send-ico.svg";

function AddPost() {
  return (
    <>
      <div className="title main-title">
        <h1>Tell us a story</h1>
      </div>
      <form>
        <div className="item">
          <div className="title">
            <h3>Name the topic title</h3>
          </div>
          <input
            type="text"
            placeholder="What's the story ! Give it a name now"
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Choose the category</h3>
          </div>
          <select>
            <option value="IT">IT</option>
            <option value="Social">Social</option>
            <option selected value="Sandbox">
              Sandbox
            </option>
            <option value="News">News</option>
          </select>
        </div>
        <div className="item">
          <div className="title">
            <h3>Add image to your story</h3>
          </div>
          <input
            type="file"
            placeholder="What's the story ! Give it a image now"
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Add image to your story banner</h3>
          </div>
          <input
            type="file"
            placeholder="What's the story ! Give it a image now"
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Add image to your story footer banner</h3>
          </div>
          <input
            type="file"
            placeholder="What's the story ! Give it a image now"
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Tell us about your feeling...</h3>
          </div>
          <textarea placeholder="Just keyboard and you. Magic beggins..." />
        </div>
        <button className="button send">
          <span>Send the story</span>
          <img src={send} alt="arrow-send" />
        </button>
      </form>
    </>
  );
}

export default AddPost;
