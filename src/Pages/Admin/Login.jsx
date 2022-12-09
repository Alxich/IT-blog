import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdmin, registerAdmin } from "../../redux/actions/admin";

function Login({ images, localStoreStage }) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isTapRegister, setIsTapRegister] = React.useState(false);
  const [actionTrigered, setActionTrigered] = React.useState(false);
  const [localData, setLocalData] = React.useState({
    name: "",
    password: "",
  });
  const [localDataError, setLocalDataError] = React.useState({
    name: false,
    password: false,
  });

  const { title, titleRegister, form } = localStoreStage.texts.admin.login;

  const loginIcon = images.icons.open;
  const loadIcon = images.icons.load;

  const loadedTarget = useSelector(({ admin }) => admin.isLoaded);

  React.useEffect(() => {
    if (isLoaded !== true) {
      setTimeout(() => {
        setIsLoaded(loadedTarget);
      }, 1500);
    }
  }, [isLoaded, loadedTarget]);

  const clearLocalData = () => {
    setLocalData({
      name: "",
      password: "",
    });
  };

  React.useEffect(() => {
    const sendFunction = () => {
      isTapRegister
        ? dispatch(
            registerAdmin({
              avatar: localStoreStage.images.userLogo,
              relatedPost: [],
              relatedNews: [],
              login: localData.name,
              password: localData.password,
            })
          )
        : dispatch(fetchAdmin(localData));
      setActionTrigered(false);
      clearLocalData();
    };

    actionTrigered === true && sendFunction();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionTrigered, dispatch]);

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
        localDataCopy.name.length < 4 || localDataCopy.name.length <= 0
          ? setLocalDataError({
              ...localDataErrorCopy,
              name: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              name: false,
            });

        break;

      case "password":
        setLocalData({
          ...localDataCopy,
          password: value,
        });
        localDataCopy.password.length < 8 || localDataCopy.password.length <= 0
          ? setLocalDataError({
              ...localDataErrorCopy,
              password: true,
            })
          : setLocalDataError({
              ...localDataErrorCopy,
              password: false,
            });
        break;

      default:
        setLocalData(localDataCopy);
        break;
    }
  };

  const valuesPassed = () => {
    if (localDataError.name !== true && localDataError.password !== true) {
      return true;
    } else {
      return false;
    }
  };

  const runSendMessageFunc = (e) => {
    e.preventDefault();

    valuesPassed() === true && setActionTrigered(true);
  };

  return (
    <div id="login">
      <div className="title">
        <h1>{isTapRegister ? titleRegister : title}</h1>
      </div>
      <form>
        <input
          type="Name"
          name="name"
          value={localData.name}
          onChange={(e) => handlerChangeValue(e)}
          placeholder={form.name}
          className={classNames({ invalid: localDataError.name })}
        />
        <input
          type="password"
          name="password"
          value={localData.password}
          onChange={(e) => handlerChangeValue(e)}
          placeholder={form.password}
          className={classNames({ invalid: localDataError.password })}
        />
        <button className="button send" onClick={(e) => runSendMessageFunc(e)}>
          <span>{isTapRegister ? form.buttonRegister : form.button}</span>
          <img
            src={actionTrigered ? (isLoaded ? loginIcon : loadIcon) : loginIcon}
            alt="arrow-send"
            referrerPolicy="no-referrer"
          />
        </button>
        <div className="link">
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              setIsTapRegister(true);
            }}
          >
            New account ?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
