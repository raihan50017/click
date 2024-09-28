import './App.css'
import Counter from './components/Counter'
import { Button } from './components/ui/button'
import UserList from './components/UserList'

function App() { 
  return (
    <>
    <div className='p-2'>
      {/* <Counter></Counter>
      <Button>Click</Button> */}
      <UserList></UserList>
    </div>
    </>
  )
}

export default App
