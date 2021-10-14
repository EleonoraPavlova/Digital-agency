import TopBar from "../TopBar";
import Navigation from "../Navigation";
import './index.scss'

export default function Header() {
  return (
    <div>
      <div className="topbar-wrapper">
        <TopBar />
      </div>
      <Navigation />
    </div>
  )
}