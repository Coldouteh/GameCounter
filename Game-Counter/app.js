//Set Initial Count
let countOne = 0;
let countTwo = 0;
//Select Value and Buttons///////////////////////
const value = document.querySelector("#value");//
const btns = document.querySelectorAll(".btn");//
/////////////////////////////////////////////////
const valueTwo = document.querySelector("#valueTwo");
const btnsTwo = document.querySelectorAll(".btn");

//PLAYER 1
btns.forEach(function(btn)
{
        btn.addEventListener("click",function(e) 
    {
        const styles = e.currentTarget.classList;
        if(styles.contains('increase'))
        {
            countOne++;
        }
                
        else if(styles.contains('decrease'))
        {
            countOne--;
        }
        else if(styles.contains('set'))
        {
            countOne = prompt("Set Amount: ");
        }
        else if(styles.contains('minus_set'))
        {
            var input = prompt("Subtract Amount: ");
            countOne = countOne - input;
        }
        else if(styles.contains('reset'))  
        {
            countOne = 0;
        }

        if(countOne < 0)
        {
            value.style.color = '#f90909';
        }
        else if(countOne > 0)
        {
            value.style.color = '#28fc02';
        }
        else
        {
            value.style.color = 'black';
        }
        value.textContent = countOne;
    });
});

//PLAYER 2
btnsTwo.forEach(function(btn)
{
        btn.addEventListener("click",function(e) 
    {
        const styles = e.currentTarget.classList;
        if(styles.contains('increaseTwo'))
        {
            countTwo++;
        }
                
        else if(styles.contains('decreaseTwo'))
        {
            countTwo--;
        }
        else if(styles.contains('setTwo'))
        {
            countTwo = prompt("Set Amount: ");
        }
        else if(styles.contains('minus_setTwo'))
        {
            var input = prompt("Subtract Amount: ");
            countTwo = countTwo - input;
        }
        else if(styles.contains('resetTwo')) 
        {
            countTwo = 0;
        }

        if(countTwo < 0)
        {
            valueTwo.style.color = '#f90909';
        }
        else if(countTwo > 0)
        {
            valueTwo.style.color = '#28fc02';
        }
        else
        {
            valueTwo.style.color = 'black';
        }
        valueTwo.textContent = countTwo;
    });
});

