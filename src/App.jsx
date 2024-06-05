import { useState } from 'react'
import './App.css'

function App() {

  const [paracount, setParaCount] = useState(0);
  const [allparagraph, setAllparagraph] = useState([]);

  const data = [
    { id: 1, paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, paragraph: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.' },
    { id: 7, paragraph: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.' },
    { id: 8, paragraph: 'Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.' },
    { id: 9, paragraph: 'Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.' },
    { id: 10, paragraph: 'Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.' },
    // Add more paragraphs as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if(paracount > 8){
      alert("Ayyo! You are demanding too many paragraphs in one go, kindly take little by little 😀");
      return;
    }

    const newParagraph = data.slice(0, paracount);
    setAllparagraph(newParagraph);
  }

  return (
    <>
      <div className="container">
        <h1>Tired of Boring Lorem Ipsum?</h1>
        <div className="header">
          <form onSubmit={handleSubmit}>
            <p>Paragraphs:</p>
            <input
              type="number"
              id="inputparagraph"
              onChange={(e) => setParaCount(parseInt(e.currentTarget.value))}
              min={0}
              max={50}
              placeholder='0'
            />
            <input type="submit" value="GENERATE" className='generateButton'/>
        </form>
      </div>

      <div className="results">
          {
            allparagraph.map((item, index) => {
              return <p key={index}>{item.id}. {item.paragraph}</p>
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
