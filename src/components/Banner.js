import { useState, useEffect } from "react";
import { Container,Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import'animate.css';


export const Banner = () => {
    const[loopNum,setLoopNum] =useState(0)
    const[isDeleting,setIsDeleting] =useState(false);
    const toRotate =["développeuse web" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(400-Math.random() * 100);
    const period =4000;

    //animation text
    useEffect(() => {
        let ticker = setInterval(()  =>{
            tick();

        },delta)
        return () => { clearInterval(ticker)}
    }, [text])
    const tick =() =>{
        let i = loopNum % toRotate.length ;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
           
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(5000);
        }
    }

    return (
        <section className="banner" id ="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Bienvenue sur mon Portfolio</span>
                         <h1>{`Hello! Je suis Julie , `} <span className="wrap">{text}</span></h1>
                        <p>Bienvenue sur mon site Web qui se trouve  actuellement toujours en construction ,
                            je suis fière de pouvoir partager avec toi mon parcours atypique qui m'a permit de découvrir le monde du développement Web .Après avoir travaillé dans differents domaines , plus souvent par nécissité que par passion, j'ai décidé de me réorienter dans l'informatique ! j'ai commencé à apprendre le code en autodidacte via des plateformes en ligne et différents ouvrages. J'ai alors poursuivi avec la formation "Développeur web et web mobile  à l'école O'clock"qui m'a permit de suivre des cours en téléprésentiel.Je suis actuellement à la recherche d'une alternance ou d'un CDI dans ce même domaine :) </p>
                        <button onClick={() => console.log('connect')}> Let's connect <ArrowRightCircle size ={25}/></button>           
                    </Col>
                    <Col xs= {12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}