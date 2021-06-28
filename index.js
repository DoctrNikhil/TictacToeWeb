var playerTurn = document.querySelector(".playerTurn").innerHTML;
var text = "O";

var i = 0;
let blocksFilled = 0;
for(i = 0; i < 9; i++)
{
    document.querySelector(".element"+i).addEventListener("click",function(event)
    {   if (playerTurn == "1")
        {
        text = "O";
        }
        else
        {
        text = "X";
        }
        
        
        if(this.innerHTML != "O" && this.innerHTML != "X")
        {   
            blocksFilled ++;
            if(playerTurn == "1") { playerTurn = "2";}
            else {playerTurn = "1";}
            document.querySelector(".playerTurn").innerHTML = playerTurn;
            this.innerHTML = text;

            
           var a = event.target.classList[1][7];
           if(checkWinning(a,text))
           {    if(playerTurn == 2)
                {alert("Player"+1+" wins");
                }
                else
                {
                    alert("Player"+2+" wins");
                }
                location.reload();
           }
           // Means match draw
           if (blocksFilled === 9)
           {
               alert("Match Draw");
               location.reload();
           }
           
        }
    });
}

function checkWinning(a,text)
{
    var row = Math.floor(a/3);
    var column = a%3;
    var j = 0;
    // For traverse row and check
    for(j = 0; j < 3; j++)
    {
        var elem = j*3 + column;
        if(document.querySelector(".element"+elem).innerHTML !== text)
        {
            break;
        }
    }
    if(j == 3)
    {
        return true;
    }
    // For traverse column and check
    for(j = 0; j < 3; j++)
    {
        var elem = row*3+j;
        if(document.querySelector(".element"+elem).innerHTML !== text)
        {
            break;
        }
    }
    if(j == 3)
    {
        return true;
    }
    // For traverse main diagonal
    if(row === column)
    {
        if((document.querySelector(".element"+ 0 ).innerHTML === text)
            &&(document.querySelector(".element"+ 4 ).innerHTML === text)
            &&(document.querySelector(".element"+ 8 ).innerHTML === text))
        {
            return true;
        }

    }
    // For traverse secondry diagonal
    if(row+column===2)
    {
        if((document.querySelector(".element"+ 2 ).innerHTML === text)
            &&(document.querySelector(".element"+ 4 ).innerHTML === text)
            &&(document.querySelector(".element"+ 6 ).innerHTML === text))
        {
            return true;
        }
    }
    return false;
}