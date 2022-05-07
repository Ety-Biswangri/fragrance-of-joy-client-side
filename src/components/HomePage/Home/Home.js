import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Loading from '../../SharedPage/Loading/Loading';
import BannerSection from '../BannerSection/BannerSection';
import './Home.css';

const Home = () => {
    const [inventories] = useInventories();
    const slicedInventories = inventories.slice(0, 6);
    // console.log(slicedInventories);
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div>
            <div>
                <BannerSection></BannerSection>
            </div>

            <div className='my-5'>
                <h2 className='my-5 text-center'>Inventories</h2>
                {
                    inventories.length === 0 ?
                        <Loading></Loading>
                        :
                        ''
                }
                <div className="sliced-inventories-container mb-4">
                    {
                        slicedInventories.map(inventory => <Container key={inventory._id}>
                            <CardGroup className='card-group-style'>
                                <Card key={inventory._id} className="card-container h-100">
                                    <Card.Img variant="top" src={inventory.image} className="img-fluid image" style={{ height: '230px' }} />
                                    <Card.Body>
                                        <Card.Title>{inventory.name}</Card.Title>
                                        <Card.Text>
                                            {inventory.description}
                                        </Card.Text>
                                        <Card.Text>
                                            Price: ${inventory.price}
                                        </Card.Text>
                                        <Card.Text>
                                            Quantity: {inventory.quantity}
                                        </Card.Text>
                                        <Card.Text>
                                            Supplied By: {inventory.supplierName}
                                        </Card.Text>
                                        <Card.Text>Product Status: {inventory.quantity === 0 ? "Sold Out" : 'Available'}</Card.Text>

                                        <div className='d-flex justify-content-center'>
                                            <Button variant="primary" className='card-button w-100' onClick={() => navigateToInventoryDetail(inventory._id)}>Update</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Container>)
                    }
                </div>
                <div className='text-center'>
                    <Link to="/manageInventories">
                        <Button variant="success">Manage Inventories</Button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Home;