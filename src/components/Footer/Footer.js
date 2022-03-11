import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          This is an independent community builder information only site and all
          views or opinions expressed in this site are personal and belong
          solely to the site owner. Under no circumstances should this site be
          considered as any type of solicitation, investment or financial
          advice.
          <p>
            By submitting your detail to request information of this site, you
            agree that your information may be used by the owner of this web
            site to contact you and provide you the requested information. Owner
            of this web site will not, in any circumstances, share your personal
            information with any other individuals or organizations. Your
            information is used for processing your request appropriately and
            present you with the information you need to access.
          </p>
        </div>

        <hr />
        <div className="row">
          <p className="col-sm">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a style={{ color: "#fff" }} href="https://stuckinfiat.com">
              Stuck In Fiat
            </a>{" "}
            | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
