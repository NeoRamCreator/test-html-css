import bgimg from '../static/Mask Group.png'
import bgimgfull from '../static/Mask Group (1).png'
import img1 from '../static/kisspng-mini-itx-motherboard-socket-fm2-cpu-socket-5b0e51a07e0734 1.png'
import img2 from '../static/Group 313.png'

import React from "react";

const ServiceInfo = () => {
	return (
		// <div className="component">
		// 	<section>
		<div className=" service-info content flex b8">

			<div className="flex wrapper ">


				<div className="box relative">
					<p className="title">Слишком сильные повреждения?</p>
					<p className="text">Сдайте ваше устройство на запчасти обратившись в наш сервис</p>
					<div className="flex ai-c">
						<p className="action">Разобрать на запчасти</p>
						<svg width="58" height="12" viewBox="0 0 58 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M57.5303 6.53033C57.8232 6.23744 57.8232 5.76256 57.5303 5.46967L52.7574 0.696699C52.4645 0.403806 51.9896 0.403806 51.6967 0.696699C51.4038 0.989593 51.4038 1.46447 51.6967 1.75736L55.9393 6L51.6967 10.2426C51.4038 10.5355 51.4038 11.0104 51.6967 11.3033C51.9896 11.5962 52.4645 11.5962 52.7574 11.3033L57.5303 6.53033ZM0 6.75H57V5.25H0V6.75Z" fill="url(#paint0_linear_125_5038)" />
							<defs>
								<linearGradient id="paint0_linear_125_5038" x1="4.49257e-07" y1="6.28688" x2="22.4723" y2="34.3809" gradientUnits="userSpaceOnUse">
									<stop stop-color="#FF3D00" />
									<stop offset="0.453125" stop-color="#FFD800" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<img src={img1} alt="" className='absolute' />
				</div>

				<div className="box relative">
					<p className="title">Слишком сильные повреждения?</p>
					<p className="text">Сдайте ваше устройство на запчасти обратившись в наш сервис</p>
					<div className="flex">
						<p className="action">Разобрать на запчасти</p>
					</div>
					<img src={bgimg} alt="" className='absolute' />
					<img src={img2} alt="" className='img absolute' />
				</div>


			</div>



			<div className=" full  box relative">
				{/* <div className="box"> */}
					<p className="title">Слишком сильные повреждения?</p>
					<p className="text">Сдайте ваше устройство на запчасти обратившись в наш сервис</p>
					<div className="flex ai-c">
						<p className="action">Разобрать на запчасти</p>
						<svg width="58" height="12" viewBox="0 0 58 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M57.5303 6.53033C57.8232 6.23744 57.8232 5.76256 57.5303 5.46967L52.7574 0.696699C52.4645 0.403806 51.9896 0.403806 51.6967 0.696699C51.4038 0.989593 51.4038 1.46447 51.6967 1.75736L55.9393 6L51.6967 10.2426C51.4038 10.5355 51.4038 11.0104 51.6967 11.3033C51.9896 11.5962 52.4645 11.5962 52.7574 11.3033L57.5303 6.53033ZM0 6.75H57V5.25H0V6.75Z" fill="url(#paint0_linear_125_5038)" />
							<defs>
								<linearGradient id="paint0_linear_125_5038" x1="4.49257e-07" y1="6.28688" x2="22.4723" y2="34.3809" gradientUnits="userSpaceOnUse">
									<stop stop-color="#FF3D00" />
									<stop offset="0.453125" stop-color="#FFD800" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<img src={bgimgfull} alt="" className='imgfull absolute' />
				{/* </div> */}
			</div>

		</div>
		// 	</section>
		// </div>
	)
}



export default ServiceInfo