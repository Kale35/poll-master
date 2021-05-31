import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './style.module.css'

export default function Navbar() {
	return (
		<nav>
			<div className={styles.nav__left}>
				{/* <a href="/">Logo</a> */}
				<Link to="/">Logo</Link>
			</div>
			<div className={styles.nav__right}>
				<span>Login</span>
				<span>Register</span>
			</div>
		</nav>
	)
}
