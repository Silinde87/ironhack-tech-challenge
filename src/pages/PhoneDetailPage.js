import React, { useEffect, useState } from "react";
import MediaCard from "../components/MediaCard";

export default function PhoneDetailPage(props) {
	const [phone, setPhone] = useState({});
    const {id} = props.match.params;

    //This function is calls the API to retrieve the phones
	const callApi = async (id) => {
		const response = await fetch(`http://localhost:5000/api/phones/${id}`);
		const body = await response.json();
		return body;
	};

    //Invoke callApi() when component did mount
	useEffect(() => {
		callApi(id)
        .then(res => setPhone(res))
        .catch(err => console.error(err));
	}, []);

    //The phonesList is retrieved
    useEffect(() => {
        //console.log(phone);
    }, [phone]);

    return (
        <MediaCard phone={phone} />
    )
}
