import './App.css'
import TeamMemberCard from './components/TeamMemberCard'

function App() {
  const data = [
    {
      "name":"John Doe",
      "title":"Software Engineer"
    },
    {
      "name":"Marcus Klein",
      "title":"Manager"
    },
    {
      "name":"Boreas Theisis",
      "title":"CMO"
    }
  ]
  return (
    <>
      <TeamMemberCard teams={data}></TeamMemberCard>
    </>
  )
}

export default App
