const API_BASE = "https://pokeapi.co/api/v2/";

interface ApiError {
    message: string;
    status: number;
}

export async function get<T = unknown>(
    url: string,
    signal?: AbortSignal
): Promise<T> {
    try {
        const response = await fetch(
            url.startsWith("http") ? url : API_BASE + url,
            {
                signal,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            const error: ApiError = {
                message: `HTTP error! status: ${response.status}`,
                status: response.status,
            };
            throw error;
        }

        return await response.json();
    } catch (error) {
        console.error("API request failed:", error);
        throw error;
    }
}

export function createApiClient() {
    const controller = new AbortController();

    return {
        get: <T>(url: string) => get<T>(url, controller.signal),
        abort: () => controller.abort(),
    };
}

export type ApiClient = ReturnType<typeof createApiClient>;
