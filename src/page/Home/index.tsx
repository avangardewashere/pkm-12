import { memo } from "react";
import style from "./index.module.scss"
import clsx from "clsx"
import { postDitto } from "../../api";
import {useRequest} from "ahooks"

const Home  = memo(() => {

    const {data} = useRequest(postDitto)
   console.log(data)
    return(
        <div className={clsx(style.container)}>
           
            {JSON.stringify(data)}
        </div>
    )
})

export default Home