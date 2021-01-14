import React from 'react';
import './App.css';
import Row from './components/Row';
import request from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Banner />

      <Row
        title='NETFLIX ORIGINALIES'
        fetchUrl={request.fetchNetflixOriginales}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={request.fetchTrending} />
      <Row title='Top Rated' fetchUrl={request.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={request.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={request.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default App;
