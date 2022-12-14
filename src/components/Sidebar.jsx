import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNews } from "../redux/actions/news";
import NewsLoading from "./NewsLoading";

function Sidebar({ images, localStoreStage, setPosthRequest }) {
  const dispatch = useDispatch();
  const localNews = useSelector(({ newsData }) => newsData.sidebar);

  React.useEffect(() => {
    dispatch(fetchNews(3, "sidebar"));
  }, [dispatch]);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const loadedTarget = useSelector(({ newsData }) => newsData.isLoaded);

  React.useEffect(() => {
    if (isLoaded !== true) {
      setTimeout(() => {
        setIsLoaded(loadedTarget);
      }, 1500);
    }
  }, [isLoaded, loadedTarget]);

  const send = images.icons.send;

  const { news, subscription } = localStoreStage.texts;
  const { title, input, button } = subscription;

  return (
    <div id="sidebar">
      <div className="short-news">
        <div className="title">
          <h4>{news}</h4>
        </div>
        <div className="container">
          {isLoaded
            ? localNews.map((item, i) => (
                <Link
                  to="/newspage"
                  className="item"
                  key={`${item}__${i}`}
                  onClick={() => setPosthRequest(item.id)}
                >
                  <div className="title">
                    <h5>{item.title}</h5>
                  </div>
                  <div className="date">
                    <p>{item.data}</p>
                  </div>
                </Link>
              ))
            : Array(3)
                .fill(0)
                .map((_, index) => <NewsLoading key={index} />)}
        </div>
      </div>
      <div className="form subscribe">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <form>
          <input placeholder={input} />
          <button className="button subscribe">
            <span>{button}</span>
            <img src={send} alt="arrow-send" referrerPolicy="no-referrer" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
