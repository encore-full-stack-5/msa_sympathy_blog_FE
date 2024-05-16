import React from "react";
import CreateComment from "./CreateComment";

export default function CommentList() {
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-start align-items-center">
                    <div>
                      <h6 className="fw-bold text-primary mb-1">
                        Lily Coleman
                      </h6>
                      <p className="text-muted small mb-0">
                        Shared publicly - Jan 2020
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 mb-4 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip consequat.
                  </p>

                  <div className="small d-flex justify-content-start">
                    <a href="#!" className="link-muted">
                      <i className="fas fa-heart ms-2"></i>
                      <button class="w-4">
                        <svg
                          class="text-red-400 w-4 h-auto fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"></path>{" "}
                        </svg>
                      </button>
                    </a>

                    <a href="#!" className="d-flex align-items-center me-3">
                      <i className="fas fa-share me-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-start align-items-center">
                    <div>
                      <h6 className="fw-bold text-primary mb-1">
                        Lily Coleman
                      </h6>
                      <p className="text-muted small mb-0">
                        Shared publicly - Jan 2020
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 mb-4 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip consequat.
                  </p>

                  <div className="small d-flex justify-content-start">
                    <a href="#!" className="d-flex align-items-center me-3">
                      <i className="far fa-thumbs-up me-2"></i>
                      <p className="mb-0">Like</p>
                    </a>

                    <a href="#!" className="d-flex align-items-center me-3">
                      <i className="fas fa-share me-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer py-3 border-0">
              <CreateComment />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
