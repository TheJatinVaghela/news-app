import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem.js'
import Li_comp from './LI_comp.js'
export default class News extends Component {
    static defaultProps = {
      Search: 'Search',
    }
    static propType={
      Search: PropTypes.string,
    }

    TEXT="Full Info";
     articles={
      "status": "ok",
      "totalResults": 10032,
      "articles":[
      
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Gian M. Volpicelli",
            "title": "The Rise and Fall of a Bitcoin Mining Sensation",
            "description": "Compass Mining grew quickly during crypto’s halcyon days. Now, its customers and their thousands of mining machines are stuck.",
            "url": "https://www.wired.com/story/compass-mining-bitcoin-russia/",
            "urlToImage": "https://media.wired.com/photos/62e9c5e1d7368105da057de3/191:100/w_1280,c_limit/BitRiver-Mining-Center-Rise-And-Fall-Of-Bitcoin-Mining-Business-1184520941.jpg",
            "publishedAt": "2022-08-03T11:00:00Z",
            "content": "It was 8:45 in the morning of June 13 when Bill Stewart, the CEO of Maine-based bitcoin mining business Dynamics Mining, received a call from one of his employees. He's like, Every machine inside of … [+3472 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Lily Hay Newman, Andy Greenberg",
            "title": "Bitcoin Fog Case Could Put Cryptocurrency Tracing on Trial",
            "description": "Roman Sterlingov, accused of laundering $336 million, is proclaiming his innocence—and challenging a key investigative tool.",
            "url": "https://www.wired.com/story/bitcoin-fog-roman-sterlingov-blockchain-analysis/",
            "urlToImage": "https://media.wired.com/photos/62e95bada1dc74857a858363/191:100/w_1280,c_limit/Bitcoin-Fog-Security-GettyImages-1241143235.jpg",
            "publishedAt": "2022-08-02T22:02:13Z",
            "content": "Tools to trace cryptocurrencies have, over just the last several years, allowed law enforcement agencies to convict dark web black market administrators, recover millions in ransomware payments, seiz… [+3510 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Gian M. Volpicelli",
            "title": "Ethereum's 'Merge' Is a Big Deal for Crypto—and the Planet",
            "description": "One of the most influential cryptocurrency projects is set to finally ditch proof-of-work mining.",
            "url": "https://www.wired.com/story/ethereum-merge-big-deal-crypto-environment/",
            "urlToImage": "https://media.wired.com/photos/62fe63bcfd602ff2f11e6fbf/191:100/w_1280,c_limit/Ethereum-Ditches-Crypto-Business-1036181110.jpg",
            "publishedAt": "2022-08-18T16:09:33Z",
            "content": "Cryptocurrencies are often criticized for being bad for the planet. Every year, bitcoin mining consumes more energy than Belgium, according to the University of Cambridges Bitcoin Electricity Consump… [+3829 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "Crypto weekly: Bitcoin breaks freefall - Reuters",
            "description": "From Bitcoin highs to blockchain bridge lows, to why some of the worlds biggest technology companies are freezing jobs, we round up the week’s big stories in the world of virtual money. Kristy Kilburn reports.",
            "url": "https://www.reuters.com/video/watch/idOV602802082022RP1",
            "urlToImage": "https://static.reuters.com/resources/r/?d=20220802&i=OV602802082022RP1&r=OV602802082022RP1&t=2",
            "publishedAt": "2022-08-02T21:21:55Z",
            "content": "Posted \r\nFrom Bitcoin highs to blockchain bridge lows, to why some of the worlds biggest technology companies are freezing jobs, we round up the weeks big stories in the world of virtual money. Krist… [+17 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Bitcoin drops 1.6% to below $20000 - Reuters",
            "description": "Bitcoin was off 1.63% at $19,920 by late afternoon in Europe on Saturday, down $330 from its previous close.",
            "url": "https://www.reuters.com/markets/us/bitcoin-drops-16-below-20000-2022-08-27/",
            "urlToImage": "https://www.reuters.com/resizer/AjlubzI3WawXrIpEPQYO0MzwlPY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W4IF6T6QZFNZLAUT4ZH3FGXT6Y.jpg",
            "publishedAt": "2022-08-27T16:04:00Z",
            "content": "Aug 27 (Reuters) - Bitcoin was off 1.63% at $19,920 by late afternoon in Europe on Saturday, down $330 from its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is down 58… [+336 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "Bitcoin rises 4% to retake $24,000 as investors shift to risk-on ahead of this week's inflation report",
            "description": "Bitcoin has trimmed this year's loss to roughly 50%. A decline in US Treasury yields has aided bitcoin as the cryptocurrency offers no yield.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-cryptocurrencies-24000-markets-inflation-yields-fed-powell-cpi-2022-8",
            "urlToImage": "https://i.insider.com/62b042ec4245600018dda5b4?width=1200&format=jpeg",
            "publishedAt": "2022-08-08T17:47:50Z",
            "content": "Bitcoin advanced to $24,000 for the first time in August, a move taking place before financial markets assess a high-profile reading of US inflation this week. \r\nBitcoin rose as much as 4% to $24,191… [+1770 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Cryptoverse: Bitcoin beats the heat in a jumpin' July - Reuters",
            "description": "It's been a good month for bitcoin - and we haven't said that for a while.",
            "url": "https://www.reuters.com/technology/cryptoverse-bitcoin-beats-heat-jumpin-july-2022-08-02/",
            "urlToImage": "https://www.reuters.com/resizer/SUiQzSC61VNz4Ok30YOCbvAFg88=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HZTIOIS3NZNIDHH7HUT62Y42IA.jpg",
            "publishedAt": "2022-08-02T05:12:00Z",
            "content": "Aug 2 (Reuters) - It's been a good month for bitcoin - and we haven't said that for a while.\r\nAfter months of freefall, it jumped more than 17% in July, its best performance since October. Ether rose… [+3538 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Bitcoin rises 3.4% to $24584; up 39.7% from year low in June - Reuters",
            "description": "Bitcoin rose 3.36% to $24,584.24 at 1707 GMT on Saturday, adding $798.93 to its previous close.",
            "url": "https://www.reuters.com/technology/bitcoin-rises-34-24584-up-397-year-low-june-2022-07-30/",
            "urlToImage": "https://www.reuters.com/resizer/olDHRm0jmk0gc_1U1JwzC8ItOzY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KGBQSYSMQRO47BZLCENBDEJYZA.jpg",
            "publishedAt": "2022-07-30T17:21:00Z",
            "content": "July 30 (Reuters) - Bitcoin rose 3.36% to $24,584.24 at 1707 GMT on Saturday, adding $798.93 to its previous close.\r\nBitcoin, the world's biggest, best-known cryptocurrency, is up 39.7% from the year… [+345 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Sudden crypto drop sends bitcoin to 3-wk low - Reuters",
            "description": "Cryptocurrencies fell sharply on Friday, with sudden selling dragging bitcoin to a three-week low.",
            "url": "https://www.reuters.com/markets/us/sudden-crypto-drop-sends-bitcoin-3-wk-low-2022-08-19/",
            "urlToImage": "https://www.reuters.com/resizer/xTN_w6bEGIrdArCCNImqU8X1WnY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VEMNAX3DIBMGZGCA5HIDFVEFVM.jpg",
            "publishedAt": "2022-08-19T07:19:00Z",
            "content": "SINGAPORE, Aug 19 (Reuters) - Cryptocurrencies fell sharply on Friday, with sudden selling dragging bitcoin to a three-week low.\r\nThe reason for the drop was not immediately clear. Bitcoin fell as mu… [+312 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Simon Chandler)",
            "title": "How a Bitcoin wallet gives you more security and control over your digital assets",
            "description": "A Bitcoin wallet is a software program that allows you to transfer and store bitcoin. It comes as either hardware or software, with hardware wallets offering the most security.",
            "url": "https://www.businessinsider.com/personal-finance/bitcoin-wallet",
            "urlToImage": "https://i.insider.com/60706d0ba451820019b3a3e1?width=1200&format=jpeg",
            "publishedAt": "2022-08-11T21:19:33Z",
            "content": "\"Not your keys, not your coin\" is a popular saying within some parts of the cryptocurrency community. It's a reminder that if you choose to store your bitcoin on a cryptocurrency exchange account, th… [+7518 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "BlackRock launches spot bitcoin private trust for U.S. clients - Reuters",
            "description": "BlackRock Inc <a href=\"https://www.reuters.com/companies/BLK.N\" target=\"_blank\">(BLK.N)</a>, the world's biggest asset manager, has launched a spot bitcoin private trust for institutional clients in the United States, according to a blog post on its website.",
            "url": "https://www.reuters.com/technology/blackrock-launches-spot-bitcoin-private-trust-us-clients-2022-08-11/",
            "urlToImage": "https://www.reuters.com/resizer/dm3gxxy55l135TSvy6WVVBxoBMo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RW5HROCP6NNKXKM3TSRKNQRYSQ.jpg",
            "publishedAt": "2022-08-11T13:49:00Z",
            "content": "Aug 11 (Reuters) - BlackRock Inc (BLK.N), the world's biggest asset manager, has launched a spot bitcoin private trust for institutional clients in the United States, according to a blog post on its … [+1171 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Cryptoverse: Bleeding bitcoin's holding out for a hero - Reuters",
            "description": "Cryptoverse: Bleeding bitcoin's holding out for a hero  Reuters",
            "url": "https://www.reuters.com/markets/europe/cryptoverse-bleeding-bitcoins-holding-out-hero-2022-08-30/",
            "urlToImage": "https://www.reuters.com/resizer/14CC3_xOfbC5OEGUr3z7N39xNHg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BUOALE3VDVLURENRYFCO2JVESE.jpg",
            "publishedAt": "2022-08-30T05:16:00Z",
            "content": "Aug 30 (Reuters) - Who can save bitcoin?\r\nThe world's biggest cryptocurrency can't seem to catch a break. It finally looked to be regaining strength this month, breaching $25,000 for the first time s… [+3695 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Honduras launches 'Bitcoin Valley' in the tourist town of Santa Lucia - Reuters.com",
            "description": "People can pay for a slushie with crypto in the streets of \"Bitcoin Valley,\" a project in the Honduran tourist enclave of Santa Lucia through which the country has entered the digital currency trend.",
            "url": "https://www.reuters.com/world/americas/honduras-launches-bitcoin-valley-tourist-town-santa-lucia-2022-07-29/",
            "urlToImage": "https://www.reuters.com/resizer/jPZytgVrBXWFzrPY9IVzSoBkS6w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4ZHVPFZ4KJJITKXCQMIMCUFRDM.jpg",
            "publishedAt": "2022-07-29T19:46:00Z",
            "content": "July 29 (Reuters) - People can pay for a slushie with crypto in the streets of \"Bitcoin Valley,\" a project in the Honduran tourist enclave of Santa Lucia through which the country has entered the dig… [+2277 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Guardian"
            },
            "author": "Alex Hern",
            "title": "I’m no longer making predictions about cryptocurrency. Here’s why",
            "description": "If you’d bought or sold bitcoin every time I wrote about it over the last decade, how much would you have made? Let’s do the maths<ul><li>Don’t get TechScape delivered to your inbox? Sign up here</li></ul>I’ve been writing about cryptocurrency for my entire c…",
            "url": "https://amp.theguardian.com/technology/2022/aug/03/techscape-bitcoin-cryptocurrency-predictions",
            "urlToImage": "https://i.guim.co.uk/img/media/47c0e67fc97c6e8f15012744ac879ce0918cad9e/46_319_3487_2092/master/3487.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=59218b55d3e48d92b1ab13f378cbf129",
            "publishedAt": "2022-08-03T10:45:25Z",
            "content": "Ive been writing about cryptocurrency for my entire career. In that time, one point Ive always stuck to is simple: dont listen to me for investment advice. Today, I want to quantify why.\r\nBitcoin was… [+7658 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "Michael Saylor to step down as MicroStrategy CEO as the software maker records $917 million charge on bitcoin investment",
            "description": "Saylor will become executive chairman at MicroStrategy and will focus more on the company's bitcoin acquisition strategy.",
            "url": "https://markets.businessinsider.com/news/currencies/microstrategy-bitcoin-michael-saylor-ceo-917-million-impairment-charge-crypto-022-8",
            "urlToImage": "https://i.insider.com/60ca262123393a00188e3872?width=1200&format=jpeg",
            "publishedAt": "2022-08-03T13:37:24Z",
            "content": "MicroStrategy's founder Michael Saylor will step down as CEO, with the move coming after the enterprise software maker took a quarterly impairment charge of more than $900 million related to the drop… [+1552 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Davíd Lavie)",
            "title": "Bitcoin halving is how the supply of the world's largest cryptocurrency is controlled",
            "description": "Bitcoin halving is when the rate of new bitcoins entering circulation is cut in half, which occurs approximately every four years.",
            "url": "https://www.businessinsider.com/personal-finance/bitcoin-halving",
            "urlToImage": "https://i.insider.com/619d45c2d2fd62001820b8d0?width=1200&format=jpeg",
            "publishedAt": "2022-08-16T16:59:51Z",
            "content": "Despite its somewhat nebulous-seeming nature, Bitcoin is a finite resource. There will only ever be 21 million Bitcoin. So far, 19 million have already been mined, meaning there's just two million Bi… [+6317 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Leslie Quander Wooldridge)",
            "title": "A bitcoin IRA lets you profit from the cryptocurrency's potential gains in a tax-advantaged way",
            "description": "A bitcoin IRA is a self-directed individual retirement account allowed to hold cryptocurrencies. They have high fees but allow tax-advantaged profits.",
            "url": "https://www.businessinsider.com/personal-finance/what-is-a-bitcoin-ira",
            "urlToImage": "https://i.insider.com/600f7cb667a6bc0019d9af3c?width=1200&format=jpeg",
            "publishedAt": "2022-08-26T17:24:32Z",
            "content": "Not a day goes by without bitcoin being in the news. And given the cryptocurrency's phenomenal price rise, from zero to approximately $32,000 in a little over a decade, you like many other individual… [+8011 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "DOJ demands more insight into Celsius' severance payments, bitcoin sales - Reuters.com",
            "description": "The U.S. Department of Justice has demanded more court oversight of Celsius Networks' plans to make employee severance payments and to sell bitcoins during the cryptocurrency lender's bankruptcy.",
            "url": "https://www.reuters.com/legal/litigation/doj-demands-more-insight-into-celsius-severance-payments-bitcoin-sales-2022-08-10/",
            "urlToImage": "https://www.reuters.com/resizer/ALN_nDjg-snAvii2TknPvulz5FU=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5IQLPL77JBKSXIUM6RJR5PHKRE.jpg",
            "publishedAt": "2022-08-10T23:11:00Z",
            "content": "(Reuters) - The U.S. Department of Justice has demanded more court oversight of Celsius Networks' plans to make employee severance payments and to sell bitcoins during the cryptocurrency lender's ban… [+3074 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Katie Canales)",
            "title": "The crypto winter has come for Jack Dorsey's company, Block",
            "description": "The ex-Twitter CEO's digital payments firm reported a fall in revenue due to bitcoin's slumped price and \"broader uncertainty\" in the crypto world.",
            "url": "https://www.businessinsider.com/crypto-winter-impacts-jack-dorsey-block-earnings-cash-app-2022-8",
            "urlToImage": "https://i.insider.com/600f0ea0cf23090019e97248?width=1200&format=jpeg",
            "publishedAt": "2022-08-05T15:40:12Z",
            "content": "No one's safe from the beating that the crypto market is taking, including noted bitcoin maximalist Jack Dorsey.\r\nThe founder and ex-CEO of Twitter turned more of his attention to his digital payment… [+1912 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Andrew Couts",
            "title": "The US Emergency Alert System Has Dangerous Flaws",
            "description": "Plus: A crypto-heist extravaganza, a peek at an NSO spyware dashboard, and more.",
            "url": "https://www.wired.com/story/fema-emergency-alert-flaws-security-roundup/",
            "urlToImage": "https://media.wired.com/photos/62edb7e154d910713ee4f20c/191:100/w_1280,c_limit/US-Emergency-Alert-System-Security-GettyImages-1166460347.jpg",
            "publishedAt": "2022-08-06T13:00:00Z",
            "content": "Cryptocurrency tracing has become a key tool for police investigating everything from fraud and ransomware to child abuse. But its accuracy may soon be put to the test.\r\nThis week, we reported on new… [+5333 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Crypto platform Zipmex to start releasing Bitcoin, Ether for customers - Reuters",
            "description": "Crypto exchange Zipmex will release Ethereum and Bitcoin tokens from this week, a spokesperson said on Monday, allowing 60% of its customers to retrieve their digital assets after a suspension of withdrawals from its Z Wallet product.",
            "url": "https://www.reuters.com/technology/crypto-platform-zipmex-start-releasing-bitcoin-ether-customers-2022-08-08/",
            "urlToImage": "https://www.reuters.com/resizer/Fd5a-BznMketgq1x6iGznPIbLTM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DAQG47AXNNNY5CJY7EM4QCRX6Q.jpg",
            "publishedAt": "2022-08-08T10:29:00Z",
            "content": "BANGKOK, Aug 8 (Reuters) - Crypto exchange Zipmex will release Ethereum and Bitcoin tokens from this week, a spokesperson said on Monday, allowing 60% of its customers to retrieve their digital asset… [+874 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "MicroStrategy Reports $1 Billion Loss, CEO Steps Down To Focus On Bitcoin",
            "description": "MicroStrategy co-founder Michael Saylor gave up his chief executive officer title and said he'll focus more on Bitcoin after the enterprise-software maker reported a loss of more than $1 billion related to the second-quarter plunge in the price of the cryptoc…",
            "url": "https://slashdot.org/story/22/08/02/2341234/microstrategy-reports-1-billion-loss-ceo-steps-down-to-focus-on-bitcoin",
            "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
            "publishedAt": "2022-08-03T01:25:00Z",
            "content": "Saylor, who founded the Tysons Corner, Virginia-based company in 1989, will continue to serve as executive chairman as retains its Bitcoin buying strategy. MicroStrategy President Phong Le will take … [+922 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Valereum to end bitcoin mining to focus on Gibraltar exchange - Reuters",
            "description": "Blockchain company Valereum <a href=\"https://www.reuters.com/companies/6TJ.SG\" target=\"_blank\">(6TJ.SG)</a> said on Thursday it was selling its bitcoin mining assets to Vinanz Ltd for a 24% stake in the company as part of plans to acquire and expand the Gibra…",
            "url": "https://www.reuters.com/technology/valereum-end-bitcoin-mining-focus-gibraltar-exchange-2022-08-18/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=108",
            "publishedAt": "2022-08-18T10:56:00Z",
            "content": "LONDON, Aug 18 (Reuters) - Blockchain company Valereum (6TJ.SG) said on Thursday it was selling its bitcoin mining assets to Vinanz Ltd for a 24% stake in the company as part of plans to acquire and … [+1577 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "Block slides as drop in bitcoin revenue dents 2nd-quarter earnings for the Cash App parent",
            "description": "Bitcoin's price dropped by nearly 60% during the second quarter but has recovered slightly to trade above $23,000.",
            "url": "https://markets.businessinsider.com/news/stocks/block-stock-price-bitcoin-crypto-revenue-charge-cashapp-market-btc-dorsey-2022-8",
            "urlToImage": "https://i.insider.com/62491315e22adb0018d1c24c?width=1200&format=jpeg",
            "publishedAt": "2022-08-05T14:13:09Z",
            "content": "Block shares fell Friday after the payments processing company took a second-quarter impairment charge related to bitcoin's crash during the so-called crypto winter for digital assets. \r\nShares fell … [+1689 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "Coinbase will help BlackRock's top clients gain exposure to the cryptocurrency market in a new partnership",
            "description": "The partnership will initially be limited to bitcoin exposure, according to a Coinbase blog post. Shares of the exchange jumped as much as 21% early Thursday.",
            "url": "https://markets.businessinsider.com/news/currencies/coinbase-blackrock-partnership-digital-asset-news-crypto-bitcoin-markets-inflation-2022-8",
            "urlToImage": "https://i.insider.com/62ebc8ab05c1fd001846fdaa?width=1200&format=jpeg",
            "publishedAt": "2022-08-04T14:24:15Z",
            "content": "Coinbase is partnering with BlackRock to help some of the asset manager's top clients gain greater exposure to cryptocurrencies. \r\nThe world's largest asset manager tapped Coinbase in a move that mar… [+1154 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Simon Chandler)",
            "title": "How to invest in blockchain, the high-risk but high-potential technology behind bitcoin and other digital transactions",
            "description": "Investing in blockchain technology has become hot due to its role in bitcoin and other promising developments for its use. Here are ways to invest.",
            "url": "https://www.businessinsider.com/personal-finance/how-to-invest-in-blockchain-technology",
            "urlToImage": "https://i.insider.com/5ff4f229d184b30018aad332?width=1200&format=jpeg",
            "publishedAt": "2022-07-29T20:26:39Z",
            "content": "Bitcoin often dominates the financial news, riveting investors with its volatile price swings and appreciation potential. Getting far less attention, though, is blockchain, the database technology on… [+10653 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "mturner@businessinsider.com (Matt Turner,Jordan Parker Erb,Ben Tobin,Lisa Ryan)",
            "title": "How Walmart is trying to solve its excessive-inventory issues",
            "description": "Today we're kicking things off with a look at Walmart's excessive-inventory issues, then a look at return-to-office orders, a bitcoin mission, and more.",
            "url": "https://www.businessinsider.com/walmart-memo-inventory-price-drop-profit-summer-inflation-2022-7",
            "urlToImage": "https://i.insider.com/62e42a454b455800188b68ff?width=1200&format=jpeg",
            "publishedAt": "2022-07-31T12:00:00Z",
            "content": "Hi, I'm Matt Turner, the editor in chief of business at Insider. Welcome back to Insider Weekly, a roundup of some of our top stories. \r\nOn the agenda today:\r\nBefore we get started: Ben Tobin, our re… [+4343 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "eMarketer"
            },
            "author": "insider@insider.com (Adriana Nunez)",
            "title": "Block slows investment, hiring after mixed Q2 but plays up growth initiatives",
            "description": "Block's gross payment volume surged 23% YoY in Q2—but total net revenues dropped 6% YoY as a result of Bitcoin losses.",
            "url": "https://www.emarketer.com/content/block-slows-investment-hiring-after-mixed-q2-plays-up-growth-initiatives",
            "urlToImage": "https://contentstorage-nax1.emarketer.com/4e404a766a2b47b726ddb320cf0f2b59/default-image-share.png?im=FitAndFill,width=1200,height=630",
            "publishedAt": "2022-08-08T13:28:05Z",
            "content": "The data: Blocks gross payment volume (GPV) increased 23% year over year (YoY) in Q2, a slowdown from 88% YoY growth during the same period last year, per\r\n its shareholder letter. However, total net… [+2569 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Guardian"
            },
            "author": "Dan Milmo Global technology editor",
            "title": "Another court case fails to unlock the mystery of bitcoin’s Satoshi Nakamoto",
            "description": "As Craig Wright’s legal tussles pile up, the world is no closer to knowing who the currency’s inventor really isWho is Satoshi Nakamoto? The mysterious inventor of bitcoin is a renowned figure in the world of cryptocurrency but his true identity is unknown.Ho…",
            "url": "https://amp.theguardian.com/technology/2022/aug/06/another-court-case-fails-to-unlock-the-mystery-of-bitcoins-satoshi-nakamoto",
            "urlToImage": "https://i.guim.co.uk/img/media/5e754634d68931ac0ba3ae191be4dba3a14c20b9/0_371_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3e2bcabf223f0e7bb598dd3d9d37b22a",
            "publishedAt": "2022-08-06T09:00:11Z",
            "content": "Who is Satoshi Nakamoto? The mysterious inventor of bitcoin is a renowned figure in the world of cryptocurrency but his true identity is unknown.\r\nHowever, the British blogger Peter McCormack was cer… [+5606 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Dorsey-led Block posts loss for second quarter on bitcoin slump - Reuters",
            "description": "Jack Dorsey-led Block Inc <a href=\"https://www.reuters.com/companies/SQ.N\" target=\"_blank\">(SQ.N)</a> on Thursday reported a loss for the second quarter as a bruising selloff in cryptocurrency markets hurt the fintech company's earnings from bitcoin trades on…",
            "url": "https://www.reuters.com/technology/dorsey-led-block-posts-loss-second-quarter-2022-08-04/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=106",
            "publishedAt": "2022-08-04T20:37:00Z",
            "content": "Aug 4 (Reuters) - Jack Dorsey-led Block Inc (SQ.N) on Thursday reported a loss for the second quarter as a bruising selloff in cryptocurrency markets hurt the fintech company's earnings from bitcoin … [+879 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Block shares slip after crypto winter dampens quarterly results - Reuters",
            "description": "Shares of Jack Dorsey-led Block Inc <a href=\"https://www.reuters.com/companies/SQ.N\" target=\"_blank\">(SQ.N)</a>, a digital payments firm that has bet big on bitcoin, declined nearly 7% in premarket trading on Friday after the company reported a loss in quarte…",
            "url": "https://www.reuters.com/technology/block-shares-slip-after-crypto-winter-dampens-quarterly-results-2022-08-05/",
            "urlToImage": "https://www.reuters.com/resizer/SMSA0eNWtPIR-Mx2xNcRc0QEqpI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PA7ZOH5NSRPU7IQAMPPAGLSBFA.jpg",
            "publishedAt": "2022-08-05T11:14:00Z",
            "content": "Aug 5 (Reuters) - Shares of Jack Dorsey-led Block Inc (SQ.N), a digital payments firm that has bet big on bitcoin, declined nearly 7% in premarket trading on Friday after the company reported a loss … [+1944 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "jsor@insider.com (Jennifer Sor)",
            "title": "Bitcoin bull Mike Novogratz says crypto's forced deleveraging is over and bitcoin is still an asset to hold amid economic uncertainty",
            "description": "\"The worst is over. There is no more forced deleveraging that's going to happen,\" the famed crypto investor told CNBC.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-mike-novogratz-crypto-outlook-crash-deleveraging-cycle-ethereum-merge-2022-8",
            "urlToImage": "https://i.insider.com/62f111c28677d80018ee50fd?width=1200&format=jpeg",
            "publishedAt": "2022-08-10T16:46:31Z",
            "content": "Billionaire bitcoin bull Mike Novogratz believes the forced deleveraging of the cryptocurrency market is over and that investors can expect new narratives to shape the space following a brutal quarte… [+1750 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Entrepreneur"
            },
            "author": "Jea Yu",
            "title": "Is it Time to Throw in the Towel On Coinbase Stock?",
            "description": "Cryptocurrency trading marketplace Coinbase (NASDAQ: COIN) stock triggered a short squeeze on its horrendous Q2 2022 earnings report.",
            "url": "https://www.entrepreneur.com/article/433472",
            "urlToImage": "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-433472.jpeg",
            "publishedAt": "2022-08-16T05:00:00Z",
            "content": "Cryptocurrency trading marketplace Coinbase (NASDAQ: COIN) stock triggered a short squeeze on its horrendous Q2 2022 earnings report. Shares are still down (-66%) for the year even after more than do… [+5677 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Senate bill would hand bitcoin, ether oversight to commodities regulator - Reuters",
            "description": "A new bill introduced in the U.S. Senate would make the Commodity Futures Trading Commission (CFTC) the direct regulator of the biggest cryptocurrencies.",
            "url": "https://www.reuters.com/markets/us/senate-bill-would-hand-bitcoin-ether-oversight-commodities-regulator-2022-08-03/",
            "urlToImage": "https://www.reuters.com/resizer/D6UAwg9xkBVA9UviKEjSKPGTI3w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QQABWUBD6JJ3JJLRDJTC3IQMFI.jpg",
            "publishedAt": "2022-08-03T15:16:00Z",
            "content": "WASHINGTON, Aug 3 (Reuters) - A new bill introduced in the U.S. Senate would make the Commodity Futures Trading Commission (CFTC) the direct regulator of the biggest cryptocurrencies.\r\nThe measure, i… [+2256 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Crypto lender Celsius gets court sign-off to sell bitcoin, but not stocks or debt - Reuters",
            "description": "Crypto lender Celsius Network LLC got signoff on Tuesday from a U.S. bankruptcy judge to mine and sell bitcoins during its bankruptcy.",
            "url": "https://www.reuters.com/legal/litigation/crypto-lender-celsius-gets-court-sign-off-sell-bitcoin-not-stocks-or-debt-2022-08-16/",
            "urlToImage": "https://www.reuters.com/resizer/M5_3h5HYQWktCbzkYCoKvSuEJBs=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KK6EBWEIDBOHZJJDF3XGYIPGWY.jpg",
            "publishedAt": "2022-08-16T22:51:00Z",
            "content": "(Reuters) - Crypto lender Celsius Network LLC got signoff on Tuesday from a U.S. bankruptcy judge to mine and sell bitcoins during its bankruptcy.\r\nChief U.S. Bankruptcy Judge Martin Glenn in Manhatt… [+3139 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Entrepreneur"
            },
            "author": "Anushka Dutta",
            "title": "3 Risky Crypto Stocks Investors Should Avoid",
            "description": "Bitcoin, the largest cryptocurrency, has been trading in a tight range due to the volatile economic backdrop. Moreover, with a disappointing global growth forecast, the crypto market might be bracing...",
            "url": "https://www.entrepreneur.com/article/432840",
            "urlToImage": "https://assets.entrepreneur.com/providers/stocknews/hero-image-stocknews-432840.jpeg",
            "publishedAt": "2022-08-05T14:29:38Z",
            "content": "Bitcoin, the largest cryptocurrency, has been trading in a tight range due to the volatile economic backdrop. Moreover, with a disappointing global growth forecast, the crypto market might be bracing… [+5110 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Guardian"
            },
            "author": "Joe Middleton and agencies",
            "title": "Man who threw away £150m in bitcoin hopes AI and robot dogs will get it back",
            "description": "Computer engineer who accidentally discarded hard drive consults Newport council over schemeA computer engineer who accidentally threw away a hard drive containing approximately £150m worth of bitcoin plans to use artificial intelligence to search through tho…",
            "url": "https://amp.theguardian.com/technology/2022/aug/02/man-hopes-ai-and-robot-dogs-will-help-recover-150m-in-bitcoin-from-landfill",
            "urlToImage": "https://i.guim.co.uk/img/media/fcb98f8e17e8a355edc88e718c0ee6cdaa4fdba4/805_867_4955_2973/master/4955.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=69d36e8eeb1c06f1a4ffbb4792de9088",
            "publishedAt": "2022-08-02T12:43:51Z",
            "content": "A computer engineer who accidentally threw away a hard drive containing approximately £150m worth of bitcoin plans to use artificial intelligence to search through thousands of tonnes of landfill.\r\nJ… [+2694 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Crypto derivatives volumes surge to $3.12 trillion in July - CryptoCompare - Reuters",
            "description": "Cryptocurrency derivatives trading on centralised exchanges rose to $3.12 trillion in July, a 13% monthly increase, researcher CryptoCompare said on Thursday, as crypto prices show signs of recovery from the recent market crash.",
            "url": "https://www.reuters.com/technology/crypto-derivatives-volumes-surge-312-trillion-july-cryptocompare-2022-08-11/",
            "urlToImage": "https://www.reuters.com/resizer/xTN_w6bEGIrdArCCNImqU8X1WnY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VEMNAX3DIBMGZGCA5HIDFVEFVM.jpg",
            "publishedAt": "2022-08-11T16:13:00Z",
            "content": "LONDON, Aug 11 (Reuters) - Cryptocurrency derivatives trading on centralised exchanges rose to $3.12 trillion in July, a 13% monthly increase, researcher CryptoCompare said on Thursday, as crypto pri… [+2234 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hackaday"
            },
            "author": "Jenny List",
            "title": "Buzzword Bingo Bitcoin Burial Burrowing Blueprint Balked at By Bureaucracy",
            "description": "Many of you will at some time have heard the unfortunate tale of [James Howells], a Welsh IT worker who threw away a hard drive containing 8,000 Bitcoin back in 2013. Over the years he’s hatc…",
            "url": "https://hackaday.com/2022/08/04/buzzword-bingo-bitcoin-burial-burrowing-blueprint-balked-at-by-bureaucracy/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2022/08/btc-landfill-featured.jpg",
            "publishedAt": "2022-08-05T05:00:55Z",
            "content": "Many of you will at some time have heard the unfortunate tale of [James Howells], a Welsh IT worker who threw away a hard drive containing 8,000 Bitcoin back in 2013. Over the years he’s hatched vari… [+1380 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Luke Burgis",
            "title": "The Three-City Problem of Modern Life",
            "description": "What does Athens have to do with Jerusalem—and what do either have to do with Silicon Valley?",
            "url": "https://www.wired.com/story/technology-philosophy-three-city-problem/",
            "urlToImage": "https://media.wired.com/photos/630931d752512a466ff8f66d/191:100/w_1280,c_limit/three-cities.jpg",
            "publishedAt": "2022-08-28T11:00:00Z",
            "content": "But today there is a third city affecting the other two. Silicon Valley, this third city, is not governed primarily by reason (it is practically the mark of a great entrepreneur to not be reasonable)… [+3708 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "As Crypto Crashed, Coinbase Stopped Some Notifications",
            "description": "An anonymous reader shares a report:Back in November 2021, cryptocurrencies, which saw a huge surge during most of the pandemic, suddenly began to nosedive. Joe Hovde, a New York-based data scientist, decided that this might be his moment to buy into crypto: …",
            "url": "https://slashdot.org/story/22/08/15/1539221/as-crypto-crashed-coinbase-stopped-some-notifications",
            "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
            "publishedAt": "2022-08-15T16:41:00Z",
            "content": "Back in November 2021, cryptocurrencies, which saw a huge surge during most of the pandemic, suddenly began to nosedive. Joe Hovde, a New York-based data scientist, decided that this might be his mom… [+1641 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Guardian"
            },
            "author": "Alex Hern",
            "title": "How a major change to ethereum could split users – and cryptocurrency – forever",
            "description": "Ethereum turning off its mining rigs and slashing the currency’s carbon emissions should be good news. But not everyone agrees<ul><li>Don’t get TechScape delivered to your inbox? Sign up here</li></ul>On 15 September, the ethereum blockchain is planning to sw…",
            "url": "https://amp.theguardian.com/technology/2022/aug/24/techscape-ethereum-proof-of-work",
            "urlToImage": "https://i.guim.co.uk/img/media/49ca6967922a4ad467e3fab922346f4b9c7c3308/0_63_4500_2702/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=45c077940a79d1698425f6a726b815fd",
            "publishedAt": "2022-08-24T10:45:33Z",
            "content": "On 15 September, the ethereum blockchain is planning to switch off its mining rigs. If it happens, it should reduce the carbon emissions of the entire ethereum ecosystem by orders of magnitude overni… [+8773 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "Bitcoin-bull Mike Novogratz's Galaxy Digital loses $555 million in 2nd quarter amid crypto winter",
            "description": "The crypto firm's second-quarter losses were more than triple those from a year earlier.",
            "url": "https://markets.businessinsider.com/news/currencies/galaxy-digital-q2-earnings-crypto-bear-market-bitcoin-mike-novogratz-2022-8",
            "urlToImage": "https://i.insider.com/62f111c28677d80018ee50fd?width=1200&format=jpeg",
            "publishedAt": "2022-08-08T14:08:03Z",
            "content": "Galaxy Digital reported a $554.7 million net loss for the second quarter, roughly triple its losses for the same stretch in 2021. \r\nThe company said in a press release Monday that the downbeat crypto… [+1379 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "Bitcoin sees its steepest decline in a month as hopes fade for a less hawkish Fed",
            "description": "Bitcoin's 8% dive on Friday dragged the broader crypto market lower as traders digested hawkish hints from the Fed.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-today-worlds-biggest-crypto-hawkish-fed-rate-hikes-2022-8",
            "urlToImage": "https://i.insider.com/62ff855ff1df7e0018eb481b?width=1200&format=jpeg",
            "publishedAt": "2022-08-19T13:06:51Z",
            "content": "Bitcoin slumped about 8% Friday as markets and investors took in Fed comments that suggested a dovish pivot remained unlikely to happen soon.\r\nThe crypto traded at $21,438 Friday at 8:30 a.m. ET, and… [+1514 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Central African Republic top court blocks purchases with new cryptocurrency - Reuters",
            "description": "Central African Republic's Constitutional Court on Monday ruled that the purchase of citizenship, \"e-residency\" and land using a cryptocurrency the government launched last month was unconstitutional.",
            "url": "https://www.reuters.com/technology/central-african-republic-top-court-blocks-purchases-with-new-cryptocurrency-2022-08-29/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=108",
            "publishedAt": "2022-08-29T18:10:00Z",
            "content": "BANGUI, Aug 29 (Reuters) - Central African Republic's Constitutional Court on Monday ruled that the purchase of citizenship, \"e-residency\" and land using a cryptocurrency the government launched last… [+1894 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Cboe says Robinhood and Virtu among potential equity partners in crypto exchange - Reuters",
            "description": "Cboe Global Markets Inc <a href=\"https://www.reuters.com/companies/CBOE.Z\" target=\"_blank\">(CBOE.Z)</a> on Thursday said it is in discussions with several market participants, including retail brokers and market makers, about taking strategic stakes in its re…",
            "url": "https://www.reuters.com/markets/us/cboe-says-robinhood-virtu-among-potential-equity-partners-crypto-exchange-2022-08-25/",
            "urlToImage": "https://www.reuters.com/resizer/J31baCTB_IftW3k-DDBr1yQ5gyk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3XXXH6VWAFKLNABL34EO572H2U.jpg",
            "publishedAt": "2022-08-25T15:00:00Z",
            "content": "Aug 25 (Reuters) - Cboe Global Markets Inc (CBOE.Z) on Thursday said it is in discussions with several market participants, including retail brokers and market makers, about taking strategic stakes i… [+1608 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "BlackRock says it will offer clients spot bitcoin exposure a week after partnering with Coinbase for institutional trading push",
            "description": "BlackRock's new private trust for US institutional clients arrives during the 'crypto winter' that has seen bitcoin's value slide since late 2021.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-blackrock-cryptocurrencies-private-spot-trust-institutional-clients-coinbase-winter-2022-8",
            "urlToImage": "https://i.insider.com/62010c14bd5041001918f59b?width=1200&format=jpeg",
            "publishedAt": "2022-08-11T16:59:41Z",
            "content": "BlackRock is extending its reach into the crypto world by launching a private trust for institutional clients to provide spot bitcoin exposure, making the move during a lengthy downturn for digital-a… [+1833 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks erase early gains to turn mixed as spiking bond yields weigh on tech shares",
            "description": "The 10-year Treasury yield jumped as much as 10 basis points as markets weighed views that the Fed will not slow down its rate hikes.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-bond-yields-tech-shares-nasdaq-sp500-2022-8",
            "urlToImage": "https://i.insider.com/62f55b755b790400198b11b5?width=1200&format=jpeg",
            "publishedAt": "2022-08-11T20:09:19Z",
            "content": "US stocks gave up early gains to finish mixed on Thursday as Wall Street lost confidence the Federal Reserve will slow down its tightening cycle.\r\nThe Nasdaq declined as the 10-year Treasury yield su… [+1480 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "ReadWrite"
            },
            "author": "Deanna Ritchie",
            "title": "10 Blockchain Speakers Who Make It Easy to Understand",
            "description": "The blockchain and Bitcoin. Decentralized finance and smart contracts. Non-fungible tokens and play-to-earn gaming. The new world of Web 3 is a lot of things — but simple isn’t one of them. A few speakers manage to turn the complexity of the blockchain into c…",
            "url": "https://readwrite.com/blockchain-speakers-who-make-it-easy-to-understand/",
            "urlToImage": "https://images.readwrite.com/wp-content/uploads/2022/08/Blockchain-Speakers.jpg",
            "publishedAt": "2022-08-13T15:00:08Z",
            "content": "The blockchain and Bitcoin. Decentralized finance and smart contracts. Non-fungible tokens and play-to-earn gaming. The new world of Web 3 is a lot of things — but simple isnt one of them. A few spea… [+5947 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Crypto markets have 'found a floor' as anticipation builds that Ethereum merge is viable in 2022, JPMorgan says",
            "description": "The merge is designed to transfer the Ethereum blockchain away from a proof-of-work network and instead to a proof-of-stake system.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-markets-found-a-floor-jpmorgan-ethereum-merge-viable-2022-2022-8",
            "urlToImage": "https://i.insider.com/628e13817be71f001936f9e7?width=1200&format=jpeg",
            "publishedAt": "2022-08-08T19:45:39Z",
            "content": "After bitcoin fell as much as 75% from its peak, crypto markets appear to have \"found a floor,\" JPMorgan said in a note on Monday. \r\nBitcoin and ether have surged 36% and 102% from their mid-June low… [+1887 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "jsor@insider.com (Jennifer Sor)",
            "title": "The total value of the crypto market has surged in recent weeks as bears start to buy back in and bulls 'hold on for dear life'",
            "description": "Bank of America analysts said investors appear to be coming off the sidelines and back into crypto, but a recession would likely spark another sell-off.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-market-value-crash-contagion-recovery-bear-market-bofa-bitcoin-2022-8",
            "urlToImage": "https://i.insider.com/62e7e759c1c56b0018b49b83?width=1200&format=jpeg",
            "publishedAt": "2022-08-01T16:38:08Z",
            "content": "The total value of the cryptocurrency market has surged in recent weeks, with Bank of America analysts stating that it may be a sign that bears are beginning to buy back in as bulls continue to \"hold… [+2029 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Katie Canales)",
            "title": "Tom Brady bought a Bored Ape NFT for $430,000 in April. He's lost tens of thousands on it since then.",
            "description": "The NFL quarterback is one of many celebs that have thrown support behind NFTs, but he's lost anywhere from $194,564 to $293,966 on his Bored Ape.",
            "url": "https://www.businessinsider.com/tom-brady-nft-lost-thousands-bored-ape-club-2022-8",
            "urlToImage": "https://i.insider.com/62f13a9b8677d80018ee5a54?width=1200&format=jpeg",
            "publishedAt": "2022-08-08T18:29:31Z",
            "content": "It appears that NFL quarterback legend Tom Brady has taken a bit of an L on one of his recent investments.\r\nThe 45-year-old purchased an NFT from the popular Bored Ape Yacht Club collection in April … [+2025 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Coinbase posts quarterly loss - Reuters.com",
            "description": "Coinbase Global Inc <a href=\"https://www.reuters.com/companies/COIN.O\" target=\"_blank\">(COIN.O)</a> reported a loss for the second quarter on Tuesday, hurt by a plunge in trading volumes as this year's rout in risky assets curbed investor appetite for trading…",
            "url": "https://www.reuters.com/technology/coinbase-posts-quarterly-loss-2022-08-09/",
            "urlToImage": "https://www.reuters.com/resizer/VFqQIm3yNO7V4K7If1sEOnR1sjU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WITOR3WZZRNS3GRCTWKFF2XDAI.jpg",
            "publishedAt": "2022-08-09T20:21:00Z",
            "content": "Aug 9 (Reuters) - Coinbase Global Inc (COIN.O) reported a loss for the second quarter on Tuesday, hurt by a plunge in trading volumes as this year's rout in risky assets curbed investor appetite for … [+1099 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "New guilty plea in BitMEX crypto exchange laundering case - Reuters",
            "description": "The first employee of BitMEX pleaded guilty on Monday to violating U.S. bank secrecy laws by failing to establish an anti-money laundering program, following guilty pleas to the same charge by the cryptocurrency exchange's three co-founders.",
            "url": "https://www.reuters.com/technology/new-guilty-plea-bitmex-crypto-exchange-laundering-case-2022-08-08/",
            "urlToImage": "https://www.reuters.com/resizer/Wizo4hWPiYQhhHkKf1qY4bNcbS0=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2UXLYI7K2NPYLCDOJL5NLIH2QU.jpg",
            "publishedAt": "2022-08-08T21:33:00Z",
            "content": "NEW YORK, Aug 8 (Reuters) - The first employee of BitMEX pleaded guilty on Monday to violating U.S. bank secrecy laws by failing to establish an anti-money laundering program, following guilty pleas … [+1283 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "EU securities watchdog to arm itself with crypto data - Reuters",
            "description": "The European Union's securities watchdog has begun preparations for increased scrutiny of crypto transactions after the bloc agreed groundbreaking rules to regulate what it called a \"Wild West\" sector, a public tender document showed.",
            "url": "https://www.reuters.com/technology/eu-securities-watchdog-arm-itself-with-crypto-data-2022-08-03/",
            "urlToImage": "https://www.reuters.com/resizer/yKlgZ4aCto6oSD9S-OC_2PvU_7c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WMD66GUZJ5N3XNYTHHJNLADPGM.jpg",
            "publishedAt": "2022-08-03T08:30:00Z",
            "content": "LONDON, Aug 3 (Reuters) - The European Union's securities watchdog has begun preparations for increased scrutiny of crypto transactions after the bloc agreed groundbreaking rules to regulate what it … [+1324 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Thai c.bank to test retail digital currency late this year - Reuters",
            "description": "Thailand's central bank said on Friday it expected to test its retail digital currency from late this year to the middle of 2023, as an alternative payment option.",
            "url": "https://www.reuters.com/markets/currencies/thai-cbank-test-retail-digital-currency-late-this-year-2022-08-05/",
            "urlToImage": "https://www.reuters.com/resizer/-NEiUWXMJ-fm3aORlo9G986-kUQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MCHWHJZPJRMILGJ4B5SOEE3D3I.jpg",
            "publishedAt": "2022-08-05T05:40:00Z",
            "content": "BANGKOK, Aug 5(Reuters) - Thailand's central bank said on Friday it expected to test its retail digital currency from late this year to the middle of 2023, as an alternative payment option.\r\nDuring t… [+1078 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Abrdn buys stake in digital assets exchange Archax - Reuters",
            "description": "British asset manager abrdn <a href=\"https://www.reuters.com/companies/ABDN.L\" target=\"_blank\">(ABDN.L)</a> has bought a stake in digital assets exchange Archax, amid a wider push by investors into crypto-assets despite a recent plunge in value.",
            "url": "https://www.reuters.com/markets/europe/abrdn-buys-stake-digital-assets-exchange-archax-2022-08-12/",
            "urlToImage": "https://www.reuters.com/resizer/N0rhUs3arZyysc2nKvK3pt-nLJE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BI2HO5U3KZMKPFSW2XCORBT4AY.jpg",
            "publishedAt": "2022-08-12T08:59:00Z",
            "content": "LONDON, Aug 12 (Reuters) - British asset manager abrdn (ABDN.L) has bought a stake in digital assets exchange Archax, amid a wider push by investors into crypto-assets despite a recent plunge in valu… [+1333 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Losses from crypto hacks surged 60% to $1.9 bln in Jan-July -Chainalysis - Reuters",
            "description": "Losses arising from cryptocurrency hacks jumped nearly 60% in the first seven months of the year to $1.9 billion, propelled by a surge in funds stolen from decentralized finance (DeFi) protocols, according to a blog post from blockchain analysis firm Chainaly…",
            "url": "https://www.reuters.com/markets/us/losses-crypto-hacks-surged-60-19-bln-jan-july-chainalysis-2022-08-16/",
            "urlToImage": "https://www.reuters.com/resizer/ybcM0t3ZkbmcG5prhCuzON2vmgg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GLY55FLNLBKZLNM7JXP3W4RIKA.jpg",
            "publishedAt": "2022-08-16T11:38:00Z",
            "content": "NEW YORK, Aug 16 (Reuters) - Losses arising from cryptocurrency hacks jumped nearly 60% in the first seven months of the year to $1.9 billion, propelled by a surge in funds stolen from decentralized … [+2986 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Fraud charges in hacking case against Uber ex-security chief are dismissed - Reuters",
            "description": "A U.S. judge on Tuesday granted a request by prosecutors to dismiss fraud counts against a former Uber Technologies Inc <a href=\"https://www.reuters.com/companies/UBER.N\" target=\"_blank\">(UBER.N)</a> security chief also charged with covering up a 2016 data ha…",
            "url": "https://www.reuters.com/world/us/fraud-charges-hacking-case-against-uber-ex-security-chief-are-dismissed-2022-08-02/",
            "urlToImage": "https://www.reuters.com/resizer/grLTMfU2wwH4Gq9qvxK6m1r86eo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MBDIVXFECRON5LKOSWOIE4C5EY.jpg",
            "publishedAt": "2022-08-02T23:53:00Z",
            "content": "Aug 2 (Reuters) - A U.S. judge on Tuesday granted a request by prosecutors to dismiss fraud counts against a former Uber Technologies Inc (UBER.N) security chief also charged with covering up a 2016 … [+1928 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Morning Bid: Fed doesn't see enough swallows for summer - Reuters",
            "description": "Morning Bid: Fed doesn't see enough swallows for summer  Reuters",
            "url": "https://www.reuters.com/markets/europe/fed-doesnt-see-enough-swallows-summer-2022-08-11/",
            "urlToImage": "https://www.reuters.com/resizer/GmFkUXqkFeK3azHG1GpOI0g69bY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2WVPT67XRRMWZH2CDB7BFW2MRM.jpg",
            "publishedAt": "2022-08-11T04:38:00Z",
            "content": "A look at the day ahead in markets from Alun John\r\nFed policymakers surged out of the traps last night, telling markets not to get too excited by the cooler-than-expected inflation reading, but to li… [+1888 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Jack Dorsey's Block ends Afterpay smartphone tie-up with Australia's Westpac - Reuters",
            "description": "Afterpay, the Australian payments firm bought by Jack Dorsey's Block Inc <a href=\"https://www.reuters.com/companies/SQ.N\" target=\"_blank\">(SQ.N)</a>, and Australia's Westpac Banking Corp <a href=\"https://www.reuters.com/companies/WBC.AX\" target=\"_blank\">(WBC.…",
            "url": "https://www.reuters.com/technology/jack-dorseys-block-ends-afterpay-smartphone-tie-up-with-australias-westpac-2022-08-26/",
            "urlToImage": "https://www.reuters.com/resizer/QKUJKiESx8jU8-gnZhauvIa9hFc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JWATIPF2RJOK3J3QX6XVOTP6ME.jpg",
            "publishedAt": "2022-08-26T04:00:00Z",
            "content": "SYDNEY, Aug 26 (Reuters) - Afterpay, the Australian payments firm bought by Jack Dorsey's Block Inc (SQ.N), and Australia's Westpac Banking Corp (WBC.AX) ended a partnership after the firm cancelled … [+1650 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Babel Finance Lost Over $280 Million in Proprietary Trading With Customer Funds",
            "description": "Babel Finance, the troubled Asian crypto lender that abruptly halted client withdrawals last month, suffered heavy losses due to proprietary trading with customer funds, according to its restructuring proposal deck obtained by The Block. From a report: The de…",
            "url": "https://news.slashdot.org/story/22/07/29/1444220/babel-finance-lost-over-280-million-in-proprietary-trading-with-customer-funds",
            "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
            "publishedAt": "2022-07-29T14:44:00Z",
            "content": "The deck, dated July 2022, reveals that Babel Finance lost more than $280 million in bitcoin (BTC) and ether (ETH) due to its proprietary trading failure. Specifically, it lost around 8,000 BTC and 5… [+1081 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Crypto Ads Starring Matt Damon, Tom Brady Vanish From Television",
            "description": "Matt Damon's pitch to invest in crypto has disappeared from US television sets. Same goes for glitzy commercials starring LeBron James and Tom Brady. From a report: The drop in national TV marketing by the industry in the US has coincided with the selloff in …",
            "url": "https://entertainment.slashdot.org/story/22/08/17/1947204/crypto-ads-starring-matt-damon-tom-brady-vanish-from-television",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2022-08-17T20:05:00Z",
            "content": "The drop in national TV marketing by the industry in the US has coincided with the selloff in Bitcoin and other crypto assets, according to the TV-ad measurement company ISpot.tv, which tracks the sp… [+1084 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "jsor@insider.com (Jennifer Sor)",
            "title": "The social aspects and sense of community are the crypto market's biggest allure and its biggest danger, experts say",
            "description": "The social aspect is an alluring part of crypto - and that's been a dangerous pitfall for some investors, as FOMO encourages big risk taking.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-crash-social-media-celsius-bankruptcy-amateur-investors-influencers-2022-8",
            "urlToImage": "https://i.insider.com/62ffd07aec781d001868f026?width=1200&format=jpeg",
            "publishedAt": "2022-08-20T12:45:00Z",
            "content": "Tiffany Fong, a retail investor in crypto, has mostly shrugged off her losses from the great crypto crash of 2022 at this point, but she still remembers the sting of embarrassment in discovering she'… [+5488 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "Solana is the latest target of a crypto hack just days after nearly $200 million was swiped in the Nomad bridge heist",
            "description": "Nearly $1 billion has been lost to crypto heists targeting bridges this year. Solana became the latest targets of hackers Wednesday, the company said.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-hack-solana-heist-theft-blockchain-bitcoin-ether-wallets-nomad-2022-8",
            "urlToImage": "https://i.insider.com/62013bffbd5041001918fb4a?width=1200&format=jpeg",
            "publishedAt": "2022-08-03T13:26:50Z",
            "content": "Solana was the latest target of hackers early Wednesday, just days after a heist of Nomad's crypto bridge.\r\nThe company said on Twitter that the hack affected 7,767 wallets, while the origins of the … [+992 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "US stocks rise as investors assess Fed's inflation fight and await more earnings",
            "description": "The S&P 500 was on course to break two straight sessions of losses after July's monster 9.1% surge.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-stocks-aim-to-rise-after-2-days-of-declines-2022-8",
            "urlToImage": "https://i.insider.com/620a7a5ee2fe3c0019ea6c34?width=1200&format=jpeg",
            "publishedAt": "2022-08-03T13:47:43Z",
            "content": "US stocks rose Wednesday, looking to trim recent losses as investors assessed remarks from Federal Reserve officials about the central bank's efforts to cool down the hottest inflationary environment… [+1262 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "US stocks falls as Fed reinforces resolve in hiking rates to cool inflation",
            "description": "The S&P 500 and the Nasdaq Composite were at risk of snapping four weeks of wins as Fed officials sound open to another rate hike of 75 basis points.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-fed-nasdaq-dow-interest-rates-inflation-powell-2022-8",
            "urlToImage": "https://i.insider.com/621608ed081b26001840720c?width=1200&format=jpeg",
            "publishedAt": "2022-08-19T13:32:51Z",
            "content": "US stocks fell Friday as risk aversion set in after Federal Reserve officials voiced support for another large rate hike at next month's policy meeting, with the hawkish comments coming before the ce… [+2690 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Leo Aquino, CEPF)",
            "title": "3 ways Black investors can bounce back from crypto losses and build wealth, according to a couple who retired in their 40s",
            "description": "Kiersten and Julien Saunders say you can use the lessons you learned from failed crypto investments to create a new long-term wealth plan.",
            "url": "https://www.businessinsider.com/personal-finance/bounce-back-crypto-crash-losses-build-wealth-2022-7",
            "urlToImage": "https://i.insider.com/628c4a46b0a8be0018603738?width=1200&format=jpeg",
            "publishedAt": "2022-07-30T13:05:00Z",
            "content": "After a long bull run in 2021, the price of bitcoin dropped 50% from $42,733 at the top of 2022 to $24,109 at the time of this writing. Major crypto lenders like Voyager and Celsius have filed for ba… [+3499 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VentureBeat"
            },
            "author": "Julien Genestoux, Unlock",
            "title": "Web3: The hope for protocols over platforms",
            "description": "With Web3, we can deconstruct platforms and replace them with open protocols collectively owned and governed by their own communities.",
            "url": "https://venturebeat.com/2022/07/29/web3-the-hope-for-protocols-over-platforms/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/07/GettyImages-175422126-angelhell.jpg?w=1200&strip=all",
            "publishedAt": "2022-07-29T20:07:00Z",
            "content": "Were you unable to attend Transform 2022? Check out all of the summit sessions in our on-demand library now! Watch here. \r\nIn the beginning, there were protocols\r\nRather than write about Web3 again, … [+9960 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "heise online"
            },
            "author": "Axel Kannenberg",
            "title": "Bitcoin-Schürfboom in Schieflage: US-Miner machen Millionenverluste",
            "description": "Gesunkener Bitcoinkurs, gestiegener Strompreis und hohe Inflation: Die großen Unternehmen der US-Miningbranche schreiben dicke rote Zahlen.",
            "url": "https://www.heise.de/news/Bitcoin-Schuerfboom-in-Schieflage-US-Miner-machen-Millionenverluste-7223927.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/9/3/9/7/3/shutterstock_1661174776-1c42c5baaaa15d15.jpg",
            "publishedAt": "2022-08-18T13:19:00Z",
            "content": "Steigende Kosten und die Kursrutsche der vergangenen Monate haben die noch 2021 rasant gewachsene Bitcoinmining-Branche der USA in Bedrängnis gebracht. Mit Core Scientific, Riot Blockchain und Marath… [+4027 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Golem.de"
            },
            "author": "Tobias Költzsch",
            "title": "8.000 Bitcoin: Mann will Bitcoin-Festplatte mit Millionenoperation finden",
            "description": "Vor fast zehn Jahren hat James Howells eine Festplatte mit 8.000 Bitcoin entsorgt. Jetzt will er sie endlich auf einer Müllkippe zu finden - wenn man ihn lässt. (Bitcoin, Blockchain)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2F8-000-bitcoin-mann-will-bitcoin-festplatte-mit-millionenoperation-finden-2208-167343.html&referer=https%3A%2F%2Ft.co%2F4e60ea281e",
            "urlToImage": null,
            "publishedAt": "2022-08-03T08:15:02Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "heise online"
            },
            "author": "Markus Will",
            "title": "WTF: Strom ist das neue Bitcoin: Stromverkauf brachte Miner mehr Geld als Schürfen",
            "description": "Ein Bitcoin-Mining-Unternehmen bekam im Juli 9,5 Millionen US-Dollar, weil es hitzebedingt eine Anlage abschaltete. Es verdiente damit mehr als durchs Schürfen.",
            "url": "https://www.heise.de/news/Strom-ist-das-neue-Bitcoin-Stromverkauf-brachte-Miner-mehr-Geld-als-Schuerfen-7205052.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/8/7/7/2/5/shutterstock_1995173864-8484c125c436ece4.jpg",
            "publishedAt": "2022-08-06T12:30:00Z",
            "content": "Die Bitcoin-Krise treibt in Verbindung mit galoppierenden Energiepreisen seltsame Blüten: Das Mining-Unternehmen Riot Blockchain vermeldete stolz, dass es im Juli durch Stromgutschriften mehr Geld ve… [+1985 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks rise and bond yields and oil prices fall as Senate passes Biden's climate and healthcare bill",
            "description": "Stocks were higher Monday after Democrats passed a key piece of President Biden's agenda Sunday. Oil prices and bond yields declined.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-biden-climate-change-bonds-fed-2022-8",
            "urlToImage": "https://i.insider.com/62f10dd68677d80018ee5063?width=1200&format=jpeg",
            "publishedAt": "2022-08-08T13:36:22Z",
            "content": "US stocks opened higher Monday as bond yields and oil prices fell, while Wall Street braces for an important inflation report midweek. \r\nTraders were also weighing the impact of a key piece of Presid… [+1860 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "China's digital yuan pushes key US lawmakers to seek urgency from the Fed on a digital dollar that fends off global rivals",
            "description": "\"We should be concerned about China's predatory practices,\" Rep. French Hill, R-Ark., told the Wall Street Journal.",
            "url": "https://markets.businessinsider.com/news/currencies/dollar-vs-yuan-house-bill-digital-dollar-federal-reserve-cbdc-2022-8",
            "urlToImage": "https://i.insider.com/62f125fb8677d80018ee5538?width=1200&format=jpeg",
            "publishedAt": "2022-08-08T15:34:00Z",
            "content": "A bipartisan group of US lawmakers wants the Federal Reserve to get more serious about issuing a digital dollar to compete with rivals like China's digital yuan.\r\nDemocrat Rep. Maxine Waters has draf… [+1663 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks extend rally as a drop in wholesale prices boosts optimism that inflation is cooling",
            "description": "The producer price index fell 0.5% from June to July, the first month-over-month decrease since April 2020.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-wholesale-prices-energy-gas-inflation-recession-2022-8",
            "urlToImage": "https://i.insider.com/61e87ee59386c900185f6969?width=1200&format=jpeg",
            "publishedAt": "2022-08-11T13:42:33Z",
            "content": "US stocks continued to rally Thursday as wholesale price data gave traders fresh confidence that inflation could finally be easing. \r\nThe producer price index fell 0.5% from June to July, the first m… [+1773 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks drop as Target earnings miss while investors look ahead to Fed minutes",
            "description": "US stocks were lower Wednesday after Target missed on its latest earnings report. Wall Street is looking ahead to Fed minutes.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-target-walmart-retail-consumer-prices-inflation-2022-8",
            "urlToImage": "https://i.insider.com/62fcedab3a0dd1001995d6f8?width=1200&format=jpeg",
            "publishedAt": "2022-08-17T13:44:20Z",
            "content": "US stocks edged lower Wednesday as Target missed on earnings while investor look ahead to the release of minutes from the Federal Reserve's July meeting. \r\nShares of Target fell 2% as second-quarter … [+1404 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
            "title": "Sam Bankman-Fried's FTX exchange grew revenue more than 1,000% year-on-year in 2021 amid the crypto boom, leaked docs reportedly show",
            "description": "FTX's revenue soared from $89 million in 2020 to $1.02 billion in 2021, according to leaked internal documents obtained by CNBC.",
            "url": "https://markets.businessinsider.com/news/currencies/ftx-crypto-exchange-revenue-bankman-fried-1000-percent-boom-2022-8",
            "urlToImage": "https://i.insider.com/6128f88812b9cc0019631c23?width=1200&format=jpeg",
            "publishedAt": "2022-08-22T12:23:55Z",
            "content": "Sam Bankman-Fried's crypto exchange FTX grew revenue by more than 1,000% year-on-year in 2021, according to leaked internal documents obtained by CNBC. \r\nRevenue skyrocketed from $89 million in 2020 … [+1478 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks edge lower after weekly jobless claims unexpectedly fall",
            "description": "The solid jobless claim data show that rising layoffs and hiring freezes from technology companies has yet to put a dent in the strong labor market.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-stocks-dip-weekly-jobless-claims-fall-2022-8",
            "urlToImage": "https://i.insider.com/62fe3cb7ec781d0018689c6c?width=1200&format=jpeg",
            "publishedAt": "2022-08-18T13:40:58Z",
            "content": "US stocks dipped on Thursday after weekly jobless claims bested expectations and showed the underlying strength of the current labor market.\r\nClaims fell by 2,000 to 250,000 last week, well below est… [+1461 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks drop as bond yields rise amid investor concerns over renewed Fed hawkishness",
            "description": "Stocks pared some losses but ended lower on the day as investors deal with concerns that the Fed will continue to aggressively raise rates next month.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-wall-street-interest-rate-hikes-fed-2022-8",
            "urlToImage": "https://i.insider.com/623b1e5ec9edc20019f5ed35?width=1200&format=jpeg",
            "publishedAt": "2022-08-29T20:06:02Z",
            "content": "US stocks closed lower on Monday while bond yields jumped as investors struggled with the Federal Reserve's drive to tame inflation with rate hikes. \r\nFed chair Jerome Powell did little to give Wall … [+1738 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "gglover@insider.com (George Glover)",
            "title": "7 million retail investors have left Robinhood in a year as stocks and cryptocurrencies plummet",
            "description": "The trading app's monthly active users plunged 34% to 14 million over the past year as retail investors became disillusioned with stocks and crypto.",
            "url": "https://markets.businessinsider.com/news/stocks/job-cuts-resignation-robinhood-retail-investing-stocks-cryptocurrencies-vlad-tenev-2022-8",
            "urlToImage": "https://i.insider.com/62ea2b69c6987600183c5edb?width=1200&format=jpeg",
            "publishedAt": "2022-08-03T09:18:35Z",
            "content": "Robinhood has lost a third of its users in the space of a year as retail investors quit the trading app with stocks and cryptocurrencies struggling to deliver returns.\r\nThe trading app saw its number… [+1827 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "insider@insider.com (Insider Inc.)",
            "title": "US stocks dip as investors weigh strong retail earnings against growing recession concerns",
            "description": "Roughly 58% of investors expect a recession to hit the US economy in the next 12 months, according to the Bank of America's survey.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-retail-earnings-roll-in-amid-recession-fears-2022-8",
            "urlToImage": "https://i.insider.com/62fb96eac87abe0018c2ac21?width=1200&format=jpeg",
            "publishedAt": "2022-08-16T13:40:14Z",
            "content": "US stocks edged lower Tuesday as traders took in corporate earnings from retail giants Home Depot and Walmart. \r\nBoth of the major retailers beat earnings expectations. Shares of Walmart rallied 4.25… [+1583 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks trade mixed a day after suffering their worst losses in 2 months",
            "description": "Investors are keeping a close eye on Fed Chair Jerome Powell's speech at the central bank's yearly conference in Wyoming on Friday.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-mixed-further-inflation-recession-rates-2022-8",
            "urlToImage": "https://i.insider.com/6304d62fc2794d00197f2171?width=1200&format=jpeg",
            "publishedAt": "2022-08-23T13:41:33Z",
            "content": "US stocks opened narrowly mixed on Tuesday following their worst losses in two months a day earlier. \r\nThe Dow sank more than 600 points on Monday, as traders fled stocks in response to concerns the … [+1498 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Aussie, kiwi fall as China's recovery falters; yuan eases on surprise PBOC rate cut - Reuters.com",
            "description": "The risk-sensitive Australian and New Zealand dollars retreated from near two-month highs against the greenback on Monday due to dissappointing data from China, a key trading partner, while the Chinese yuan weakened after a surprise cut in interest rates.",
            "url": "https://www.reuters.com/markets/europe/aussie-kiwi-fall-chinas-recovery-falters-yuan-eases-surprise-pboc-rate-cut-2022-08-15/",
            "urlToImage": "https://www.reuters.com/resizer/ngpgXZLEqMrdfqBkIXW6cticdes=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IXOFCNKVQBLXJJC4DX3PSOYWCQ.jpg",
            "publishedAt": "2022-08-15T03:15:00Z",
            "content": "TOKYO, Aug 15 (Reuters) - The risk-sensitive Australian and New Zealand dollars retreated from near two-month highs against the greenback on Monday due to dissappointing data from China, a key tradin… [+4349 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "US stocks trade mixed as investors digest jobless claims and latest corporate earnings",
            "description": "Stocks wavered Thursday amid earnings and new jobs data. The Bank of England made a 50 basis point rate hike, its largest move in 27 years.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-jobless-claims-corporate-inflation-earnings-2022-8",
            "urlToImage": "https://i.insider.com/62ebc97759282400185a5ee8?width=1200&format=jpeg",
            "publishedAt": "2022-08-04T13:38:12Z",
            "content": "US stocks were mixed on Thursday as markets took in jobless claims data and fresh corporate earnings. The S&amp;P 500 was coming off a strong session, as it ended higher Wednesday by roughly 1.5% wit… [+1673 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks give up early gains to end mixed after Nvidia's revenue warning drags down tech companies",
            "description": "Chipmaker Nvidia sank as much as 8% after reporting preliminary second-quarter sales that were worse than expected.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-nvidia-chips-semiconductors-inflation-earnings-2022-8",
            "urlToImage": "https://i.insider.com/62f163eb8677d80018ee6314?width=1200&format=jpeg",
            "publishedAt": "2022-08-08T20:07:17Z",
            "content": "US stocks gave up early gains to end mixed Monday as lackluster sales from chipmaker Nvidia dragged down the tech sector.\r\nThe company reported preliminary second-quarter sales of $6.7 billion, below… [+1488 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks rise as investors assess signs inflation is coming down",
            "description": "Import prices fell 1.4% in July, exceeding economist estimates for a decline of just 1% and representing the biggest drop since April 2020.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-import-prices-sign-inflation-coming-down-2022-8",
            "urlToImage": "https://i.insider.com/62f652b5f16a0d0018e63fdf?width=1200&format=jpeg",
            "publishedAt": "2022-08-12T13:42:12Z",
            "content": "US stocks jumped on Friday, with the S&amp;P 500 extending its month-to-date gain to about 2% as investors assessed signs that inflation is cooling off.\r\nImport prices fell 1.4% in July, exceeding ec… [+1632 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks drop with Dow snapping 5-day win streak as investors parse Fed minutes and earnings",
            "description": "Minutes from the Federal Reserve's July meeting indicated policymakers see the pace of future rate hikes slowing.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-win-streak-fed-minutes-earnings-2022-8",
            "urlToImage": "https://i.insider.com/62c82dfc8045920019ae2b97?width=1200&format=jpeg",
            "publishedAt": "2022-08-17T20:11:19Z",
            "content": "US stocks retreated Wednesday, with the Dow Jones Industrial Average snapping its five-day win streak, as investors weighed central bank comments and retail earnings. \r\nMinutes from the Federal Reser… [+1503 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "US stocks fall to extend Friday's steep declines as investors grapple with hawkish Fed policy outlook",
            "description": "US stocks slid Monday as investors continue to sell risk assets after Federal Reserve chair Jerome Powell reiterated a hawkish policy stance.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-tightening-powell-inflation-recession-2022-8",
            "urlToImage": "https://i.insider.com/624c999ebb219a00181bd106?width=1200&format=jpeg",
            "publishedAt": "2022-08-29T13:40:06Z",
            "content": "Us stocks opened lower Monday as investor sentiment remained sour following steep losses from Friday's session. \r\nFederal Reserve chair Jerome Powell remained steadfast in his Friday remarks in Wyomi… [+1788 chars]"
          },
          {
            "source": {
              "id": "business-insider",
              "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "US stocks trade mixed as data shows inflation cooling ahead of Powell's Jackson Hole speech",
            "description": "Ahead of Powell's speech, Friday inflation data showed personal consumption expenditures eased in July to 6.3%, compared to 6.8% in June.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-powell-jackson-hole-fed-speech-2022-8",
            "urlToImage": "https://i.insider.com/62c82dfc8045920019ae2b97?width=1200&format=jpeg",
            "publishedAt": "2022-08-26T13:33:46Z",
            "content": "US stocks wavered on Friday as investors awaited Federal Reserve Chair Jerome Powell's speech at Jackson Hole, Wyoming at 10:00 a.m. ET.\r\nInvestors cheered fresh personal consumption expenditures dat… [+1568 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Dollar climbs as Fed officials suggest more rate hikes to come - Reuters",
            "description": "The dollar was on the front foot on Thursday, helped by several U.S. Federal Reserve officials pushing back against suggestions they will slow the pace of interest rate hikes, while the pound was flat ahead of a Bank of England meeting.",
            "url": "https://www.reuters.com/markets/europe/dollar-climbs-fed-officials-suggest-more-rate-hikes-come-2022-08-04/",
            "urlToImage": "https://www.reuters.com/resizer/s1OzbISDAUazOxttmSwMTxFUcTk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RM7T2ZLXVJJQ7HXB62UXJ4TCEQ.jpg",
            "publishedAt": "2022-08-04T01:39:00Z",
            "content": "HONG KONG, Aug 4 (Reuters) - The dollar was on the front foot on Thursday, helped by several U.S. Federal Reserve officials pushing back against suggestions they will slow the pace of interest rate h… [+2423 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Major currencies hold steady ahead of Fed minutes, RBNZ - Reuters",
            "description": "Major currencies were holding steady on Wednesday, ahead of another day when central bank policy takes centre stage for traders with a Reserve Bank of New Zealand meeting and the Federal Reserve's minutes from its recent meeting both due.",
            "url": "https://www.reuters.com/markets/us/major-currencies-hold-steady-ahead-fed-minutes-rbnz-2022-08-17/",
            "urlToImage": "https://www.reuters.com/resizer/s1OzbISDAUazOxttmSwMTxFUcTk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RM7T2ZLXVJJQ7HXB62UXJ4TCEQ.jpg",
            "publishedAt": "2022-08-17T01:51:00Z",
            "content": "HONG KONG, Aug 17 (Reuters) - Major currencies were holding steady on Wednesday, ahead of another day when central bank policy takes centre stage for traders with a Reserve Bank of New Zealand meetin… [+2441 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Golem.de"
            },
            "author": "Tobias Költzsch",
            "title": "Krypto-Mining: Bitcoin-Miner in Texas macht mehr Geld durch Abschaltung",
            "description": "Eine Hitzewelle in Texas zwingt Bitcoin-Miner zur Abschaltung ihrer Anlagen - Riot Blockchain hat durch Stromgutschriften mehr verdient als mit Mining. (Kryptomining, Bitcoin)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkrypto-mining-bitcoin-miner-in-texas-macht-mehr-geld-durch-abschaltung-2208-167415.html&referer=https%3A%2F%2Ft.co%2F9a3d614e89",
            "urlToImage": null,
            "publishedAt": "2022-08-05T12:32:01Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Yen recovery continues on lower U.S. yields; markets on edge over Pelosi - Reuters.com",
            "description": "The dollar continued its decline on Tuesday, falling to its lowest in two months against the recovering Japanese yen and losing ground on other peers, as investors continued to position for a less aggressive pace of Federal Reserve interest rate hikes.",
            "url": "https://www.reuters.com/markets/us/yen-recovery-continues-lower-us-yields-markets-edge-over-pelosi-2022-08-02/",
            "urlToImage": "https://www.reuters.com/resizer/19a6Jreqjpf26n6vEOtecBi-Mvg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/J7IVGBHOXFLBNA32SPHXESSF7Y.jpg",
            "publishedAt": "2022-08-02T01:43:00Z",
            "content": "HONG KONG, Aug 2 (Reuters) - The dollar continued its decline on Tuesday, falling to its lowest in two months against the recovering Japanese yen and losing ground on other peers, as investors contin… [+2418 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Australian crypto ownership warrants consumer protection, says regulator - Reuters",
            "description": "Nearly half of Australian retail investors owned cryptocurrency in late 2021 and more got their information from YouTube videos than from financial advisers, the securities watchdog said on Thursday, calling the data a \"strong case for regulation\".",
            "url": "https://www.reuters.com/business/finance/australian-crypto-ownership-warrants-consumer-protection-says-regulator-2022-08-11/",
            "urlToImage": "https://www.reuters.com/resizer/l6naJ7fKU0ZW67E5txjsyJq8J_Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2NIXRQ37RBNWDCS6EGFC6NEGO4.jpg",
            "publishedAt": "2022-08-11T03:35:00Z",
            "content": "SYDNEY, Aug 11 (Reuters) - Nearly half of Australian retail investors owned cryptocurrency in late 2021 and more got their information from YouTube videos than from financial advisers, the securities… [+2143 chars]"
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": null,
            "title": "Asian shares track Wall Street losses ahead of U.S. inflation data - Reuters.com",
            "description": "Asian shares fell and the dollar steadied on Wednesday as investors waited for a key U.S. report on inflation to provide hints to the Federal Reserve's plans for future monetary tightening.",
            "url": "https://www.reuters.com/markets/europe/global-markets-midday-wrapup-1-2022-08-10/",
            "urlToImage": "https://www.reuters.com/resizer/ShppV12UBPZWC1lAEJSxzAbweyk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RUI7LFZEUVKM7PXTMUMUNGMY5M.jpg",
            "publishedAt": "2022-08-10T02:11:00Z",
            "content": "Aug 10 (Reuters) - Asian shares fell and the dollar steadied on Wednesday as investors waited for a key U.S. report on inflation to provide hints to the Federal Reserve's plans for future monetary ti… [+2118 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VentureBeat"
            },
            "author": "Dean Takahashi",
            "title": "Jules Miller: How 150 VCs created the VC3 DAO for decentralized investing",
            "description": "The VC3 DAO is an interesting move to get VCs to collaborate on decentralized investing and show support for the Web3 movement.",
            "url": "https://venturebeat.com/2022/08/01/jules-miller-how-150-vcs-created-the-vc3-dao-for-decentralized-investing/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/08/vc3-investors.jpg?w=1200&strip=all",
            "publishedAt": "2022-08-01T14:30:00Z",
            "content": "Venture capitalists often seek tech startups that promise disruption, but its not every day that you see VCs try to disrupt their own way of doing things.\r\nThats why the VC3 DAO is an interesting mov… [+1061 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Presse-citron"
            },
            "author": "Hadrien Augusto",
            "title": "Bitcoin : MicroStrategy change de stratégie",
            "description": "Michael Saylor, son célèbre CEO, laisse sa place pour se concentrer sur… l’investissement en bitcoins.",
            "url": "https://www.presse-citron.net/bitcoin-microstrategy-change-de-strategie/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2022/08/MicroStrategy-Bitcoin.jpg",
            "publishedAt": "2022-08-03T13:00:12Z",
            "content": "Lhiver des cryptomonnaies a fait plonger Bitcoin très bas, mais pas trop bas. Avec un support au-dessus des 20 000 dollars, la première cryptomonnaie a redonné confiance aux investisseurs. MicroStrat… [+2700 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "VentureBeat"
            },
            "author": "Slava Gomzin",
            "title": "How crypto tokens became as unsafe as payment cards once used to be",
            "description": "Crypto tokens are as unsafe as payment cards. Crypto tech and the blockchain industry must catch up with standards and technologies.",
            "url": "https://venturebeat.com/2022/08/04/how-crypto-tokens-became-as-unsafe-as-payment-cards-once-used-to-be/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/03/GettyImages-1320502852.jpg?w=1200&strip=all",
            "publishedAt": "2022-08-04T20:07:00Z",
            "content": "Were you unable to attend Transform 2022? Check out all of the summit sessions in our on-demand library now! Watch here. \r\nLast month, hackers stole roughly $100 million in cryptocurrency from Harmon… [+3579 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Entrepreneur"
            },
            "author": "Kenny Au",
            "title": "Is it Profitable to Invest in Web3 Startups Right Now? That Depends on Whether Your Investment Meets These 5 Expert-Backed Requirements",
            "description": "The prerequisite for a profitable Web3 startup is not just a good business idea. Know what to look for and where to investigate for lucrative Web3 investment opportunities.",
            "url": "https://www.entrepreneur.com/article/431123",
            "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1659728270-GettyImages-1389049104.jpg",
            "publishedAt": "2022-08-08T12:00:00Z",
            "content": "As the markets face turbulence, investor perception over Web3 investments tends to be lukewarm, with most becoming skeptical about their ability to weather the crisis. In the case of Bitcoin, for exa… [+8195 chars]"
          },
          {
            "source": {
              "id": "spiegel-online",
              "name": "Spiegel Online"
            },
            "author": "DER SPIEGEL",
            "title": "Kryptowährung: Bitcoin rauscht unter die 20.000-Dollar-Marke",
            "description": "Im November lag der Gesamtwert der Kryptowährungen noch dreimal so hoch – jetzt schwächeln sie. Vor allem die Politik der US-Zentralbank drückt die Kurse.",
            "url": "https://www.spiegel.de/wirtschaft/kryptowaehrung-bitcoin-rauscht-unter-die-20-000-dollar-marke-a-22ae4b3d-9d68-4b95-93c7-a55ed4523abe",
            "urlToImage": "https://cdn.prod.www.spiegel.de/images/dc9503f6-cb76-4652-9f18-a474586a73a2_w1280_r1.77_fpx49.99_fpy54.99.jpg",
            "publishedAt": "2022-08-29T16:06:24Z",
            "content": "Der Markt für Kryptowährungen leidet unter der Aussicht auf deutlich steigende Leitzinsen. Die nach Marktwert größte Digitalanlage Bitcoin kostete am Montagvormittag auf der Handelsplattform Bitfinex… [+1289 chars]"
          }
        ]}

     
     articles2=[];
     constructor(){
       super();
       // key in this.state needs to be in lowercase if not Error
       
       this.state={
         articles : [],
         loeading:false,
         h1:"News HeadLines",
         localStorageData : "",
         PageCards:10,
        }
        this.LeNunmberArr={"Nu":[],"Co":[]};
      
    };
 // runs After evrything undder render() is done 
  async  componentDidMount(){
    console.log("DID MOUNT RENDER");

       let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0e517df3867f479dbf0de42790ca2268&page=100&pageSize=100 `   
       let data =  await fetch(url);
       let parsedData = await data.json();
       localStorage.setItem("ParsedData", JSON.stringify(parsedData));
       //console.log(parsedData);

       if (parsedData.status==="error") {
          console.log("Error");
         this.setState({ articles: this.articles.articles,});

      }else if (parsedData.status==="ok"){
        console.log("Parsed Data OK");
        this.setState((prew)=>({localStorageData: prew = JSON.parse(localStorage.getItem("ParsedData"))}));
        this.articles=[];
        this.articles.push(this.state.localStorageData);
        this.setState({ articles: this.articles.articles,});
       };
      
       this.FirstFive_setState(0,this.state.PageCards)
       this.ForNumber(this.articles.articles.length, this.state.PageCards);
       
  };
  
ForNumber(a,b){
   let i = 2;
   let le = a / b;
   this.LeNunmberArr={"Nu":[]};
   while (i < le) {
     if(this.LeNunmberArr.Nu.includes(i)!== i ){
      this.LeNunmberArr.Nu.push(i++);
    }
    };
  //console.log(this.LeNunmberArr);
  }  ;

  FirstFive_setState(a,b){
   this.setState((prew)=>({
      articles: prew = this.articles.articles.slice(a , b),
    }))
  };

   Page_setState(e, PC){
    this.setState((prew)=>({
      articles: prew = this.articles.articles.slice( ( Number ( Number (Number (e.target.innerHTML) - 1 ) * PC) )  , ( Number ( Number ( Number (Number (e.target.innerHTML) - 1 ) * PC) + PC ) )   ),
    }))
   };
  
  ActiveClass(e){
    let ActivePage1= document.getElementsByClassName("active");
    ActivePage1[0].classList.remove("active");
    e.target.classList.add("active")
  };

  Page2 = (e)=>{ 
   this.ActiveClass(e)
   this.Page_setState(e, this.state.PageCards);
  };

  ChosePC(){
   
    
 };
      
  render() {
    console.log("Rendew ");
    
     
    return (
      <>
      <h1 className='Font-H1 font-bold text-center my-4'>{this.state.h1}</h1>
 {/* BootStap Chose PageCards */}
    
        <input  onBlur={(e)=>{if(Number(e.target.value) === 0){e.target.value=1; console.log(Number(e.target.value));};  this.setState((prew)=>({PageCards:prew.PageCards=Number(e.target.value) ,})); this.FirstFive_setState(0,Number(e.target.value)); this.ForNumber(this.articles.articles.length,Number(e.target.value))}} className="form-control me-2" pattern="[0-9]+"  maxLength="2" id="Search" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" >{this.props.Search}</button>
      

{/* BootStap Paginatine */}
 <nav className='flex justify-center my-4 sticky top-0 z-20' aria-label="...">
  <ul className="pagination pagination-sm flex justify-center align-middle flex-wrap " >
    <li className="page-item active" onClick={this.Page2}> <a  className="page-link Font" href='#'>1</a>   </li>
    
    {this.LeNunmberArr.Nu.map((A, index)=> <Li_comp key={index} OnCkick={this.Page2} Number={A}/>)}
    
    
    
  </ul>
</nav>
          

      <div className='container my-3'>

         <div id='Main' className="grid gap-3">
        
         {this.state.articles.map((OBJ)=> <NewsItem key={OBJ.url} Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage} Date={OBJ.publishedAt} Author={OBJ.author}/>)}
        
         

         </div>

      </div>
       </>
    )

       }
    }

   
  