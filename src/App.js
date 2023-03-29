import Banner from './component/Banner/Banner';
import Title from './component/Banner/texts/Title';

function App() {
  return (
    <div className="App">
      <header style={{ marginTop: '250px' }}>
        <Banner/>
      </header>
      <br></br>
      <p></p>
      <div className="title-container">
        <Title/>
      </div>
    </div>
  );
}

export default App;
