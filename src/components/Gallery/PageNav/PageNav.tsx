import React, { useMemo } from 'react'
import style from './style/style.module.css'
import _ from 'lodash';

type Props = {
    index?: number,
    pages?: number
}

function PageNav({ index, pages }: Props) {
    const indexes = useMemo(() => {
        const indexes: Array<number> = new Array(pages);
        return _.map(indexes, (v, i) => i)
    }, [pages])

    if (!pages) return null;

    console.log(indexes)
    return (
        <ul className={style.pages}>
            <li>Next</li>

            {_.map(indexes, (index, i) => {
                return <li key={index}><button>{i}</button></li>
            })}

            <li>Prev</li>
        </ul>
    )
}

export default PageNav