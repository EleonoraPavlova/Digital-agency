import { ReactComponent as Point } from './icons/point.svg';
import { ReactComponent as Phone } from './icons/phone.svg';

// type
export default function Icon(props) {
  switch (props.type) {
    case 'point':
      return <Point />
    case 'phone':
      return <Phone />
    default:
      return null;
  }
}