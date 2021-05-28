export default function showNavMenu(state = false, action) {
    switch (action.type) {
        case 'SHOW_NAVMENU':
            return !state;
        default:
            return state;
    }
}