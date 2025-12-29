

import React from "react";
import Header from "./common/Header";
import TimeLineWidget1 from "./TimeLineWidget1";

const Article2 = () => {
  return (
    <>
      <Header />
      <div className="story-container" style={{ position: "relative" }}>
        <div className="Stories_wrapper" style={{ padding: "4rem 0 0 0" }}>
          <div className="container">
          
            <div className="story-top">
              <div className="breadcrumb">
                <p style={{ fontWeight: 300 }}>
                  <a href="/trends-culture">Trends &amp; Culture</a>
                  <span>&nbsp; &gt; &nbsp;</span>
                  <a href="/trends-culture/travel">Travel</a>
                </p>
              </div>
              <div className="contr-fluid">
                <div className="contr-fluid_inner">
                  <h1>
                    This Is the Luggage That Will Match Your Rhythm Seamlessly
                  </h1>
                  <div className="para-ButFlex">
                    <p>
                      Travelling today is all about redefining how couples
                      navigate the world together. Consider TUMI for those
                      cherished moments—where style meets function sans
                      friction.
                    </p>
                  </div>
                </div>
                <div className="detailed-media_info">
                  <div className="card-meta_meta">
                    <div className="card-meta_meta_inner">
                      <div className="card-meta_item">
                        <span className="card-meta_label text-7">
                          Dec 29, 2025
                        </span>
                      </div>
                      <div className="card-meta_item">
                        <span className="card-meta_label text-7">
                          By {/* */}(Author Name)
                        </span>
                      </div>
                    </div>
                    <div className="card-actions_actions">
                      <li>
                        <button className="rounded_btns" aria-label="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z" />
                          </svg>
                          <span>Share</span>
                        </button>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Stories_wrapper_inner">
              
              <div className="big-container-blog">
                <div className="blog-img-container gradient_remove_bg">
                  <img
                    alt="Columbian skylines and food"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="100vw"
                    src="/Assets/timeline_widget_1_images/250410_13_44_FW25Seasonal_TALENT_VoyageurTylrCrssbdy_Mink_186_v3_RGB_300dpi.webp"
                  />
                </div>
                <div className="Stories_caption_wrapper">
                  <span className="Stories_caption">
                    Escape to Colombia for the ultimate minimoon adventure:
                    romance, adventure, and unforgettable experiences await in
                    Bogotá, Cartagena, and&nbsp;beyond.
                  </span>
                  <span className="Stories_courtesy">Instagram</span>
                </div>
              </div>
              <div className="StoriesInfo_wrapper">
                <div className="StoriesInfo_leftcntr">
                  <div className="StoriesInfo_left_innercntr-full-width">
                    <div className="">
                      <div className="rich-text_wrapper">
                        <p style={{ textAlign: "left" }}>
                          <span>
                            There’s joy in travelling with someone you love—one that deepens when the journey is 
tied to celebrating friends as they begin a new chapter. Wedding travel, however, 
comes with its own realities: carefully planned outfits, thoughtful gifts, and the many 
extras meant for the bride and groom. These are the things you carry that slowly gather 
meaning along the way. That’s where TUMI steps in, blending seamlessly into the 
cadence of travel. Pieces designed to move quietly with you—never demanding 
attention yet earning your trust at every step.

                          </span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                 
                  <TimeLineWidget1 />

                  <div className="">
                    <ul className="Readmore_actions">
                      <li className="Readmore_actions_first-not-button">
                        <span>READ MORE STORIES ABOUT :</span>
                      </li>
                      <div className="Readmore_actions_inner">
                        <ul className="card-actions_actions">
                          <li className="">
                            <a
                              className="card-actions_actions_button "
                              aria-label=""
                              href="/tag/travel-destinations"
                            >
                              <span className="button_label">
                                Travel destinations
                              </span>
                            </a>
                          </li>
                        </ul>
                        <ul className="card-actions_actions">
                          <li className="">
                            <a
                              className="card-actions_actions_button "
                              aria-label=""
                              href="/tag/minimoons"
                            >
                              <span className="button_label">Minimoons</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
               
              </div>
             
             
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Article2;
