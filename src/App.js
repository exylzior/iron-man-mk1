import React, { Component } from 'react';
import database from "./firebase";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  


  
  render() {
    const fanRef = database.collection("fanproducts");
    // fanRef.get().then(function(doc){
    //   if (doc.exists) {
    //             console.log("Document data:", doc.data());
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    // })

    fanRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });

  


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div></div>
      </div>
    );
  }
}

export default App;
