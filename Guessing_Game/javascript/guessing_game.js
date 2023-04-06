window.addEventListener("load", function(event) 
{
	let number = Math.floor(Math.random() * (20 - 1 + 1)) + 1; // Generate Random Number
    window.onload = document.getElementById('random_number').innerHTML = number; // Store Random Number in HTML
});

function checkValue(){
    let input_value = Number(document.getElementById('number').value); 
    let random_number = Number(document.getElementById('random_number').innerHTML);
    var score = Number(document.getElementById('score').innerHTML);
    let high_score;
   
    for(let i = 1; i <= score; i++) // For loop from 1 to 20
    {
        if(input_value == "")
        {
            document.querySelector("#error_msg").textContent = "No Number !"; // Print Message According to Input Value
            return false;  
        }
        else if(input_value < 1 || input_value > 20)
        {
            document.querySelector('#error_msg').textContent = "Invalid Input !";
            score--; // Decrease Score on Wrong Input
            document.querySelector('#score').textContent = score; // Set New Score
            return false;
        }
        else if(!(Number.isInteger(Number(input_value))))
        {
            document.querySelector('#error_msg').textContent = "Enter Only Integer Value !";
            score--;
            document.querySelector('#score').textContent = score;
            return false;
        }
        else if(input_value != random_number)
        {
            if(input_value > random_number){
                document.querySelector('#error_msg').textContent = "Too High !";
                score--;
                document.querySelector('#score').textContent = score;
                return false;  
            }
            if(input_value < random_number){
                document.querySelector('#error_msg').textContent = "Too Low !";
                score--;
                document.querySelector('#score').textContent = score;
                return false;  
            }
        }
        else{
            document.getElementById('error_msg_icon').innerHTML = "&#127942;&nbsp;&nbsp;Win the Game !"; // Change the Icon and Message
            document.body.style.background = 'green'; // Set Background Color as Green
            high_score = score; // Set Score as Highscore after Win the Game
            document.querySelector('#number').value = '';
            document.querySelector('#high_score').textContent = high_score;
            return false;
        }
    }    
    document.querySelector('#error_msg').textContent = "Your guess limit is over..Click on Again!!";
    document.body.style.background = '#25d1cf';
    document.querySelector('#number').value = ''; // Make Input Box Empty After Guess Limit Over without refreshing Page
    high_score = 0;
    document.querySelector('#high_score').textContent = high_score;
    return false;
}