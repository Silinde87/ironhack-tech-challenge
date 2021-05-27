import React, { useEffect, useState } from "react";

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
			{
                phonesList.map(phone => {
                    return <p key={phone.id}>{phone.name}</p>
                })
            }
		</div>
	);
}

export default PhonesListPage;
