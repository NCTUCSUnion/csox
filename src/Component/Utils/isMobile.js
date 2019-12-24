const getUserAgent = () => typeof window !== 'undefined' ? navigator.userAgent : '';
const isMobile = (userAgent = getUserAgent()) => /mobile/i.test(userAgent);

export default isMobile;