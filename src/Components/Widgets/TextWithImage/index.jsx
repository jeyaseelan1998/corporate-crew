import React from 'react';

import { images } from "../../../helper/images";
import Button from '../../Button';
import Spacer from '../../Spacer';
import Section from '../../Section';

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
                    <Spacer size={25} />
                    <p className={style.text}>Start a free 30-Minute Strategy chat</p>
                    <Spacer size={30} />
                    <Button text="Start Now" />
                </div>
                <div className={style.col50}>
                    <div className={style.imageContainer}>
                        <div className={style.sizer}></div>
                        <img src={images.Earth} />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default TextWithImage;