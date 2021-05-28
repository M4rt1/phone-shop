export default function showContact(state = false, action) {
    switch (action.type) {
        case 'SHOW_CONTACT':
            return !state;
        default:
            return state;
    }
}