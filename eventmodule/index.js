const EventEmitter = require("events");

const event = new EventEmitter();    // making the instance of an class events in simple way

// event.on("sayhelloworld",()=>{           //this is event listener and define the event function
//     console.log("event module used");
// })

// event.on("sayhelloworld",()=>{           //multiple same name function called in event module 
//     console.log("event module used 2");
// })

// event.on("sayhelloworld",()=>{  
//     console.log("event module used 3");
// })

// event.emit("sayhelloworld"); // this is event fire code

event.on("getmynameandage",(name,age)=>{           //multiple same name function called in event module 
    console.log(`name is ${name} and age is ${age}`);
})

event.emit("getmynameandage","paresh",20);
