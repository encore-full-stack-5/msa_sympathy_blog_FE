import "../CommentList2.css";
export default function CommentList2() {
  return (
    <>
      <div className="root">
        <div className="comment-container">
          <header className="header">
            <div className="header-left">
              <button>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    class="icon__oxbGw"
                    aria-hidden="true"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h25v25H0z"></path>
                      <path
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.8"
                        d="m15.5 3-8.793 8.793a1 1 0 0 0 0 1.414l8.788 8.788h0"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
            <div className="header-center">
              <h1 className="header-text">
                댓글
                <span className="comment-num">2</span>
              </h1>
            </div>
            <div className="header-right">
              <a className="view-post-btn">글 보기</a>
            </div>
          </header>
          <div className="wrap-comment">
            <div className="common-comment">
              <div className="u-cbox">
                <ul className="u-cbox-list">
                  <li className="u-cbox-comment">
                    <div className="u-cbox-profile">
                      <div className="u-cbox-comment-box">
                        <div className="u-cbox-comment-area">
                          <div className="u-cbox-info">
                            <span className="u-cbox-info">
                              <a className="user-name">
                                <span className="u-cbox-nickname">
                                  소성민할아범
                                </span>
                              </a>
                            </span>
                            <div className="u-box-text-wrap">
                              <span className="u-cbox-content"></span>
                            </div>
                            <div className="u-info-time">
                              <span className="u-info-date"></span>
                            </div>
                            <div className="u-box-tool">
                              <a className="u-box-reply"></a>
                              <div className="u-cbox-like-set">
                                <a
                                  href="#"
                                  data-action="vote"
                                  data-param="mine:false,commentNo:'825673809724964989',voteStatus:'SYMPATHY',objectId:'22740721_201_223446229682',ticket:'blog'"
                                  data-log="RPC.sym#RPC.unsym"
                                  class="u_cbox_btn_recomm"
                                >
                                  <span class="u_cbox_ico_recomm">공감</span>
                                  <em class="u_cbox_cnt_recomm">0</em>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
