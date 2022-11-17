import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
export const Contact = () => {
	const formInitialDetails = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	};

	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState("Envoyer");
	const [status, setStatus] = useState({});
	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};
    // validation du form 
	const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('envoie...');
        let response = await fetch ("http://localhost:5000/contact",{
            method:"POST",
            headers: {
                "Content-Type":"Applicaton/json;charset=utf-8",
            },
            body:JSON.stringify(formDetails),

        });
        setButtonText("send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code ===200){
            setStatus({ succes: true, message: 'Message envoyé'});
        }   else {
            setStatus({ succes: false, message: "Le message n'a pu être envoyé essayez plus tard "})

        }
    };
	return (
		<section className="contact" id="connect">
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<img src={contactImg} alt="contact"></img>
					</Col>
					<Col md={6}>
						<h2>Contactez moi</h2>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col sm={6} className="px-1">
									<input
										type="text"
										value={formDetails.firstName}
										placeholder="nom"
										onChange={(e) => onFormUpdate("nom", e.target.value)}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="text"
										value={formDetails.lastName}
										placeholder="Prénom"
										onChange={(e) => onFormUpdate("Prénom", e.target.value)}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="email"
										value={formDetails.email}
										placeholder="Email"
										onChange={(e) => onFormUpdate("Email", e.target.value)}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="tel"
										value={formDetails.phone}
										placeholder="Téléphone"
										onChange={(e) => onFormUpdate("Téléphone", e.target.value)}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<textarea
										row="6"
										value={formDetails.message}
										placeholder="Message"
										onChange={(e) => onFormUpdate("Message", e.target.value)}
									></textarea>
									<button type="submit">
										<span>{buttonText}</span>
									</button>
								</Col>
								{status.message && (
									<col>
										<p
											className={status.succes === false ? "danger" : "success"}
										>
											{status.message}
										</p>
									</col>
								)}
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
