const students =[
    {id:2 ,name:"mahmud"},
    {id:1 ,name:"safikul"},
    {id:3 ,name:"purnima"},
    {id:11 ,name:"pias"}
]
const studentsName =students.map(s =>s.name);
const studentsids =students.map(s =>s.id);
console.log(studentsName);
console.log(studentsids);

const filteredstudentsids =students.filter(s =>s.id>5);
console.log(filteredstudentsids);

const briliants =students.find(s => s.id<12)
console.log(briliants);
