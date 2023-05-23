import React, { useEffect, useState } from 'react'
import style from './style/style.module.css'

type Props = {
    date?: string,
    onChange?: (date: string) => any
}

const DateInput = ({ onChange = () => { }, date }: Props) => {

    const [_date, setDate] = useState(date);

    useEffect(() => {
        if (date !== _date)
            setDate(date)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date])

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            date: { value: string };
        };

        onChange(target.date.value)
    }

    const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as typeof e.target & { value: string };
        setDate(target.value)
    }

    return (
        <div className={style.date}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label>Earth date:</label>
                <span className={style.inputAndSearch}>
                    <input
                        className={style.input}
                        name="date"
                        placeholder="YYYY-MM-DD"
                        value={_date}
                        onChange={handleChange}
                    />
                    <button className={style.search}>Search</button>
                </span>


            </form>
        </div>
    )
}

export default DateInput