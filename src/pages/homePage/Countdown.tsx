import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num: number): string => {
        return num < 10 ? `0${num}` : num.toString();
    };

    const timeUnits = [
        { label: 'DAYS', value: timeLeft.days },
        { label: 'HOURS', value: timeLeft.hours },
        { label: 'MINUTES', value: timeLeft.minutes },
        { label: 'SECONDS', value: timeLeft.seconds }
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full">
            {timeUnits.map((unit, index) => (
                <div 
                    key={index} 
                    className="flex flex-col items-center justify-center bg-[#00000033] backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 "
                >
                    <div className="text-[#f97316] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-none">
                        {formatNumber(unit.value)}
                    </div>
                    <div className="text-white text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-semibold mt-1 sm:mt-2 tracking-wider text-center">
                        {unit.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Countdown;