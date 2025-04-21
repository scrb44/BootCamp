interface CacheItem<T> {
    data: T;
    timestamp: number;
    ttl?: number;
}

const DEFAULT_TTL = 1000 * 60 * 60 * 24; // 24 horas

export function getItem<T>(key: string): T | null {
    try {
        const item = localStorage.getItem(key);
        if (!item) return null;

        const parsed: CacheItem<T> = JSON.parse(item);

        if (parsed.ttl && Date.now() - parsed.timestamp > parsed.ttl) {
            localStorage.removeItem(key);
            return null;
        }

        return parsed.data;
    } catch (error) {
        console.error("Error reading cache:", error);
        return null;
    }
}

export function setItem<T>(
    key: string,
    data: T,
    ttl: number = DEFAULT_TTL
): void {
    try {
        const item: CacheItem<T> = {
            data,
            timestamp: Date.now(),
            ttl,
        };
        localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
        console.error("Error writing to cache:", error);
    }
}

export function removeItem(key: string): void {
    localStorage.removeItem(key);
}

export function clearExpiredCache(): void {
    Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("poke-")) {
            getItem(key); // Esto automáticamente limpia los expirados
        }
    });
}
