export function formatCardNumber(card_number) {
    return card_number
        .trim()
        .replace(/\s/g, '');
}
