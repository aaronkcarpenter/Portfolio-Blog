---
title: How I Got My First Twitter Bot Suspended
author: Aaron Kyle
date: 2021-01-04
---

<!-- ## How My First Twitter Bot Got Suspended -->

Of course, App Academy taught me to place my private key credentials in .env files, to add files to my .gitignore, but when you're learning through reading a book or a course, this step is skipped in the discussion.

This particular time, I was going through a course all about bots, Web Scraping and utilizing the data for something useful. While the course was great, pushed me to research and learn outside of the course, it wasn't stated implicitly or explicitly to not upload to Github.

Well, I wanted to keep my garden green, so every bit of code that I was working on, I committed. After finishing the project, I woke up the next morning to notifications from Google stating 'resources associated with your project \*\*\* are being suspended for cryptocurrency mining in violation of our Terms of Service.'

Whoa!!!

I wasn't sure how it happened, but with a little research, I realized that a key file in the project was uploaded to Github. At my time in App Academy, they definitely warned against this and described how there are bots that constantly scrape repositories for credentials to use for good and evil.

This was a great lesson for me and has prompted me to create a new bot, this time with a lesson learned. Just remember, you can't be great without going through the bumps and bruises of the learning stage.

TLDR: If you have sensitive data in your project, put in in a .gitignore file before uploading it to avoid any suspensions or information being compromised.
