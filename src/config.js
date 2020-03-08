const config = {
    ROMS: {
        myrom1: {
            name: "Double Dragon",
            description: "Double Dragon",
            url: "/roms/myrom/7000527.nes"
        },
        myrom2: {
            name: "Double Dragon2",
            description: "Double Dragon2",
            url: "/roms/myrom/双截龙2.nes"
        }
    },
    GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
    SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;
