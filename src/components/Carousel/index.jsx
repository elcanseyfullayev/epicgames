import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './carousel.scss'


export default function App() {
    return (
        <MDBCarousel showControls showIndicators>
            <MDBCarouselItem itemId={1}>
                <img src='https://cdn2.unrealengine.com/egs-alan-wake-2-carousel-desktop-1248x702-c7cb2980c2a2.jpg?h=720&quality=medium&resize=1&w=1280' className='d-block w-100' alt='...' />
                <MDBCarouselCaption>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Alan_Wake_II_logo.svg/2560px-Alan_Wake_II_logo.svg.png" alt="" />
                    <div className="about">
                        <p>SAVE DURING HOLIDAY SALE</p>
                        <h5>Buy Alan Wake 2 and get Alan Wake Remastered, our gift to you. Offer ends January 10, 2024, see page for details.</h5>
                    </div>
                    <div className="buy">
                        <div className="price">Starting at <s>$36.49</s> $29.19</div>
                        <div className="buttons">
                            <div className='save'>SAVE NOW</div>
                            <div className="wish"><i class="fa-solid fa-plus"></i>ADD TO WISHLIST</div>
                        </div>
                    </div>
                </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
                <img src='https://cdn2.unrealengine.com/fc24se-epic-merch-feature-carousel-desktop-1248x702-1248x702-51e411bd25db.png?h=720&quality=medium&resize=1&w=1280' className='d-block w-100' alt='...' />

                <MDBCarouselCaption>
                    <img src="https://fifauteam.com/images/fc24/logo/gen5-long-white.png" alt="" />
                    <div className="about">
                        <p>SAVE DURING HOLIDAY SALE</p>
                        <h5>EA SPORTS FC™ 24 welcomes you to The World’s Game: the most true-to-football experience ever.</h5>
                    </div>
                    <div className="buy">
                        <div className="price">Starting at <s>$69.99</s> $27.99</div>
                        <div className="buttons">
                            <div className='save'>SAVE NOW</div>
                            <div className="wish"><i class="fa-solid fa-plus"></i>ADD TO WISHLIST</div>
                        </div>
                    </div>
                </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
                <img src='https://cdn2.unrealengine.com/egs-lotr-return-to-moria-carousel-desktop-1920x1080-a3ae08411ddb.jpg?h=720&quality=medium&resize=1&w=1280' className='d-block w-100' alt='...' />
                <MDBCarouselCaption>
                    <img src="https://upload.wikimedia.org/wikipedia/fr/6/66/LotR_ReturnToMoria_Logo.png" alt="" />
                    <div className="about">
                        <p>SAVE DURING HOLIDAY SALE</p>
                        <h5>Adventure alone or band together on a quest to reclaim the ancient Kingdom of Moria.</h5>
                    </div>
                    <div className="buy">
                        <div className="price">Starting at <s>$17.99</s> $8.99</div>
                        <div className="buttons">
                            <div className='save'>SAVE NOW</div>
                            <div className="wish"><i class="fa-solid fa-plus"></i>ADD TO WISHLIST</div>
                        </div>
                    </div>
                </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={4}>
                <img src='https://cdn2.unrealengine.com/egs-ac-mirage-carousel-desktop-1920x1080-9380e8fef189.jpg?h=720&quality=medium&resize=1&w=1280' className='d-block w-100' alt='...' />
                <MDBCarouselCaption>
                    <img className='mirage' src="https://cdn2.unrealengine.com/epic-launch-logo-400x172-c0289bc57588.png?h=270&quality=medium&resize=1&w=480" alt="" />
                    <div className="about">
                        <p>SAVE DURING HOLIDAY SALE</p>
                        <h5>Experience the story of Basim, a cunning thief seeking answers and justice as he navigates the streets of ninth-century Baghdad.</h5>
                    </div>
                    <div className="buy">
                        <div className="price">Starting at <s>$49.99</s> $34.99</div>
                        <div className="buttons">
                            <div className='save'>SAVE NOW</div>
                            <div className="wish"><i class="fa-solid fa-plus"></i>ADD TO WISHLIST</div>
                        </div>
                    </div>
                </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={5}>
                <img src='https://cdn2.unrealengine.com/egs-dead-island-2-launch-carousel-desktop-1920x1080-ac0376f37f14.jpg?h=720&quality=medium&resize=1&w=1280' className='d-block w-100' alt='...' />
                <MDBCarouselCaption>
                    <img src="https://cdn2.steamgriddb.com/logo/754ee3504e8dbfe106cc6ec4583d7968.png" alt="" />
                    <div className="about">
                        <p>SAVE DURING HOLIDAY SALE</p>
                        <h5>Uncover the truth behind the outbreak and discover who or what you are.</h5>
                    </div>
                    <div className="buy">
                        <div className="price">Starting at <s>$44.99</s> $26.99</div>
                        <div className="buttons">
                            <div className='save'>SAVE NOW</div>
                            <div className="wish"><i className="fa-solid fa-plus"></i>  ADD TO WISHLIST</div>
                        </div>
                    </div>
                </MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}