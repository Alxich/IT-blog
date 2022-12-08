import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAdminLogout } from "../redux/actions/admin";

function AdminBar({ openBar, localStoreStage, setCurrentPage, adminName }) {
  const dispatch = useDispatch();
  const navigation = localStoreStage.navigation.admin;
  const [adminLogoutSession, setAdminLogoutSession] = React.useState(false);

  const adminLogo = useSelector(({ admin }) => admin.avatar);

  React.useEffect(() => {
    adminLogoutSession === true && dispatch(setAdminLogout());
    setAdminLogoutSession(false);
  }, [adminLogoutSession, dispatch]);

  return (
    <div id="admin-bar" className={classNames({ active: openBar })}>
      <div className="admin-info">
        <NavLink activeclassname="active" to="/admin" className="user-logo">
          <img src={adminLogo} alt="admin-logo" referrerPolicy="no-referrer" />
          <span className="case"></span>
        </NavLink>
        <div className="title">
          <h3>
            Hello, <br /> {adminName}
          </h3>
        </div>
      </div>
      <ul className="navigation container flex-column flex-space width-auto">
        {navigation.map((item, i) => {
          return (
            <li key={`${item.name}__${i}`} onClick={() => setCurrentPage(1)}>
              <NavLink activeclassname="active" to={item.link}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
        <li onClick={() => setAdminLogoutSession(true)}>Logout</li>
      </ul>
    </div>
  );
}

export default AdminBar;
