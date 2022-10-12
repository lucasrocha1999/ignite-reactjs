import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

export function App() {
  return (
    <>
    <Header />
      <Post 
        author="Lucas Lira"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />

      <Post 
        author="Nathy"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      />
    </>
  )
}
