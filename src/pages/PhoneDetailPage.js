import React, { useEffect, useState } from "react";
import MediaCard from "../components/MediaCard";
import phonesService from "../services/phones.service";

export default function PhoneDetailPage(props) {
	const [phone, setPhone] = useState({});
	const { id } = props.match.params;

	//call to service when component did mount
	useEffect(() => {
		phonesService
			.getPhoneById(id)
			.then((res) => setPhone(res))
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<section id="phone-detail-section">
			<h2>Phone Detail</h2>
			{Array.isArray(phone) && <MediaCard phone={phone} />}
		</section>
	);
}
