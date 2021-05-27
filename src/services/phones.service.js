class PhonesService {
	constructor() {
		this.baseURL = "http://localhost:5000/api";
	}

	getAllPhones = async () => {
		const response = await fetch(`${this.baseURL}/phones`);
		const body = await response.json();
		return body;
	};

	getPhoneById = async (id) => {
		const response = await fetch(`${this.baseURL}/phones/${id}`);
		const body = await response.json();
		return body;
	};
}

const phonesService = new PhonesService();

export default phonesService;
