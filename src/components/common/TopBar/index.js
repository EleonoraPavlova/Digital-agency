import './index.scss';

import Icon from '../Icon';
import { Link } from "react-router-dom"

export default function TopBar() {
  return <div className="top-bar">
    <div className="top-bar-item">
      <Icon type='point' />
      <Link to="/contact">
        Company Address type here
      </Link>
    </div>
    <div className="top-bar-item">
      <Icon type='phone' />
      <a href="tel:+94 000 00000">
        +94 000 00000
      </a>
    </div>
  </div>;
}