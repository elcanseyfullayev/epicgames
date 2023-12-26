import React from 'react'
import './home.scss'
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'

function Home() {

    let countDownDate = new Date("Dec 26, 2023 20:00:00").getTime();

    let x = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        days = days.toString().padStart(2, '0');
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        document.getElementById("timer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);

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
            <section id='rewards'>
                <div className="container">
                    <div className="image">
                        <img src="https://cdn2.unrealengine.com/en-rewards-boosted-breaker-asset-v3-70dcac343dce.avif?h=480&quality=medium&resize=1&w=854" alt="" />
                        <div className="background">
                        </div>
                    </div>
                    <div className="about">
                        <div className="text">
                            <h1>Epic Rewards Gets A Boost</h1>
                            <p>Celebrate the Holiday Sale with Epic Rewards boosted to 10% for a limited time!</p>
                        </div>
                        <div className="button">Earn Now</div>
                    </div>

                </div>
                <div className="container">
                    <div className="image">
                        <img src="https://cdn2.unrealengine.com/holiday-in-game-events-article-share-image-1920x1080-v4-54c174c04fa8.avif?h=480&quality=medium&resize=1&w=854" alt="" />
                        <div className="background">
                        </div>
                    </div>
                    <div className="about">
                        <div className="text">
                            <h1>Holiday Sale Events</h1>
                            <p>Lots of games host holiday events - here are some of the festive-themed thrills and chills to enjoy over the holiday season.</p>
                        </div>
                        <div className="button">Read More</div>
                    </div>

                </div>
            </section>
            <section id='developer'>
                <h5>Developer Spotlight - Remedy Entertainment</h5>
                <div className="boxes">
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2_RemedyEntertainment_S2_1200x1600-c7c8091ddac0f9669c8e5905bca88aaa?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>

                        </div>
                        <p>BASE GAME</p>
                        <h5>Alan Wake 2</h5>
                        <div className="price">
                            <div className="discount">
                                -20%
                            </div>
                            <p><s>$36.49</s> $29.19</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2DeluxeEdition_RemedyEntertainment_Editions_S2_1200x1600-db032e8c839da2be59801023a4cdf083?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>

                        </div>
                        <p>EDITION</p>
                        <h5>Alan Wake 2 Deluxe Edition</h5>
                        <div className="price">
                            <div className="discount">
                                -20%
                            </div>
                            <p><s>$51.09</s> $40.87</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/en/d/d1/Alan-Wake-American-Nightmare-Box-Art.jpg" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>

                        </div>
                        <p>BASE GAME</p>
                        <h5>Alan Wake's American Nightmare</h5>
                        <div className="price">
                            <div className="discount">
                                -67%
                            </div>
                            <p><s>$4.99</s> $1.64</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/calluna/Control_Portrait_Storefront_1200X1600_1200x1600-456c920cae7a0aa9b36670cd5e1237a1?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>

                        </div>
                        <p>BASE GAME</p>
                        <h5>Control</h5>
                        <div className="price">
                            <div className="discount">
                                -40%
                            </div>
                            <p><s>$28.99</s> $17.39</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/en_Remedy_DEER_S2_1200x1600_1200x1600-8024b0d13e7a3f3888cb27df87cf263f?h=480&quality=medium&resize=1&w=360" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>

                        </div>
                        <p>BASE GAME</p>
                        <h5>Alan Wake Remastered</h5>
                        <div className="price">
                            <div className="discount">
                                -67%
                            </div>
                            <p><s>$15.99</s> $5.27</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='free'>
                <div className="box">
                    <div className="head">
                        <p><i class="fa-solid fa-gift"></i> Free Games</p>
                        <div className="button">VIEW MORE</div>
                    </div>
                    <div className="boxes">
                        <div className="game">
                            <div className="image">
                                <img src="https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/Free-Game-7_1920x1080-27d16f910b6fd80793f52133204601bb?h=480&quality=medium&resize=1&w=854" alt="" />
                                <div className="free">
                                    FREE NOW
                                </div>
                                <div className="bck">

                                </div>
                            </div>
                            <div className="about">
                                <p>Ghostwire: Tokyo</p>
                                <span>Free Now - Dec 26 at 08:00 PM</span>
                            </div>
                        </div>
                        <div className="game">
                            <div className="image">
                                <img src="https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/Free-Game-8-teaser_1920x1080-c31f1e5edde1dd7bbfac692800a81d33?h=480&quality=medium&resize=1&w=854" alt="" />
                                <div className="mystery">
                                    MYSTERY GAME
                                </div>
                                <div className="bck">

                                </div>
                            </div>
                            <p className='timer'>Unlocking in <div id="timer"></div></p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='fortnite'>
                <h5>Fortnite Experiences</h5>
                <div className="cont">
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/fn/FNJN_01_EGS_Launcher_Blade_2560x1440_2560x1440-9b2da247e66cc11c447d59784923efbd?h=480&quality=medium&resize=1&w=854" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>
                        </div>
                        <div className="about">
                            <span>EXPERIENCE</span>
                            <p>LEGO® Fortnite®</p>
                            <p>Free</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/fn/28RR_Launch_KeyArt_EGS_Blade_2560x1440_2560x1440-a135b6067cc5b54497e8bdf4fee721de?h=480&quality=medium&resize=1&w=854" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>
                        </div>
                        <div className="about">
                            <span>EXPERIENCE</span>
                            <p>Rocket Racing</p>
                            <p>Free</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://cdn1.epicgames.com/offer/fn/FNSP_01_EGS_Launcher_Blade_2560x1440_2560x1440-966445d9d0e9b389b765a8d3da6badb6?h=480&quality=medium&resize=1&w=854" alt="" />
                            <i className="fa-solid fa-plus"><div className="addwish">Add To Wishlist</div></i>
                            <div className="imghover"></div>
                        </div>
                        <div className="about">
                            <span>EXPERIENCE</span>
                            <p>Fortnite Festival</p>
                            <p>Free</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
