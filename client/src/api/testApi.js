import axiosClient from "./client/axiosClient";

export const testConnection = async () => {
    try {
        const response = await axiosClient.get("/search", {
            params: {
                q: "Daft Punk",
            },
        });

        console.log("Respuesta Deezer:");
        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error("Error Deezer:");
        console.error(error);
    }
};