import React from 'react';
import Filters from './components/filters/filters';
import Logo from './components/logo/logo';
import Sorting from './components/sorting/sorting';
import TicketsList from './components/ticketsList/ticketsList';

function App() {
  return (
    <div >
      <Logo/>
      <Filters/>
      <Sorting/>
      <TicketsList/>
    </div>
  );
}

export default App;

