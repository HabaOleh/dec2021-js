function UserCard(key){
    let card = {
        balance:balance = 100,
        transactionLimit:transactionLimit = 100,
        historyLogs:historyLogs=[],
        key: key
    }
    return{
        getCardOptions:function (){
            return card;
        },
        putCredits:function (value){
            card.balance+=value;
            card.historyLogs.push({type:"recive",credits:card.balance,time:Date()});
            return card.balance;
        },
        takeCredits:function (value){
            if(card.balance>=value&&card.transactionLimit>=value){
                card.balance-=value;
                card.historyLogs.push({type:"takecredits",credits:card.balance,time:Date()});
                return card.balance;
            }else{
                console.error("You do not have enough money");
            }

        },
        setTransactionLimit: function (newLimit){
            card.transactionLimit = newLimit;
            card.historyLogs.push({type:"transaction",credits:card.balance,time:Date()});
            return card.transactionLimit;
        },
        transferCredits:function (count, userCard){
            if(card.balance>=count&&card.transactionLimit>=count) {
                card.balance -= count * 0.05;
                userCard.balance += count;
            }else{
                console.error("You do not have enough money");
            }
        }

    }
}
class UserAccount{
    constructor(name, cards=[]) {
        this.name = name;
        this.cards = cards;
    }
    addCard(key) {
        this.cards.push(UserCard(key));

    }
    getCardByKey(key){
       return this.cards[key-1];
    }

}

let user= new UserAccount("Bob");
user.addCard(1);
user.addCard(2);

let card2= user.getCardByKey(2);
let card1 = user.getCardByKey(1);

card1.putCredits(500);
card1.setTransactionLimit(800);

card1.transferCredits(300,card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

//console.log(card1);
//let card3 = UserCard(3);
//let card1 = UserCard(1);
//card3.transferCredits(50,card1);
// console.log(card3.getCardOptions());
// card3.putCredits(200);
// card3.takeCredits(100);
// card3.setTransactionLimit(5000);
//console.log(card3.getCardOptions());
//console.log(card1.getCardOptions());

