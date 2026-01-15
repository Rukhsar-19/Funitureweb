import React from "react";
import "../Styles/Checkout.scss";
const Checkout = () => {
  return (
    <>
      <section className="shopbannner">
        <div className="shopback">
          <div className="shop-pos">
            <div className="title">Checkout</div>
            <div className="shop-align">
              <div className="para">Home</div>
              <i className="ri-arrow-right-s-line"></i>
              <div className="para">Checkout</div>
            </div>
          </div>
        </div>
      </section>
      {/* checkout */}
      <section className="checkout main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-7">
                  <h2>Billing details</h2>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="label-input">
                            <label> First Name</label>

                            <input type="First Name" name="First Name" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="label-input">
                            <label> Last Name</label>

                            <input type="Last Name" name="Last Name" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="label-input">
                            <label> Company Name (Optional)</label>

                            <input type="Company Name (Optional)" name="Company Name (Optional)" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="label-input">
                            <label>Country / Region</label>

                            <input type="Country / Region" name="Country / Region" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="label-input">
                            <label>Street address</label>

                            <input type="Street address" name="Street address" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="label-input">
                            <label> Town / City</label>

                            <input type="Town / City" name="Town / City" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="label-input">
                            <label> Province</label>

                            <input type="Province" name="Province" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="label-input">
                            <label> ZIP code</label>

                            <input type="ZIP code" name="ZIP code" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="label-input">
                            <label> Phone</label>

                            <input type="Phone" name="Phone" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="label-input">
                            <label> Email</label>

                            <input type="email" name="email" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="label-input">
                            <label>Email address</label>

                            <input type="Email address" name="Email address" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* checkout */}
    </>
  );
};

export default Checkout;
