import React from "react";
import "./FriendsReferred.css";
import { v4 as uuidv4 } from "uuid";

//------------------- carousal dummy -------------------
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
//------------------- carousal dummy -------------------

const data = [
  {
    studentName: "Dhiraj Saxsena",
    date: "13 Sep, 2022",
    courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    amount: "185",
  },
  {
    studentName: "Subhash Mishra",
    date: "15 Sep, 2022",
    courses: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "C++",
    ],
    amount: "485",
  },
  {
    studentName: "Prafull Kumar",
    date: "17 Sep, 2022",
    courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    amount: "485",
  },
];

function FriendsReferred() {
  return (
    <div className="RefFrndsContainer">
      <section className="Row1">
        <div className="RefCodeContainer">
          <div className="refCode">
            <div>
              <p className="RefFrndHeadText">Your Referral Code</p>
            </div>
            <div>
              <p className="RefFrndCodeText">EDCH54</p>
            </div>
          </div>
          <div className="walletBalance">
            <div className="balHeadText">Wallet Balance</div>
            <div className="balAmount">₹ 500</div>
          </div>
        </div>
      </section>

      <section className="Row2">
        <div className="enrolledContainer">
          <div className="enrHead">
            Friends who enrolled
            <span className="FrndsCount">(3)</span>
          </div>

          <div className="enrolledStudents">
            <Carousel responsive={responsive}>
              {data.map((data) => {
                return (
                  <StudentCard
                    key={uuidv4()}
                    studentName={data.studentName}
                    date={data.date}
                    courses={data.courses}
                    amount={data.amount}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="Row3">
        <div className="footerContainer">
          <a href="">Terms & Conditions </a>
        </div>
      </section>
    </div>
  );
}

function StudentCard({ studentName, date, courses, amount }) {
  return (
    <div className="studentCard">
      <div className="nameDate">
        <p className="name">{studentName}</p>
        <p className="date">{date}</p>
      </div>

      <div className="enrolledCourses">
        <p>Courses Enrolled(6)</p>
        <div className="courseTagsContainer">
          {courses.map((data) => {
            return (
              <p key={uuidv4()} className="courseTag">
                {data}
              </p>
            );
          })}
        </div>
      </div>

      <div className="ReferralAmount">
        <p>
          Referral Amount <span className="amountMoney">₹{amount}</span>
        </p>
      </div>
    </div>
  );
}
export default FriendsReferred;
