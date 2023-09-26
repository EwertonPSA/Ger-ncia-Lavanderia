import './logout.css'
import LogoutImg from '../../img/logout.png'
import { Tooltip } from 'react-tooltip'

function Logout () {
  return (
    <div className="logout-class">
      <a 
        href='' 
        data-tooltip-id="my-logout-tooltip" 
        data-tooltip-content="Deslogar"
      >
        <img src={LogoutImg} alt="Deslogar"></img>
      </a>
      <Tooltip id="my-logout-tooltip" />
    </div>
  )
}

export default Logout;