//Import CSS to file, to use classes
import './App.css';
import HeadingAndButton from './components/HeadingAndButton/HeadingAndButton';

//Functional Component -> Name der Funktion ist identisch zum Namen des Files und beginnt immer mit einem großen Buchstaben
function App() {
  //Jedes Return-Statement darf nur genau ein Element zurück geben
  //<></> : React Fragment -> Wird beim Rendering komplett entfernt
  return (
    <>
      <div>
        <h1>Site Title</h1>
        <button className='button'>Button</button>
      </div>
      <div>
        <h2>Bigger Heading</h2>
        <HeadingAndButton />
        <HeadingAndButton />
        <HeadingAndButton />
        <HeadingAndButton />
      </div>
      <div>
        <img />
        <h2>Heading Footer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          maiores, fugiat sapiente esse suscipit unde consectetur, quisquam
          pariatur maxime asperiores eligendi voluptatum blanditiis quia id
          natus voluptates, dicta laboru
        </p>
      </div>
    </>
  );
}

//Export Statement muss vorhanden sein, damit die Komponente auch in anderen Files aufgerufen werden kann
export default App;
