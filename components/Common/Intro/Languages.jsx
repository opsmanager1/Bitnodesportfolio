import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [Uptime, setUptime] = useState(0)
    const [english, setEnglish] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (Uptime < 99) {
                setUptime(prevCount => prevCount + 1);
            }
            {/* if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }  */}
        }, 30);
 {/* middle components */}
        return () => clearInterval(timer);
    }, [Uptime, english])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Nodes performance</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={Uptime} size={75} />
                        <span className='text-xs font-bold text-Snow'>Uptime</span>
                    </div>
                     {/* <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={75} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Languages
