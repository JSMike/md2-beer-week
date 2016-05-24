import { Injectable } from '@angular/core';
import { Brewery } from './brewery.model';

@Injectable()
export class BreweryService {
  BREWERIES: Brewery[] = [
    {
      id: 0,
      name: "Yards Brewing Company",
      est: 1994,
      location: "Philadelphia, PA",
      website: "http://www.yardsbrewing.com/",
      img: "img/Yards.jpg",
      beers: [],
      about: "Back in the late '80s, two college buddies, Tom and Jon, decided to brew some beer for their friends. Whether it was natural talent or the endless supply of free beer, people liked what they tasted and wanted more. They didn’t know it at the time, but this was the beginning of what was to become Yards Brewing Company. From a garage in Manayunk, to Roxborough, then Kensington and finally to Northern Liberties, this is the Story of Yards, Philadelphia’s hometown brewery since 1994."
    },
    {
      id: 1,
      name: " Tröegs Independent Brewing",
      est: 1996,
      location: "Hershey, PA",
      website: "http://troegs.com/",
      img: "img/troegs.jpg",
      beers: [],
      about: "We’re drawn to people with a sense of ADVENTURE and CURIOSITY. And, we think they’re drawn to us as well."
    },
    {
      id: 2,
      name: "Victory Brewing Company",
      est: 1996,
      location: "Downingtown, PA",
      website: "http://www.victorybeer.com/",
      img: "img/victory.png",
      beers: [],
      about: "Victory Brewing Company opened its doors to the public on Feb. 15, 1996. What was once a Pepperidge Farm factory became home to a 144-seat restaurant, 70-foot-long bar and a full-scale brewery. In its first year, Victory Brewing Company brewed 1,725 barrels of beer.\n\nSince then, Victory has increased the size of the restaurant to 300 seats. The brewery has also expanded, producing  125,713 barrels of beer in 2014. As loyal craft beer drinkers continue to show their dedication to flavorful, quality beer, Victory plans to continue its own growth. Onward to Victory!"
    },
    {
      id: 3,
      name: "Sly Fox Brewing Company",
      est: 1995,
      location: "Pottstown, PA",
      website: "http://www.slyfoxbeer.com/",
      img: "img/SlyFox.jpg",
      beers: [],
      about: "Sly Fox Brewing Company is headquartered in Pottstown, Pennsylvania with a 50-hectoliter production brewery at 331 Circle of Progress Drive."
    },
    {
      id: 4,
      name: "Saint Benjamin Brewing Company",
      est: 2016,
      location: "Philadelphia, PA",
      website: "http://stbenjaminbrewing.com/",
      img: "img/SaintBenjamin.jpg",
      beers: [],
      about: "Saint Benjamin Brewing Company is a craft brewery and taproom operating in Kensington, Philadelphia. The brewery is located in the historic carriage house and stables of the defunct Theo Finkenauer Brewery. Brewers Tim Patton and Christina Burris interpret classic styles and design new creations such as the India Cream Ale and Lavender Saison.\n\nThe name “Saint Benjamin” is a reference to founding father Benjamin Franklin. The idea for this brewery was devised in founder Tim Patton’s 190 year old home and former firehouse in Philadelphia. The founder of the city’s fire companies, Franklin was also an avid home brewer."
    },
    {
      id: 5,
      name: "Penn Brewery",
      est: 1986,
      location: "Pittsburg, PA",
      website: "http://www.pennbrew.com/",
      img: "img/penn.jpg",
      beers: [],
      about: "Penn Brewery tells the story of Pittsburgh’s European immigrants through its craft beer and homemade cuisine. Pittsburgh’s oldest and largest brewery, Penn is housed in the mid nineteenth-century landmark E&O Brewery Building in the North Side’s Deutschtown neighborhood, which was settled by German immigrants. Penn has been producing high-end craft beers since 1986, specializing in authentic, award-winning German-style beers brewed in the tradition of these immigrants, according to the strict quality standards of Reinheitsgebot.  Our beers’ great taste comes from real German hops and two-row barley, with no added corn or rice fillers."
    },
    {
      id: 6,
      name: "Manayunk Brewery",
      est: 1996,
      location: "Philadelphia, PA",
      website: "https://www.manayunkbrewery.com/",
      img: "img/manayunk-brewery.jpg",
      beers: [],
      about: "Our first batch of Manayunk Brewing Company beer was tapped on October 17, 1996. Since then, we have brewed more than 600 different varieties of beers, and have been selling these sought-after styles all around Philadelphia and New Jersey. Our brewers continue to explore new takes on classic styles, especially when it comes to sour ales and India Pale Ales. You will no doubt see our delivery truck bringing goods to happy customers throughout the Philadelphia region!"
    },
    {
      id: 7,
      name: "Lancaster Brewing Company",
      est: 1995,
      location: "Harrisburg, PA",
      website: "https://www.lancasterbrewing.com",
      img: "img/lancaster.jpg",
      beers: [],
      about: "At Lancaster Brewing, we unite our obsessive commitment to quality ingredients with equal measures of creativity, skill and experience, to brew consistently great beer.  Inspired by long and rich brewing traditions, we are proud to brew in the heart of Lancaster County, alongside scores of old-world craftsmen, independent farmers, working the more than 5,300 local farms, and our fiercely independent Amish neighbors."
    },
    {
      id: 8,
      name: "Conshohocken Brewing Company",
      est: 2013,
      location: "Conshohocken, PA",
      website: "http://www.conshohockenbrewing.com/",
      img: "img/conshy-primary-logo.png",
      beers: [],
      about: "Conshohocken was an industrial national hub in the late 1800s – a time of bowler hats, small local breweries and velocipede bicycles. We are carrying that same spirit forward through our hand crafted beers and our personal commitment to each and every beer we brew.\n\nBrewing in small batches, each of our beers is uniquely crafted, allowing us to share innovative, fresh, high quality beers with the good people of our communities. In addition to making beer we love, we have big plans to give back to the community and create a socially responsible brewery."
    }];

  constructor() { }

  getBreweries(): any {
    return Promise.resolve(this.BREWERIES)
  }

  getBrewery(id: number): any {
    return Promise.resolve(this.BREWERIES)
      .then(breweries => breweries.filter(brewery => brewery.id === id)[0]);
  }


}
