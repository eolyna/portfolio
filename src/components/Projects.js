import { Container,Row,Col,Nav,Tab } from "react-bootstrap";
import projImg1 from "../assets/img/sun.png";
import projImg2 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCards";


export const Projects =() =>{
    const projects =[

        {
            title:"Projet react numéro 1",
            description: "application météo React utilisant plusieurs API",
            imgUrl: projImg1,
            Url:"https://weather-app-mu-ashen.vercel.app/",
        },
        {
            title:"Projet react numéro 2",
            description: "réalisation d'un pokedex en React avec json API ",
            imgUrl: projImg2,
            url:"https://react-pokemons-app.vercel.app/",
        },
        {
            title:"Projet react numéro 3 incroyable",
            description: "un projet en cours ",
            imgUrl: projImg3,
        },
    ];
    return(
        <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
                  <h2>Projets</h2>
                  <p>voici quelques projets réalisés en dehors de ma formation</p>
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