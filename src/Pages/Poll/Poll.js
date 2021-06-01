import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import PollChart from "./PollChart";
import "./Poll.css";

export default function Poll() {
	const { id } = useParams();
	const [data, setData] = useState(null);

	useEffect(async () => {
		const dt = await fetch(`http://localhost:1234/poll/${id}`);
		const resp = await dt.json();
		if (resp === null) setData(undefined);
		else setData(resp);
		console.log(resp);
	}, []);

	if (data === null) return <div>Loading...</div>;
	else if (data === undefined) return <div>This poll does not exist...</div>;
	else
		return (
			<div className="Poll__Div">
				<div className="Poll__Info">
					<h2>{data.question}</h2>
					<table>
						<tbody>
							{data.answers.map((a, i) => (
								<tr key={i}>
									<td>{a.answer}: </td>
									<td>{a.voteCount}</td>
									<td>
										<input type="button" value="Vote!" />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="Poll__Chart">
					<PollChart answers={data.answers} />
				</div>
			</div>
		);
}
