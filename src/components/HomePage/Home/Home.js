import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Loading from '../../SharedPage/Loading/Loading';
import BannerSection from '../BannerSection/BannerSection';
import './Home.css';

const Home = () => {
    const [inventories] = useInventories();
    const slicedInventories = inventories.slice(0, 6);
    // console.log(slicedInventories);

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
                        slicedInventories.map(inventory => <Container>
                            <Card key={inventory._id} className="card">
                                <Card.Img variant="top" src={inventory.image} className="img-fluid image" />
                                <Card.Body>
                                    <Card.Title>{inventory.name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
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

                                    <Button variant="primary">Update</Button>
                                </Card.Body>
                            </Card>
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