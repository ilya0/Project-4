# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Unit #4 Project: Phillyonce Music App
[Unit #4 Project: Phillyonce Music App - Heroku link](https://obscure-tundra-48009.herokuapp.com/)
 _(beginner's reference for understanding music trends)_


![](https://github.com/ilya0/Project-4/blob/master/ERD/9.finalworking.png)


![](https://github.com/ilya0/Project-4/blob/master/ERD/7.working1.png)

![](https://github.com/ilya0/Project-4/blob/master/ERD/8.codeworking2.png)






### Overview

Since the begining of time people have wondered, what music are people listening to right now?

![](https://github.com/ilya0/Project-4/blob/master/ERD/enstein.jpg)






**Concepts** 
The concept of this app was to create a way to visualize music trends in real time. The application uses twitter for the realtime tracking of various shares of music listens and d3 for visualization.

**Technologies**

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

**Approach**
I first wanted to design an app for musicians to be able to be able to manage a bunch of socials, emails and music career management issues. Upon further research, one of the most applicable issues to solve was to find current music trends.

I decided to create an app where I would get a live feed of searches of music in an area and visualize it with a d3 application.

![](https://github.com/ilya0/Project-4/blob/master/ERD/1.intial%20layout.JPG)

![](https://github.com/ilya0/Project-4/blob/master/ERD/2.%20newappreimagine.JPG)

![](https://github.com/ilya0/Project-4/blob/master/ERD/4.sort%20logic.JPG)

![](https://github.com/ilya0/Project-4/blob/master/ERD/6.findingartistname.JPG)



After deciding what to do I started my approach on the basic framework of the app, this included the D3 visualization and the framework to access some sort of live search to feed data. 

I soon found that live searches are hard to come by and I decided that that best way to get a live feed, is to use twitter and parse out info from the shares on twitter.

I developed a filter strategy to get the artist name from the various share tweets and also, I developed graphs and visualizations to display the data.


**Major Issues**
- no live seaches that are easily accessible to the public
- 100 limit on twitter searches
- lots of trash on twitter searches
- hard to parse good artist info
- shares are volentary, data is not accurate

**Routes**
search/tweet - searches from twitter
auth - api key from twitter to access data


**Future upgrades**
- styling
- fire hose update from twitter
- further refinement of the sort logic
- graph sorting
- dynamic chart changing


