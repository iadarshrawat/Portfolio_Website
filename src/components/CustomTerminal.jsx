import React, { useState } from 'react'
import './../styles/customTerminal.scss'

function CustomTerminal() {

    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleEnterKeyPress = (e) => {
            if (e.key === 'Enter') {
              processCommand(inputValue);
              setInputValue('');
            }
          };
        
          const processCommand = (command) => {
            const trimmedCommand = command.trim().toLowerCase();
        
            switch (trimmedCommand) {
              case 'help':
                addOutput('Available commands: help, clear');
                break;
              case 'clear':
                clearOutput();
                break;
              default:
                addOutput(`Command not recognized: ${trimmedCommand}`);
            }
          };
        
          const addOutput = (text) => {
            setOutput((prevOutput) => [...prevOutput, text]);
          };
        
          const clearOutput = () => {
            setOutput([]);
          };

    return (
        <div className='terminal'>
            <h1 className='heading'>Terminal</h1>
            <div className="writing-area">
            <div className="button">
                <div className="minimize"></div>
                <div className="maximize"></div>
                <div className="close"></div>
            </div>
            <div className="text">
                <div className="subheading">
                    Welcome to my website! Get started by typing `help` command below
                </div>

                <div className="output-line">
                    {output.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>

                <div className="input-line">
                    <span className="path">
                        {`$ adarsh-rawat  >> `} 
                    </span>
                    <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterKeyPress}/>
                </div>
            </div>
        </div>
    </div>
  )};


export default CustomTerminal

// import React, { useState } from 'react';

// const CustomTerminal = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [output, setOutput] = useState([]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleEnterKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       processCommand(inputValue);
//       setInputValue('');
//     }
//   };

//   const processCommand = (command) => {
//     const trimmedCommand = command.trim().toLowerCase();

//     switch (trimmedCommand) {
//       case 'help':
//         addOutput('Available commands: help, clear');
//         break;
//       case 'clear':
//         clearOutput();
//         break;
//       default:
//         addOutput(`Command not recognized: ${trimmedCommand}`);
//     }
//   };

//   const addOutput = (text) => {
//     setOutput((prevOutput) => [...prevOutput, text]);
//   };

//   const clearOutput = () => {
//     setOutput([]);
//   };

//   return (
//     <div className='terminal'>
//       <div>
//         {output.map((line, index) => (
//           <div key={index}>{line}</div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyPress={handleEnterKeyPress}
//           placeholder="Type a command..."
//         />
//       </div>
//     </div>
//   );
// };

// export default CustomTerminal;