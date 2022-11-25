import React from "react";
import classnames from "classnames";

import { Sidebar } from "../../components";

import banner from "../../images/blog-inner-image.png";
import bannerEnd from "../../images/blog-inner-image-footer.png";
import addInfo from "../../images/blog-inner-image-add.png";

function InnerPage() {
  const text = [
    'As I pondered IT asset management, I was reminded of an educational example. The manager of IT capabilities in a large company periodically prepares a fat deduction for management. Once again, he did not bring the deduction, he decided to check whether it was needed at all. After seeing him for several days, he came to the manager and asked: "I want to calculate that I am ready, not particularly in demand, but what do you really need?" The manager admitted that the massive countdown is good, but they are not used. I drew on a sheet of paper what I would like to have at hand.',
    'IT asset management, like configuration management, is a core process for others. In the first case, the financial aspect is more important, in the second - operational tasks. Both processes can be overloaded with details and turned into something routine. How to find a balance and make the process truly "alive"?',
    "Of course, the balance of unification and personal approach is everyone's business. Let's recall the story about the post-war automobile industry: American and Japanese tactics. Gradually, the Japanese achieved superiority thanks, among other things, to a balanced balance of unification and production culture. But this rule is not for everyone.",
    "Of course, the balance of unification and personal approach is everyone's business. Let's recall the story about the post-war automobile industry: American and Japanese tactics. Gradually, the Japanese achieved superiority thanks, among other things, to a balanced balance of unification and production culture. But this rule is not for everyone.",
  ];

  return (
    <>
      <div id="banner" className="inner">
        <img src={banner} alt="page-banner" />
      </div>
      <div className="container page-height flex-row flex-stretch flex-space content-use">
        <div id="content">
          <div className="short-info">
            <div className="category">
              <p>IT-assets</p>
            </div>
            <div className="date">
              <p>13 Jan 2020</p>
            </div>
          </div>
          <div className="title">
            <h1>Is IT asset management a boring routine or a creative task?</h1>
          </div>
          <div className="text-block">
            {text
              .map((n, i, arr) => ({ textOne: n, textTwo: arr[i + 1] }))
              .filter((n, i) => i % 2 === 0)
              .map((item, i) => {
                return (
                  <div
                    className={classnames("text", {
                      more: i % 3 !== 0,
                    })}
                    key={`${item}__${i}`}
                  >
                    {i % 2 !== 0 && (
                      <div className="related">
                        <div className="thumbnail">
                          <img src={addInfo} alt="related-bonus-info" />
                        </div>
                        <div className="title">
                          <p>
                            Taking into account the procedure can turn into an
                            interesting task, a kind of "challenge" when moving
                            to a new level.
                          </p>
                        </div>
                      </div>
                    )}
                    <p>{item.textOne}</p>
                    <p>{item.textTwo}</p>
                  </div>
                );
              })}
          </div>
          <div className="banner-content">
            <img src={bannerEnd} alt="content-banner" />
          </div>
          <div className="navigation buttons">
            <div className="button nav nav-prev">
              <span className="text">Previous news</span>
              <span className="arrow prev">
                <span></span>
                <span></span>
              </span>
            </div>
            <div className="button nav nav-next">
              <span className="text">Next news</span>
              <span className="arrow next">
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default InnerPage;
