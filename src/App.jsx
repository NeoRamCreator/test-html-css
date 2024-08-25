
import React from "react";
import { hot } from 'react-hot-loader/root';

import BasicPresentation from "./components/BasicPresentation";
import Count from "./components/Count";
import MainContent from "./components/MainContent";
import Models from "./components/Models";
import NavBar from "./components/NavBar";
import OurServices from "./components/OurServices";
import Select from "./components/Select";
import ServiceInfo from "./components/ServiceInfo";
import ServiceServices from "./components/ServiceServices";
import g12 from './static/Group12.png'
import bg from './static/bg.png'
import keyimg1 from './static/Vector (1).png'
import keyimg2 from './static/Vector (3).png'

import qwbg from './static/qwbg (3).png';

const reviews = [
  { name: 'Владимир', text: 'Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :)' },
  { name: 'Константин', text: 'Сломалось гнездо зарядки у планшета. В других мастерских просили несколько тысяч за полную замену детали, а местный мастер смог перепаять и теперь все работает.' },
  { name: 'Артём', text: 'Узнал что почти все сервисы покупают тут запчасти для ремонта и решил обратиться напрямую за запчастью и ремонтом. Вышло ДЕШЕВО!!' },
]


function App() {
  return (
    <>
      <div className="container relative">
        <NavBar />
        <BasicPresentation />
        <img src={g12} alt="" className="bg-img-1" />
      </div>


      <div className="full-container">
        <ServiceServices />
      </div>

      <div className="container relative">
        <img src={bg} alt="" className="bg-img-1" />
        <MainContent />
        <Select />
        <Models />
        <OurServices />
        <ServiceInfo />
      </div>


      <div className="full-container">
        <Count />
      </div>


      <div className="container relative">
        <img src={keyimg1} alt="" className="bg-img-1 keyimg-r" />
        <img src={keyimg2} alt="" className="bg-img-1 keyimg-l" />
        <GetCall
          title={'Заберем ваш сломанный смартфон прямо из дома'}
          text={'Оставьте Ваш номер телефона и мы перезвоним Вам прямо сейчас.'}
        />
      </div>

      <div className="full-container">
        <Reviews reviews={reviews} />
      </div>


      <div className="container relative">
        <img src={qwbg} alt="" className="bg-img-1" />
        <GetCall title={'Нужна консультация?'} text={'Оставьте Ваш номер телефона и мы перезвоним Вам прямо сейчас.'} />
      </div>


      <div className="full-container no-sh">
        <Disclaimer />
      </div>


      <div className="full-container ">
        <NavBar />
      </div>
      {/* <Footer /> */}

      <div className="full-container no-sh">
        <Footer />
      </div>
      {/* <div style={{ height: '90vh' }}>1</div> */}

    </>

  );
}

// export default App;

const Footer = () => {
  return (
    <div className="b13">
      <div className="content flex jc-sb">
        {/* <footer> */}
        <div>Copyright 2020. Все права защищены</div>
        <div>Дизайн, разработка, реклама by Axmobi 8961-098-81-11</div>
        {/* </footer> */}
      </div>
    </div>
  )
}


const Disclaimer = () => {
  return (
    <div className="b12">
      <div className="disclaimer content " >
        <div className="container">
          <div className="text">ИНФОРМАЦИЯ НА САЙТЕ НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ</div>
          <div className="text">Продавец услуг оставляет за собой право в любое время вносить какие-либо изменения в данные предложения без предварительного уведомления.</div>
          <div className="text"> Информация на сайте не является публичной офертой до момента заказа услуги. Изменения могут быть как существенными, так и незначительными. Однако было сделано все возможное, чтобы обеспечить точность подробных сведений.. </div>
          <div className="text">Данная информация ни при каких условиях не должна рассматриваться как предложение, сделанное Продавцом какому-либо лицу.</div>
          <div className="text"> Информация на сайте носит ознакомительный характер и следовательно к сожалению не всегда может отражать настоящую стоимость услуги. Несмотря на это мы прикладываем все усилия для размещения верной и правдивой информации.</div>
        </ div>
      </div>
    </div>
  )
}


