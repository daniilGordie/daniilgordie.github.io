import React from 'react'
import s from './GreatingPage.module.css'
const GreatingPage = (props) => {
    return (
        <>
            <div className={s.greating_wrapper}>
                <header>
                    <h1>Vin-Decoder App</h1>
                </header>
                <article>
                    <p>
                        This application will help you to decipher the{' '}
                        <b>VIN number</b> of your car. Vehicles whose license
                        plates can be decoded belong to the US database. If you
                        click on the <b>Form</b> tab, you will see field where
                        you can enter your VIN. After decrypting the VIN code,
                        you will be presented with a list of variables that are
                        encrypted in it. In the <b>Variables</b> tab, by
                        clicking on the <b>Get Variables</b> button, you can see
                        the full list of variables and their values.{' '}
                    </p>
                </article>
            </div>
        </>
    )
}

export default GreatingPage
