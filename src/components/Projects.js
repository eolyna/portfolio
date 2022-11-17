import { Container,Row,Col,Nav,Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCards";


export const Projects =() =>{
    const projects =[

        {
            title:"Projet react numéro 1",
            description: "un projet pas ouf",
            imgUrl: projImg1,
        },
        {
            title:"Projet react numéro 2",
            description: "un projet parmis tant d'autres",
            imgUrl: projImg2,
        },
        {
            title:"Projet react numéro 3 incroyable",
            description: "un projet ",
            imgUrl: projImg3,
        },
    ];
    return(
        <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
                  <h2>Projets</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return(
                                  <ProjectCard
                                  key={index}
                                  {...project}
                                  />

                                )
                              })
                            }
                          </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Tab.Pane>
                        <Tab.Pane eventKey="thrid">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Tab.Pane>
                    </Tab.Content>
                 </Tab.Container> 
         </Col>
        </Row>
       </Container>   
       <img className="background-image-right"src={colorSharp2}></img>
       </section>         
       

    )
}