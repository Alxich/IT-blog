import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { sendMessage } from "../../redux/actions/contacts";

function Contacts({ images, localStoreStage, changeUrl }) {
  changeUrl("Contact us");
  const dispatch = useDispatch();
  const iconPhone = images.icons.phone;
  const send = images.icons.send;
  const check = images.icons.check;
  const iconMap = images.icons.map;
  const facebook = images.socials.facebook;
  const instagram = images.socials.instagram;
  const twitter = images.socials.twitter;

  const { title, phone, address, socials, form } =
    localStoreStage.texts.contacts;

  const sendStatus = useSelector(({ contacts }) => contacts.sendStatus);

  const [localData, setLocalData] = React.useState({
    name: "",
    phoneEmail: "",
    message: "",
  });
  const [localDataError, setLocalDataError] = React.useState({
    name: false,
    phoneEmail: false,
    message: false,
  });

  const [sendMessageStatus, setSendMessageStatus] = React.useState(false);
  const [sendStatusLocal, setSendStatusLocal] = React.useState(false);

  const valuesPassed = () => {
    if (
      localDataError.name !== true &&
      localDataError.phoneEmail !== true &&
      localDataError.message !== true
    ) {
      return true;
    } else {
      return false;
    }
  };

  const clearLocalData = () => {
    setLocalData({
      name: "",
      phoneEmail: "",
      message: "",
    });
  };

  React.useEffect(() => {
    const sendFunction = () => {
      dispatch(sendMessage(localData));
      setSendMessageStatus(false);
    };

    sendMessageStatus === true && sendFunction();
    setSendStatusLocal(sendStatus);
    sendStatus === true && clearLocalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sendMessageStatus, sendStatus]);

  const handlerChangeValue = (e) => {
    const localDataCopy = { ...localData };
    const localDataErrorCopy = { ...localDataError };
    const value = e.target.value;

    switch (e.target.name) {
      case "name":
        setLocalData({
          ...localDataCopy,
          name: value,
        });
        localDataCopy.name.length < 4
          ? setLocalDataError({
              ...localDataErrorCopy,
              name: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              name: false,
            });

        break;

      case "message":
        setLocalData({
          ...localDataCopy,
          message: value,
        });
        localDataCopy.message.length < 4
          ? setLocalDataError({
              ...localDataErrorCopy,
              message: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              message: false,
            });
        break;

      case "phoneEmail":
        setLocalData({
          ...localDataCopy,
          phoneEmail: value,
        });
        localDataCopy.phoneEmail.length < 4
          ? setLocalDataError({
              ...localDataErrorCopy,
              phoneEmail: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              phoneEmail: false,
            });
        break;

      default:
        setLocalData(localDataCopy);
        break;
    }
  };

  const runSendMessageFunc = (e) => {
    e.preventDefault();

    valuesPassed() === true && setSendMessageStatus(true);
  };

  return (
    <div id="contacts">
      <div className="container flex-row flex-space">
        <div className="contacts-info">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <ul className="info">
            <li>
              <span>{phone}</span>
              <img
                src={iconPhone}
                alt="phone-icon"
                referrerPolicy="no-referrer"
              />
            </li>
            <li>
              <span>{address}</span>
              <img src={iconMap} alt="map-icon" referrerPolicy="no-referrer" />
            </li>
          </ul>
          <ul className="socials">
            <li>
              <a href={socials.facebook}>
                <img
                  src={facebook}
                  alt="facebook-social"
                  referrerPolicy="no-referrer"
                />
              </a>
            </li>
            <li>
              <a href={socials.instagram}>
                <img
                  src={instagram}
                  alt="instagram-social"
                  referrerPolicy="no-referrer"
                />
              </a>
            </li>
            <li>
              <a href={socials.twitter}>
                <img
                  src={twitter}
                  alt="twitter-social"
                  referrerPolicy="no-referrer"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="contacts-form">
          <div className="title">
            <h3>{form.title}</h3>
          </div>
          <form>
            <input
              type="Name"
              name="name"
              value={localData.name}
              onChange={(e) => handlerChangeValue(e)}
              placeholder={form.inputs.name}
              className={classNames({ invalid: localDataError.name })}
            />
            <input
              type="text"
              name="phoneEmail"
              value={localData.phoneEmail}
              onChange={(e) => handlerChangeValue(e)}
              placeholder={form.inputs.phoneEmail}
              className={classNames({ invalid: localDataError.phoneEmail })}
            />
            <textarea
              name="message"
              value={localData.message}
              onChange={(e) => handlerChangeValue(e)}
              placeholder={form.inputs.message}
              className={classNames({ invalid: localDataError.message })}
            />
            <button
              className={classNames("button send", {
                invalid: valuesPassed === true,
                sended: sendStatusLocal === true,
              })}
              onClick={(e) => runSendMessageFunc(e)}
            >
              <span>{form.inputs.button}</span>
              <img
                src={check}
                alt="arrow-send"
                referrerPolicy="no-referrer"
                style={{ display: sendStatusLocal === true ? "block" : "none" }}
              />
              <img
                src={send}
                alt="arrow-send"
                referrerPolicy="no-referrer"
                style={{
                  display: sendStatusLocal === true ? "none" : "block",
                }}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
