import { env } from "./env.js";

const buildUrl = (endpoint, params = {}) => {
    const url = new URL(endpoint, env.deezerApiUrl);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            url.searchParams.set(key, String(value));
        }
    });

    return url;
};

const deezerClient = {
    async get(endpoint, { params } = {}) {
        const response = await fetch(buildUrl(endpoint, params), {
            headers: {
                Accept: "application/json",
            },
            signal: AbortSignal.timeout(10000),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            const error = new Error(
                data.error?.message ||
                    `Deezer respondió con estado ${response.status}.`
            );

            error.response = {
                status: response.status,
                data,
            };

            throw error;
        }

        return { data };
    },
};

export default deezerClient;
