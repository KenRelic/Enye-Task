import './Header.css';

function Header(props){
  return(
    <header className='header'>{props.value}</header>
  )
}

export default Header;