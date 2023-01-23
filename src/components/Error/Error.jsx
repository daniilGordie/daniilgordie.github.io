import React from 'react'
import s from './Error.module.css'

const Error = (props) => {
    return (
        <div className={s.box}>
            <div className={s.box__ghost}>
                <div className={s.symbol}></div>
                <div className={s.symbol}></div>
                <div className={s.symbol}></div>
                <div className={s.symbol}></div>
                <div className={s.symbol}></div>
                <div className={s.symbol}></div>

                <div className={s.box__ghost_container}>
                    <div className={s.box__ghost_eyes}>
                        <div className={s.box__eye_left}></div>
                        <div className={s.box__eye_right}></div>
                    </div>
                    <div className={s.box__ghost_bottom}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={s.box__ghost_shadow}></div>
            </div>

            <div className={s.box__description}>
                <div className={s.box__description_container}>
                    <div className={s.box__description_title}>Whoops!</div>
                    <div className={s.box__description_text}>
                        It seems like we couldn't find the page you were looking
                        for
                    </div>
                </div>

                <a
                    href="https://codepen.io/diogo_ml_gomes/"
                    target="_blank"
                    className={s.box__button}
                >
                    Go back
                </a>
            </div>
        </div>
    )
}

export default Error
