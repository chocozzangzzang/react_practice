import React, {useState} from 'react'
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다!!</p>;
    }
    return <p>물이 끓지 않습니다!!</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return ((celsius * 9) /5 + 32);
}

// 섭씨 <-> 화씨 간의 변경 //
function tryConvert(temprature, convert) {
    const input = parseFloat(temprature);

    if(Number.isNaN(input)) return "";
    
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    
    return rounded.toString();
}


function Calculator(props){
    
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    // 마지막으로 입력된 값 (섭씨 or 화씨)에 따라 온도를 변환
    // 섭씨 : 섭씨 -> 화씨로 변경하도록 scale을 c로 설정 == fahrenheit 값에 celsius에 의해 계산된 값을 할당
    // 화씨 : 화씨 -> 섭씨로 변경하도록 scale을 f로 설정 == celsius 값에 fahrenheit에 의해 계산된 값을
    const handleCelsiusChange = (temperature) => {
        // console.log("celcius");
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        // console.log("fahrentheit");
        setTemperature(temperature);
        setScale("f");
    };

    // celsius는 만약 scale이 c라면 temperature, f라면 화씨 온도에서 변환하여 할당
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    // fahrenheit는 만약 scale이 f라면 temperature, c라면 섭씨 온도에서 변환하여 할당
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput 
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
        </div>
    );
}

export default Calculator;