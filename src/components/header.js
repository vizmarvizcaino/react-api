import '../stylesheet/header.css';
import logo from '../logo.png'
function Header() {
  return (
    <>
      <div class="header">
        <img src={logo} alt="logo larnu" class="header_logo" />
        <h2>Cursos - Larnu</h2>
        <button class="header_button">Tipo</button>
      </div>
      <div class="searcher">
        <input type="search" placeholder="🔎 Buscar..." class="recursos--filter" />
      </div>
    </>
  )
}
export default Header;