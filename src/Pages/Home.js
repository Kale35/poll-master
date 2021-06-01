import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PollCard from "../Components/HomeComponents/PollCard/PollCard";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(async () => {
		// await fetch("http://localhost:1234/getAllPolls");
		const resp = await fetch("http://localhost:1234/poll/random/7");
		setData(await resp.json());
	}, []);

	const showData = () => {
		console.log(data);
		if (data.length === 0) return <div>Loading...</div>;
		else if (data.length > 0)
			return (
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					{data.map((e, i) => (
						<PollCard key={i} data={e} />
					))}
				</div>
			);
	};

	return (
		<div>
			<Link to="/create">Create</Link>
			<div>{showData()}</div>
		</div>
	);
}
