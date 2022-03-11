import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MuiAlert from "@material-ui/lab/Alert";
import { green } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import ShutterSpeedIcon from "@material-ui/icons/ShutterSpeed";

import BaseTable, { Column } from "react-base-table";
import "react-base-table/styles.css";
import { AutoSizer } from "react-virtualized";

import { COLUMNS } from "./Constants";
import {
  tableDataFactoryWithRebuy,
  tableDataFactoryWithoutRebuy,
} from "./tableDataFactory";

import "./styles.css";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#d1c4e9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #b39ddb",
  },
}))(Tooltip);

// table columns
const columns = COLUMNS;
function Alert(props) {
  return <MuiAlert elevation={1} {...props} />;
}

const DayCellRenderer = ({ values, idx }) => {
  if (idx === 200) {
    return <span key={idx} className="cellText">{`${values}`}</span>;
  } else {
    return <span key={idx} className="cellText">{`${values}`}</span>;
  }
};

const DateCellRenderer = ({ values, idx }) => {
  return <span key={idx} className="cellText">{`${values}`}</span>;
};

const AmountCellRenderer = ({ values, idx }) => {
  return <span key={idx} className="cellText">{`${values} HU`}</span>;
};

const DailyRewardsCellRenderer = ({ values, idx }) => {
  return <span key={idx} className="cellText">{`${values} HU`}</span>;
};

const DailyRunningRewardsCellRenderer = ({ values, idx }) => {
  return <span key={idx} className="cellText">{`${values} HU`}</span>;
};

const RebuyAmountCellRenderer = ({ values, idx }) => {
  return (
    <span key={idx} className="rebuyText" style={{}}>
      {`${values} HU`}
      {values.replace(/,/g, "") >= 50 ? (
        // <Tooltip title="Time to Rebuy or Withdraw" arrow>
        //   <UpdateIcon style={{ color: green[500], fontSize: 14 }} />
        // </Tooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Time to Rebuy</Typography>
              <b>Note:</b>
              <em>{"Rebuys are not compounding."}</em>
            </React.Fragment>
          }
        >
          <ShutterSpeedIcon style={{ color: green[500], fontSize: 16 }} />
        </HtmlTooltip>
      ) : (
        ""
      )}
    </span>
  );
};

const TotalPendingRewardsCellRenderer = ({ values, idx }) => {
  return <span key={idx} className="cellText">{`${values} HU`}</span>;
};

const customCellRenderer = ({
  isScrolling,
  cells,
  columns,
  column,
  rowData,
  rowIndex,
  depth,
}) => {
  if (column.key === "day") {
    return <DayCellRenderer key={rowIndex} values={rowData.day} rowIndex />;
  }

  if (column.key === "date") {
    return <DateCellRenderer key={rowIndex} values={rowData.date} rowIndex />;
  }

  if (column.key === "amount") {
    return (
      <AmountCellRenderer key={rowIndex} values={rowData.amount} rowIndex />
    );
  }

  if (column.key === "dailyRewards") {
    return (
      <DailyRewardsCellRenderer
        key={rowIndex}
        values={rowData.dailyRewards}
        rowIndex
      />
    );
  }

  if (column.key === "remainingDailyRewards") {
    return (
      <DailyRunningRewardsCellRenderer
        key={rowIndex}
        values={rowData.remainingDailyRewards}
        rowIndex
      />
    );
  }
  if (column.key === "rebuyAmount") {
    return (
      <RebuyAmountCellRenderer
        key={rowIndex}
        values={rowData.rebuyAmount}
        rowIndex
      />
    );
  }

  if (column.key === "totalPendingRewards") {
    return (
      <TotalPendingRewardsCellRenderer
        key={rowIndex}
        values={rowData.totalPendingRewards}
        rowIndex
      />
    );
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

const SifTablePage = (props) => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    let items = [];
    if (props.values.rebuy) {
      items = tableDataFactoryWithRebuy(
        props.values.membershipAmount,
        props.values.startDate
      ).data();
    } else {
      items = tableDataFactoryWithoutRebuy(
        props.values.membershipAmount,
        props.values.startDate
      ).data();
    }
    props.isValid ? setData(items) : setData([]);
    return () => {
      setData([]);
    };
  }, [
    props.isValid,
    props.values.membershipAmount,
    props.values.startDate,
    props.values.rebuy,
  ]);

  return (
    <div style={{ width: "95vw ", height: "80vh", marginLeft: "20px" }}>
      <AutoSizer>
        {({ width, height }) => (
          <BaseTable
            data={data}
            width={width}
            height={height}
            emptyRenderer={
              <Alert className={classes.root} severity="error">
                <Typography variant="h6" component="h6">
                  Please provide valid value for calculation.
                </Typography>
              </Alert>
            }
          >
            {/* Day */}
            <Column
              {...columns[0]}
              width={100}
              flexGrow={1}
              flexShrink={0}
              cellRenderer={customCellRenderer}
            />
            {/* Date */}
            <Column
              {...columns[1]}
              width={150}
              flexGrow={1}
              flexShrink={0}
              cellRenderer={customCellRenderer}
            />
            {/* Amount */}
            <Column
              {...columns[2]}
              width={150}
              flexGrow={1}
              flexShrink={0}
              cellRenderer={customCellRenderer}
            />
            {/* dailyRewards */}
            <Column
              {...columns[3]}
              width={150}
              flexGrow={1}
              flexShrink={0}
              cellRenderer={customCellRenderer}
            />
            {/* remainingDailyRewards */}
            <Column
              {...columns[4]}
              width={150}
              flexGrow={1}
              flexShrink={0}
              cellRenderer={customCellRenderer}
            />
            {/* rebuyAmount */}
            {props.values.rebuy && (
              <Column
                {...columns[5]}
                width={150}
                flexGrow={1}
                flexShrink={0}
                cellRenderer={customCellRenderer}
              />
            )}
            {/* totalPendingRewards */}
            <Column
              {...columns[6]}
              width={150}
              flexGrow={1}
              flexShrink={0}
              cellRenderer={customCellRenderer}
            />
          </BaseTable>
        )}
      </AutoSizer>
    </div>
  );
};

export default SifTablePage;
