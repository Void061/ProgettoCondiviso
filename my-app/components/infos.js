

export default function infos(){
    return(
        <div className="infos">


            <div className="section">

                <div className="left-container">
                    <p className="title"></p>
                    <p className="text-secondary">SPACELON DEX</p>
                    <p className="text-normal">Safe and decentralized where it will be possible to trade $SPX, tokens and coins. The limit order protocol will be introduced, where you can use Stop loss and
Take profit.  <br />   <br /> 
- <b>Stop loss order:</b> based on the conditional orders feature, a stop-loss order is
executed when it reaches a particular price point set by the user. When the price limit is
reached, the open position will close to prevent further losses. <br /> <br />
 - <b>Take profit order:</b> based on the conditional orders feature, a take-profit
order is executed when it reaches a particular price point set by the user. When the price
limit is reached, the open position will close to take profit. <br /> <br />
- <b>Trailing stop order:</b> In a sell trailing stop order, also implemented on the
conditional order feature, the user sets the stop price at a fixed amount below market with an
attached ‘trailing’ amount. If the market price increases, the stop price rises by the trailing
amount. If the price falls, the stop-loss price remains unchanged. </p> 
                </div>

                <div className="right-container">
                    <img src="/images/dex.png" alt="blank" />
                </div>
                
            </div>


            <div className="section reverse">
                <div className="left-container">
                    <p className="title"></p>
                    <p className="text-secondary">SPACELON MASK</p>
                    <p className="text-normal">
                    - Staking of the $SPX token directly in the wallet; <br /> <br />
- <b>Top level security:</b> All transactions are protected as the wallet parses call data,
showing what is happening in a user-friendly manner. <br /> <br />
- <b>Instant transaction signing:</b> Regardless of their size, transactions can
be instantly approved and signed including via WalletConnect. <br /> <br />
- <b>Advanced transaction management:</b> Traders can cancel sent transactions or
adjust gas prices in order to speed up the execution of transactions. 

                    </p>
                </div>

                <div className="right-container">
                    <img src="/images/wallet.png" alt="blank" />
                </div>
            </div>


            <div className="section">
                <div className="left-container">
                    <p className="title"></p>
                    <p className="text-secondary">SPX FINANCIAL ACADEMY</p>
                    <p className="text-normal">A training academy, accessible to all $SPX holders. In which experts from the world of finance will
be present to deepen your knowledge and teach you the world of crypto step by step. (Readmore on whitepaper) </p>
                </div>
                
                <div className="right-container">
                    <img src="/images/academy.png" alt="blank" />
                </div>
            </div>


    





        </div>
    )
}