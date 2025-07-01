//Import CSS to file, to use classes
import { useState } from 'react';
import './App.css';
import react from './assets/react.svg';
import HeadingAndButton from './components/HeadingAndButton/HeadingAndButton';
import InputField from './components/InputField/InputField';

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
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');

  const [reservationConfirmation, setReservationConfirmation] = useState(false);

  const buttonClick = () => {
    console.log('function clicked');
    //Funktion innerhalb der Setter-Funktion notwendig, wenn auf den aktuellen Wert des States zurückgegriffen werden soll, ansonsten kann direkt der gewünschte Wert geschrieben werde
    setCounter((a) => a + 1);
    console.log(name);
  };
  /**
   * Conditional Rendering mit Variablen und If-Else/Switch-Case Statement
   */
  let form = (
    <div>
      {/**
       * Two-Way Binding Input Component for Forms
       */}
      <InputField label='Name' value={name} changeFunction={setName} />
      <InputField
        label='FirstName'
        value={firstName}
        changeFunction={setFirstName}
      />
      <button onClick={() => setReservationConfirmation(true)}>
        Reservieren
      </button>
    </div>
  );
  if (name === 'Lukas') {
    form = (
      <div>
        {/**
         * Two-Way Binding Input Component for Forms
         */}
        <InputField label='Name' value={name} changeFunction={setName} />
        <InputField
          label='FirstName'
          value={firstName}
          changeFunction={setFirstName}
        />
        <button onClick={() => setReservationConfirmation(true)}>
          Stammkundenreservierung
        </button>
      </div>
    );
  }
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

      {
        /**
         * Conditional Rendering in React inline mit ternary operator
         */
        reservationConfirmation ? <h2>Reservieren erfolgreich</h2> : form
      }
    </>
  );
}

//Export Statement muss vorhanden sein, damit die Komponente auch in anderen Files aufgerufen werden kann
export default App;
