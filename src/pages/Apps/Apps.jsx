import React, { useState } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import useApps from '../../hooks/useApps';
import Container from '../../components/Container/Container';
import { GoSearch } from "react-icons/go";
import Loader from '../../components/Loader/Loader';
import ErrorApps from '../ErrorApps/ErrorApps';
import ErrorPage from '../ErrorPage/ErrorPage';

const Apps = () => {
    const { apps, loading, error } = useApps();
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;


    if (error) {
      return <ErrorPage></ErrorPage>;
    }

    if (loading) {
      return (
        <div>
          <Loader></Loader>
        </div>
      );
    }


    if (!loading && apps.length === 0) {
      return <ErrorApps></ErrorApps>;
    }

    return (
      <Container>
        <div className="text-center py-6 ">
          <h1 className="text-4xl font-bold text-[#001931]">
            Our All Applications
          </h1>
          <p className="md:py-5 p-5 md:p-0 text-[#627382] text-sm">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col md:flex-row  justify-between py-5 md:px-5 items-center ">
          <span className="text-[#001931] font-semibold text-[24px]">
            ({searchedApps.length}) Apps Found
          </span>
          <label className="input  bg-transparent my-5 md:my-0">
            <GoSearch size={20} color="#627382" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="search Apps"
            />
          </label>
        </div>

        
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {searchedApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        
      </Container>
    );
};

export default Apps;