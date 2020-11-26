import React,{ useEffect,useState } from 'react';
import MovieRow from './components/MovieRow';
import Featuremovie from './components/Featuremovie';
import Tmdb from './Tmdb';
import './App.css';
import Header from './components/Header';

export default () => {
 
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(()=>{
    const loadAll = async() => {
      /*
        Pegando a lista de filmes
      */
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      /*
        Filme em destaque
      */
      let originals = list.filter(i => i.slug === "originals");
      let listaFilme = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let filme = originals[0].items.results[listaFilme];
      let filmeInfo = await Tmdb.getMovieInfo(filme.id,'tv');
      setFeaturedData(filmeInfo);

    }
    loadAll();
  }, [])
    useEffect(() =>{
      const scrollListener = () =>{

        if(window.scrollY > 10){
          setBlackHeader(true);
        }else{
          setBlackHeader(false);
        }

      }

        window.addEventListener('scroll',scrollListener);
      return ()=>{
        window.removeEventListener('scroll',scrollListener);
      }
    },[]);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
        <Featuremovie item={featuredData}/>
      }
      <section className="lists">
        {movieList.map((item,key)=>(
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
     </section>
     <footer>
       Feito para portifólio teste automatizado, Diniz <span className="icon" role="img" aria-label="phone">🎧</span>
     </footer>
    </div>
  )
}