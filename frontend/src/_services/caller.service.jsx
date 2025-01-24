const baseURL = "http://localhost:8080/api"

let getAllProperties = async () => {
    try {
        const response = await fetch(baseURL + "/properties/");
        if (!response.ok) 
            throw new Error("Erreur lors de la récupérations des logements");

        const dataAllProperties = await response.json();
        return dataAllProperties;
    } catch (err) {
        console.error("Erreur lors de la récupération des logements :", err );
        throw err;
    }
}

let getProperty = async (id) => {
    try {
        const response = await fetch(baseURL + `/properties/${id}`);
        if (!response.ok) 
            throw new Error("Erreur lors de la récupérations des logements");

        const dataPropertie = await response.json();
        return dataPropertie;
    } catch (err) {
        console.error("Erreur lors de la récupération des logements :", err );
        throw err;
    }
}
export const callerService = {
    getAllProperties,
    getProperty,
}