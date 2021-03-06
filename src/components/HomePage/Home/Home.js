import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import OurTeam from '../../OurTeam/OurTeam';
import Loading from '../../SharedPage/Loading/Loading';
import BannerSection from '../BannerSection/BannerSection';
import CountSummary from '../CountSummary/CountSummary';
import NewestPerfumes from '../NewestPerfumes/NewestPerfumes';
import './Home.css';

const Home = () => {
    const [inventories] = useInventories();
    const slicedInventories = inventories.slice(0, 6);
    // console.log(slicedInventories);
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    const sold = <span className='text-danger fw-bold'>Sold Out</span>
    const available = <span className='fw-bold text-success'>Available</span>

    const displayDescription = (description) => {
        return description.length < 100 ? description : description.slice(0, 97) + "...";
    }

    return (
        <div>
            <div>
                <BannerSection></BannerSection>
            </div>

            <div className='my-5'>
                <h2 className='my-5 text-center' style={{ color: "#01497c" }}>Inventory Items</h2>
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
                                <Card className="card-container h-100">
                                    <Card.Img variant="top" src={inventory.image} className="img-fluid image" style={{ height: '230px' }} />
                                    <Card.Body>
                                        <Card.Title className='fw-bolder'>{inventory.name}</Card.Title>
                                        <Card.Text style={{ textAlign: "justify" }} title={inventory.description}>
                                            {
                                                displayDescription(inventory.description)
                                            }
                                        </Card.Text>
                                        <Card.Text>
                                            <span className='card-points'> Price:</span>
                                            <span style={{ color: "#cd8f18", fontWeight: "600" }}> ${inventory.price}</span>
                                        </Card.Text>
                                        <Card.Text>
                                            <span className='card-points'>Quantity:</span> {inventory.quantity}
                                        </Card.Text>
                                        <Card.Text>
                                            <span className='card-points'>Supplied By:</span> {inventory.supplierName}
                                        </Card.Text>
                                        <Card.Text>
                                            <span className='card-points'>Product Status:</span> {inventory.quantity === 0 ? sold : available}
                                        </Card.Text>

                                        <div className='d-flex justify-content-center'>
                                            <Button className='card-button w-100 update-button' onClick={() => navigateToInventoryDetail(inventory._id)}>Update</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Container>)
                    }
                </div>
                <div className='text-center'>
                    <Link to="/manageInventories">
                        <Button style={{ backgroundColor: "#2a6f97", fontWeight: "500" }}>Manage Inventories</Button>
                    </Link>
                </div>
            </div>

            <div>
                <CountSummary></CountSummary>
            </div>

            <div>
                <NewestPerfumes></NewestPerfumes>
            </div>

            <div>
                <OurTeam></OurTeam>
            </div>
        </div>
    );
};

export default Home;