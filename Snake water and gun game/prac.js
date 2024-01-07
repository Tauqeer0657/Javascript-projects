let user = prompt("Enter S, W or G");
let cpuI = Math.floor(Math.random()*3);
let cpu = ["S","W","G"][cpuI];
const match = (cpu,user)=>{
    if(cpu === user){
        return "Noone because the match is tied";
    }
    else if(cpu === "S" && user === "W"){
        return "Cpu";
    }
    else if(cpu === "S" && user === "G"){
        return "user";
    }
    else if(cpu === "W" && user === "S"){
        return "user";
    }
    else if(cpu === "W" && user === "G"){
        return "Cpu";
    }
    else if(cpu === "G" && user === "W"){
        return "user";
    }
    else if(cpu === "G" && user === "S"){
        return "Cpu";
    }
}
let result=match(cpu,user);
document.write(`Cpu:${cpu} and User:${user} <br> The winner is :${result}`);