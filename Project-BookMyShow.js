
let language;
 function bookTicket()
{
    console.log("Timing Selection");
    console.log("Choose 1:Morning Show")
    console.log("Choose 2:Matinee Show");
    console.log("Choose 3:Evening Show")
    let show=2;
    switch(show){
        case 1:
            let value1=60;
            if(value1==60){
            console.log("Second Class:Ticket Price Rs."+value1);}
           else
            {    let val1=150;
                console.log("First Class:Ticket Price Rs.",val1);
            }
            break;
            case 2:
               let value2=60;
               if(value2==60){
               console.log("Second Class:Ticket Price Rs."+value2);}
               else
               {    let val2=150;
                   console.log("First Class:Ticket Price Rs.",val2);
               }
               break;
               case 3:
              let value3=60;
              if(value3==60){
            console.log("Second Class:Ticket Price Rs."+value3);}
            else
            {    let val3=150;
                console.log("First Class:Ticket Price Rs.",val3);

            }
            break;

    }
}    
console.log("Choose 1 :Registration Form");
console.log("Choose 2:Login form");
let ch=1;
switch(ch){
    case 1:
        console.log("REGISTRATION FORM");
        //console.log("Enter FirstName");
        let name1="Sarvesh";
        console.log("Enter FirstName",name1);
        //console.log("Enter LastName");
        let name2="waran";
        console.log("Enter Lastname",name2);
       // console.log("Enter Email");
        let email1="sarvesh@gmail.com";
        console.log("Enter Email",email1);
       // console.log("Enter Password");
        let pwd1="Sar21.10";
        console.log("Enter Password",pwd1);
        break;
        case 2:
        console.log("LOGIN FORM");
        //console.log("Enter UserName");
        let name3="Sarveshwaran";
        console.log("Enter UserName",name3);
       // console.log("Enter Email");
        let emai12="sarvesh@gmail.com";
        console.log("Enter Email",emai12);
       // console.log("Enter Password");
        let pwd2="Sar21.10";  
        console.log("Enter Password",pwd2);
        break;

}
console.log("Recommended Movies")
console.log("ANNAATTHE,ENEMY,GHOSTBUSTERS")
console.log("Choose Language");
console.log("Choose 1:Tamil");
console.log("Choose 2:English");
console.log("Choose 3:Hindi");
let ch1=1;
switch(ch1){
    case 1:
        console.log("TAMIL MOVIES");
        console.log("Choose 1:Enemy Movie");
        console.log("choose 2:Annaatthe Movie");
         let movie1=1;
         switch(movie1){
             case 1:
                 console.log("Book Your Tickets");
                bookTicket();
                SeatSelection();
                break;
                case 2:
                    console.log("Book Your Tickets");
                bookTicket();
                SeatSelection();
                break;

         }
        }
        function SeatSelection(){
            console.log("Choose 1:Two Seat Selection");
            console.log("Choose 2:Five Seat Selection");
            console.log("Choose 3:Ten Seat Selection");
            let seat=3;
            switch(seat)
            {
                case 1:
                    let amount1=300;
                    if(amount1>=300){
                    console.log("Pay Rs.",amount1);}
                    else{
                        let price1=120;
                        console.log("Pay Rs.",price1);
                    }
                    break;
                case 2:
                        let amount2=725;
                        if(amount2>=725){
                        console.log("Pay Rs.",amount2);}
                        else{
                            let price2=300;
                            console.log("Pay Rs.",price2);
                        }
                        break;
                case 3:
                            let amount3=600;
                            if(amount3>=1500){
                            console.log("Pay Rs.",amount3);}
                            else{
                                let price3=600;
                                console.log("Pay Rs.",price3);
                            }
                            break;
                                         

            }
        }
