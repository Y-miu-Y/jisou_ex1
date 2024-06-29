import { InputForm } from "./components/inputForm";
import { DataTable } from "./components/DataTable";
import { useState } from "react";
import { AddRecord } from "./components/AddRecord";

export const StudyRecord = () =>{
    const [title, setTitle] = useState("");
    const [time, setTime] = useState(0);
    const [records, setRecords] = useState([]);

    const onChangeTitle = (event) => setTitle(event.target.value);
    const onChangeTime = (event) => setTime(event.target.value);

    const onClickAddRecord = () => {
        if (title === "" || time === "") return;
        window.alert("addRecord" + title + ":" + "time");
        const newRecords = [...records, {title, time}];
        setTitle("");
        setTime(0);
    }

    return(
        <>
            <InputForm
                title={title}
                onChangeTitle={onChangeTitle}
                time={time}
                onChangeTime={onChangeTime}/>
            {records.map((record) => 
                <DataTable title={record.title} time={record.time} />
            )}
            <AddRecord onClick={onClickAddRecord}/>
        </>
    );
};