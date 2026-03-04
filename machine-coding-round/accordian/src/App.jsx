import './App.css'
import Accordian from './components/Accordian'

function App() {

  const items = [
    {
      title: 'What is React?',
      content: 'React is a front end javascript framework. '
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers'
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components'
    },
    {
      title: 'What is a component?',
      content: 'Components are independent and reusable bits of code'
    }
  ]

  return (
    <>
      <h1 className="title">Accordian</h1>
      <Accordian items={items}/>
    </>
  )
}

export default App
