import React from "react";
import classNames from "classnames";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { setupAdminSettings } from "../../redux/actions/admin.js";

function AccountSettings({ images, adminName }) {
  const dispatch = useDispatch();
  const binIcon = images.icons.bin;
  const loadIcon = images.icons.load;

  const sendStatus = useSelector(({ admin }) => admin.isLoaded);
  const accountType = useSelector(({ admin }) => admin.type);
  const accountId = useSelector(({ admin }) => admin.id);
  const oldPassword = useSelector(({ admin }) => admin.password);
  const oldLogin = useSelector(({ admin }) => admin.name);
  const accountSession = useSelector(({ admin }) => admin.session);

  const [localData, setLocalData] = React.useState({
    type: accountType,
    id: accountId,
    login: "",
    password: "",
    oldPassword: "",
    avatar: "",
    session: accountSession,
  });
  const [localDataError, setLocalDataError] = React.useState({
    type: accountType,
    id: accountId,
    login: false,
    password: false,
    oldPassword: false,
    avatar: false,
    session: accountSession,
  });

  const [sendPostStatus, setSendPostStatus] = React.useState(false);
  const [sendStatusLocal, setSendStatusLocal] = React.useState(false);

  const valuesPassed = () => {
    if (localDataError.login !== true && localDataError.password !== true) {
      return true;
    } else {
      return false;
    }
  };

  const clearLocalData = () => {
    setLocalData({
      type: accountType,
      id: accountId,
      login: "",
      password: "",
      oldPassword: "",
      avatar: "",
      session: accountSession,
    });
  };

  React.useEffect(() => {
    const sendFunction = () => {
      dispatch(setupAdminSettings(localData));
      setSendPostStatus(false);
    };

    sendPostStatus === true && sendFunction();
    setSendStatusLocal(sendStatus);
    sendStatus === true && clearLocalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sendPostStatus]);

  const runSendMessageFunc = (e) => {
    e.preventDefault();

    valuesPassed() === true && setSendPostStatus(true);
  };

  const handlerChangeValue = (e) => {
    const localDataCopy = { ...localData };
    const localDataErrorCopy = { ...localDataError };
    const value = e.target.value;

    switch (e.target.name) {
      case "login":
        setLocalData({
          ...localDataCopy,
          login: value,
        });
        localDataCopy.login.length < 4 ||
        localDataCopy.login.length <= 0 ||
        value === oldLogin
          ? setLocalDataError({
              ...localDataErrorCopy,
              login: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              login: false,
            });

        break;

      case "oldPassword":
        setLocalData({
          ...localDataCopy,
          oldPassword: value,
        });
        localDataCopy.oldPassword.length < 4 ||
        localDataCopy.oldPassword.length <= 0 ||
        value !== oldPassword
          ? setLocalDataError({
              ...localDataErrorCopy,
              oldPassword: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              oldPassword: false,
            });

        break;

      case "password":
        setLocalData({
          ...localDataCopy,
          password: value,
        });
        localDataCopy.password.length < 4 ||
        localDataCopy.password.length <= 0 ||
        value === oldPassword
          ? setLocalDataError({
              ...localDataErrorCopy,
              password: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              password: false,
            });

        break;

      case "avatar":
        setLocalData({
          ...localDataCopy,
          avatar: value,
        });
        !validator.isURL(localDataCopy.avatar, {
          protocols: ["http", "https"],
          allow_query_components: false,
        })
          ? setLocalDataError({
              ...localDataErrorCopy,
              avatar: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              avatar: false,
            });
        break;
      default:
        setLocalData(localDataCopy);
        break;
    }
  };

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
          <input
            type="text"
            name="login"
            placeholder={`Current name: ${adminName}`}
            value={localData.login}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.login })}
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Change your avatar</h3>
          </div>
          <input
            type="text"
            name="avatar"
            placeholder="Please choose new avatar"
            value={localData.avatar}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.avatar })}
          />
        </div>
        <div className="item">
          <div className="title">
            <h3>Change your password</h3>
          </div>
          <input
            type="password"
            name="oldPassword"
            placeholder="Your old paswword"
            value={localData.oldPassword}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.oldPassword })}
          />
          <input
            type="password"
            name="password"
            placeholder="Write new password"
            value={localData.password}
            onChange={(e) => handlerChangeValue(e)}
            className={classNames({ invalid: localDataError.password })}
          />
        </div>
        {accountType !== "admin" && (
          <div className="item">
            <div className="title">
              <h3>Delete your account ?</h3>
            </div>
            <button className="button delete">
              <span className="text">Delete my account</span>
              <img
                src={binIcon}
                alt="Oh no you will delete this acc"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        )}
        <div className="item">
          <button
            className="button delete"
            onClick={(e) => runSendMessageFunc(e)}
          >
            <span className="text">Update my account</span>
            <img
              src={loadIcon}
              alt="Oh no you will update this acc"
              referrerPolicy="no-referrer"
            />
          </button>
        </div>
      </form>
    </>
  );
}

export default AccountSettings;
