import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import Featuremovie from './components/Featuremovie';
import Tmdb from './Tmdb';
import './App.css';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      /*
        Pegando a lista de filmes
      */
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      /*
        Filme em destaque
      */
      let originals = list.filter(i => i.slug === "originals");
      let listaFilme = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let filme = originals[0].items.results[listaFilme];
      let filmeInfo = await Tmdb.getMovieInfo(filme.id, 'tv');
      setFeaturedData(filmeInfo);

    }
    loadAll();
  }, [])
  useEffect(() => {
    const scrollListener = () => {

      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }

    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
        <Featuremovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito para portifólio teste automatizado, Diniz <span className="icon" role="img" aria-label="phone">🎧</span>
      </footer>


      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="loading"></img>
        </div>
      }
    </div>
  )
}