//Import CSS to file, to use classes
import { useState } from 'react';
import './App.css';
import react from './assets/react.svg';
import HeadingAndButton from './components/HeadingAndButton/HeadingAndButton';

//Functional Component -> Name der Funktion ist identisch zum Namen des Files und beginnt immer mit einem großen Buchstaben
function App() {
  //Jedes Return-Statement darf nur genau ein Element zurück geben
  //<></> : React Fragment -> Wird beim Rendering komplett entfernt
  //UseState: State bleibt über den Renderzyklus bestehen und wird wie eine variable verwendet werden. Besteht aus dem Wert und einer Setter Funktion
  const [counter, setCounter] = useState(0);
  const buttonClick = () => {
    console.log('function clicked');
    //Funktion innerhalb der Setter-Funktion notwendig, wenn auf den aktuellen Wert des States zurückgegriffen werden soll, ansonsten kann direkt der gewünschte Wert geschrieben werde
    setCounter((a) => a + 1);
  };
  return (
    <>
      <div>
        <h1>Site Title</h1>
        <button className='button'>Button</button>
      </div>
      <img src={react} />
      <div>
        <h2>Bigger Heading</h2>
        {/* React fasst die Attribute zusammen zu einem Object (props-Object) mit key-value Paaren*/}
        <HeadingAndButton
          heading='Heading 1'
          text='text 1'
          buttonText='button 1'
          buttonClick={buttonClick}
        />
        <HeadingAndButton
          heading='Heading 2'
          text='text 2'
          buttonText='button 2'
        />
        <HeadingAndButton
          heading='Heading 3'
          text='text 3'
          buttonText='button 3'
        />
        <HeadingAndButton
          heading='Heading 4'
          text='text 4'
          buttonText='button 4'
        />
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
      {/* React Render Zyklus: Wenn in einer Komponente ein Update stattfindet, werden alle Childkomponenten und die Komponente selbst neu gerendert
       * <button onClick={setCounter}>{counter}</button>
       */}
      <button onClick={buttonClick}>{counter}</button>
    </>
  );
}

//Export Statement muss vorhanden sein, damit die Komponente auch in anderen Files aufgerufen werden kann
export default App;
