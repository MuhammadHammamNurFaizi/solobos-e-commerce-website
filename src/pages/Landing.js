import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import head from '../assets/head.png'
import logo from '../assets/logo.png'
import shoes1 from '../assets/shoes1.jpg'
import shoes2 from '../assets/shoes2.jpg'
import shoes3 from '../assets/shoes3.jpg'
import harry from '../assets/harry.jpg'
import sneaker1 from '../assets/sneaker1.jpg'
import model1 from '../assets/model1.jpg'
import '../style/landing.scss'

const Landing = () => {
  return (
    <div>
    <Header/>
      <div className='landing'>
        <img src={head} alt='head'/>
        <div className='landing-judul'>Classic. Comfy. Chic.
        <button>Shop Now</button>
        </div>
      </div>
      <div className='shoes-example'>
        <div className='shoes-example-content'>
          <img src={shoes1} />
          <div>
          <button>Shop Roma</button>
          </div>
        </div>
        <div className='shoes-example-content'>
          <img src={shoes2} />
          <div>
          <button>Shop Sneakers</button>
          </div>
        </div>
      </div>
      <div className='shoes-title'>
        <div className='shoes-title-1'>Our Classics</div>
        <div className='shoes-group'>
          <div className='shoes-content'>
            <div className='shoes-content-image'>
              <img src='https://images.unsplash.com/photo-1542594628-4c90ca8271a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
            </div>
            <div className='shoes-content-title'>
              <div><p>Ibiza Classic Leather Sneaker</p></div>
              <div><p>$129</p></div>
            </div>
          </div>
          <div className='shoes-content'>
            <div className='shoes-content-image'>
              <img src='https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
            </div>
            <div className='shoes-content-title'>
              <div><p>Ibiza Classic Leather Sneaker</p></div>
              <div><p>$129</p></div>
            </div>
          </div>
        <div className='shoes-content'>
            <div className='shoes-content-image'>
              <img src='https://images.unsplash.com/photo-1622760806364-5ccac8096b59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80' />
            </div>
            <div className='shoes-content-title'>
              <div><p>Ibiza Classic Leather Sneaker</p></div>
              <div><p>$129</p></div>
            </div>
          </div>
          <div className='shoes-content'>
            <div className='shoes-content-image'>
              <img src='https://images.unsplash.com/photo-1589807751586-b5c674fd737c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
            </div>
            <div className='shoes-content-title'>
              <div><p>Ibiza Classic Leather Sneaker</p></div>
              <div><p>$129</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className='shoes-review'>
        <div className='shoes-review-img'>
          <img src='https://images.unsplash.com/photo-1508741181234-e64704c58658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
        </div>
        <div className='shoes-review-title'>
          <p className='shoes-review-title-0'>Overheard</p>
          <p className='shoes-review-title-1'>"The perfect with Sneakers for all seasons"</p>
          <p className='shoes-review-title-1'>-Caroline s</p>
          <p className='shoes-review-title-2'>Shop Sneakers</p>
        </div>
      </div>
      <div className='review-brand'>
        <p>"The perfect shoes for running around the city."</p>
        <img src={logo} />
      </div>
      <div className='shoes-shop'>
        <div className='shoes-shop-1'>
          <div className='shoes-shop-shop'>
            <img src='https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
            <button>Shop Sneaker</button>
          </div>
          <div className='shoes-shop-shop'>
            <img src='https://images.unsplash.com/photo-1621996659490-3275b4d0d951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80' />
            <button>Shop Sneaker</button>
          </div>
        </div>
        <div className='shoes-shop-1'>
          <div className='shoes-shop-shop'>
            <img src='https://images.unsplash.com/photo-1544155815-87a399a4712b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
            <button>Shop Sneaker</button>
          </div>
          <div className='shoes-shop-shop'>
            <img src={sneaker1} />
            <button>Shop Sneaker</button>
          </div>
        </div>
      </div>
      <div className='landing'>
        <img src='https://images.hdqwalls.com/wallpapers/nature-hd-sd.jpg'/>
        <div className='landing-judul-1'>Our Sustainability Mission
        <button>Learn More</button>
        </div>
      </div>
      <div className='shoes-insta'>
        <div className='shoes-insta-title'>
          <p className='shoes-insta-title-1'>From IRL to IG</p>
          <p>We love to see what you're wearing while wandering. 
            Tag us @soludos and follow along for the fun!</p>
        </div>
        <div className='shoes-insta-img'>
          <div className='shoes-insta-content'>
            <img src='https://images.unsplash.com/photo-1516522973472-f009f23bba59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
          </div>
          <div className='shoes-insta-content'>
            <img src='https://images.unsplash.com/photo-1554062614-6da4fa67725a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
          </div>
          <div className='shoes-insta-content'>
            <img src='https://images.unsplash.com/photo-1608619945373-8fdba33f944a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=648&q=80' />
          </div>
        </div>

      </div>
    <Footer/>  
    </div>
  )
}

export default Landing