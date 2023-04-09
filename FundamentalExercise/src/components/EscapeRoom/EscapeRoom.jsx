import React, { Component } from 'react'
import gogh from '../../assets/van-gogh.svg'
import vector from '../../assets/vector.svg'
import partyHat from '../../assets/party-hat.svg'
import people from '../../assets/people.svg'
import hourglass from '../../assets/hourglass.svg'
import utensils from '../../assets/utensils.svg'
import circles from '../../assets/circles.svg'
import video from '../../assets/video.svg'
import './EscapeRoom.css'

export class EscapeRoom extends Component {
	render() {
		return (
			<>
				<section id='escape__main' className="inline-block w-full z-10">
					<img id='vector' src={vector} alt="" />
					<div id='escape__gogh' className='mt-36 ml-60 flex flex-row'>
						<img src={gogh} alt="" />
						<div id='gogh__text'>
							<span className='big-text ml-36 mt-16 inline-block'>Ескейп стая</span>

							<span className='normal-text mt-40 inline-block text-left ml-36'>
								Изберете един различен начин детето Ви да се забавлява с приятелите си.
								Нашият луд Гений Ви кани в ескейп стая “Лудостта на Гения“.
								Той ще отведе децата Ви в 19. век, когато е живял и ще ги потопи в света на изкуството.
							</span>

							<button className='border rounded-3xl px-10 ml-36 mt-8 reservation-button'>
								Резервирай сега!
							</button>
							<div className='flex flex-row ml-36 mt-20 gap-5'>
								<div className='flex flex-col gap-5 party-div'>
									<img src={partyHat} alt="" width={"41"} height={"43"} />
									<span className='party-text'>Парти зала</span>
									<span className='party-small-text'>От 1 до 6 часа</span>
								</div>
								<div className='flex flex-col gap-5 party-div'>
									<img src={people} alt="" width={"41"} height={"43"} />
									<span className='party-text'>2 - 30</span>
									<span className='party-small-text'>Деца / гости</span>
								</div>
								<div className='flex flex-col gap-5 party-div'>
									<img src={hourglass} alt="" width={"41"} height={"43"} />
									<span className='party-text'>60</span>
									<span className='party-small-text'>Минути / игра</span>
								</div>
								<div className='flex flex-col gap-5 party-div'>
									<img src={utensils} alt="" width={"41"} height={"43"} />
									<span className='party-text'>60</span>
									<span className='party-small-text'>Минути / игра</span>
								</div>
							</div>
						</div>
					</div>
					<section id='video__section' className='flex flex-col mt-32'>
						<div id='text' className='text-center'>
							<p className='small-text-video'>Нашата атмосфера</p>
							<p className='big-text-video'>Вижте как се случва магията при нас</p>
							<img src={video} alt="" id='video-image'/>
						</div>
						<div id='video' className=''>
							<img className='circle' src={circles} alt="" />
						</div>
					</section>
				</section>

			</>
		)
	}
}

export default EscapeRoom