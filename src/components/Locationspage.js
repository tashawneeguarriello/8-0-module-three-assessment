// import React from "react";
// import "../App.css";

// class Locationspage extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       locations: [],
//     };
//   }

//   fetchlocations = () => {
//     fetch("https://ghibliapi.herokuapp.com/films")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           locations: data,
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   componentDidMount = () => {
//     this.fetchlocations();
//   };

//   render() {
//     let locationsToDisplay = this.state.locations.map((movie) => {
//       return (
//         <div className="movie-details">
//           <h2>Title: {movie.title}</h2>
//           <h3>Release Date: {movie.release_date}</h3>
//           <h3>Description: {movie.description}</h3>
//         </div>
//       );
//     });

//     return (
//       <div className="Moviepage">
//         <h1>This is the movie page !</h1>
//         <div className="locations-list">{locationsToDisplay}</div>{" "}
//       </div>
//     );
//   }
// }
// export default Moviepage;

//   render() {
//     return (
//       <div className="Peoplepage">
//         <h1>This is the people page!</h1>
//         <button>Show Locations</button>
//         <button>Hide Locations</button>
//       </div>
//     );
//   }
// }
// export default Peoplepage;

//     return (
//       <div className="Locationspage">
//         <h1>THis is the locations page!</h1>
//       </div>
//     );
//   }
// }
// export default Locationspage;
