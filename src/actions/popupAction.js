export const CLOSE_POPUP = "CLOSE_POPUP";
export const OPEN_POPUP = "OPEN_POPUP";

export const closePopup = () => ({
    type: CLOSE_POPUP
});

export const openPopup = (movie) => ({
    type: OPEN_POPUP,
    payload:{movie}
});