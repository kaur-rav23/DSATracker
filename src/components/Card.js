import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ name, no, qno }) {
    let op = JSON.parse(localStorage.getItem('Checked' + `${no}`)) || [];
    let kk = 0;

    if (op != null) {
        op = [...new Set(op)];

        for (let i = 0; i < op.length; i++) {
            if ((op[i] != ',' && op[i] != '/' && op[i] != '"' && op[i] != '[' && op[i] != ']' && (op[i] < 'a' || op[i] > 'z') && op[i] != "\\" && op[i] != '+') || op.length == 3) {
                kk++;
            }
        }
    }

    let ans = op != null ? kk : 0;
    const progressPercentage = Math.round((ans * 100) / qno);

    const fillerStyles = {
        width: `${progressPercentage}%`,
    };

    return (
        <Link to={name} className="card">
            <div className="card-div">
                <h3 style={{color:"#7f105e", textDecoration:"none",fontWeight:"100px"}}>{name}</h3>
                <h5 style={{color:"black"}}>Total Questions: {qno}</h5>
                {ans === 0 ? (
                    <h6>Not Yet Started</h6>
                ) : (
                    <div>
                        <div className="progress-info">
                            <h6>Started</h6>
                            <img src="https://th.bing.com/th/id/R.15e3df2a05ac767df4359bf37707b781?rik=YoELJf68lvMxWQ&riu=http%3a%2f%2fs3.amazonaws.com%2fpix.iemoji.com%2fimages%2femoji%2fapple%2fios-11%2f256%2fman-technologist-light-skin-tone.png&ehk=uinI8ak5dKPQXLDnNbEcTr%2bSuymPLXBS%2bBPUBpPLgcI%3d&risl=&pid=ImgRaw&r=0" className="status-icon" alt="Status Icon"  style={{marginLeft:"0.5rem",marginTop:"0.5rem"}} />
                            <h6 className="progress-text" style={{marginLeft:"1.5rem"}}>{progressPercentage}%</h6>
                        </div>
                        <div className="progress-bar-container" style={{height:"10px"}}>
                            <div className="filler" style={fillerStyles}></div>
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
}
