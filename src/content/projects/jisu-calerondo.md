---
title: Jisu Calenrondo
publishDate: 2023-07-18 00:00:00
img: /assets/stock-2.jpg
img_alt: Image of Neomuna from Destiny 2
description: |
  Jisu Calenrondo is a discord bot that informs users of a discord server of the latest videos uploaded by youtubers.
tags:
  - Dev
  - Bot Discord
  - Threading
  - YouTube API
---

## Project presentation

> "This is Jisu Calenrondo, reporting live from the Neomuna newsroom !"

Jisu Calenrondo is a discord bot that informs users of a discord server of the latest videos uploaded by youtubers.

For the context of the creation, I was in a clan on the Destiny 2 video game and the members of the discord server had created a room to notify streams and videos from certain people. The problem was that we had a limited choice of YouTube channels to which we could receive notification of a new video (only 3 people). So I came up with the idea of creating a bot that could not only notify the latest video from several YouTubers, but also add and remove YouTubers and post messages to a particular show as I saw fit.

### What does it do?

The bot's role is to notify users of the Discord server of the latest videos posted by YouTubers, using Threads and communicating with YouTube's API.

The bot uses a json file that stores the YouTube channel ID and several parameters:

- Channel name
- URL of the last video
- The ID of the discord room to be notified

It also has 4 interaction commands:

- Add Youtube channel with parameters including channel ID, channel name and discord room ID to be notified
- Delete Youtube channel with channel name as parameter
- Start/Stop notifications

Starting notifications creates a Thread that runs every 10 minutes and passes over each YouTube channel defined in the json to make requests to the YouTube API and retrieve the URL of the last video.

The API is limited to 10,000 usage credits per day. For each channel, the bot makes two 1-credit requests (for a total of 2 credits).

When the URL is the same in the json and in the API request, the bot moves on to the next channel and waits 10 seconds to avoid unwanted notifications.

If the URL is different, it records the new URL in the json and notifies the members of the lounge with a message.

Then, at the end, it pauses and resumes within the next 10 minutes.


### Technologies used

I used Python and the `requests` library for API requests and `asyncio` to manage threads.

The bot was hosted on a free bot discord server that has recently closed.



