import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "./../assets/data.json";
import "../styles/work.scss";
import microservice from "../assets/microservice.png";
import realestate from "../assets/real-estate.png";
import freelance from "../assets/freelance.png";
import gmail from "../assets/gmail.png";
import editor from "../assets/editor.png";
import shop from "../assets/shop.png";


function Work() {
  return (
    <div>
      <h1 className="title">
        PROJECTS
      </h1>
      <div class="grid-container">
        <div class="grid-item">
          <div>
            <img src={microservice} />
            <div className="cardBody">
              <div className="cardTitle">Multi-Vendor-Microservices</div>
              <div className="cardText">
                This Project have the backend for a multivendor application
                built using Node.js and deployed on AWS Serverless
                infrastructure.,
              </div>
              <Button
                href={"https://github.com/iadarshrawat/Multi-Vendor-Microservices"}
              >
                Go somewhere
              </Button>
            </div>
          </div>
        </div>
        <div class="grid-item"><div>
            <img src={realestate} />
            <div className="cardBody">
              <div className="cardTitle">EstateEasy</div>
              <div className="cardText">
              Innovative digital platform offering seamless financial transactions and empowering merchants with advanced payment solutions for business growth.
              </div>
              <Button
                href={"https://github.com/iadarshrawat/Multi-Vendor-Microservices"}
              >
                Go somewhere
              </Button>
            </div>
          </div></div>
        <div class="grid-item"><div>
            <img src={freelance} />
            <div className="cardBody">
              <div className="cardTitle">Task-Troopers</div>
              <div className="cardText">
                This Project have the backend for a multivendor application
                built using Node.js and deployed on AWS Serverless
                infrastructure.,
              </div>
              <Button
                href={"https://github.com/iadarshrawat/Multi-Vendor-Microservices"}
              >
                Go somewhere
              </Button>
            </div>
          </div></div>
        <div class="grid-item"><div>
            <img src={gmail} />
            <div className="cardBody">
              <div className="cardTitle">Google-Mail</div>
              <div className="cardText">
                This Project have the backend for a multivendor application
                built using Node.js and deployed on AWS Serverless
                infrastructure.,
              </div>
              <Button
                href={"https://github.com/iadarshrawat/Multi-Vendor-Microservices"}
              >
                Go somewhere
              </Button>
            </div>
          </div></div>
        <div class="grid-item"><div>
            <img src={editor} />
            <div className="cardBody">
              <div className="cardTitle">Code-United</div>
              <div className="cardText">
                This Project have the backend for a multivendor application
                built using Node.js and deployed on AWS Serverless
                infrastructure.,
              </div>
              <Button
                href={"https://github.com/iadarshrawat/Multi-Vendor-Microservices"}
              >
                Go somewhere
              </Button>
            </div>
          </div></div>
        <div class="grid-item"><div>
            <img src={shop} />
            <div className="cardBody">
              <div className="cardTitle">Shop-Fusion</div>
              <div className="cardText">
                This Project have the backend for a multivendor application
                built using Node.js and deployed on AWS Serverless
                infrastructure.,
              </div>
              <Button
                href={"https://github.com/iadarshrawat/Multi-Vendor-Microservices"}
              >
                Go somewhere
              </Button>
            </div>
          </div></div>
      </div>
    </div>
  );
}

export default Work;
