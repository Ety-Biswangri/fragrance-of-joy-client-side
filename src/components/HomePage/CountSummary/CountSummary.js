import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './CountSummary.css';
import perfumeIcon from "../../../images/icons/perfume-icon.png";
import customersIcon from "../../../images/icons/customers-icon.png";
import suppliersIcon from "../../../images/icons/suppliers-icon.png";

const CountSummary = () => {
    return (
        <div>
            <Container className='count'>
                <div className='count-cards'>
                    <Card className='count-card'>
                        <Card.Img className='img-fluid count-image' variant="top" src={perfumeIcon} />
                        <div className='d-flex justify-content-center'>
                            <Card.Body style={{ padding: "0.5rem" }}>
                                <Card.Title style={{ fontWeight: "600", fontSize: "1.5rem" }}>Perfumes</Card.Title>
                                <Card.Text style={{ fontWeight: "500", fontSize: "1.1rem" }}>
                                    200
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card className='count-card'>
                        <Card.Img className='img-fluid count-image' variant="top" src={suppliersIcon} />
                        <div className='d-flex justify-content-center'>
                            <Card.Body style={{ padding: "0.5rem" }}>
                                <Card.Title style={{ fontWeight: "600", fontSize: "1.5rem" }}>Suppliers</Card.Title>
                                <Card.Text style={{ fontWeight: "500", fontSize: "1.1rem" }}>
                                    100
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card className='count-card'>
                        <Card.Img className='img-fluid count-image' variant="top" src={customersIcon} />
                        <div className='d-flex justify-content-center'>
                            <Card.Body style={{ padding: "0.5rem" }}>
                                <Card.Title style={{ fontWeight: "600", fontSize: "1.5rem" }}>Customers</Card.Title>
                                <Card.Text style={{ fontWeight: "500", fontSize: "1.1rem" }}>
                                    500
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card className='count-card'>
                        <Card.Img className='img-fluid count-image' variant="top" src={perfumeIcon} />
                        <div className='d-flex justify-content-center'>
                            <Card.Body style={{ padding: "0.5rem" }}>
                                <Card.Title style={{ fontWeight: "600", fontSize: "1.5rem" }}>Featured</Card.Title>
                                <Card.Text style={{ fontWeight: "500", fontSize: "1.1rem" }}>
                                    150
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default CountSummary;