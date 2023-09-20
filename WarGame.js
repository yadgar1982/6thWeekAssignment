//for creating a war game we need to have the followings: 
/**
 * a deck ( we need to create a deck class where we can keep our ranks and suits)
 * on the second step we need to create our method for creation of the deck( to put suits and ranks inside it)
 */


class Deck{
    constructor(){
        this.deck=[]
        this.ranks=[
            "Ace","1","2","3","4","5","6","7","8","9","10","J","Q","K"
        ]
        this.suits=[
            "H ♥","S ♣","D ♦","♠"
        ]
    }
    createDeck(){
        for(let i=0;i<this.suits.length;i++){
            for(let j=0;j<this.ranks.length;j++){
                let card = {
                    name:`${this.suits[i]} ${this.ranks[j]}`,
                    value: j+1
                }
                this.deck.push(card)
                console.log()

            }
            
        }
    }
    /**
     * we need to change the status of the deck we need a shuffle method for this. 
     * bellow i have used the shuffle method for this process. 
     */
    shuffleDeck(){
        for(let i =this.deck.length-1;i>0;i--){
            let j=Math.floor(Math.random()*(i+1));

            [this.deck[i],this.deck[j]]=[this.deck[j],this.deck[i]];
        }
    }

}

/**After having the deck, and shuffling it, we need to have the actual game; 
 * for playing game we need to have players, each player must have a hand and score to know about their playing status. 
 * here we create a class for the game and will have our players with their hands, names and scores inside the object. 
 * 
 */
class Game{
    constructor(){
        this.player1={
            name: 'Zabi',
            score:0,
            hand:[]
        }
        this.player2={
            name: 'Taha',
            score:0,
            hand:[]
        }
    }

/**
 * After having all required items. we need to create the logic of our game by a method. 
 * here we create our game as bellow: 
 * first we create our method. then we make our deck by calling our deck class; 
 * we will call the shuffle and createDeck methods and then will make our scors. 
 */
    playGame(){
        const deck =new Deck
        deck.createDeck()
        deck.shuffleDeck()

/** 
 * here we use the logic of  our game. first we will tell to our commputer that if our deck is not empty, take one card out of it and 
 * push into the hands of each players. meanwhile we will tell the machine to take out one card from the deck by shift method. 
 */
        while(deck.deck.length!=0){
            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }
/**
 * here we tell the computer that if any plyers hand value is higher, create a score for him and show that the specific player is winner in this section of Play. 
 */
        for (let i=0; i < this.player1.hand.length;i++){
            if(this.player1.hand[i].value > this.player2.hand[i].value){
                this.player1.score++
                console.log(`
                Zabi Card: ${this.player1.hand[i].name}
                Taha Card: ${this.player2.hand[i].name}
                Zabi wins the points
                Current Score: Zabi: ${this.player1.score}, Taha: ${this.player2.score}
                
                `)
            }else if(this.player2.hand[i].value > this.player1.hand[i].value){
                this.player2.score++
                console.log(`
                Zabi Card: ${this.player1.hand[i].name}
                Taha Card: ${this.player2.hand[i].name}
                Taha wins the points
                Current Score: Zabi: ${this.player1.score}, Taha: ${this.player2.score}
                
                `)
            }else{
                console.log(`
                Zabi: ${this.player1.hand[i].name}
                Taha: ${this.player2.hand[i].name}
                Tai: No points Awarded
                Current Score: Zabi: ${this.player1.score}, Taha: ${this.player2.score}

                `)
            }
        }
/**
 * in this section we will show the final winner by calculation of the scores of each player and will let everyone know the winner! 
 */
        if (this.player1.score > this.player2.score){
            console.log(`Zabi is winner! \n Zabi Score: ${this.player1.score}\n Taha Score: ${this.player2.score}`)
            alert(`Zabi is winner! \n Zabi Score: ${this.player1.score}\n Taha Score: ${this.player2.score}`)
        }else if(this.player2.score > this.player1.score){
            console.log(`Taha is winner! \n Zabi Score: ${this.player1.score}\n Taha Score: ${this.player2.score}`)
            alert(`Taha is winner! \n Zabi Score: ${this.player1.score}\n Taha Score: ${this.player2.score}`)
        }else{
            console.log(`TIE: No one wins! \n Zabi Score: ${this.player1.score}\n Taha Score: ${this.player2.score}`)
            alert(`TIE: No one wins! \n Zabi Score: ${this.player1.score}\n Taha Score: ${this.player2.score}`)
        }
    }
    






}


const game = new Game
game.playGame()

function result(player1,player2){
    if (game.player1.score > game.player2.score){
        throw new Error("No one is winner!")
        
    }
    return (player1,player2);
    console.log('Error')

    
    
        
}
player1= console.log(game.player1.score)
player2= console.log(game.player2.score)

let expect = chai.expect;

describe('result',function(){
    describe('result',function(){
        it('Player1  should be greater than player2', function(){
            let player1=game.player1.score
            let player2=game.player2.score            
            expect (player1).to.greaterThan (player2);

        });

        it( 'should throw an error if player2  greater than player1', function(){
            expect(function(){
                (result())

            }).to.throw(Error);
            });
        });

});
