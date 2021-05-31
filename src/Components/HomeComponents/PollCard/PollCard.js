import React from 'react'
import { Link } from 'react-router-dom';
import * as style from './style.module.css'

export default function PollCard(props) {
	const { question, link } = props.data;
	return (
		<Link className={style.link} to={"poll/" + link}>
			<div className={style.pollCard}>
				{question}
			</div>
		</Link>
	)
}
