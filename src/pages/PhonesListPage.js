import React, { useEffect, useState } from "react";

import SimpleCard from "../components/SimpleCard";
import phonesService from "../services/phones.service";

function PhonesListPage() {
	const [phonesList, setPhonesList] = useState([]);

	//Call to service when component did mount
	useEffect(() => {
		phonesService
			.getAllPhones()
			.then((res) => setPhonesList(res.phonesList))
			.catch((err) => console.error(err));
	}, []);

	return (
		<section id="phones-list-section">
			<h2>Phones List</h2>
			<div id="phones-list-container">
				{phonesList.map((phone) => {
					return <SimpleCard key={phone.id} phone={phone} />;
				})}
			</div>
		</section>
	);
}

export default PhonesListPage;
