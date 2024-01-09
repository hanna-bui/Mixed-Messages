star_signs = ['A cancer', 'A scorpio', 'An aquarius', 'A leo', 'A gemini']

messages = ['will cry in front of you today.',
            'is deceiving you about your personal belonging.',
            'is serious and aloof, does not want a commitment with you.',
            "is self center, they don't care about you.",
            "is fake and don't mean the things they say to you."]

const randomMessage = () => {
    return star_signs[Math.floor(Math.random() * 5)].concat(' ').concat(messages[Math.floor(Math.random() * 5)])
}

console.log(randomMessage())
