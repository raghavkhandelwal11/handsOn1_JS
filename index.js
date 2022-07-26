console.log("connected 🔥")


// data types 
a=34;
console.log(typeof(a));

// 1. DECELARATIONS

    // 3 types: let, const and var

    // 1. var --> variable

    var a=12; //global scope
    console.log(a); /* in react js var will be a problem */

    //2. const --> constant
    const w=12;
    console.log(w);

    //3. var vs let 
    //let --> block{ghar, house} defined
    let c=12; //block{ghar or house} scope
    console.log(c);

    {
        var a=34;
        console.log(a);
    }

    // mostly 3 errors we can get
    // syntax error , referrance error, type error


    //hoisting in the JS
    // hoisting is a default feature in JS than automatically pushes the function deleclaration at top


    trex();
    console.log(q);

    var q=21;

    function trex() {
        console.log("Hello shinLord");
    }

    
    trex();

    // hoisting is not possible in let and const

    function addition() {
        console.log(12 + 45);
    }

    var addition2=function() {
        console.log(12 + 45);
    }

    function addition() {
        console.log(12 + 45);
    }




    
    
 

