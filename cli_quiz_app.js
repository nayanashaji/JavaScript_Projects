const database=
{
    data:
    [
        
        {
            question:"Which is of the following is not a sense organ?",
            options:
            {
                a:"Ears",
                b:"Tongue",
                c:"Skin",
                d:"Lips"
            },
            answer:"d"
        },
        
        {
            question:"What is the capital of France?",
            options:
            {
                a:"Paris",
                b:"New York",
                c:"Berlin"
            },
            answer:"a"
        },

        {
            question:"Is Dolphin a fish?",
            options:
            {
                a:"Yes",
                b:"No"
            },
            answer:"b"
        }
        
    ]
}
const leaderboard=
{
    data:
    [
        {
            name:"Jaya",
            score:2
        },
        {
            name:"Robin",
            score:1
        },
        {
            name:":Lily",
            score:3
        }
    ]
}
function displayleaderboard()
{
    let i=1;
    let leadersort=leaderboard.data.sort((a,b)=>b.score-a.score);
    console.log(kuler("LEADERBOARD", "#facc15"));
    for(let person of leadersort)
    {
        console.log(`${i++}: ${person.name} - ${person.score} points`);
    }
}
let userscore=0;
const read=require("readline-sync");
let kuler=require("kuler");
console.log(kuler("Welcome to CLI QUIZ APP","#facc15"));
let username=read.question("Please enter your name:");
for(let i=0;i<3;i++)
{
    console.log(`Q${i+1}:${database.data[i].question}`);
    for(let j in database.data[i].options)
    {
        console.log(`Option ${j}:${database.data[i].options[j]}`);
    }
    let input=read.question("Enter Answer:");
    if(input.toLowerCase()==database.data[i].answer)
    {
        console.log(kuler("Answer is correct","#166534"));
        userscore++;
    }
    else
    {
        console.log(kuler(`Answer is wrong, correct answer is ${database.data[i].answer}`,"#7f1d1d"));
    }
}
console.log(kuler(`Your total score: ${userscore}`,"#facc15"));
leaderboard.data.push({name:username,score:userscore});
let yn=read.question("Do you want to see the leaderboard? y/n").toLowerCase();
if(yn=='y')
{
    displayleaderboard();
}
else{
    console.log(kuler("Thank you","#facc15"));
}