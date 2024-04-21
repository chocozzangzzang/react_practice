import React, { useEffect, useState} from 'react'
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate() {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 랜더링 후에 수행하는 hook, mount된 직후 호출, 랜더링 될 때 마다 업데이트 //
    useEffect(() => {
        console.log("====================");
        console.log("useEffect() is called.");
        console.log(`isFull : ${isFull}`);
    });

    // 랜더링 후에 수행하는 hook, mount된 직후 호출, count값이 바뀔 때 마다 업데이트 //
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current State is ${count}`);
    }, [count]);
  
    return (
        <div style={{padding : 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>
                퇴장
            </button>

            {isFull && <p style={{color : "red"}}>정원이 가득찼습니다.</p>}
        </div>
  );
}

export default Accomodate;