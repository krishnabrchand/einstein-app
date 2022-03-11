import React, {useEffect, useState} from "react";
//import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import {Button} from "@material-ui/core";
import {tableDataFactoryWithoutRebuy, tableDataFactoryWithRebuy} from "./tableDataFactory";
//export const ExportCsv = ({csvData,fileName})=>{
export const ExportCsv = (props)=>{   
    //const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
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

    const exportToCSV = (csvData) => {
        
        const data=csvData.map(row=>{
            delete row.id;
            return row;
        })
        
        let fileName = `HyperFund_${parseInt(props.values.membershipAmount.replace(/,/g, ""))}_NoRebuy`
        if (props.values.rebuy) {
            fileName=`HyperFund_${parseInt(props.values.membershipAmount.replace(/,/g, ""))}_Rebuy`;
        }  
        
        const workSheet=XLSX.utils.json_to_sheet(data);
        const workBook=XLSX.utils.book_new();
        
        XLSX.utils.book_append_sheet(workBook,workSheet,fileName);
        //Buffer
        XLSX.write(workBook,{bookType:"xlsx", type:"buffer"});
        //binary string
        XLSX.write(workBook,{bookType:"xlsx", type:"binary"});
        //download
        XLSX.writeFile(workBook,fileName+fileExtension);
        
        
        
        // const ws = XLSX.utils.json_to_sheet(csvData);
        // const wb = { Sheets: { 'sheet1': ws }, SheetNames: ['sheet1']};
        // const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        // const data = new Blob([excelBuffer], {type: fileType});
        // FileSaver.saveAs(data, fileName + fileExtension);
    }
    return (
        <Button  variant="contained" onClick={(e) => exportToCSV(data)}>Export</Button>
        // <Button variant="contained" onClick={() => { alert('clicked') }}>Export</Button>
    )
    
};
