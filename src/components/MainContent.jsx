import i1 from '../static/Frameайфон.png'
import i2 from '../static/Frameайфон (1).png'
import i3 from '../static/Frame.png'
import i4 from '../static/Group 326айфон.png'
import React from "react";


const MainContent = () => {

	return (
		<>

			{/* <section> */}
			{/* <div className="main-content"> */}
			<div className="content b4 ">
				<h2>Как мы работаем?</h2>
				<div className="flex b4 jc-sb ">


					<div className=" box relative">
						<div className="absolute">01</div>

						<div className="img">
							<img src={i1} alt="" className="img" />
						</div>
						<div className="text">
							<p>Уточняем проблему и проводим диагностику</p>
						</div>
					</div>

					<div className=" box relative">
						<div className="absolute">01</div>

						<div className="img">
							<img src={i2} alt="" className="img" />
						</div>
						<div className="text">
							<p>Уточняем проблему и проводим диагностику</p>
						</div>
					</div>

					<div className=" box relative">
						<div className="absolute">01</div>

						<div className="img">
							<img src={i3} alt="" className="img" />
						</div>
						<div className="text">
							<p>Уточняем проблему и проводим диагностику</p>
						</div>
					</div>

					<div className=" box relative">
						<div className="absolute">01</div>
						<div className="img">
							<img src={i4} alt="" className="img" />
						</div>
						<div className="text">
							<p>Уточняем проблему и проводим диагностику</p>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
			{/* </section> */}

			{/* // </div> */}
			{/* </div> */}
		</>

	)
}
export default MainContent