const Reviews = ({ reviews }) => {
  return (
    <div className="service-services reviews content b11">
      <div className="">
        <h2>Отзывы</h2>
        <div className="flex">
          <div className=" flex jc-sb wrapper">


            {reviews.map(review => {
              return <div className="box item">
                <div className="human ">

                  <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.514648" width="55" height="55" rx="27.5" fill="#292929" />
                    <path d="M38.1514 33.8857C37.5988 32.5767 36.7968 31.3876 35.7901 30.3848C34.7865 29.379 33.5976 28.5772 32.2891 28.0234C32.2774 28.0176 32.2657 28.0146 32.254 28.0088C34.0792 26.6904 35.2657 24.543 35.2657 22.1201C35.2657 18.1064 32.0137 14.8545 28.0001 14.8545C23.9864 14.8545 20.7344 18.1064 20.7344 22.1201C20.7344 24.543 21.921 26.6904 23.7462 28.0117C23.7344 28.0176 23.7227 28.0205 23.711 28.0264C22.3985 28.5801 21.2208 29.374 20.21 30.3877C19.2043 31.3913 18.4024 32.5802 17.8487 33.8887C17.3047 35.1697 17.0113 36.5431 16.9844 37.9346C16.9837 37.9658 16.9892 37.9969 17.0006 38.0261C17.012 38.0552 17.0291 38.0817 17.051 38.1041C17.0728 38.1265 17.0989 38.1443 17.1278 38.1564C17.1566 38.1686 17.1875 38.1748 17.2188 38.1748H18.9766C19.1055 38.1748 19.2081 38.0723 19.211 37.9463C19.2696 35.6846 20.1778 33.5664 21.7833 31.9609C23.4444 30.2998 25.6505 29.3857 28.0001 29.3857C30.3497 29.3857 32.5557 30.2998 34.2169 31.9609C35.8223 33.5664 36.7305 35.6846 36.7891 37.9463C36.7921 38.0752 36.8946 38.1748 37.0235 38.1748H38.7813C38.8126 38.1748 38.8436 38.1686 38.8724 38.1564C38.9012 38.1443 38.9273 38.1265 38.9492 38.1041C38.971 38.0817 38.9881 38.0552 38.9996 38.0261C39.011 37.9969 39.0165 37.9658 39.0157 37.9346C38.9864 36.5342 38.6964 35.1719 38.1514 33.8857ZM28.0001 27.1592C26.6553 27.1592 25.3897 26.6348 24.4376 25.6826C23.4854 24.7305 22.961 23.4648 22.961 22.1201C22.961 20.7754 23.4854 19.5098 24.4376 18.5576C25.3897 17.6055 26.6553 17.0811 28.0001 17.0811C29.3448 17.0811 30.6104 17.6055 31.5626 18.5576C32.5147 19.5098 33.0391 20.7754 33.0391 22.1201C33.0391 23.4648 32.5147 24.7305 31.5626 25.6826C30.6104 26.6348 29.3448 27.1592 28.0001 27.1592Z" fill="url(#paint0_linear_125_5306)" />
                    <path d="M38.1514 33.8857C37.5988 32.5767 36.7968 31.3876 35.7901 30.3848C34.7865 29.379 33.5976 28.5772 32.2891 28.0234C32.2774 28.0176 32.2657 28.0146 32.254 28.0088C34.0792 26.6904 35.2657 24.543 35.2657 22.1201C35.2657 18.1064 32.0137 14.8545 28.0001 14.8545C23.9864 14.8545 20.7344 18.1064 20.7344 22.1201C20.7344 24.543 21.921 26.6904 23.7462 28.0117C23.7344 28.0176 23.7227 28.0205 23.711 28.0264C22.3985 28.5801 21.2208 29.374 20.21 30.3877C19.2043 31.3913 18.4024 32.5802 17.8487 33.8887C17.3047 35.1697 17.0113 36.5431 16.9844 37.9346C16.9837 37.9658 16.9892 37.9969 17.0006 38.0261C17.012 38.0552 17.0291 38.0817 17.051 38.1041C17.0728 38.1265 17.0989 38.1443 17.1278 38.1564C17.1566 38.1686 17.1875 38.1748 17.2188 38.1748H18.9766C19.1055 38.1748 19.2081 38.0723 19.211 37.9463C19.2696 35.6846 20.1778 33.5664 21.7833 31.9609C23.4444 30.2998 25.6505 29.3857 28.0001 29.3857C30.3497 29.3857 32.5557 30.2998 34.2169 31.9609C35.8223 33.5664 36.7305 35.6846 36.7891 37.9463C36.7921 38.0752 36.8946 38.1748 37.0235 38.1748H38.7813C38.8126 38.1748 38.8436 38.1686 38.8724 38.1564C38.9012 38.1443 38.9273 38.1265 38.9492 38.1041C38.971 38.0817 38.9881 38.0552 38.9996 38.0261C39.011 37.9969 39.0165 37.9658 39.0157 37.9346C38.9864 36.5342 38.6964 35.1719 38.1514 33.8857ZM28.0001 27.1592C26.6553 27.1592 25.3897 26.6348 24.4376 25.6826C23.4854 24.7305 22.961 23.4648 22.961 22.1201C22.961 20.7754 23.4854 19.5098 24.4376 18.5576C25.3897 17.6055 26.6553 17.0811 28.0001 17.0811C29.3448 17.0811 30.6104 17.6055 31.5626 18.5576C32.5147 19.5098 33.0391 20.7754 33.0391 22.1201C33.0391 23.4648 32.5147 24.7305 31.5626 25.6826C30.6104 26.6348 29.3448 27.1592 28.0001 27.1592Z" fill="url(#paint1_linear_125_5306)" />
                    <defs>
                      <linearGradient id="paint0_linear_125_5306" x1="16.9844" y1="21.5447" x2="39.2359" y2="22.0058" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CBCBCB" />
                        <stop offset="1" stop-color="#F8F8F8" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_125_5306" x1="16.9844" y1="21.5447" x2="39.2359" y2="22.0058" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF3D00" />
                        <stop offset="0.447917" stop-color="#FFD800" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* <div className="name">Владимир</div> */}
                  <div className="name">{review.name}</div>
                </div>
                <div className="text">{review.text}</div>
                {/* <div className="text">Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :{')'}</div> */}
              </div>
            })}



          </div>
        </div>
      </div>
    </div>

  )
}


const GetCall = ({ title, text }) => {
  return (
    <div className="get-call flex content b10">
      <div className="wrapper ">
        <h2>{title}</h2>
        {/* <h2>Заберем ваш сломанный смартфон прямо из дома</h2> */}
        <p className="text">{text}</p>
        {/* <p>Оставьте Ваш номер телефона и мы перезвоним Вам прямо сейчас.</p> */}
        <div className="flex ai-c">
          <input type="text" placeholder="Имя" />
          <input type="tel" placeholder="+7 --- --- -- --" pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"></input>
          <button className="bg-gradient">Перезвонить мне</button>
        </div>
      </div>
    </div>
  )
}



export default hot(App);
