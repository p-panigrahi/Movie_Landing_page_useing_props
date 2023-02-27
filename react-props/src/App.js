import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Movie from './Movie';
import movie from './movie.json'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
      {
        movie.map((element)=>{
          return(
            <Movie 
            title={element.Title} 
            year ={element.Year}
            poster = {element.Poster}
            />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
