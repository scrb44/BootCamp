import { useState, useEffect } from "react";

const useItemsPerRow = (isLoading: boolean) => {
    const [itemsPerRow, setItemsPerRow] = useState(4);
    // const [cardWidth, setCardWidth] = useState(150); // Coincide con --tamanio-Cartas

    const calculateItemsPerRow = () => {
        const container = document.querySelector(".poke-container");
        const card = document.querySelector("article.carta");

        if (!container) return 4;

        console.log("container.offsetWidth: " + container.offsetWidth);
        console.log("card.offsetWidth: " + card.offsetWidth);

        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;

        console.log("containerWidth: " + containerWidth);
        console.log("cardWidth: " + cardWidth);

        const x = Math.max(1, Math.floor(containerWidth / (cardWidth - 10)));

        console.log(containerWidth / (cardWidth - 10));

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
