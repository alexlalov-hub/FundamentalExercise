import React, { PureComponent } from 'react'
import logo from '../../assets/image.svg'
import './Hero.css'

export class Hero extends PureComponent {
    render() {
        return (
            <section id='main__section' className='w-full'>
                <img src={logo} alt="hero-image" width={"1102.35px"} height={"884.17px"} />

                <section id='text__section' className='flex flex-col gap-8'>
                    <p id='extra-bold' className='ml-60 mt-60 inline-block mb-0'>Подари един Незабравим  рожден ден</p>
                    <p id='normal-text' className='inline-block ml-60'>Искате да отпразнувате незабравим рожден ден на детето Ви? Искате да му подарите незабравими емоции?Изберете един различен начин детето Ви да се забавлява с приятелите си.</p>
                    <button className='border rounded-3xl px-10 ml-60 reservation-button'>
                        Резервирай сега!
                    </button>
                </section>

                <section id='numbers__section' className='mt-20 ml-60 flex flex-row gap-20'>
                    <div className='flex flex-col'>
                        <span className='orange-text'>212+</span>
                        <span className='numbers-text'>рождени дни</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='purple-text'>100+</span>
                        <span className='numbers-text'>доволни рожденици</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='green-text'>12+</span>
                        <span className='numbers-text'>локации</span>
                    </div>
                </section>

                <div>
                    <div className='yellow-circle'></div>
                    <div className='blue-rectangle'></div>
                    <div className='yellow-triangle'></div>
                    <div className='orange-triangle'></div>
                    <div className='purple-circle'></div>
                    <div className='purple-circle-right'></div>
                    <div className='small-yellow-circle'></div>
                    <div className='green-circle'></div>
                </div>
            </section>
        )
    }
}

export default Hero