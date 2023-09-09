import { useState, useEffect, useRef } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const CustomProgressBar = (completedValue: number) => {
    const [progress, setProgress] = useState<number>(0);
    const progressBarRef = useRef<HTMLDivElement | null>(null);

    // const reuseableProgressBar = (completedValue: number) => {
    // Simulate a loading effect with a timer
    useEffect(() => {
        const progressBarElement = progressBarRef.current;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const timer = setInterval(() => {
                    if (progress < completedValue) {
                        setProgress((prevProgress) =>
                            prevProgress + 5 <= completedValue ? prevProgress + 5 : completedValue
                        );
                    } else {
                        clearInterval(timer);
                    }
                }, 50);

                return () => clearInterval(timer);
            }
        })
        if (progressBarElement) {
            observer.observe(progressBarElement);
        }

        return () => {
            if (progressBarElement) {
                observer.unobserve(progressBarElement);
            }
        };
    }, [completedValue]);
    return (
        <div className="progress-bar-container" ref={progressBarRef}>
            <ProgressBar
                completed={progress}
                bgColor={'#333'}
                height='5px'
                isLabelVisible={false}
            />
        </div>
    )
}

export default CustomProgressBar;