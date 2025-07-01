//Import CSS to file, to use classes
import { useState } from 'react';
import './App.css';
import react from './assets/react.svg';
import HeadingAndButton from './components/HeadingAndButton/HeadingAndButton';
import InputField from './components/Forms/InputField/InputField';
import Forms from './components/Forms/Forms';

//Functional Component -> Name der Funktion ist identisch zum Namen des Files und beginnt immer mit einem großen Buchstaben
function App() {
  const data = [
    { heading: 'Heading1', text: 'Text1', buttonText: 'buttonText1' },
    { heading: 'Heading2', text: 'Text2', buttonText: 'buttonText2' },
    { heading: 'Heading3', text: 'Text3', buttonText: 'buttonText3' },
    { heading: 'Heading4', text: 'Text4', buttonText: 'buttonText4' },
    { heading: 'Heading5', text: 'Text5', buttonText: 'buttonText5' },
    { heading: 'Heading6', text: 'Text6', buttonText: 'buttonText6' },
  ];
  //Jedes Return-Statement darf nur genau ein Element zurück geben
  //<></> : React Fragment -> Wird beim Rendering komplett entfernt
  //UseState: State bleibt über den Renderzyklus bestehen und wird wie eine variable verwendet werden. Besteht aus dem Wert und einer Setter Funktion
  const [counter, setCounter] = useState(0);

  const buttonClick = () => {
    console.log('function clicked');
    //Funktion innerhalb der Setter-Funktion notwendig, wenn auf den aktuellen Wert des States zurückgegriffen werden soll, ansonsten kann direkt der gewünschte Wert geschrieben werde
    setCounter((a) => a + 1);
    console.log(name);
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
          heading='Heading'
          text='text'
          buttonText='button'
          buttonClick={buttonClick}
        />
        {/** List Rendering: Each child needs a unique key prop */}
        {data.map(({ heading, text, buttonText }, ind) => (
          <HeadingAndButton
            key={ind}
            heading={heading}
            text={text}
            buttonText={buttonText}
          />
        ))}
      </div>

      {/* React Render Zyklus: Wenn in einer Komponente ein Update stattfindet, werden alle Childkomponenten und die Komponente selbst neu gerendert
       * <button onClick={setCounter}>{counter}</button>
       */}
      <button onClick={buttonClick}>{counter}</button>
      <Forms />
    </>
  );
}

//Export Statement muss vorhanden sein, damit die Komponente auch in anderen Files aufgerufen werden kann
export default App;
