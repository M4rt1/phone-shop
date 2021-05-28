export default function showTechSection(state = false, action) {
    switch (action.type) {
        case 'SHOW_TECHSECTION':
            return !state;
        default:
            return state;
    }
}