import { Link } from 'react-router-dom';
import React from 'react';

import Section from '../../Section';
import earth from '../../../assets/earth.png';

import style from './style.module.css';

const TextWithImage = () => {
    return (
        <Section>
            <div className={style.container}>
                <div className={style.col50}>
                    <h1 className={style.heading}>
                        Reach the <br />
                        Heart of your <br />
                        Target Audience
                    </h1>

                    <p className={style.text}>Start a free 30-Minute Strategy chat</p>

                    <Link className={style.button} to={"#"}>
                        Start Now
                    </Link>

                </div>
                <div className={style.col50}>
                    <div className={style.imageContainer}>
                        <div className={style.sizer}></div>
                        <img src={earth} />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default TextWithImage;