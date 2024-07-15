import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>HomePage</h1>
        <br/><br/>
        
        <hr/>

        <Link to="/produto/123">Acessar Produto 123</Link>
      </div>
    );
  }
  
  export default Home;
  