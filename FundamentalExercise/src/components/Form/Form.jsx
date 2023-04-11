import React, { Component } from 'react'
import selectArrow from '../../assets/select-arrow.svg'
import './Form.css'

export class Form extends Component {
    render() {
        return (
            <section id='section__form' className='pt-14 items-center'>
                <form action="" className='flex flex-col justify-center gap-20'>
                    <div className='flex flex-row ml-60 gap-24'>
                        <div className='flex flex-col'>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Електронна поща</label>
                                <input type="text" id="name" name="name" placeholder="Електронна поща"
                                    className="py-2 border-b-2 border-gray-400 text-grey placeholder-grey outline-none" />
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Име</label>
                                <input type="text" id="name" name="name" placeholder="Име"
                                    className="py-2 border-b-2 border-gray-400 text-grey placeholder-grey outline-none" />
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Телефонен номер</label>
                                <input type="text" id="name" name="name" placeholder="Телефонен номер"
                                    className="py-2 border-b-2 border-gray-400 text-grey placeholder-grey outline-none" />
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Име на рожденика</label>
                                <input type="text" id="name" name="name" placeholder="Име на рожденика"
                                    className="py-2 border-b-2 border-gray-400 text-grey placeholder-grey outline-none" />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Възраст, която навършва</label>
                                <input type="text" id="name" name="name" placeholder="Възраст, която навършва"
                                    className="py-2 border-b-2 border-gray-400 text-grey placeholder-grey outline-none" />
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Брой играчи</label>
                                <select type="text" id="name" name="name" className="block pb-0 px-0 text-gray-500 bg-transparent border-0 border-b-2 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="Брой играчи">Брой играчи</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Език на играта</label>
                                <select type="text" id="name" name="name" className="block pb-0 px-0 text-gray-500 bg-transparent border-0 border-b-2 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="Български език">Български език</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Деца до 14 години</label>
                                <select type="text" id="name" name="name" className="block pb-0 px-0 text-gray-500 bg-transparent border-0 border-b-2 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="Да">Да</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Наем на допълнителна стая</label>
                                <select type="text" id="name" name="name" className="block pb-0 px-0 text-gray-500 bg-transparent border-0 border-b-2 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="Да">Да</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Наем на залата за:</label>
                                <select type="text" id="name" name="name" className="block pb-0 px-0 text-gray-500 bg-transparent border-0 border-b-2 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="Моля, изберете от списъка">Моля, изберете от списъка</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Кетъринг</label>
                                <select type="text" id="name" name="name" className="block pb-0 px-0 text-gray-500 bg-transparent border-0 border-b-2 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="Искаме кетъринг">Искаме кетъринг</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="name" className="inline-block mr-6 text-left">Аниматор</label>
                                <select type="text" id="name" name="name" className="block pb-0 px-0 text-gray-500 bg-transparent border-0 border-b-2 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="Искаме да наемем аниматор">Искаме да наемем аниматор</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row gap-24 ml-60'>
                        <div className="flex flex-col mb-8">
                            <label htmlFor="name" className="inline-block mr-6 text-left">Код за отстъпка</label>
                            <input type="text" id="name" name="name" placeholder="Код за отстъпка"
                                className="py-2 border-b-2 border-gray-400 text-grey placeholder-grey outline-none" />
                        </div>
                        <div className="flex flex-col mb-8">
                            <label htmlFor="name" className="inline-block mr-6 text-left">Забележки и въпроси</label>
                            <input type="text" id="name" name="name" placeholder="Забележки и въпроси"
                                className="py-2 border-b-2 border-gray-400 text-grey placeholder-grey outline-none" />
                        </div>
                    </div>

                    <div className='flex flex-col ml-60 gap-3'>
                        <div className="flex h-6 items-center gap-3 text-center">
                            <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded" />
                            <label htmlFor="name" className="inline-block text-left m-0">Прочетох и се запознах с общите условия за ползване.</label>
                        </div>
                        <div className="flex h-6 items-center gap-3">
                            <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded" />
                            <label htmlFor="name" className="inline-block text-left m-0">Съгласен съм данните ми да бъдат използвани за маркетингови цели.</label>
                        </div>
                        <div className="flex h-6 items-center gap-3">
                            <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded" />
                            <label htmlFor="name" className="inline-block text-left m-0">Запознат съм с правата за защита на личните данни.</label>
                        </div>
                    </div>

                    <div className='h-[2px] ml-60 w-[1440px] bg-purple'></div>

                    <div className='flex ml-60 justify-end w-[1440px] mb-56'>
                        <div className='flex flex-col'>
                            <button type='submit' className='border-0 rounded-3xl reservation-button self-center'>
                                Резервирай сега!
                            </button>
                            <span className='mt-3 form-small-text' >Хмм, имам нужда от помощ...</span>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default Form