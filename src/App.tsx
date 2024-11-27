import React from 'react';
import Layout from './components/layout/Layout';
import ShipmentOverview from './components/ShipmentOverview';
import LocationsTable from './components/LocationsTable';

function App() {
  return (
    <Layout>
      <ShipmentOverview />
      <LocationsTable />
    </Layout>
  );
}

export default App;