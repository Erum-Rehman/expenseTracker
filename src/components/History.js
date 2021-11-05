import Button from '@restart/ui/esm/Button';
import React from 'react';
// import { NavItem } from 'react-bootstrap';
import Trash from './Trash.png';



const History = (props) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <>
            <div class="history">
                <h2 >History </h2>
            </div>
            {props.arr.map((item, index) => (
                <div className={`main-history ${item.type === 'income' ? 'data-income' : 'data-expense' }`} key={index}>
                    <div className="all">
                        <div className={`data`}>{item.detail}</div>
                        <p className="date">{date}</p>
                        <div align="right">
                        <Button className="delete"  onClick={() => props.removeData(index)}><img src={Trash} alt="Logo" /></Button>
                        <div className="money" >{item.amount} </div>
                        
                       </div>
                        
                    </div>
                </div>
            )
            )}



        </>
    );
}
export default History

