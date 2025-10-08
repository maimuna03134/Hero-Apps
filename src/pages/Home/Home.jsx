import React from 'react';
import Banner from '../../components/Banner/Banner';
import useApps from '../../hooks/useApps';
import AppCard from '../../components/AppCard/AppCard';
import Container from '../../components/Container/Container';

const Home = () => {
    const { apps, loading, error } = useApps();
    return (
      <div>
        <div>
          <Banner></Banner>
        </div>

        <div>
          <Container>
            <div className="text-center py-6 ">
              <h1 className="text-4xl font-bold text-[#001931]">
                Trending Apps
              </h1>
              <p className="py-3 text-[#627382] text-sm">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {apps.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
};

export default Home;