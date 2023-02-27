

const Movie = ({poster,year,title}) => {
  return (
    <div className="movie">
        <img src={poster} alt=''/>
        <h3>{title}</h3>
        <p>Year : {year}</p>
    </div>
  )
}

export default Movie