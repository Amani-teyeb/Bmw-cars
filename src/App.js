import './App.css';
import imageInSrc  from './Images/bmw.jpg';

function App() {
  return (
    <div className="App">
      <div style= {{border:'solid 1px black', maxWidth:'100vw'}}>

      <h1 className ="title red">BMW cars</h1>

     <br/>

     <img src={imageInSrc}
     width = '800px'
     length= '600px'
     alt="img"/>

     <br/>

     <img src="./images/bmw.jpg" 
      width = '800px'
      length= '600px'
     alt="img"/>

     </div>
     <iframe 
     title="video-main"
     width="320" 
     height="240" 
     src="https://www.youtube.com/embed/kPAjkaTIelY" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    ></iframe>
    </div>
  );
}

export default App;