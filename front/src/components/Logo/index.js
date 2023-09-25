import './Logo.css'
import laundryLogo from '../../img/laundry-logo.png'

function Logo() {
	return (
		<div className="logo">
			<img className="logo-img" src={laundryLogo} alt="landry logo"></img>
			<b><p>App Lavanderia</p></b>
		</div>
	);
}

export default Logo;