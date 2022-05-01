![Screenshot](/images/screenshot4.PNG)


# ACNH Music Collection Tracker
My partner and I love to play Animal Crossing together every morning. Recently we decided to collect all of the songs in the game, only to find that there are over 100! We got tired of running to the house everyday to check our stereos so I made this app to help us keep track of what we have! 

Over time, we started finding it difficult to keep track of other things, so now this tool has been upgraded to include Fossils and Art as well. Media Queries and more collections to come! I've only focused on mobile layout so far because that is the only way that we use this.

[Link to project](https://acnhcollections.netlify.app/)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, ACNH API

I started by using the Animal Crossing API to create new DOM elements with checkboxes. When checked, the data is kept in local storage. The songs from the newest update were not in the API, so I created a separate factory and manually copied the links from Nookipedia.

## Optimizations

I have not done anything to make this app pretty. It keeps it loading quickly as it is really only needed as a simple tool. I did update it to add spacing to the checkboxes as they were a bit close together and difficult to click on mobile.

If people are actually using this, then I may beef it up a bit visually. I do plan to make the header image significatnly smaller so that it will load faster. Adding it was very impromptu and it is huge.

## Lessons Learned:

This was a good refresher on using local storage and DOM manipulation. 



Also check out other projects of mine like this one! I used the same API for this one:

[Animal Crossing Music Player](https://github.com/ChrisThompsonDev/Animal-Crossing-KK-Slider-Music-Player)

