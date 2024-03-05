import { useEffect, useState } from "react";
import { fetcher } from "@/services/axiosInstance";

const useAPIData = (dataSource: any, watchValue: any) => {
    const [data, setData] = useState()

    const fetchData = async () => {
        if (dataSource.type === 'API') {
            const result = await fetcher(dataSource.url)
            setData(result.data)
        }
         else if (dataSource && dataSource.items) {
            if (dataSource.filterCondition) {
                const {filterValue} = dataSource.filterCondition;
                setData(()=> dataSource.items.filter ((data: any) => data[filterValue] === watchValue))
            } else {
                setData(dataSource.items);
            }
        }
    };

    useEffect(()=> {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataSource, watchValue])

    return data;   
}

export default useAPIData