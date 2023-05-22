import _ from 'lodash';
import React from 'react'
import style from './style/style.module.css';

type Props = {
    prop?: string,
    value?: string
}

// const Item = ({ prop, value }: { prop?: string, value?: string }) => {
const Item = ({ prop, value }: Props) => {
    if (_.isNil(prop) || _.isNil(value) === undefined) return null
    return (
        <li className={style.item}>
            <span>{prop}</span> <span>{value}</span>
        </li>
    )
}

export default Item