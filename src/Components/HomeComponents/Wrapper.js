import React from 'react'
import * as style from './style.module.css'

export default function Wrapper(props) {
	return (
		<div className={style.bg}>
			{props.children}
		</div>
	)
}
