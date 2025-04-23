import { useState, useEffect } from "react";

const useItemsPerRow = (isLoading: boolean) => {
    const [itemsPerRow, setItemsPerRow] = useState(4);

    const calculateItemsPerRow = () => {
        const container =
            document.querySelector<HTMLElement>(".poke-container");
        const card = document.querySelector<HTMLElement>("article.carta");

        if (!container) return 4;
        if (!card) return 4;

        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;

        const x = Math.max(1, Math.floor(containerWidth / (cardWidth - 10)));

        return x;
    };

    useEffect(() => {
        const handleResize = () => {
            setItemsPerRow(calculateItemsPerRow());
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoading]);

    return itemsPerRow;
};

export default useItemsPerRow;
