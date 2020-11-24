import React from 'react'
import './Featuremovie.css'

export default ({item}) => {
    console.log(item)
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    return (
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}
                        <div className="featured--info">
                            <div className="featured--point">pontos {item.vote_average}
                                <div className="featured--yarn">{firstDate.getFullYear()}
                                    <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons!== 1 ? 's':''}
                                        <div className="featured--description">{item.overview}
                                            <div className="featured--buttons">
                                                <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
