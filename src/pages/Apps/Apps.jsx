import React, { useState } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import useApps from '../../hooks/useApps';
import Container from '../../components/Container/Container';
import { GoSearch } from "react-icons/go";

const Apps = () => {
    const { apps } = useApps();
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;
    return (
 
        <Container>
          <div className="text-center py-6 ">
            <h1 className="text-4xl font-bold text-[#001931]">
              Our All Applications
            </h1>
            <p className="py-3 text-[#627382] text-sm">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex justify-between py-5 items-center ">
            <span className="text-[#001931] font-semibold text-[24px]">
              ({searchedApps.length}) Apps Found
            </span>
            <label className="input  bg-transparent">
              <GoSearch size={20} color="#627382" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="search Apps"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {searchedApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        </Container>

    );
};

export default Apps;