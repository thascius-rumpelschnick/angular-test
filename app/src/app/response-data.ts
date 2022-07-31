export interface State {
    count: number;
    foreignCountry: boolean;
    letter: string;
    name: string;
    schoolCount: number;
    stadtStaat: boolean;
    url: string;
}

export interface PersonIndexCount {
    [string: string]: number;
}

export interface ResponseData {
    accountDeactivated: boolean;
    stateList: Array<State>;
    personIndexCounts: PersonIndexCount;
    redirect: boolean;
    showNewTooltip: boolean;
}

export const response: ResponseData = {
    "accountDeactivated": false,
    "stateList": [
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "B",
            "name": "Baden-Württemberg",
            "schoolCount": 9594,
            "stadtStaat": false,
            "url": "/Bundesland/Baden-Wuerttemberg"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "B",
            "name": "Bayern",
            "schoolCount": 9020,
            "stadtStaat": false,
            "url": "/Bundesland/Bayern"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "B",
            "name": "Berlin",
            "schoolCount": 4215,
            "stadtStaat": true,
            "url": "/Bundesland/Berlin"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "B",
            "name": "Brandenburg",
            "schoolCount": 3505,
            "stadtStaat": false,
            "url": "/Bundesland/Brandenburg"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "B",
            "name": "Bremen",
            "schoolCount": 909,
            "stadtStaat": false,
            "url": "/Bundesland/Bremen"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "H",
            "name": "Hamburg",
            "schoolCount": 2333,
            "stadtStaat": true,
            "url": "/Bundesland/Hamburg"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "H",
            "name": "Hessen",
            "schoolCount": 4763,
            "stadtStaat": false,
            "url": "/Bundesland/Hessen"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "M",
            "name": "Mecklenburg-Vorpommern",
            "schoolCount": 2908,
            "stadtStaat": false,
            "url": "/Bundesland/Mecklenburg-Vorpommern"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "N",
            "name": "Niedersachsen",
            "schoolCount": 8687,
            "stadtStaat": false,
            "url": "/Bundesland/Niedersachsen"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "N",
            "name": "Nordrhein-Westfalen",
            "schoolCount": 17477,
            "stadtStaat": false,
            "url": "/Bundesland/Nordrhein-Westfalen"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "R",
            "name": "Rheinland-Pfalz",
            "schoolCount": 3812,
            "stadtStaat": false,
            "url": "/Bundesland/Rheinland-Pfalz"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "S",
            "name": "Saarland",
            "schoolCount": 1084,
            "stadtStaat": false,
            "url": "/Bundesland/Saarland"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "S",
            "name": "Sachsen",
            "schoolCount": 6189,
            "stadtStaat": false,
            "url": "/Bundesland/Sachsen"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "S",
            "name": "Sachsen-Anhalt",
            "schoolCount": 3865,
            "stadtStaat": false,
            "url": "/Bundesland/Sachsen-Anhalt"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "S",
            "name": "Schleswig-Holstein",
            "schoolCount": 2826,
            "stadtStaat": false,
            "url": "/Bundesland/Schleswig-Holstein"
        },
        {
            "count": 0,
            "foreignCountry": false,
            "letter": "T",
            "name": "Thüringen",
            "schoolCount": 3095,
            "stadtStaat": false,
            "url": "/Bundesland/Thueringen"
        }
    ],
    "personIndexCounts": {
        "a": 1,
        "b": 2,
        "c": 0,
        "d": 2,
        "e": 1,
        "f": 0,
        "g": 1,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 9,
        "m": 18,
        "n": 2,
        "o": 0,
        "p": 0,
        "q": 0,
        "r": 1,
        "s": 4,
        "t": 2,
        "u": 0,
        "v": 1,
        "w": 2,
        "x": 0,
        "y": 0,
        "z": 0
    },
    "redirect": false,
    "showNewTooltip": false
};
