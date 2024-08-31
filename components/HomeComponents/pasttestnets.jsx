
import RecommendationCard from "./pasttestnetscard"
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";


const pasttestnets = () => {
    const { isLoading, error, data } = useQuery('recommendations', () =>
        axios.get('api/recommendations')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))


    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Ended</div>
            <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">

                {isLoading ?
                    [1, 2, 3, 4].map(() => (
                        <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                    ))
                    :
                    data?.map((data, key) => (
                        <pasttestnetscard key={key} data={data} />
                    ))
                }

            </div>
        </>
    )
}

export default pasttestnets
