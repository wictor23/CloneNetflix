import React,{useState} from 'react';

import './MovieRow.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


export default ({title, items}) => {
    const [scrollX, setscrollX] = useState(0);

    const oncliqueleft = () =>{
        let x = scrollX + Math.floor(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setscrollX(x)
    }

    const oncliqueright = () =>{

        let x = scrollX - Math.floor(window.innerWidth / 2);
        let listW = items.results.length * 150;

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }

        setscrollX(x)

    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={oncliqueleft}>
                <NavigateBeforeIcon style={{fontSize:50}} id="btnLeft"/>
            </div>
            <div className="movieRow--right"onClick={oncliqueright}>

                <NavigateNextIcon style={{fontSize:50}}id="btnRight"/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft:scrollX,
                    width: items.results.length * 150
                }}>

                    {items.results.length > 0 && items.results.map((item, key)=>(
                    <div key={key} className="movieRow--item">
                        <img id={key} alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                    </div>
                ))}
                </div>
              
            </div>
        </div>
    )
}