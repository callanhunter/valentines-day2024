import React from "react";
import "../App.css";

import San from "../images/san.jpeg";

import October from "../images/october.jpeg";
import Valentines from "../images/valentines.jpeg";
import Wedding from "../images/wedding.jpeg";
import Plane from "../images/plane.jpeg";

export default function Home() {
  return (
    <main>
      <article className="w-100 ">
        <div className=" text-center object-fit">
          <div className=" text-center object-fit w-100">
            <h2 className="fs-1">Leela, My Love</h2>
            <h2 className="fs-5 ">Happy Valentines Day!</h2>
            <div className="w-25 row justify-content-md-center d-inline flex-row">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="">
                    <h5 className=""></h5>
                    <p className="flex-row">
                      My love, I'm so blessed to be able to call you mine.
                      Everyday you remind me of how loving you are, how caring
                      you are, and how hardworking you are! I'm so proud of you
                      on getting an offer for full time at Best Roofing! I know
                      you're going to do an amazing job because I've seen how
                      hard you work and how much time you put in. But one
                      quality of yours sticks out, and thats how much you care
                      for others. You always make those around you feel loved
                      and you'll do anything to see someone smile of feel loved!
                      You not only made me a better boyfriend but a better
                      person, and that says a lot about you as a person! There's
                      no doubt in my mind that you're going to amazing things in
                      life! Just being in your presence, I can't help but smile
                      and feel like the luckiest guy in the world. Whether its
                      going on a helicopter tour or watching TV, I know that
                      anytime I'm with you it'll always a special time! I love
                      you so much, Leela! Below are four of many of my favorite
                      memories with you!
                    </p>
                  </div>
                </div>
                <div class="col-md-4 ">
                  <img
                    src={October}
                    className="d-inline flex-row p-2 w-100 "
                    alt="..."
                  />
                </div>

                <div className="row row-col row-cols-md-2 g-4 mb-4 text-center">
                  <div className="col">
                    <div className=" card h-100">
                      <div className="">
                        <h5 className="card-title text-center">
                          Jimmy's Wedding
                        </h5>

                        <div className="grid gap-3">
                          <img src={Wedding} className="card-img-top"></img>
                          <div>
                            I loved being able to show you off to all of my
                            friends! You looked so beautiful and I had such an
                            amazing time thanks to you being my beautiful date!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col ">
                    <div className="card h-100">
                      <div className="">
                        <h5 className="card-title text-center">
                          Valentines Day 2023
                        </h5>

                        <img src={Valentines} className="card-img-top"></img>
                        <div>
                          I loved being able to spend Valentines day with you!
                          Shortly after celebrating six months, you killed it
                          with planning the date at the Gordan!
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className=" card h-100">
                      <div className="">
                        <h5 className="card-title text-center">San Diego</h5>

                        <div className="grid gap-3">
                          <img src={San} className="card-img-top"></img>
                          <div>
                            I loved being able to go to San Diego with you! I
                            feel like this was a turning point in our
                            relationship and I'm so happy we went on this trip!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col ">
                    <div className="card h-100">
                      <div className="">
                        <h5 className="card-title text-center">
                          Airplane Tour
                        </h5>

                        <img src={Plane} className="card-img-top"></img>
                        <div>
                          I loved going on the airplane tour with you because I
                          wanted to make your 21st very special! Seeing your
                          face when you found out what we were doing is
                          priceless!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 text-center object-fit">
          <button
            type="button"
            className="btn btn-light"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Click Here
          </button>
        </div>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title text-white">List of Skills</h4>
                <button
                  type="button"
                  className="btn-close btn-dark"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="card sub-card m-3 list-group-item-dark">
                <div className="card-body text-center">
                  <h4 className="card-title">
                    With of that said, will you make me the happiest man alive
                    and be my valentine?
                  </h4>
                </div>
              </div>

              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-pink"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
