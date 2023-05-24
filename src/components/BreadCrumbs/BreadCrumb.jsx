import { Link, useLocation } from "react-router-dom";
import "./BreadCrumb.css";
import React from "react";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="BreadCrumbcontainer">
      <div className="breadcrumb">
        <Link to="/">UI/UX</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={name}>
              &nbsp;
              {" > "}
              &nbsp;
              <Link
                className={`breadcrumb-item ${isLast ? "active" : ""}`}
                aria-current={isLast ? "page" : null}
                to={isLast ? null : routeTo}
              >
                {name}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumbs;
