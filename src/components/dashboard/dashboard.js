import React from "react";
import { defaults } from "chart.js/auto";
import { Line, Doughnut } from "react-chartjs-2";
import "./dashboard.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const revenueData = [
  { label: "12:00AM", revenue: 1 },
  { label: "", revenue: 6 },
  { label: "", revenue: 8 },
  { label: "", revenue: 7 },
  { label: "", revenue: 9 },
  { label: "", revenue: 10 },
  { label: "", revenue: 27 },
  { label: "", revenue: 52 },
  { label: "", revenue: 12 },
  { label: "", revenue: 45 },
  { label: "", revenue: 84 },
  { label: "", revenue: 33 },
  { label: "", revenue: 89 },
  { label: "", revenue: 34 },
  { label: "", revenue: 14 },
  { label: "", revenue: 75 },
  { label: "", revenue: 54 },
  { label: "", revenue: 22 },
  { label: "", revenue: 80 },
  { label: "", revenue: 35 },
  { label: "", revenue: 84 },
  { label: "", revenue: 37 },
  { label: "", revenue: 29 },
  { label: "11:59PM", revenue: 92 },
];

const options = {
  rotation: 270,
  circumference: 180,
  cutout: "70%",
};

const data = {
  labels: [],
  datasets: [
    {
      data: [89, 50],
      backgroundColor: ["rgb(113, 113, 255)", "rgb(196, 196, 247)"],
      hoverBackgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
      ],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="dashboard-main-container">
      <div className="proile-and-filter-container">
        <div className="profile-and-name-and-stats-container">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"
            alt="ss"
            className="dash-profile-photo"
          />
          <div className="">
            <h1 className="dash-name-of-the-user">
              <b>Good Morning Oguz</b>
            </h1>
            <p className="date-of-the-user">
              Here are your stats for Today, 24 Aug 2020
            </p>
          </div>
        </div>
        <div className="date-previous-date-container">
          <p className="today-para">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="blue"
              className="bi bi-calendar-date date-icon"
              viewBox="0 0 16 16"
            >
              <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            Today
          </p>
          <p className="compare-para">Compared to</p>
          <p className="today-para">
            Previous Period
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="blue"
              class="bi bi-arrow-down-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="dash-horizontal-line"></div>
      <div className="revenue-subscription-container">
        <div className="total-revenue-container">
          <p className="top-para">
            Total Revenue &nbsp; <span className="span-para"> +12.5%</span>
          </p>
          <h1 className="money-heading">$32,621.72</h1>
          <p className="orders-para">433 Orders</p>
        </div>
        <div className="total-revenue-container">
          <p className="top-para">
            Subscribers &nbsp; <span className="span-para"> +32.5%</span>
          </p>
          <h1 className="money-heading">484,205</h1>
          <p className="orders-para">$56 Average Order</p>
        </div>
        <div className="total-revenue-container">
          <p className="top-para">
            Conversations &nbsp; <span className="low-span-para"> -3.4%</span>
          </p>
          <h1 className="money-heading">552,553</h1>
          <p className="orders-para">5min Average Response Time</p>
        </div>
        <div className="total-revenue-container">
          <p className="top-para">
            Popup Conversion Rate &nbsp;{" "}
            <span className="span-para"> +32.5%</span>
          </p>
          <h1 className="money-heading">25%</h1>
          <p className="orders-para">5% Sales Conversion Rate</p>
        </div>
      </div>
      <div className="graph-container">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#0018f3",
                borderColor: "#7986ff",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.2,
              },
            },
          }}
        />
      </div>
      <div className="last-card-container">
        <div className="automation-container">
          <div className="automation-champion-heading-container">
            <div className="automation-champion-container">
              <p className="automation-header-para active">Automations</p>
              <p className="automation-header-para">Campaigns</p>
              <p className="automation-header-para">Segments</p>
            </div>
            <div className="last-month">
              <p className="last-month-para">
                Last Month
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="blue"
                  class="bi bi-arrow-down-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                  />
                </svg>
              </p>
            </div>
          </div>
          <hr />
          <ul className="ul-automation-container">
            <li className="ul-list-item active-item">
              <div className="product-details-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCRDedV7tzWJUB2v8wVw0MgIAtqxz8Hr_Xg&usqp=CAU"
                  alt="cart"
                  className="cart-image"
                />
                <div className="">
                  <p className="producat-name-heading active-para">
                    Abandoned Cart 7 Days
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </p>
                  <p className="producat-buy-date">4024 Sent | 124 Clicks</p>
                </div>
              </div>
              <div className="product-coast-container">
                <p className="product-price-para">$5,231</p>
                <p className="producat-buy-date">41 Orders | $150 AOV</p>
              </div>
            </li>
            <li className="ul-list-item">
              <div className="product-details-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCRDedV7tzWJUB2v8wVw0MgIAtqxz8Hr_Xg&usqp=CAU"
                  alt="cart"
                  className="cart-image"
                />
                <div className="">
                  <p className="producat-name-heading active-para">
                    Abandoned Cart 15 Min
                  </p>
                  <p className="producat-buy-date">4024 Sent | 124 Clicks</p>
                </div>
              </div>
              <div className="product-coast-container">
                <p className="product-price-para">$24,521</p>
                <p className="producat-buy-date">41 Orders | $150 AOV</p>
              </div>
            </li>
            <li className="ul-list-item">
              <div className="product-details-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCRDedV7tzWJUB2v8wVw0MgIAtqxz8Hr_Xg&usqp=CAU"
                  alt="cart"
                  className="cart-image"
                />
                <div className="">
                  <p className="producat-name-heading active-para">
                    Abandoned Cart 15 Min
                  </p>
                  <p className="producat-buy-date">4024 Sent | 124 Clicks</p>
                </div>
              </div>
              <div className="product-coast-container">
                <p className="product-price-para">$24,521</p>
                <p className="producat-buy-date">41 Orders | $150 AOV</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="round-graph-main-container">
          <h1 className="level-5-heading">Level 5 </h1>
          <p className="producat-buy-date">+32,050 in the last month</p>
          <div className="round-graph">
            <Doughnut data={data} options={options} />
          </div>
          <h1 className="level-5-rate">$14,495</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
