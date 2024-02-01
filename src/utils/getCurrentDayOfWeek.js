export const getCurrentDayOfWeek = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    if (dayOfWeek === 0) {
        return 6
    } else {
        return dayOfWeek-1
    }
};
