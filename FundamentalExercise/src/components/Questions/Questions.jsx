import React, { Component } from 'react'
import kids from '../../assets/kids.svg'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import './Questions.css'

export class Questions extends Component {
    render() {
        return (
            <section id='section__gallery'>
                <div id='text' className='pt-24 text-center'>
                    <p className='normal-text-questions'>На място</p>
                    <p className='big-text-questions mt-0'>Усетете атмосферата</p>
                    <img src={kids} alt="" />
                    <p className='normal-text-questions mt-24'>Често задавани въпроси</p>
                    <p className='big-text-questions m-0'>Остана нещо неясно?</p>
                </div>

                <div id='questions' className='flex flex-col place-content-center rounded-md mt-16 w-3/4 m-auto'>
                    <div className='questions-text border border-purple border-solid rounded-lg w-full flex flex-col place-content-center mb-8'>
                        <div className='flex flex-row justify-between'>
                            <p className='ml-8 mt-8 questions-text-big '>What are the services provided to customers?</p>
                            <img src={arrowUp} alt="" className='mr-8'/>
                        </div>

                        <div className='questions-border bg-grey'></div>

                        <p className='m-0 ml-8 mb-8 mt-7 questions-text-small'>Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.</p>
                    </div>

                    <div className='questions-text border border-purple border-solid rounded-lg w-full flex flex-col place-content-center mb-8'>
                        <div className='flex flex-row justify-between mb-8'>
                            <p className='ml-8 mt-8 questions-text-big mb-0'>How can I submit a proposal for cooperation?</p>
                            <img src={arrowDown} alt="" className='mr-6 mt-8'/>
                        </div>
                    </div>

                    <div className='questions-text border border-purple border-solid rounded-lg w-full flex flex-col place-content-center mb-8'>
                        <div className='flex flex-row justify-between mb-8'>
                            <p className='ml-8 mt-8 questions-text-big mb-0'>I come from a faraway place, can collaboration be done full time online through several meeting applications?</p>
                            <img src={arrowDown} alt="" className='mr-6 mt-8'/>
                        </div>
                    </div>

                    <div className='questions-text border border-purple border-solid rounded-lg w-full flex flex-col place-content-center mb-8'>
                        <div className='flex flex-row justify-between mb-8'>
                            <p className='ml-8 mt-8 questions-text-big mb-0'>How do I get the payment complete?</p>
                            <img src={arrowDown} alt="" className='mr-6 mt-8'/>
                        </div>
                    </div>

                    <div className='questions-text border border-purple border-solid rounded-lg w-full flex flex-col place-content-center mb-32'>
                        <div className='flex flex-row justify-between mb-8'>
                            <p className='ml-8 mt-8 questions-text-big mb-0'>How long can the collaboration last?</p>
                            <img src={arrowDown} alt="" className='mr-6 mt-8'/>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Questions