// this is where all the dice-rolling functions will be.

// roll function

export function roll(x,y,z){
        var rolls = [];

        for (let i = 0; i<z; i++){
                var numbers = 0
                for(let j = 0; j<y; j++){
                        numbers = numbers + Math.floor(Math.random() * x) + 1
        }
        results.push(numbers)
        }
return JSON.stringify({"sides":x, "dice":y, "rolls":z, "results":results})
}
~                 
