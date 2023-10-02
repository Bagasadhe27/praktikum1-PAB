// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';

// const MyButton = (props) => {
//   const handleButtonClick = () => {
//     alert(props.message);
//   }

//   return (
//     <button onClick={handleButtonClick} style={{ margin: "10px" }}>
//       {props.children}
//     </button>
//   );
// }


// // App Component
// class App extends Component {

//   render() {
//     return (
//       <div>
//         <h1>Learn React</h1>
//         <MyButton message="Learn React">React</MyButton>
//         <MyButton message="Learn JavaScript">JavaScript</MyButton>
//       </div>
//     );
//   }
// }

// // class App extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       count: 0
// //     };
// //   }

// //   // Fungsi untuk menambah nilai counter
// //   increment = () => {
// //     this.setState({ count: this.state.count + 1 });
// //   }

// //   // Fungsi untuk mengurangi nilai counter
// //   decrement = () => {
// //     this.setState({ count: this.state.count - 1 });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h1>Pengenalan React Tingkat Dasar</h1>
// //         <h2>Counter</h2>
// //         <h1>Nilai: {this.state.count}</h1>
// //         <button onClick={this.increment}>+1</button>
// //         <button onClick={this.decrement}>-1</button>
// //       </div>
// //     );
// //   }
// // }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
