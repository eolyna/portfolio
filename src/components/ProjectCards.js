import { Col } from "react-bootstrap"

export const ProjectCard = ({title,description, imgUrl, url}) => {
    return (
        <Col sm ={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <span>{description}</span>
                    <span>{url}</span>


                </div>
            </div>
        </Col>
    )

}