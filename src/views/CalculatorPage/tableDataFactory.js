function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
}

function toCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** ################### Calculation with Rebuy option ################### */

export const tableDataFactoryWithRebuy = (principalAmt, startDate) => {
  const tblData = [];
  if (typeof principalAmt !== "undefined" || typeof startDate !== "undefined") {
    let principal = parseInt(principalAmt.replace(/,/g, "")); //10000; //p
    //console.log(`Principal :${principal}`);
   const dailyInterestRate = 0.5 / 100; //r 0.005
    //const dailyInterestRate = 0.666666667 / 100; //######## 4X Calculation
    //0.666666667
    const numberOfDaysMoneyInvested = 601; //t

    let totalAmount = 0; //A = P(1+r)^t
    let todayReward = 0;
    let rebuy = 0;
    let remainingRewardsAfterRebuy = 0;
    let previousRemainingRewards = 0;
    //let floor = 0;
    let dailyRewardsRunningBalance = 0;
    let totalPendingRewards = 0;

    let dailyRewardsArray = []; /** stores everyday rewards */
    //let principalThreeXRewards = principal * 3;
    let principalThreeXRewards = principal * 3;//######## 4X Calculation
    for (let i = 1; i < numberOfDaysMoneyInvested; i++) {
      principal += rebuy;
      totalAmount = (principal * Math.pow(1 + dailyInterestRate, 1)).toFixed(
        2
      ); /** Principal + daily reward (10000 + 50 = 10050) */
      todayReward = totalAmount - principal; /** today's rewards */
      dailyRewardsArray.push(todayReward);
      /**
       * rebuy= Math.floor(todayReward / 50) * 50
       * Math.floor(5 / 50) * 50  => return 0
       * Math.floor(50 / 50) * 50  => return 50
       * Math.floor(64.76 / 50) * 50  => return 50
       * Math.floor(100.76 / 50) * 50  => return 100
       */

      rebuy =
        Math.floor(todayReward / 50) *
        50; /** Today's rebuy amount if more than 50 */
      dailyRewardsRunningBalance =
        todayReward +
        previousRemainingRewards; /** today's rewards + previous day left over rewards */
      remainingRewardsAfterRebuy += todayReward - rebuy;

      /** Check if remaining Rewards After Rebuy is greater then 50  */
      let remaining_reward_After_Rebuy = 0;
      remaining_reward_After_Rebuy =
        Math.floor(remainingRewardsAfterRebuy / 50) * 50;
      if (remaining_reward_After_Rebuy >= 50) {
        rebuy += remaining_reward_After_Rebuy;
        remainingRewardsAfterRebuy -= remaining_reward_After_Rebuy;
      }
      previousRemainingRewards = remainingRewardsAfterRebuy;

      let dt = new Date(startDate);
      dt.setDate(new Date(startDate).getDate() + i);

      // // Calculate Membership Rewards Running Balance
      // // Initial Principal = 10000 * 3 = 300000
      // // 30000 -  50      (total rewards until now)   =  29950.00 + (50 * 3)    (only take multiple of 50)  = 29950.00 + 150 = 30100.00
      // // 30000 -  100.25  (total rewards until now)   =  29899.75 + (100 * 3)   (only take multiple of 50)  = 29899.75 + 300 = 30199.75
      // // 30000 -  150.75  (total rewards until now)   =  29849.25 + (150 * 3)   (only take multiple of 50)  = 29849.25 + 450 = 29399.25
      // // 30000 -  201.50  (total rewards until now)   =  29798.50 + (200 * 3)   (only take multiple of 50)  = 29798.50 + 600 = 30398.50

      let totalRewards = dailyRewardsArray.reduce((total, curVal) => {
        return total + curVal;
      });

      let fiftyMultiplyRewards = 0;
      fiftyMultiplyRewards = Math.floor(totalRewards / 50) * 50;

      /**
       * a = principalThreeXRewards - totalRewards
       * lets assume 10000 is initial membership which means 30000 is 3X of that initial membership.
       * lets calculate for 3 days rewards (0.5%), which is 50 + 50.25 + 50.50 = 150.75
       * Now, a= 30000 - 150.75 = 29849.25
       */
      let totalPendingRewardsValue =
        principalThreeXRewards -
        totalRewards; /** Initial membership 3X - total rewards so far   */

      //let b = totalPendingRewardsValue + fiftyMultiplyRewards * 3;
      totalPendingRewards = totalPendingRewardsValue + fiftyMultiplyRewards * 3;

      tblData.push({
        id: i,
        day: i,
        date: getFormattedDate(dt),
        amount: toCommas(principal.toFixed(2)),
        dailyRewards: toCommas(todayReward.toFixed(2)),
        remainingDailyRewards: toCommas(dailyRewardsRunningBalance.toFixed(2)),
        rebuyAmount: toCommas(rebuy.toFixed(2)),
        totalPendingRewards: toCommas(totalPendingRewards.toFixed(2)),
      });
    }
  }
  return {
    data() {
      return tblData;
    },
  };
};

/** ################### Calculation without Rebuy option ################### */

export const tableDataFactoryWithoutRebuy = (principalAmt, startDate) => {
  const tblData = [];

  if (typeof principalAmt !== "undefined" || typeof startDate !== "undefined") {
    let principal = parseInt(principalAmt.replace(/,/g, "")); //10000; //p
    const dailyInterestRate = 0.5 / 100; //r 0.005
    //const dailyInterestRate = 0.666666667 / 100; //######## 4X Calculation
    const numberOfDaysMoneyInvested = 601; //t

    let totalAmount = 0;
    let todayReward = 0;
    let dailyRewardsArray = [];
    let principalThreeXRewards = principal * 3; //######## 4X Calculation

    for (let i = 1; i < numberOfDaysMoneyInvested; i++) {
      totalAmount = (principal * Math.pow(1 + dailyInterestRate, 1)).toFixed(2);
      todayReward = totalAmount - principal;
      dailyRewardsArray.push(todayReward);

      let dt = new Date(startDate);
      dt.setDate(new Date(startDate).getDate() + i);

      let totalRewards = dailyRewardsArray.reduce((total, curVal) => {
        return total + curVal;
      });

      let totalPendingRewardsValue = principalThreeXRewards - totalRewards;

      tblData.push({
        id: i,
        day: i,
        date: getFormattedDate(dt),
        amount: toCommas(principal.toFixed(2)),
        dailyRewards: toCommas(todayReward.toFixed(2)),
        remainingDailyRewards: toCommas(totalRewards.toFixed(2)),
        rebuyAmount: toCommas(0.0),
        totalPendingRewards: toCommas(totalPendingRewardsValue.toFixed(2)),
      });
    }
  }
  return {
    data() {
      return tblData;
    },
  };
};

/**
 * Default (Rebuy)
 *
 *
 * if Rebuy is unchecked
 *          200 and 245 days options should be disabled.
 *          Calculation without rebuy regardless
 *
 *
 * if Rebuy is checked
 *          Then only 200 and 245 days option is enabled
 *
 */
