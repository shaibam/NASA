import React, { useMemo } from 'react'
import style from './style/style.module.css'
import _ from 'lodash';
import clsx from 'clsx';

type Props = {
    index?: number,
    pages?: number
    onSetPage?: (v: number) => any
}

function PageNav({ index, pages, onSetPage }: Props) {
    const indexes = useMemo(() => {
        const indexes: Array<number> = new Array(pages);
        return _.map(indexes, (v, i) => i)
    }, [pages])

    if (!pages) return null;


    const handlePrev = () => {
        if (onSetPage && !_.isNil(index)) {
            onSetPage(Math.max(index - 1, 0));
        }
    }

    const handleNext = () => {
        if (onSetPage && !_.isNil(index)) {
            onSetPage(Math.min(index + 1, pages - 1));
        }
    }

    return (
        <ul className={style.pages}>
            <li><button onClick={handlePrev}>{'<'}</button></li>
            {_.map(indexes, (_index, i) => {
                return <ItemWrapper
                    key={i}
                    index={i}
                    selected={index === i}
                    onSelect={onSetPage}
                />
            })}
            <li><button onClick={handleNext}>{'>'}</button></li>
        </ul >
    )
}

type ItemWrapperProps = {
    index?: number,
    selected?: boolean,
    onSelect?: (v: number) => any
}

const ItemWrapper = ({ index = 0, selected = false, onSelect }: ItemWrapperProps) => {
    const handleSelect = () => {
        if (onSelect)
            onSelect(index)
    }
    return <li className={clsx(style.page, selected ? style.selected : undefined)}>
        <button onClick={handleSelect}>{index + 1}</button>
    </li>
}

export default PageNav