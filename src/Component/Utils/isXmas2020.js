const xmas = () => ((localStorage && localStorage.xmastest === 'csunion') || (new Date() >= new Date(2020, 11, 7) && new Date() < new Date(2020, 11, 31)));

export default xmas;
export const eventGoing = () => ((new Date() >= new Date(2020, 11, 7) && new Date() < new Date(2020, 11, 18)));