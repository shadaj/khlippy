const domains = JSON.parse(`[
    {
        "children": [
            {
                "href": "\/math\/early-math",
                "identifier": "early-math",
                "translatedTitle": "Early math"
            },
            {
                "href": "\/math\/arithmetic",
                "identifier": "arithmetic",
                "translatedTitle": "Arithmetic"
            },
            {
                "href": "\/math\/algebra-home",
                "identifier": "algebra",
                "translatedTitle": "Algebra"
            },
            {
                "href": "\/math\/geometry-home",
                "identifier": "geometry",
                "translatedTitle": "Geometry"
            },
            {
                "href": "\/math\/trigonometry",
                "identifier": "trigonometry",
                "translatedTitle": "Trigonometry"
            },
            {
                "href": "\/math\/probability",
                "identifier": "probability",
                "translatedTitle": "Probability & statistics"
            },
            {
                "href": "\/math\/calculus-home",
                "identifier": "calculus",
                "translatedTitle": "Calculus"
            },
            {
                "href": "\/math\/differential-equations",
                "identifier": "differential-equations",
                "translatedTitle": "Differential equations"
            },
            {
                "href": "\/math\/linear-algebra",
                "identifier": "linear-algebra",
                "translatedTitle": "Linear algebra"
            },
            {
                "href": "\/math\/math-for-fun-and-glory",
                "identifier": "math-for-fun-and-glory",
                "translatedTitle": "Math for fun and glory"
            }
        ],
        "href": "\/math",
        "identifier": "math",
        "numUntranslatedChildren": 0,
        "translatedTitle": "Math by subject"
    },
    {
        "children": [
            {
                "href": "\/math\/early-math",
                "identifier": "early-math",
                "translatedTitle": "K\u20132nd"
            },
            {
                "href": "\/math\/cc-third-grade-math",
                "identifier": "cc-third-grade-math",
                "translatedTitle": "3rd"
            },
            {
                "href": "\/math\/cc-fourth-grade-math",
                "identifier": "cc-fourth-grade-math",
                "translatedTitle": "4th"
            },
            {
                "href": "\/math\/cc-fifth-grade-math",
                "identifier": "cc-fifth-grade-math",
                "translatedTitle": "5th"
            },
            {
                "href": "\/math\/cc-sixth-grade-math",
                "identifier": "cc-sixth-grade-math",
                "translatedTitle": "6th"
            },
            {
                "href": "\/math\/cc-seventh-grade-math",
                "identifier": "cc-seventh-grade-math",
                "translatedTitle": "7th"
            },
            {
                "href": "\/math\/cc-eighth-grade-math",
                "identifier": "cc-eighth-grade-math",
                "translatedTitle": "8th"
            }
        ],
        "href": "\/math\/k-8-grades",
        "identifier": "math",
        "numUntranslatedChildren": 0,
        "translatedTitle": "Math by grade"
    },
    {
        "children": [
            {
                "href": "\/science\/physics",
                "identifier": "physics",
                "translatedTitle": "Physics"
            },
            {
                "href": "\/science\/chemistry",
                "identifier": "chemistry",
                "translatedTitle": "Chemistry"
            },
            {
                "href": "\/science\/organic-chemistry",
                "identifier": "organic-chemistry",
                "translatedTitle": "Organic Chemistry"
            },
            {
                "href": "\/science\/biology",
                "identifier": "biology",
                "translatedTitle": "Biology"
            },
            {
                "href": "\/science\/health-and-medicine",
                "identifier": "health-and-medicine",
                "translatedTitle": "Health & medicine"
            },
            {
                "href": "\/science\/electrical-engineering",
                "identifier": "electrical-engineering",
                "translatedTitle": "Electrical engineering"
            }
        ],
        "href": "\/science",
        "identifier": "science",
        "numUntranslatedChildren": 0,
        "translatedTitle": "Science & engineering"
    },
    {
        "children": [
            {
                "href": "\/computing\/computer-programming",
                "identifier": "computer-programming",
                "translatedTitle": "Computer programming"
            },
            {
                "href": "\/computing\/computer-science",
                "identifier": "computer-science",
                "translatedTitle": "Computer science"
            },
            {
                "href": "\/computing\/hour-of-code",
                "identifier": "hour-of-code",
                "translatedTitle": "Hour of Code"
            },
            {
                "href": "\/partner-content\/pixar",
                "identifier": "pixar",
                "translatedTitle": "Computer animation"
            }
        ],
        "href": "\/computing",
        "identifier": "computing",
        "numUntranslatedChildren": 0,
        "translatedTitle": "Computing"
    },
    {
        "children": [
            {
                "href": "\/humanities\/art-history",
                "identifier": "art-history",
                "translatedTitle": "Art history"
            },
            {
                "href": "\/humanities\/grammar",
                "identifier": "grammar",
                "translatedTitle": "Grammar"
            },
            {
                "href": "\/humanities\/music",
                "identifier": "music",
                "translatedTitle": "Music"
            },
            {
                "href": "\/humanities\/us-history",
                "identifier": "us-history",
                "translatedTitle": "US history"
            },
            {
                "href": "\/humanities\/world-history",
                "identifier": "world-history",
                "translatedTitle": "World history"
            }
        ],
        "href": "\/humanities",
        "identifier": "humanities",
        "numUntranslatedChildren": 0,
        "translatedTitle": "Arts & humanities"
    },
    {
        "children": [
            {
                "href": "\/economics-finance-domain\/microeconomics",
                "identifier": "microeconomics",
                "translatedTitle": "Microeconomics"
            },
            {
                "href": "\/economics-finance-domain\/macroeconomics",
                "identifier": "macroeconomics",
                "translatedTitle": "Macroeconomics"
            },
            {
                "href": "\/economics-finance-domain\/core-finance",
                "identifier": "core-finance",
                "translatedTitle": "Finance & capital markets"
            },
            {
                "href": "\/economics-finance-domain\/entrepreneurship2",
                "identifier": "entrepreneurship2",
                "translatedTitle": "Entrepreneurship"
            }
        ],
        "href": "\/economics-finance-domain",
        "identifier": "economics-finance-domain",
        "numUntranslatedChildren": 0,
        "translatedTitle": "Economics & finance"
    },
    {
        "children": [
            {
                "href": "\/mission\/sat",
                "identifier": "sat",
                "translatedTitle": "SAT"
            },
            {
                "href": "\/test-prep\/mcat",
                "identifier": "mcat",
                "translatedTitle": "MCAT"
            },
            {
                "href": "\/test-prep\/gmat",
                "identifier": "gmat",
                "translatedTitle": "GMAT"
            },
            {
                "href": "\/test-prep\/iit-jee-subject",
                "identifier": "iit-jee-subject",
                "translatedTitle": "IIT JEE"
            },
            {
                "href": "\/test-prep\/nclex-rn",
                "identifier": "nclex-rn",
                "translatedTitle": "NCLEX-RN"
            },
            {
                "href": "\/test-prep\/cahsee-subject",
                "identifier": "cahsee",
                "translatedTitle": "CAHSEE"
            },
            {
                "href": "\/test-prep\/ap-art-history",
                "identifier": "ap-art-history",
                "translatedTitle": "AP* Art History"
            }
        ],
        "href": "\/test-prep",
        "identifier": "test-prep",
        "numUntranslatedChildren": 0,
        "translatedTitle": "Test prep"
    }
]`);

module.exports = domains;
