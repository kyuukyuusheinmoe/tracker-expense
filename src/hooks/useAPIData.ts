import { useEffect, useState } from "react";
import { fetcher } from "@/services/axiosInstance";

const useAPIData = (dataSource: any, watchValue: any) => {
    const [data, setData] = useState()

    useEffect(()=> {
        const fetchData = async () => {
            try {
                if (dataSource && dataSource.type === "API" && dataSource.url) {
                    const apiData = await fetcher(dataSource.url);
                    setData(apiData.data);
                } else if (dataSource && dataSource.items) {
                    if (dataSource.filterCondition) {
                        const {filterValue} = dataSource.filterCondition;
                        setData(()=> dataSource.items.filter ((data: any) => data[filterValue] === watchValue))
                    } else {
                        setData(dataSource.items);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dataSource, watchValue])

    return data;   
}

export default useAPIData