---
title: How I Won a WWDC Scholarship
category: Programming
tags: [ios development, wwdc, san jose]
layout: post
---

![WWDC 2019]({{ "assets/how-i-won-a-wwdc-scholarship/wwdc.jpg" | absolute_url }})

I’ve been developing iOS apps on and off for about three and a half years now, and recently started a co-op work term as an iOS developer for TripAdvisor (see [here]({{ site.baseurl }}{% post_url 2019-01-06-a-new-chapter %}) for more on my move to Boston!). But last night, for the first time, I received news that I was fortunate enough to receive a student scholarship to attend Apple’s WWDC this year in San Jose, California. Attending WWDC has been something on my bucket list probably since the time I started getting interest in programming, so to receive the opportunity means a whole lot to me. I’d definitely like to thank [Ben Emdon](https://benemdon.github.io/), a WWDC scholarship winner himself, for giving me the push that I needed to apply.<!--more-->

This year, Apple’s requirements were pretty straightforward: build a Swift Playground over the course of 10 days that can be experienced in three minutes. Here’s how it all unfolded:

> If you’re looking for tips on doing your own WWDC scholarship applications, make sure to read [Wrapping Up](#wrapping-up) at the bottom!

## Brainstorming

To me, brainstorming ideas was half the battle. I wanted to choose something technically complex enough that it would impress, but straightforward enough to complete in such a short time frame. I also struggled to come up with a simple, creative, and graceful idea, as I knew that a well thought-out idea would help me stand out from the many, many (many!) other applicants. I bounced back and forth between several concepts, even getting as far as beginning to program one of them. Future applicants, feel free to use any of these as inspiration!

### Some of my ideas

- Colour palette picker (would provide complementary colours, as well as generate associated Swift code)
- Maze generator (thought about adding a 1st person play through mode, but seemed too complex for 10 days)
- Rich text editor, similar to apps like [Bear](https://bear.app/) (not very impressive/wowing)
- Tetris (seemed uncreative)
- Photo/video conversion to ASCII text (would look really cool, but I had no idea where to start with it and didn’t want to end up halfway to the deadline with no concrete code written)
- **A game revolving (heh) around a unique gameplay mechanic**

You can probably tell by the bold font which one I picked! I had started one or two of the ideas, but didn’t really feel inspired or motivated by any of them - and if I wasn’t inspired, the judges definitely wouldn’t be! I was scrolling through random websites, searching for ideas, when I came across a very unique game concept involving two dots rotating around a pivot point. The judges had most likely never seen anything like it before, it looked technically feasible, and there was lots of room for creativity, so on the evening of the second day I began to program!

![Twister, my WWDC Scholarship app]({{ "assets/how-i-won-a-wwdc-scholarship/twister.gif" | absolute_url }}){: .center-image }

## Development

Since I’m currently working a full-time job, I was restricted to doing my work in the evenings and on weekends - so I made my weekends count. During both of the two weekends that fell within the application period, I spent around 10 to 12 hours each day working on the game. I decided that it would be a cool way to learn how to use SpriteKit, so I spent a chunk of my first day of programming just researching how SpriteKit works as a whole. After I began to feel comfortable with it, I sought to begin the actual development.

Unfortunately for me, Swift Playgrounds decided not to cooperate with me. I was separating my code into several files (i.e. a main `.playground` file and several supporting `.swift` source files), but the program kept crashing on me, and code completion wasn’t working in the source files. After some struggling, I discovered that it wouldn’t crash if I wrote everything in the `.playground` file, so I decided to do that and break it up into separate files towards the end of the development process. Little did I know that this would create issues for me later on.

I ran into odd issues, where the game seemingly struggled to render frames at a constant 60 FPS, yet with changes as small as moving code from inside one function to outside the function, the game would suddenly flow smoothly. Everything I found online seemed to indicate that I shouldn’t have been getting those FPS issues, yet they continued to plague me. I spent several hours completing optimizations that created code I’m definitely not proud of! And yet, it worked and looked relatively smooth, and that was what was most important to me. I wanted to deliver a well-polished finished product to Apple.

Finally, the day before the deadline, I separated the files again. And. It. Ran. Perfectly. Smoothly.

It turns out, that for some *ungodly* reason, putting all the code in a `.playground` file causes FPS issues, but keeping the code separate would result in perfectly smooth gameplay (despite Xcode crashing occasionally during development). So I spent that entire afternoon going back over all of the poor code I had written, redoing things the proper way. It felt *incredibly* good to fix the things that I knew were bad practice, but couldn’t avoid the first time around. Fixing those FPS issues also gave me the opportunity to add some last-minute particle effects, like trails following the dots and blue dust sparkling in the background.

I can only imagine how much time I could have saved if I didn’t need to spend several hours on optimization - how many features I could have added. I was worried that that lack of features would come back to bite me, and I wouldn’t be accepted. But I think it really comes down to the quality of the product you deliver, not the number of features it has.

## Music, Essays, and Presentation

As someone with a musical background of 16+ years, I decided to write my own original music, in another effort to make my application stand out from the competition. I pulled out GarageBand on my new iPad Pro, and wrote out a track over the course of an evening. I then stripped out the synthesizers to create a similar secondary track, which I used for the title screen. Using AVFoundation, I was able to fade back and forth between the two tracks, depending on whether the player was on the title screen or actively playing the game. I don’t actually have any evidence to prove it, but I think this may have been one of the most distinguishing factors of my scholarship application.

![Garageband Twister Theme]({{ "assets/how-i-won-a-wwdc-scholarship/garageband.png" | absolute_url }})

I also wrote up what I believe to be some very well-rounded answers to the “optional” essay questions. I say “optional” because I believe that anyone applying for a WWDC scholarship should absolutely fill these sections out. It gives Apple the chance to see what you’ve been able to accomplish across your entire programming career, as opposed to just what you can do over the course of the application period. As such, I put a few hours of effort into the essay questions, making sure that everything was properly worded and that I mentioned as many highlights of my programming career as I could - and my efforts paid off.

Finally, I made sure to spend a couple of hours making sure the Playground itself was presented well. I ended up with two Playground pages in my project: one to act as an introduction on the game and how to play, and one to actually launch the game. The Intro page contained some helpful text and gifs on how the game works, to prepare the judges for what they were about to play, and the Game page allowed you to customize some of the small things, like number of rotating dots and initial rotation speed. This is another area where I believe that going the extra mile to create a polished presentation paid off.

## Wrapping Up

I am absolutely blown away that I was selected amongst so many other talented individuals to attend WWDC this year. I intend to make the most out of this opportunity and to network with as many of the incredible developers at the conference as possible. For those looking to apply for a WWDC scholarship, these are my recommendations:

### Pick something simple but unique

You want to make sure you have enough time to complete the project. Make sure you choose something that you know you can finish, then use the extra time at the end to polish it up.

### Try to use something other than just UIKit

We all know and love UIKit, but there’s so much more out there to try. Taking the initiative to try something outside of just UIKit can really show Apple that you’re putting in the effort to learn and go beyond the basics of Swift programming.

### Make it yours

Find something that you as an individual bring to the table, and try to incorporate it. Musician? Write some background music or make sound effects. Artist? Add some drawings or create custom sprites for your characters.

### Fill out everything

Fill out all of the essay questions you can. If you can’t, then aim to have the experience such that you can fill them out by next year.

### Most importantly, have fun and good luck!

If you have any questions, don't be afraid to reach out to me! My contact info is available on my [Home page](https://averyvine.com).
