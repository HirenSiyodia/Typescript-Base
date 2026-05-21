
import './App.css';
import Home from './Home';
import LogIn from './LogIn';
import LogLevel from './LogLevel';
import PersonDetails from './PersonDetails';
import TeamArray from './TeamArray';
import TeamArrayObject from './TeamArrayObject';

function App() {

  const Details = {
    Fname: 'Virat',
    Lname: 'Kohli',
    Age: 35
  }

  const Team = ['India', 'Australia', 'England', 'New Zealand', 'South Africa']

  const Players = [ {
  Name: 'Virat Kohli',
  Age: 35,
  Team: 'India', 
  },
  {
    Name: 'Steve Smith',
    Age: 33,
    Team: 'Australia'
  }, {
    Name: 'Joe Root',
    Age: 31,
    Team: 'England'
  }]

  return (
    <>
       <Home name='Hiren' isEligible={true}/>
       <PersonDetails Details={Details}/>
       <TeamArray Team={Team}/>
       <TeamArrayObject Players={Players}/>
       <LogLevel status='Info'/>
      <LogIn/>
    </>
  );
}

export default App;
