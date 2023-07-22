/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import projImg1 from "../assets/img/project-img1.png";
import "animate.css";

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <h2>Projects</h2>
              <br />
              <div className="row">
              
                <div className="col-md-4">
                <div className="card" style={{backgroundColor:"#563d7c", borderRadius: "20px"}}>
                  <img src={projImg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6>Card title</h6>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/#" className="btn btn-primary">
                      Know More...
                    </a>
                  </div>
                </div>
                </div>
                <div className="col-md-4">
                
                <div className="card" style={{backgroundColor:"#563d7c", borderRadius: "20px"}}>
                  <img src={projImg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6>Card title</h6>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/#" className="btn btn-primary">
                    Know More...
                    </a>
                  </div>
                </div>
                </div>
                <div className="col-md-4">
                
                <div className="card" style={{backgroundColor:"#563d7c", borderRadius: "20px"}}>
                  <img src={projImg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6>Card title</h6>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/#" className="btn btn-primary">
                    Know More...
                    </a>
                  </div>
                  </div>
                </div>
            </div>
            <br/>
            <div className="row">
              
                <div className="col-md-4">
                <div className="card" style={{backgroundColor:"#563d7c", borderRadius: "20px"}}>
                  <img src={projImg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6>Card title</h6>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/#" className="btn btn-primary">
                      Know More...
                    </a>
                  </div>
                </div>
                </div>
                <div className="col-md-4">
                
                <div className="card" style={{backgroundColor:"#563d7c", borderRadius: "20px"}}>
                  <img src={projImg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6>Card title</h6>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/#" className="btn btn-primary">
                    Know More...
                    </a>
                  </div>
                </div>
                </div>
                <div className="col-md-4">
                
                <div className="card" style={{backgroundColor:"#563d7c", borderRadius: "20px"}}>
                  <img src={projImg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6>Card title</h6>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/#" className="btn btn-primary">
                    Know More...
                    </a>
                  </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
