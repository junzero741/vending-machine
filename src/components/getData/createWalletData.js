import { _ } from '../../util/const';
import { createRandomNumber } from '../../util/util';

function createWalletData() {
  const walletData = _.walletMoneyList.map((el) => {
    return {
      unit: el,
      count: createRandomNumber(_.walletMoneyCount),
    };
  });
  const walletMoney = walletData.reduce((acc, cur) => {
    const units = cur.unit * cur.count;
    acc += units;
    return acc;
  }, 0);
  const wallet = {
    walletData,
    walletMoney,
  };

  return wallet;
}

export { createWalletData };
