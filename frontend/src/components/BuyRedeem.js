import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import BuyDirect from './BuyDirect';
import Redeem from './Redeem';
import RecentTransactions from './RecentTransactions';


const BuyRedeem = () => (
  <div>
    <div className="row">
      <div className="col-xs-12 col-sm-5 col-sm-push-1 text-center">
        <Redeem />
      </div>

      <div className="col-xs-12 col-sm-5 col-sm-push-1 text-center">
        <BuyDirect />
      </div>
    </div>

    <hr style={{ margin: '30px 0 0 0', borderBottom: '2px solid #fff' }} />

    <div className="row">
      <div className="col-xs-12">
        <RecentTransactions />
      </div>
    </div>
  </div>
);


function mapStateToProps(state) {
  return {
    web3: state.web3,
    LNKSExchange: state.LNKSExchange,
    LNKSToken: state.LNKSToken,
    account: state.account,
  };
}

export default connect(mapStateToProps, actions)(BuyRedeem);
