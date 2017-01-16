# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Unit #4 Project: Phillyonce Music App

 _(beginner's reference for understanding music trends)_

[App link](https://obscure-tundra-48009.herokuapp.com/)

[Trello Link](https://trello.com/b/sIEFnZgx/project-4)



![](https://github.com/ilya0/Project-4/blob/master/ERD/9.finalworking.png)


<!-- ![](https://github.com/ilya0/Project-4/blob/master/ERD/7.working1.png) -->

![](https://github.com/ilya0/Project-4/blob/master/ERD/8.codeworking2.png)



### Overview - About the project

Phillyonce is the experiment to visualize real time, music listening, searching and sharing, in an interesting way to see what would happen when you mix music data and web development.

### The Process
Phillyonce was a theoretical challenge, due to the technical constraints unforeseen as well as logical forethough that needed to be undertaken.

Currently I never seen anything like Phillyonce. Phillyonce tries to realize almost real time interactions of music data. While other online visualizations use pre-existing data to graph movement. Phillyonce creates instant pull of data then visualizes it in almost seamless real-time.

There were many challenges with this project, including the frontside visualizations. The frontside visualizations were created with D3.js, CSS and HTML. One of the biggest challenges was to logically organize the data to visualize it in a way where it would make sense to the casual user. Another significant and unforseen issue was, streaming data. Initially, I thought there would be some sort of way to find out what people are searching for, through querying some sort of search engine. But, upon countless hours of searching, I came up empty handed. I ended up resorting to pulling data from twitter. I then painstakingly had to come up with logic to sort, pull, parse, detect and clean tweets for mentions of artists users are listening to. This would be used as my data stream.


![](https://github.com/ilya0/Project-4/blob/master/ERD/enstein.jpg)


## Concepts

The concept of this app was to create a way to visualize music trends in real time. The application uses twitter for the realtime tracking of various shares of music listens and d3 for visualization.

## Technologies

    * Node and NPM
	    * emoji-strip
	    * twit
	    * path
	    * body-parser
    * d3
    * css
    * html
    * jquery
    * ajax
    * express
    * Heroku
    * Bootstrap

 **Routes**
search/tweet - searches from twitter
auth - api key from twitter to access data



## Approach
I first wanted to design an app for musicians to be able to be able to manage a bunch of socials, emails and music career management issues. Upon further research, one of the most applicable issues to solve was to find current music trends.

I decided to create an app where I would get a live feed of searches of music in an area and visualize it with a d3 application.

![](https://github.com/ilya0/Project-4/blob/master/ERD/1.intial%20layout.JPG)

![](https://github.com/ilya0/Project-4/blob/master/ERD/2.%20newappreimagine.JPG)

![](https://github.com/ilya0/Project-4/blob/master/ERD/4.sort%20logic.JPG)

![](https://github.com/ilya0/Project-4/blob/master/ERD/6.findingartistname.JPG)



After deciding what to do I started my approach on the basic framework of the app, this included the D3 visualization and the framework to access some sort of live search to feed data. 

I soon found that live searches are hard to come by and I decided that that best way to get a live feed, is to use twitter and parse out info from the shares on twitter.

I developed a filter strategy to get the artist name from the various share tweets and also, I developed graphs and visualizations to display the data.


## Major Issues

- SVG is oversized
- Maybe some more styling
- dynamic pull backend


## Future upgrades
- More styling
- fire hose update from twitter
- further refinement of the sort logic
- graph sorting
- dynamic chart changing




Updates:
Jan 15 2017

## Authors

* **Ilya Osovets** -- [ilya0](https://github.com/ilya0)

## Acknowledgments

* WDI 
* WDI Class


