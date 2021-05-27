import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PhonesListPage() {
	const [phonesList, setPhonesList] = useState([]);

    //This function is calls the API to retrieve the phones
	const callApi = async () => {
		const response = await fetch("http://localhost:5000/api/phones");
		const body = await response.json();
		return body;
	};

    //Invoke callApi() when component did mount
	useEffect(() => {
		callApi()
        .then(res => setPhonesList(res.phonesList))
        .catch(err => console.error(err));
	}, []);

    //The phonesList is retrieved
    useEffect(() => {
        //console.log(phonesList);
    }, [phonesList]);




	return (
		<div>
            <h2>Phones List</h2>
			{
                phonesList.map(phone => {
                    return (
                        <Link key={phone.id} to={'/'+phone.id}>
                            <p >{phone.name}</p>
                        </Link>
                    )
                })
            }
		</div>
	);
}

export default PhonesListPage;
