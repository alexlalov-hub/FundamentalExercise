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

                <div id='questions' className='flex place-content-center rounded-md mt-16 w-3/4 m-auto'>
                    <div className='questions-text border border-purple border-solid rounded-lg w-full'>
                        <p className='ml-8 mt-8 questions-text-big'>What are the services provided to customers?</p>

                        <div className='h-1 w-2/3 bg-grey'></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Questions