/**
 * Contains all the Constants required for table
 */
export const ROW_SIZE = 60;

export const COLUMNS = [
  { key: "day", title: "Day", dataKey: "day", width: 100 },
  { key: "date", title: "Date", dataKey: "date", width: 200 },
  { key: "amount", title: "Amount", dataKey: "amount", width: 200 },
  {
    key: "dailyRewards",
    title: "Daily Rewards",
    dataKey: "dailyRewards",
    width: 200,
  },
  {
    key: "remainingDailyRewards",
    title: "Rewards Running Balance",
    dataKey: "remainingDailyRewards",
    width: 200,
  },
  {
    key: "rebuyAmount",
    title: "Rebuy Amount",
    dataKey: "rebuyAmount",
    width: 200,
    dataColor: "#8e24aa",
    format: "string",
  },
  {
    key: "totalPendingRewards",
    title: "Total Pending Rewards",
    dataKey: "totalPendingRewards",
    width: 200,
  },
];
