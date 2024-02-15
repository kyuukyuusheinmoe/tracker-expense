import { useEffect, useState } from "react";
import axios from "axios";

const useAPIData = (dataSource: any, watchValue: any) => {
    const [data, setData] = useState()

    useEffect(()=> {
        const fetchData = async () => {
            try {
                if (dataSource && dataSource.type === "API" && dataSource.url) {
                    const apiData = await axios.get(dataSource.url);
                    if (apiData.status === 200) {
                        setData(apiData.data.data);
                    }
                } else if (dataSource && dataSource.items) {
                    if (dataSource.filterCondition) {
                        const {filterValue} = dataSource.filterCondition;
                        setData(()=> dataSource.items.filter (data => data[filterValue] === watchValue))
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