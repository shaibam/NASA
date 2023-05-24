const randomNumber = () => {
    return Number((Math.random() * 100).toFixed(3))
}

export const generateMockWeatherPoints = () => {
    const o = { sol_keys: [] }

    for (let i = 1; i < 20; i++) {
        o['sol_keys'].push(String(i));
        o[i] = {
            "AT": {
                "av": randomNumber(),
                "ct": randomNumber(),
                "mn": randomNumber(),
                "mx": randomNumber()
            },
            "HWS": {
                "av": randomNumber(),
                "ct": randomNumber(),
                "mn": randomNumber(),
                "mx": randomNumber()
            },
            "PRE": {
                "av": randomNumber(),
                "ct": randomNumber(),
                "mn": randomNumber(),
                "mx": randomNumber()
            },
            "First_UTC": "2019-08-19T08:03:59Z",
            "Last_UTC": "2019-08-20T08:43:34Z",
            "Season": "winter"
        }
    }
    return o;
}