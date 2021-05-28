export default function showProducts(state = false, action) {
    switch (action.type) {
        case 'SHOW_PRODUCTS':
            return !state;
        default:
            return state;
    }
}