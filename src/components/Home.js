import React from 'react'
import Footer from './reused/Footer'
import Socials from './reused/Socials'
import '../assests/styles/home.css'
import logo from '../assests/images/logo.png'
import mainImage from '../assests/images/bayc-mutant-hero.jpg'
import ape1 from '../assests/images/ape1.png'
import ape2 from '../assests/images/ape2.png'
import ape3 from '../assests/images/ape3.png'
import ape4 from '../assests/images/ape4.png'
import gif from '../assests/images/mystery-ape.gif'
import icon1 from '../assests/images/icon1.png'
import icon2 from '../assests/images/icon2.png'
import icon3 from '../assests/images/icon3.png'
import icon4 from '../assests/images/icon4.png'
import icon5 from '../assests/images/icon5.png'
import toilet from '../assests/images/toilet.png'
import shirt from '../assests/images/shirt.png'
import ape5 from '../assests/images/priel.jpg'
import ape6 from '../assests/images/tim.jpg'
import ape7 from '../assests/images/niko.jpg'
import ape8 from '../assests/images/faiz.jpg'
import Menu from './reused/Menu'

export default function Home() {
  return (
    <div>
      <div div className='home-container'>
        <div className='nav-container'>
          <div className='logo-container'>
            <img src={logo} alt='logo' className='logo' />
          </div>
          <Menu />
          <Socials />
        </div>
        <img className='main-image' src={mainImage} alt='main-image' />

        <div className='club-section'>
          <div className='club-title'>
            <h1>WELCOME TO THE BORED APE YACHT CLUB</h1>
            <p>
              The Sonic Orphans’ Society Is a collection of 10,000 Orphan NFTs -
              one of a kind digital collectibles living on the Ethereum
              blockchain. Your orphan doubles as your “Society” membership, and
              gives you access to members-only benefits. Perks and benefits can
              be unlocked by the community through roadmap activation, and
              Society voting.
            </p>
          </div>
          <div className='club-images'>
            <img src={ape1} alt='ape1' />
            <img src={ape2} alt='ape2' />
            <img src={ape3} alt='ape3' />
            <img src={ape4} alt='ape4' />
          </div>
        </div>

        <div className='first-distrubution'>
          <div className='fd-01'>
            <h3>FAIR DISTRIBUTION</h3>
            <h4>(BONDING CURVES ARE A PONZI)</h4>
            <p>
              There are no bonding curves here. Buying a Bored Ape costs 0.08
              ETH. There are no price tiers; BAYC membership costs the same for
              everyone.
            </p>
          </div>
          <p className='fd-02'>
            Note: Thirty apes are being withheld from the sale. These will be
            used for giveaways, puzzle rewards—and for the creators' BAYC
            memberships.
          </p>
          <div id='buy_an_ape' className='buy-an-ape'>
            <h2>BUY AN APE</h2>
            <p>
              The initial sale has sold out. To get your Bored Ape, check out
              the collection on OpenSea.
            </p>
            <a href='/'>BUY AN APE ON OPENSEA</a>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content'>
          <div className='left-the-specs full-width'>
            <h2 className='h2-heading'>Overview:</h2>
            <p className='nomral-text'>
              The Sonic Orphans’ Society Is a collection of 10,000 Orphan NFTs -
              one of a kind digital collectibles living on the Ethereum
              blockchain. Your orphan doubles as your “Society” membership, and
              gives you access to members-only benefits. Perks and benefits can
              be unlocked by the community through roadmap activation, and
              Society voting.
            </p>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content'>
          <div className='left-the-specs full-width'>
            <h2 className='h2-heading'>About Us...</h2>
            <p className='nomral-text'>
              The Sonic Orphans’ Society’s mission is to utilize NFT's and the
              community around them to give back to the ones in need. Our team
              of “orphans” came together to firstly pay our moms back, but also
              to create something that would outlive us. Our project was founded
              with one goal in mind, to help others. There are many places in
              the world where children are neglected daily. Many children grow
              up without the basic necessities that many other children take for
              granted. With every sale that is made within the collection, both
              mint and royalties, a percentage will go back into both
              communities, the Orphans’ Society members, as well as
              organizations picked by the Society.
            </p>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content'>
          <div className='left-the-specs full-width'>
            <h2 className='h2-heading'>Why Us...</h2>
            <p className='nomral-text'>
              As many of you may know, The NFT space is ever-growing. More and
              more millionaires are being made overnight, and projects are
              popping up left and right on the market. NFT’s provide many
              different financial opportunities. They provide a chance to be a
              part of a community where you can make friends who share the same
              values as you. They have available utilities for every member's
              access. With our collection not only do you have a chance to make
              money through trading NFT’s, but while you are making your money
              off of trades, you are passively changing the lives of many kids
              that will be directly impacted by your purchase of a Sonic
              Orphans’ Society NFT. Our collection has a storyline inspired by
              various experiences throughout our team (read more about the
              storyline below), as well as 2 music albums dedicated to the
              collection. We will do two drops of 5,000 unique characters, and
              release the albums at 50% mint of both drops. In our first drop,
              the main characters will be revealed and a total of 5,000 NFT’s
              will be available for mint.
            </p>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content'>
          <div className='left-the-specs full-width'>
            <h2 className='h2-heading'>Storyline:</h2>
            <p className='nomral-text'>
              In Stanton Oaks, The City of Tranquility, chaos, and disarray have
              quickly made a home. Children have been separated from their
              mothers, and families have been torn apart. Guidance, order, and
              refuge are now luxuries of the past. Distinguished scientists
              Daniel Opal and Micheal Lu, developed frequency technology to
              increase the town's productivity. However, powerful businessman
              Liam Guthworth and the nefarious mastermind Norman Wiise corrupted
              the technology to control the minds of children. Children exposed
              to the frequency were forced to gruesomely take the lives of their
              parents, leaving them astray, consumed by guilt. Now, these newly
              orphaned children must find their place in the world and create
              their own society. Florence Opal and Wade Lu are now left behind
              to put back the prices of a broken town. Meanwhile, Zeke Gutworth
              (son of Liam Gutworth) must choose between the loyalty and trust
              of his father or his newly found feelings towards Florence. With
              every decision having the potential to alter the course of each
              orphans' life, the children must tread carefully and quickly adapt
              to a new sense of normalcy.
            </p>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content'>
          <div className='left-the-specs full-width'>
            <h2 className='h2-heading'>
              Where did the “Sonic Orphans” come from?...
            </h2>
            <p className='nomral-text'>
              When our project founder PRIEL initially began bringing this idea
              to life, he wanted it to be relatable, yet still unique. When some
              people hear “sonic” they’ll think of the hedgehog or the fast-food
              restaurant. No, definitely not. “Sonic” represents the music
              aspect of the project as well as the frequency that is a part of
              the storyline. “Orphans” has a double meaning. PRIEL wanted people
              to be able to connect to the story. Some people often see
              themselves as orphans to this world. The world can sometimes be an
              unforgiving place where a lot of people aren’t accepted for their
              race, religion, gender, sexuality, etc. These people become
              “orphans” and have to fend for themselves in a world where people
              don't accept them for who they are. The other side of “Orphans”
              refers to the actual meaning. With this project, many lives will
              be changed. Orphans around the world will directly benefit
              whenever a sale is made from the project and will continue to
              benefit for the entirety of The Sonic Orphans’ Society project.
            </p>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content'>
          <div className='left-the-specs full-width'>
            <h2 className='h2-heading'>MEET THE CHARACTERS</h2>
            <p className='nomral-text'>
              <strong>City name:</strong> Stanton Oak(es){' '}
              <strong>Population: </strong> 38,000 <strong>Time: </strong>2050
              (Future)
            </p>
            <br />
            <p className='nomral-text'>
              THE CORNER (FLORENCE'S FAVORITE SPOT):
              <strong> Ray’s Vinyl </strong>
            </p>
            <p className='character'>
              <span>
                <strong>Wade</strong> Age: 13 Asian - smart, very book and
                street smart,{' '}
              </span>
              likes florence,light blue Short-sleeve polo, generic glasses
              rectangle shape, white tank top underneath, black hair, black eyes
              short hair on the sides more full on top
            </p>
            <p className='character'>
              <span>
                <strong>Florence</strong> Age: 14 White - shy, perspective,
                silent leader
              </span>{' '}
              brown overcoat, dad's retro walkman orange muff headphones, gold
              locket, white tank top blue eyes, Brunette.
            </p>

            <p className='character'>
              <span>
                <strong>Zeke</strong>
                Age: 14 mixed (White and African American)- over thinker, very
                frustrated, wants to be simple, wants to help bring down his
                dad; does not think about death; in love with florence,
              </span>{' '}
              Long-sleeve, Burgundy line- detailed sweater, Birthmark on cheek
              hazel/b eyes
            </p>

            <p className='character'>
              <span>
                <strong>Twins, (Karra (Female), Kamern (Male) </strong> Black
                Age: 10 - always finish eachothers sentences, think differently
                than all of the other kids
              </span>{' '}
              Both have jade green eyes. Each twin has a beanie of varying color
              (Karra - Neon Pink / Kamern - Neon Orange) both are wearing grey
              pullovers with matching embroidered “K” with jade green outline on
              the left chest (Similar placement to a polo logo).
            </p>
            <p className='character'>
              <span>
                <strong>Gabe</strong>Age: 12 Indian - very quiet, insightful,
                perceptive, sometimes comedic relief,
              </span>{' '}
              Medical (covid) mask, black hoodie, shy eyes. Bowl cut, black hair
              brown eyes
            </p>
            <p className='character'>
              <span>
                <strong>Sam</strong>(Female) Age: 15 Hispanic - townboy, still
                pretty, nonchalant, pessimistic, warms up to wade (non romantic)
              </span>{' '}
              green and black patterned Flannel, low cut tank top, silver stud
              earrings, long brown hair, brown eyes, cut in eyebrow
            </p>
            <p className='character'>
              <span>
                <strong>Michael Lu </strong>
                (Male) Age: 34 Asian - wade's dad, lead scientist
              </span>{' '}
              White lab coat, White shirt, green and black tie brown eyes, black
              hair
            </p>

            <p className='character'>
              <span>
                <strong>Daniel Opal</strong>(Male) Age 32 White - Florence dad,
                lead scientist
              </span>{' '}
              White lab coat, White shirt, blue and yellow tie blue eyes, and
              brown hair
            </p>

            <p className='character'>
              <span>
                <strong>Norman Wiise</strong>
                White, Age: 39 - sick bastard/ mad genius, creepy obsession with
                sam. scientist
              </span>{' '}
              bags under eyes skinny looking, black unkept/messy hair, mustache
              stubble green eyes, white shirt, white lab coat, skinny black tie.
            </p>

            <p className='character'>
              <span>
                <strong>Liam Gutworth</strong>White, Age: 49 - Head huncho,
                Monopoly man, Two faced, “helps” the kids after plan initiation.
              </span>{' '}
              Blue eyes, Dirty blonde hair, Navy blue blazer/suit jacket, white
              shirt, red tie
            </p>
            <br />
            <br />
            <br />

            <p className='character red'>
              <span>
                <strong>Amy</strong>
                Asian , Age: 11, optimist, alway has positive outlook not
                annoying), mimics florence in a way
              </span>{' '}
              Dark green sweater, White collar, black solid headband, black hair
              brown eyes
            </p>

            <p className='character red'>
              <span>
                <strong>Malcom</strong>- White, Age: 9, not very serious, Always
                trying to get a joke in, very impulsive, very childlike
              </span>{' '}
              Goggles, (naruto like) messy blonde hair, green eyes, pajama top
            </p>

            <p className='character red'>
              <span>
                <strong>Jamie</strong>
                Hispanic Boy, Age: 12, liked by very few, seen as an outcast to
                most of the group besides amy
              </span>{' '}
              Red and black plaid top, tan bandana on neck buzz cut black hair
              brown eyes
            </p>

            <p className='character red'>
              <span>
                <strong>April</strong>- Black, Girl, Age: 14, Butts heads with
                florence, Very one sided conflict with florence, jealous of her
                likeness Constant disagreement with Wade
              </span>{' '}
              Red cap, blue shirt, gold hoop earrings, black hair hazel eyes
            </p>

            <p className='character red'>
              <span>
                <strong>Corry</strong>
                Boy, White 11, extra, does not say much
              </span>{' '}
              black tee with white stripes, brown hair green eyes
            </p>

            <p className='character red'>
              <span>
                <strong>Rachel</strong>- White girl, 13 “big boned’ has the
                responsibility of raising the baby of the group.
              </span>{' '}
              Gray shirt, light blue overalls with buttons (non-denim) pink
              cardigan, ginger hair green eyes
            </p>

            <p className='character red'>
              <span>
                <strong>Colduroy</strong>- White Boy Toddler (2),
              </span>{' '}
              White T-shirt, Green overalls with red buttons
            </p>

            <p className='character red'>
              <span>
                <strong>Gutworths clean up men</strong>2 men in
              </span>{' '}
              lime green hazmat suits with black gas mask (world war 2 german
              mask look)
            </p>

            <p className='character red'>
              <span>
                <strong>Benji Homeless dog</strong>- Anatolian Shepherd, worn
                out
              </span>{' '}
              Blue collar, Gold name tag with benji on it
            </p>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content'>
          <div className='left-the-specs'>
            <h2 className='h2-heading'>THE SPECS</h2>
            <p className='nomral-text'>
              Each Bored Ape is unique and programmatically generated from over
              170 possible traits, including expression, headwear, clothing, and
              more. All apes are dope, but some are rarer than others.
              <br />
              The apes are stored as ERC-721 tokens on the Ethereum blockchain
              and hosted on IPFS. <a href='#'>(See Record and Proof.) </a>{' '}
              Purchasing an ape costs 0.08 ETH.
              <br />
              To access members-only areas such as <a href='#'>THE BATHROOM</a>,
              Apeholders will need to be signed into their Metamask Wallet.
            </p>
          </div>
          <div className='right-the-specs'>
            <img src={gif} />
          </div>
        </div>

        <hr className='seprator-small' />

        <div className='welcome-club'>
          <div className='wc-title'>
            <h2 className='h2-heading'>WELCOME TO THE CLUB</h2>
            <p className='nomral-text'>
              When you buy a Bored Ape, you’re not simply buying an avatar or a
              provably-rare piece of art. You are gaining membership access to a
              club whose benefits and offerings will increase over time. Your
              Bored Ape can serve as your digital identity, and open digital
              doors for you.
            </p>
          </div>
          <div className='wc-cards'>
            <div className='wc-card'>
              <div className='wc-card-img'>
                <img src={icon1} alt='' />
              </div>
              <p>10,000 Provably-rare Bored Ape tokens</p>
            </div>
            <div className='wc-card'>
              <div className='wc-card-img'>
                <img src={icon2} alt='' />
              </div>
              <p>Fair Launch, fair distribution: All apes cost 0.08 ETH</p>
            </div>
            <div className='wc-card'>
              <div className='wc-card-img'>
                <img src={icon3} alt='' />
              </div>
              <p>
                Ownership and commercial usage rights given to the consumer over
                their NFT
              </p>
            </div>
            <div className='wc-card'>
              <div className='wc-card-img'>
                <img src={icon4} alt='' />
              </div>
              <p>The Bathroom: A member's-only graffiti board</p>
            </div>
            <div className='wc-card'>
              <div className='wc-card-img'>
                <img src={icon5} alt='' />
              </div>
              <p>Gain additional benefits through roadmap activations</p>
            </div>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content'>
          <div className='left-the-specs'>
            <h2 className='h2-heading'>THE BATHROOM</h2>
            <p className='nomral-text'>
              The BAYC Bathroom will become operational once the presale period
              is over. It contains a canvas accessible only to wallets
              containing at least one ape. Like any good dive bar bathroom, this
              is the place to draw, scrawl, or write expletives.
              <br />
              <br />
              Each ape-holder will be able to paint a pixel on the bathroom wall
              every fifteen minutes. Think of it as a collaborative art
              experiment for the cryptosphere. A members-only canvas for the
              discerning minds of crypto twitter.
              <br />
              <br />
              We're pretty sure it's going to be full of dicks.
            </p>
          </div>
          <div className='right-the-specs'>
            <img src={toilet} className='toilet-img' />
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content' id='roadmap'>
          <div className='left-the-specs'>
            <h2 className='h2-heading'>ROADMAP ACTIVATIONS</h2>
            <p className='nomral-text'>
              We’re in this for the long haul.
              <br />
              <br />
              We’ve set up some goalposts for ourselves. Once we hit a target
              sell through percentage, we will begin to work on realizing the
              stated goal. We're pretty sure it's going to be full of dicks.
            </p>
            <div className='road-map-activites'>
              <div className='percentage'>0%</div>
              <div className='rma-text'>
                Pre-sale Main characters will be revealed Listening party for
                discord members
              </div>

              <div className='percentage'>25%</div>
              <div className='rma-text'>
                3 ETH to 3 Lucky Holders First orphanage donation
              </div>

              <div className='percentage'>50%</div>
              <div className='rma-text'>
                Merch store launched First music album released 2 rare NFTs held
                back from sale airdropped to holders
              </div>

              <div className='percentage'>75%</div>
              <div className='rma-text'>
                DAO Initialization Exclusive pieces come out in merch store 3
                rare NFTs held back from sale airdropped to holders
              </div>

              <div className='percentage'>100%</div>
              <div className='rma-text no-line'>
                2nd drop of 5,000 date will be announced Society meetup in
                Atlanta announced 2nd orphanage donation
              </div>
            </div>
          </div>
          <div className='right-the-specs' style={{ justifyContent: 'center' }}>
            <div className='shirt-img'>
              <img src={shirt} />
            </div>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='the-specs-content'>
          <div className='left-the-specs'>
            <h2 className='h2-heading'>COMMUNITY TOOLS</h2>
            <p className='nomral-text'>
              Here are some helpful tools created by the Bored Ape Yacht Club
              community. Please note that these are unofficial in nature. Every
              assignment of an ape's overall value or rarity is inherently
              subjective.
            </p>
          </div>
          <div className='right-the-specs community-links'>
            <a href='/' className='community-link'>
              NFTEXP.IO
            </a>
            <a href='/' className='community-link'>
              RARITY.TOOLS
            </a>
          </div>
        </div>

        <hr className='seprator-small' />
        <div className='club-section' id='team'>
          <div className='club-title'>
            <h1>THE TEAM</h1>
            <p>
              BAYC was created by four friends who set out to make some dope
              apes, test our skills, and try to build something (ridiculous).
              <p className='teams'>
                <span>PRIEL:</span> Project Founder, Story Development, Music
                Creation
                <br />
                <br />
                <span> Tim:</span> Story Development, Music Creation
                <br />
                <br />
                <span> EFAZELON:</span> Marketing, Com Outreach <br />
                <br />
                <span>Niko: </span> Logistics Advisor, Coordinator
                <br />
                <br />
              </p>
            </p>
          </div>
          <div className='club-images'>
            <img src={ape5} alt='ape5' />
            <img src={ape6} alt='ape6' />
            <img src={ape7} alt='ape7' />
            <img src={ape8} alt='ape8' />
          </div>
        </div>

        <p className='address-link'>
          VERIFIED SMART CONTRACT ADDRESS:{' '}
          <a href='/'>0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</a>
        </p>
      </div>
      <Footer />
    </div>
  )
}
