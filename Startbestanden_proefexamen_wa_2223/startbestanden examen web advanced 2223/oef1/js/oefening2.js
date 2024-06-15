const students = [
    {
        name: 'Alice',
        age: 20,
        subjects: ['Math', 'Physics', 'Chemistry'],
        city: 'New York',
        grade: 85
    },
    {
        name: 'Bob',
        age: 22,
        subjects: ['English', 'History', 'Geography'],
        city: 'San Francisco',
        grade: 92
    },
    {
        name: 'Charlie',
        age: 21,
        subjects: ['Biology', 'Chemistry', 'Physics'],
        city: 'Los Angeles',
        grade: 78
    },
    {
        name: 'David',
        age: 19,
        subjects: ['Computer Science', 'Math', 'Physics'],
        city: 'Chicago',
        grade: 90
    },
    {
        name: 'Emily',
        age: 20,
        subjects: ['English', 'Art', 'Music'],
        city: 'Boston',
        grade: 88
    },
    {
        name: 'Frank',
        age: 23,
        subjects: ['Chemistry', 'Biology', 'Math'],
        city: 'Houston',
        grade: 81
    },
    {
        name: 'Grace',
        age: 21,
        subjects: ['History', 'English', 'Geography'],
        city: 'Seattle',
        grade: 95
    },
    {
        name: 'Hannah',
        age: 19,
        subjects: ['Physics', 'Chemistry', 'Biology'],
        city: 'Miami',
        grade: 87
    },
    {
        name: 'Isaac',
        age: 22,
        subjects: ['Math', 'Computer Science', 'Physics'],
        city: 'Dallas',
        grade: 79
    },
    {
        name: 'Jane',
        age: 20,
        subjects: ['Chemistry', 'English', 'Art'],
        city: 'Philadelphia',
        grade: 93
    }
];

function filterLetters(name, lettersToFilter) {
    const filterSet = new Set(lettersToFilter.map(letter => letter.toLowerCase()));
    return name.split('').filter(char => !filterSet.has(char.toLowerCase())).join('');
}

console.log(filterLetters('Charlie', ['a', 'e', 'c'])); // Output: hrli

function nameAndCitySortedByAge() {
    return students
        .map(student => ({
            naam: student.name,
            stad: student.city,
            leeftijd: student.age
        }))
        .sort((a, b) => b.leeftijd - a.leeftijd);
}

console.log(nameAndCitySortedByAge());