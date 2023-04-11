import React, { Component } from 'react'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import callendar from '../../assets/callendar.svg'
import './Reservation.css'

export class Reservation extends Component {
    render() {
        return (
            <section id='section__reservation'>
                <div id='text' className='pt-28 text-center flex flex-col items-center'>
                    <p className='reservation-big-text m-0'>Направи резервация</p>
                    <div className='flex flex-row justify-center'>
                        <img src={arrowLeft} alt="" />
                        <p className='inline-block ml-8 mr-8 reservation-small-text'>03.04.2023 — 09.04.2023</p>
                        <img src={arrowRight} alt="" />
                    </div>
                    <table className='reservation-table mt-28 border-collapse mb-14'>
                        <thead>
                            <tr>
                                <th>
                                    <div className='flex flex-row justify-center gap-2 table-head py-4'>
                                        <img src={callendar} alt="" width={"20px"} height={"18px"} className='mt-6' />
                                        <div className='flex flex-col gap-1'>
                                            <span>03.04.2023</span>
                                            <span>Понеделник</span>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex flex-row justify-center gap-1'>
                                        <img src={callendar} alt="" width={"20px"} height={"18px"} className='mt-6' />
                                        <div className='flex flex-col gap-2'>
                                            <span>04.04.2023</span>
                                            <span>Вторник</span>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex flex-row justify-center gap-2'>
                                        <img src={callendar} alt="" width={"20px"} height={"18px"} className='mt-6' />
                                        <div className='flex flex-col gap-1'>
                                            <span>05.04.2023</span>
                                            <span>Сряда</span>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex flex-row justify-center gap-2'>
                                        <img src={callendar} alt="" width={"20px"} height={"18px"} className='mt-6' />
                                        <div className='flex flex-col gap-1'>
                                            <span>06.04.2023</span>
                                            <span>Четвъртък</span>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex flex-row justify-center gap-2'>
                                        <img src={callendar} alt="" width={"20px"} height={"18px"} className='mt-6' />
                                        <div className='flex flex-col gap-1'>
                                            <span>07.04.2023</span>
                                            <span>Петък</span>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex flex-row justify-center gap-2'>
                                        <img src={callendar} alt="" width={"20px"} height={"18px"} className='mt-6' />
                                        <div className='flex flex-col gap-1'>
                                            <span>08.04.2023</span>
                                            <span>Събота</span>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex flex-row justify-center gap-2'>
                                        <img src={callendar} alt="" width={"20px"} height={"18px"} className='mt-6' />
                                        <div className='flex flex-col gap-1'>
                                            <span>09.04.2023</span>
                                            <span>Неделя</span>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-left'>
                                <td>10:00</td>
                                <td>10:00</td>
                                <td>10:00</td>
                                <td><span>10:00</span><span className='ml-3 reservation-reserved-text rounded-lg'>Запазено</span></td>
                                <td>10:00</td>
                                <td>10:00</td>
                                <td>10:00</td>
                            </tr>
                            <tr className='text-left'>
                                <td>12:00</td>
                                <td>12:00</td>
                                <td>12:00</td>
                                <td><span className='reservation-hour-text rounded-lg'>12:00</span></td>
                                <td>12:00</td>
                                <td>12:00</td>
                                <td>12:00</td>
                            </tr>
                            <tr className='text-left'>
                                <td>14:00</td>
                                <td>14:00</td>
                                <td>14:00</td>
                                <td><span className='reservation-hour-text rounded-lg'>14:00</span></td>
                                <td>14:00</td>
                                <td>14:00</td>
                                <td>14:00</td>
                            </tr>
                            <tr className='text-left'>
                                <td>16:00</td>
                                <td>16:00</td>
                                <td>16:00</td>
                                <td><span className='reservation-hour-text rounded-lg'>16:00</span></td>
                                <td>16:00</td>
                                <td>16:00</td>
                                <td>16:00</td>
                            </tr>
                            <tr className='text-left'>
                                <td>18:00</td>
                                <td>18:00</td>
                                <td>18:00</td>
                                <td><span className='reservation-hour-text rounded-lg'>18:00</span></td>
                                <td>18:00</td>
                                <td>18:00</td>
                                <td>18:00</td>
                            </tr>
                            <tr className='text-left'>
                                <td>20:00</td>
                                <td>20:00</td>
                                <td>20:00</td>
                                <td><span className='reservation-hour-text rounded-lg'>20:00</span></td>
                                <td>20:00</td>
                                <td>20:00</td>
                                <td>20:00</td>
                            </tr>
                            <tr className='text-left'>
                                <td>22:00</td>
                                <td>22:00</td>
                                <td>22:00</td>
                                <td><span className='reservation-hour-text rounded-lg'>22:00</span></td>
                                <td>22:00</td>
                                <td>22:00</td>
                                <td>22:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section >
        )
    }
}

export default Reservation