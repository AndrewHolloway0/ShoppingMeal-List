import { Link } from 'react-router-dom'

export default function Header() {
  
  return (
    <header>
      <div className="contentContainer">
        <Link to="/">&lt;</Link>
        {/* <h1>App Title</h1> */}
        <Link to="/">&gt;</Link>
      </div>
    </header>
  )
}
