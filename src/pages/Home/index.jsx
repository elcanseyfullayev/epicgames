import React from 'react'
import './home.scss'
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'

function Home() {

    return (
        <>
            <Navbar></Navbar>
            <section id='ads'>
                <div className="image">
                    <img src="https://cdn2.unrealengine.com/en-holiday-sale-3-up-breaker-1920x1080-e66be3535c99.jpg?h=480&quality=medium&resize=1&w=854" alt="" />
                    <div className="background">

                    </div>
                </div>
                <div className="image">
                    <img src="https://cdn2.unrealengine.com/en-coupon-3-up-asset-1920x1080-12f8c35fe87a.jpg?h=480&quality=medium&resize=1&w=854" alt="" />
                    <div className="background">

                    </div>
                </div>
                <div className="image">
                    <img src="https://cdn2.unrealengine.com/en-featured-giveaways-02-1920x1080-a5d5bdbf840f.jpg?h=480&quality=medium&resize=1&w=854" alt="" />
                    <div className="background">

                    </div>
                </div>
            </section>
            <Carousel></Carousel>
            <section id='holiday'>
                <h5>Holiday Sale Spotlight<i class="fa-solid fa-chevron-right"></i></h5>
                <div className="boxes">
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-2bb94423bf1c7e2fca10577d9f2878b9?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>
                            
                        </div>
                        <p>BASE GAME</p>
                        <h5>Hogwarts Legacy</h5>
                        <div className="price">
                            <div className="discount">
                                -40%
                            </div>
                            <p><s>$49.99</s> $29.99</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorStandardEdition_RespawnEntertainment_S2_1200x1600-fd090aecb23a065b29ea101939798edd?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>
                            
                        </div>
                        <p>BASE GAME</p>
                        <h5>STAR WARS Jedi: Survivor™</h5>
                        <div className="price">
                            <div className="discount">
                                -50%
                            </div>
                            <p><s>$69.99</s> $34.99</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>
                            
                        </div>
                        <p>BASE GAME</p>
                        <h5>Red Dead Redemption 2</h5>
                        <div className="price">
                            <div className="discount">
                                -67%
                            </div>
                            <p><s>$34.99</s> $11.54</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>
                            
                        </div>
                        <p>BASE GAME</p>
                        <h5>Grand Theft Auto V: Premium Edition</h5>
                        <div className="price">
                            <div className="discount">
                                -50%
                            </div>
                            <p><s>$24.99</s> $12.49</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>
                            
                        </div>
                        <p>BASE GAME</p>
                        <h5>The Last of Us™ Part I</h5>
                        <div className="price">
                            <div className="discount">
                                -33%
                            </div>
                            <p><s>$49.99</s> $33.49</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/fda0f2b4047f46ffb4e94d5595c1468e/EGS_MortalKombat1_NetherRealmStudios_S4_1200x1600-076e67292bb57f11ebb4465b7e74a65e?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>
                            
                        </div>
                        <p>BASE GAME</p>
                        <h5>Mortal Kombat 1</h5>
                        <div className="price">
                            <div className="discount">
                                -40%
                            </div>
                            <p><s>$49.99</s> $29.99</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
