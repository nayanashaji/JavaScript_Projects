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
            answer:"Lips"
        },
        
        {
            question:"What is the capital of France?",
            options:
            {
                a:"Paris",
                b:"New York",
                c:"Berlin"
            },
            answer:"Paris"
        },

        {
            question:"Is Dolphin a fish?",
            options:
            {
                a:"Yes",
                b:"No"
            },
            answer:"No"
        }
        
    ]
}
const read=require("readline-sync");
console.log("Welcome to CLI QUIZ APP");
for(let i=0;i<3;i++)
{
    console.log(`Q${i+1}:${database.data[i].question}`);
    for(let j in database.data[i].options)
    {
        console.log(`Option ${j}:${database.data[i].options[j]}`);
    }
    let input=read.question("Enter Answer:");
    if(input==database.data[i].answer.toLowerCase())
    {
        console.log("Answer is correct");
    }
    else
    {
        console.log(`Answer is wrong, correct answer is ${database.data[i].answer}`);
    }
}