import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from './images/12.jpg'
import myImage1 from './images/13.jpg'
import Content from './components/contents'
import Header from './components/contents'



function App() {
  return (
              <div className="App">
                                      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Username" />
                <input type="text" className="form-control" placeholder="Password" />
                <button>LOGIN</button>
              </div>    
            </form>
          </nav>
        <ul>
                <li><a href="default.asp">Kiwi</a></li>
                <li><a href="news.asp">Cherry</a></li>
                <li><a href="contact.asp">Pineaple</a></li>
                <li><a href="about.asp">Watermelon</a></li>
</ul> 
    </div>
  );
}

export default App;
