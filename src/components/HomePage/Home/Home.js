import React from 'react';
import ManageInventories from '../../ManageInventories/ManageInventories';
import BannerSection from '../BannerSection/BannerSection';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <ManageInventories></ManageInventories>
        </div>
    );
};

export default Home;