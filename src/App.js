
import './App.css';

import Simpson from "./components/simpson/Simpson";
function App() {
  return (
      <div className='main'>
          <div className='header'>
              <h1>Simpson Family</h1>
          </div>
          <div className='title'><h3>Parents</h3></div>
          <div className='parents'>
              <Simpson
                  itemName = {'Homer'}
                  pic = {'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
              />
              <Simpson
                  itemName = {'Marge'}
                  pic = {'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'}
              />
          </div>
        <div className='title'><h3>Children</h3></div>
          <div className='children'>
              <Simpson
                  itemName = {'Bart'}
                  pic = {'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
              />
              <Simpson
                  itemName = {'Lisa'}
                  pic = {'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
              />
              <Simpson
                  itemName = {'Maggie'}
                  pic = {'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
              />
          </div>
          <div className='title'><h3>Grandparents</h3></div>
          <div className= 'grandparents'>
              <Simpson
                  itemName = {'Abraham'}
                  pic = {'https://upload.wikimedia.org/wikipedia/en/3/3e/Abe_Simpson.png'}
              />
              <Simpson
                  itemName = {'Mona '}
                  pic = {'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Mona_Simpson_%28The_Simpsons%29.png/150px-Mona_Simpson_%28The_Simpsons%29.png'}
              />
          </div>



      </div>
  );
}

export default App;
