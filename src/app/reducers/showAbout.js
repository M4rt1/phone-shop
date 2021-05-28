export default function showAbout(state = false, action) {
    switch (action.type) {
        case 'SHOW_ABOUT':
            return !state;
        default:
            return state;
    }
}