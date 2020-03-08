const config = {
    ROMS: {
        myrom1: {
            name: "Double Dragon",
            description: "Double Dragon",
            url: "/roms/myrom/双截龙1.nes"
        },
        myrom2: {
            name: "Double Dragon2",
            description: "Double Dragon2",
            url: "/roms/myrom/双截龙2.nes"
        },
        myrom3: {
            name: "sky destroyer",
            description: "sky destroyer",
            url: "/roms/myrom/sky_destroyer.nes"
        },
        myrom4: {
            name: "squirrel",
            description: "squirrel",
            url: "/roms/myrom/squirrel.nes"
        }
    },
    GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
    SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;
