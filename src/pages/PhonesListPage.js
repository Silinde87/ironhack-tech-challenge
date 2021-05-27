import React, { useEffect, useState } from "react";

import SimpleCard from "../components/SimpleCard";

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
		<section id="phones-list-section">
            <h2>Phones List</h2>
            <div id="phones-list-container">
                {
                    phonesList.map(phone => {
                        return (
                            <SimpleCard key={phone.id} phone={phone}/>                      
                        )
                    })
                }
            </div>
		</section>
	);
}

export default PhonesListPage;
