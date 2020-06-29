import React from 'react';
import Profile from './Profile';

import { SpendField } from './SpendField';
import { BetButton } from './BetButton';

export default function Main(props) {
  return (
    <main className="panel-welcome mt-5 container">
      <div className="row">
        <div className="mx-auto col-sm-10 col-md-8 px-4">
          <Profile />
        </div>
      </div>
      <div className="lead row mt-5">
        <div className="col-xs-10 col-md-8 mx-auto px-4">
          <SpendField title="Send 1000 uSTX to" path="note" placeholder="Username" />
        </div>

        <div className="card col-md-8 mx-auto mt-5 mb-5 text-center px-0 border-warning">
          <div className="card-header">
            <h5 className="card-title">Instructions</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Claim test tokens from the faucet to get 500k uSTX.</li>
            <li className="list-group-item">Wait a few minutes and refresh the account balance.</li>
            <li className="list-group-item">
              Enter the blockstack username of a friend (that signed in to this app already).
              Examples are
              <br />
              <em>openintents</em> <br />
              (which is the same as <em>openintents.id.blockstack</em>) <br />
              or
              <br /> <em>friedger.id</em>
            </li>
            <li className="list-group-item">
              Press the <i>Enter</i> key or click the <i>Send</i> button to send off the tokens.
            </li>
            <li className="list-group-item">
              Check the balance again (after a few seconds) to see whether tokens were sent.
            </li>
          </ul>
        </div>

        <div className="col-xs-10 col-md-8 mx-auto  px-4">
          <hr />
        </div>

        <div className="col-xs-10 col-md-8 mx-auto mb-4 px-4">
          <BetButton jackpot={true} />
        </div>

        <div className="card col-md-8 mx-auto mt-5 mb-5 text-center px-0 border-warning">
          <div className="card-header">
            <h5 className="card-title">Instructions</h5>
            (Read the technical details at the{' '}
            <a href="https://github.com/friedger/clarity-smart-contracts/blob/master/docs/flip-coin.md">
              source code repo
            </a>
            .)
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Claim test tokens from the faucet to get 500,000 uSTX.
            </li>
            <li className="list-group-item">
              Wait a few minutes and refresh the account balance. You should see 500,000 uSTX more
              on your account.
            </li>
            <li className="list-group-item">
              Toggle the switch. Yellow on blue means "HEADS", Blue on yellow means "TAILS"
            </li>
            <li className="list-group-item">
              Press the <i>Enter</i> key or click the <i>Bet ..</i> button to bet 1000 uSTX.
            </li>
            <li className="list-group-item">
              Wait a few minutes and refresh the account balance. You should see 1000 uSTX less in
              your account.
            </li>
            <li className="list-group-item">
              Ask somebody else to play the same game (same button) and then after a few minutes
              check the balance again to see whether you won.
            </li>
            <li className="list-group-item">
              You can also search for your transcation at the
              [https://testnet-explorer.blockstack.org/transactions](Testnet Explorer) and check the
              flip-coin-jackpot transaction above your transaction. If it contains two transfer
              events you won the jackpot!
            </li>
          </ul>
        </div>

        <div className="col-xs-10 col-md-8 mx-auto  px-4">
          <hr />
        </div>

        <div className="col-xs-10 col-md-8 mx-auto mb-4 px-4">
          <BetButton jackpot={false} />
        </div>

        <div className="card col-md-8 mx-auto mt-5 mb-5 text-center px-0 border-warning">
          <div className="card-header">
            <h5 className="card-title">Instructions</h5>
            (Read the technical details at the{' '}
            <a href="https://github.com/friedger/clarity-smart-contracts/blob/master/docs/flip-coin.md">
              source code repo
            </a>
            .)
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Claim test tokens from the faucet to get 500,000 uSTX.
            </li>
            <li className="list-group-item">
              Wait a few minutes and refresh the account balance. You should see 500,000 uSTX more
              on your account.
            </li>
            <li className="list-group-item">
              Toggle the switch. Yellow on blue means "HEADS", Blue on yellow means "TAILS"
            </li>
            <li className="list-group-item">
              Press the <i>Enter</i> key or click the <i>Bet ..</i> button to bet 1000 uSTX.
            </li>
            <li className="list-group-item">
              Wait a few minutes and refresh the account balance. You should see 1000 uSTX less in
              your account.
            </li>
            <li className="list-group-item">
              Ask somebody else to play the same game (same button) and then after a few minutes
              check the balance again to see whether you won.
            </li>
            <li className="list-group-item">
              You can also search for your transcation at the
              [https://testnet-explorer.blockstack.org/transactions](Testnet Explorer) and check the
              flip-coin-jackpot transaction above your transaction. If it contains two transfer
              events you won the jackpot!
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
