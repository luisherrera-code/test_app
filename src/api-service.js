// crea las rutas api que apuntan a http://test_api.test/api/contactos

let baseApiUrl = "http://test_api.test/api";

export const getContactos = async () => {
    try {
        const response = await fetch(baseApiUrl + "/contactos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        console.log(response);

        let data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getContacto = async (id) => {
    try {
        const response = await fetch(baseApiUrl + "/contactos/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const createContacto = async (contacto) => {
    try {
        const response = await fetch(baseApiUrl + "/contactos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(contacto),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const updateContacto = async (id, contacto) => {
    try {
        const response = await fetch(baseApiUrl + "/contactos/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(contacto),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const deleteContacto = async (id) => {
    try {
        const response = await fetch(baseApiUrl + "/contactos/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}