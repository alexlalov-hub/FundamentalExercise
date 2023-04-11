import React, { Component } from 'react'
import './NavBar.css'

export class NavBar extends Component {
	render() {
		return (
			<nav className='flex flex-row font-bold text-base place-content-center text-center gap-40 mt-3 mb-1 margin-navbar'>
				<ul className="list-none flex flex-row gap-6 text-center p-auto my-4">
					<li>за нас</li>
					<li>рожден ден</li>
					<li>тиймбилдинг</li>
					<li>ваучер</li>
					<li>цени</li>
					<li>резервирай</li>
					<li>контакти</li>	
					<li></li>
				</ul>
				<button className='border-solid border rounded-3xl px-10' style={{background: "transparent", borderColor : "white"}}>
					резервирай сега!
				</button>
			</nav>
		)
	}
}

export default NavBar