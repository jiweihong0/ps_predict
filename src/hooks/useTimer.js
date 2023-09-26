import { useState, useEffect } from "react";

export default function useTimer() {
    const [countdown, setCountdown] = useState(10); // 初始倒计时时间
    const [isCountingDown, setIsCountingDown] = useState(false); // 倒计时状态
    useEffect(() => {
        if (isCountingDown && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isCountingDown, countdown]);
    return { countdown, setCountdown, isCountingDown, setIsCountingDown };

}
