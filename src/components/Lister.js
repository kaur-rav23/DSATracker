import React, { useEffect } from 'react';
import Card from './Card';
import './Lister.css';

export default function Lister({
    Checked1,
    Checked2,
    Checked3,
    Checked4,
    Checked5,
    Checked6,
    Checked7,
    Checked8,
    Checked9,
    Checked10,
    Checked11,
    Checked12,
    Checked13,
    count,
    setCount
}) {

    useEffect(() => {
        let counter = 0;
        for (let no = 0; no <= 12; no++) {
            let op = JSON.parse(localStorage.getItem('Checked' + `${no}`));
            if (op != null) {
                op = [...new Set(op)];
                for (let i = 0; i < op.length; i++) {
                    if ((op[i] !== ',' && op[i] !== '/' && op[i] !== '"' && op[i] !== '[' && op[i] !== ']' && (op[i] < 'a' || op[i] > 'z') && op[i] !== "\\" && op[i] !== '+') || op.length === 3) {
                        counter++;
                    }
                }
            }
        }
        setCount(counter);
    }, [setCount]);

    const progressPercentage = Math.round((count * 100) / 100);

    const fillerStyles = {
        height: '100%',
        width: `${progressPercentage}%`,
        backgroundColor: "grey",
        borderRadius: 'inherit',
        textAlign: 'right',
    };

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    };

    return (
        <div className="lister-container">
            <h1>100 DSA Questions</h1>
            <h3>Crack Product Based Companies Today</h3>

            <div className="progress-bar-container" style={{height:"20px"}}>
                <div className="filler" style={fillerStyles}>
                    <span className="label" style={labelStyles}>{`${progressPercentage}%`}</span>
                </div>
            </div>
            <div style={{height:"5vh"}}></div>
            <div className="cards-container">
                <Card qno={23} no={"12"} ans={Checked12} Checked={Checked12} name="Array and String" />
                <Card qno={5} no={"1"} ans={Checked1} Checked={Checked1} name="Greedy" />
                <Card qno={13} no={"2"} ans={Checked2} Checked={Checked2} name="Dp" />
                <Card qno={7} no={"3"} ans={Checked3} Checked={Checked3} name="Binary search" />
                <Card qno={5} no={"4"} ans={Checked4} Checked={Checked4} name="Heaps" />
                <Card qno={6} no={"5"} ans={Checked5} Checked={Checked5} name="Recursion" />
                <Card qno={8} no={"6"} ans={Checked6} Checked={Checked6} name="Linked List" />
                <Card qno={8} no={"7"} ans={Checked7} Checked={Checked7} name="Binary Tree" />
                <Card qno={6} no={"8"} ans={Checked8} Checked={Checked8} name="Binary Search Tree" />
                <Card qno={7} no={"9"} ans={Checked9} Checked={Checked9} name="Stack and Queue" />
                <Card qno={6} no={"10"} ans={Checked10} Checked={Checked10} name="Backtracking" />
                <Card qno={6} no={"11"} ans={Checked11} Checked={Checked11} name="Graphs" />
            </div>
        </div>
    );
}
