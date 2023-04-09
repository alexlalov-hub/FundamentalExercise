import React, { Component } from 'react'
import hello from '../../assets/hello.svg'
import purpleHat from '../../assets/purple-party-hat.svg'
import greenUtensils from '../../assets/green-utensils.svg'
import controller from '../../assets/controller.svg'
import purpleCake from '../../assets/cake.svg'
import page from '../../assets/page.svg'

import './Program.css'

export class Program extends Component {
    render() {
        return (
            <section id='program__section'>
                <div id='text' className='pt-24 text-center'>
                    <p className='big-text text-center m-6'>Нашата програма</p>
                    <p className='normal-text text-center m-0'>We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies.</p>
                </div>

                <div id='program__table' className='flex flex-col gap-32'>
                    <div className='flex flex-row place-content-center gap-40'>
                        <div className='flex flex-col place-content-center card'>
                            <img src={hello} alt="" width={'110px'} height={'100px'} className='my-0 mx-auto' />
                            <p className='big-text-table text-center'>Посрещане на гости, инструктаж преди игра</p>
                            <span className='small-text-table'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                        </div>
                        <div className='flex flex-col card'>
                            <img src={purpleHat} alt="" width={'110px'} height={'100px'} className='my-0 mx-auto' />
                            <p className='big-text-table text-center'>Игри и забавления в escape rooms</p>
                            <span className='small-text-table'>It is a long established fact that a reader will be distracted by the readable content of a page when looking.</span>
                        </div>
                        <div className='flex flex-col card'>
                            <img src={greenUtensils} alt="" width={'110px'} height={'100px'} className='my-0 mx-auto' />
                            <p className='big-text-table text-center'>Почерпка, игри и дискотека в залата за парти here</p>
                            <span className='small-text-table'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                        </div>
                    </div>

                    <div className='flex flex-row place-content-center gap-40'>
                        <div className='flex flex-col card'>
                            <img src={controller} alt="" width={'110px'} height={'100px'} className='my-0 mx-auto' />
                            <p className='big-text-table text-center'>Анимация с професионални аниматори</p>
                            <span className='small-text-table'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                        </div>
                        <div className='flex flex-col card'>
                            <img src={purpleCake} alt="" width={'110px'} height={'100px'} className='my-0 mx-auto' />
                            <p className='big-text-table text-center'>Торта и специални поздравления</p>
                            <span className='small-text-table'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                        </div>
                        <div className='flex flex-col card'>
                            <img src={page} alt="" width={'110px'} height={'100px'} className='my-0 mx-auto' />
                            <p className='big-text-table text-center'>Снимки и персонална страница</p>
                            <span className='small-text-table'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Program