import React from "react";

function AccountSettings({ images }) {
  const binIcon = images.icons.bin;
  
  return (
    <>
      <div className="title main-title">
        <h2>Edit your account</h2>
      </div>
      <form>
        <div className="item">
          <div className="title">
            <h3>Change your name</h3>
          </div>
          <input type="text" placeholder="Current name: Administator" />
        </div>
        <div className="item">
          <div className="title">
            <h3>Change your avatar</h3>
          </div>
          <input type="file" placeholder="Please choose new avatar" />
        </div>
        <div className="item">
          <div className="title">
            <h3>Change your password</h3>
          </div>
          <input type="text" placeholder="Your old paswword" />
          <input type="text" placeholder="Write new password" />
        </div>
        <div className="item">
          <div className="title">
            <h3>Delete your account ?</h3>
          </div>
          <button className="button delete">
            <span className="text">Delete my account</span>
            <img src={binIcon} alt="Oh no you will delete this acc" referrerPolicy="no-referrer"/>
          </button>
        </div>
      </form>
    </>
  );
}

export default AccountSettings;
