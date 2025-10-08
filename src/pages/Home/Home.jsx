import React from 'react';
import Banner from '../../components/Banner/Banner';
import useApps from '../../hooks/useApps';
import AppCard from '../../components/AppCard/AppCard';
import Container from '../../components/Container/Container';
import { Link } from 'react-router';
import ErrorApps from '../ErrorApps/ErrorApps';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../../components/Loader/Loader';

const Home = () => {
    const { apps, loading, error } = useApps();
    const featuredApps = apps.slice(0, 8);


    if (error) {
      return <ErrorPage></ErrorPage>;
    }

    if (loading) {
        return (
            <div>
                <Loader></Loader>
            </div>
        )
    }

    if (!loading && apps.length===0) {
        return <ErrorApps></ErrorApps>
    }
    

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
            
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {featuredApps.map((app) => (
                  <AppCard key={app.id} app={app}></AppCard>
                ))}
              </div>
          

            <div className="mt-8 flex justify-center">
              <Link
                className="btn btn-outline bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-bold"
                to="/apps"
              >
                Show All
              </Link>
            </div>
          </Container>
        </div>
      </div>
    );
};

export default Home;