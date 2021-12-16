// import React from "react";
// import "../App.css";

// class Peoplepage extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       people: [],
//       currentPerson: null,
//     };
//   }

//   fetchPeople = () => {
//     fetch("https://ghibliapi.herokuapp.com/people")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           people: data,
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   componentDidMount = () => {
//     this.fetchPeople();
//   };

//   render() {

//     return (
//       <form>
//         <input
//         id="people"
//         name="people"
//         type="text"
//         value={this.state.people}
//         onChange={this.fetchPeople}
//         <button>
//         Submit
//         </button>
//       </form>
//     )
