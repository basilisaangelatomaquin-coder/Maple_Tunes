/* =========================================================
   A. THE SONGS
   ---------------------------------------------------------
   Put your mp3 files in a folder called "songs" (next to
   index.html). Each file name below must match exactly.

   LYRICS: paste them into each song's  lyrics: [ ... ]  list.
   There are two ways to write them:

   1) Simple - one line of text each. The lines are spread
      evenly across the song's length:
        lyrics: [
          'Your first line here',
          'Your second line here'
        ]

   2) Exact timing - give each line the second it starts:
        lyrics: [
          { t: 12.5, text: 'Your first line here' },
          { t: 17,   text: 'Your second line here' }
        ]

   Leave  lyrics: []  and the page shows a small note instead.
   Change artist, title or colors any time.
   ========================================================= */
   

   
const songs = [
  { title:'Why', artist:'Tiggy', file:'Why-Tiggy Lyrics.mp3', duration:225.5,
    emoji:'🍁', colors:['#f2b53f','#b8431b'],
    lyrics:[
     { t: 0, text: "Na na na na, na na na" },
     { t: 4, text: "Na na na na, na na na" },
     { t: 8, text: "Na na na na, na na na" },
     { t: 12, text: "Na na na na, na na na" },
     { t: 15, text: "♪" },
     { t: 31, text: "Standing beside you" },
     { t: 34, text: "Wishing you'd always be close to me" },
     { t: 39, text: "And how can I tell you" },
     { t: 41, text: "Every night I see you in my dreams" },
     { t: 46, text: "Believe me" },
     { t: 48, text: "Don't be me" },
     { t: 49, text: "I would never let you go" },
     { t: 53, text: "Why, why do this have to be a fantasy" },
     { t: 58, text: "Let's make our love become reality" },
     { t: 61, text: "Oh, how I pray for that day to come" },
     { t: 65, text: "When we'll be joined together close as one" },
     { t: 69, text: "♪" },
     { t: 74, text: "Together close as one" },
     { t: 77, text: "♪" },
     { t: 84, text: "I feel the passion" },
     { t: 87, text: "Burning deep inside my soul" },
     { t: 92, text: "And you're the solution" },
     { t: 94, text: "I know you'd catch me if I fall" },
     { t: 99, text: "Believe me" },
     { t: 101, text: "Don't be me" },
     { t: 102, text: "I would never let you go" },
     { t: 106, text: "Why, why do this have to be a fantasy" },
     { t: 111, text: "Let's make our love become reality" },
     { t: 114, text: "Oh, how I pray for that day to come" },
     { t: 118, text: "When we'll be joined together close as one (na na na na, na na na)" },
     { t: 124, text: "Together as one (na na na na, na na na)" },
     { t: 127, text: "Together as one (na na na na, na na na)" },
     { t: 131, text: "Together as one (na na na na, na na na)" },
     { t: 135, text: "Together as one" },
     { t: 138, text: "♪" },
     { t: 167, text: "Believe me" },
     { t: 169, text: "Don't be me" },
     { t: 170, text: "I would never let you go" },
     { t: 174, text: "Why, why do this have to be a fantasy" },
     { t: 178, text: "Let's make our love become reality" },
     { t: 182, text: "Oh, how I pray for that day to come" },
     { t: 186, text: "When we'll be joined together close as one (na na na na, na na na)" },
     { t: 191, text: "Together as one (na na na na, na na na)" },
     { t: 195, text: "Together as one (na na na na, na na na)" },
     { t: 199, text: "Together as one (na na na na, na na na)" },
     { t: 203, text: "Together as one" },
     { t: 206, text: "Uh oh uh oh, all together as one" },
     { t: 211, text: "♪" },
    ] },

  { title:'Aphrodite', artist:'The Ridleys', file:'Aphrodite - The Ridleys (Lyrics).mp3', duration:236.6,
    emoji:'🍂', colors:['#e8742a','#7a1f1b'],
    lyrics:[
     { t:0 ,     text: "You're the moon that glows in the sky"},
     { t:4 ,     text: "Lighting up the world when it's blue"},
     { t:8 ,     text: 'Stars they dance, though late in the night'},
     { t:12 ,     text: "Don't you know they dance just for you?"},
     { t:18 ,     text: '♪'},
     { t:35 ,     text: 'There you are, above darkened clouds'},
     { t:39 ,     text: 'Smiling at the world from afar'},
     { t:43 ,     text: 'With the stars, you wonder around'},
     { t:46 ,     text: 'May they follow you wherever you are'},
     { t:52 ,     text: 'Here I am, just another boy'},
     { t:54 ,     text: 'Singing songs that others have sung'},
     { t:60 ,     text: "Tryin' to find the words to employ"},
     { t:63 ,     text: 'To adore the goddess of love'},
     { t:67,      text: "Ohh, you've got me in a daze, yeah"},
     { t:72,      text: "No, it's not another phase"},
     { t:76,      text: "You gave me one look and now I can't get my mind off of you"},
     { t:83,      text: "And it's all because"},
     { t:84,      text: 'I see the galaxies when I look in your eyes'},
     { t:87,      text: "And I, can't speak, no, I, can't speak at all"},
     { t:92,      text: "I swear to Zeus, you're Aphrodite in disguise"},
     { t:96,      text: "Don't think that you could hide from me"},
     { t:100,     text: "Oh, no, I never thought I'd get this close to someone so divine"},
     { t:104,     text: "Oh, I, can't breathe, no, I, can't breathe at all"},
     { t:109,     text: "Aphrodite, could you, could you please be mine?"},
     { t:112,     text: "Oh.."},
     { t:115,     text: "Could you please be mine?"},
     { t:117,     text: "Oh, mine"},
     { t:119,     text: '♪'},
     { t:134,      text: "Here you are, I've waited so long"},
     { t:137,      text: "Hoping you would sit down and stay"},
     { t:142,      text: "'Cause with the stars, I've been dancing along"},
     { t:145,      text: "Like a fool, so you'd look my way"},
     { t:150,      text: "You're the moon that glows in the sky"},
     { t:154,      text: "Lighting up my world when it's blue"},
     { t:158,      text: "And here I sing, though late in the night"},
     { t:162,      text: "Hope you know I sing just for you"},
     { t:166,      text: "Ohh, you've got me in a daze, yeah"},
     { t:170,      text: "No, it's not another phase"},
     { t:174,      text: "You gave me one look and now I can't get my mind of you"},
     { t:181,      text: "And it's all because"},
     { t:183,      text: "I see the galaxies when I look in your eyes"},
     { t:186,      text: "And I, can't speak, no, I, can't speak at all"},
     { t:191,      text: "I swear to Zeus, you're Aphrodite in disguise"},
     { t:194,      text: "Don't think that you could hide from me"},
     { t:198,      text: "Oh, no, I never thought I'd get this close to someone so divine"},
     { t:202,      text: "Oh, I, can't breathe, no, I, can't breathe at all"},
     { t:207,      text: "Aphrodite, could you, could you please be mine?"},
     { t:210,      text: "Oh.."},
     { t:213,      text: "Could you please be mine?"},
     { t:215,      text: "Oh, mine"},
     { t:217,      text: "♪"},
     { t:221,      text: "Could you please be mine?"},
     { t:222,      text: "Oh, mine"},
    ] },

  { title:'Are You Bored Yet?', artist:'Wallows(feat.Clairo)', file:'Wallows - Are You Bored Yet (feat. Clairo).mp3' , duration:178.1,
    emoji:'🌰', colors:['#8a5a2b','#3a1a12'],
    lyrics:[
     { t:0, text: "♪" },
     { t:22, text: "What's wrong? you've been askin' but I don't have an answer" },
     { t:28, text: "How come, I'm still thinkin'" },
     { t:31, text: "Let's pretend to fall asleep now" },
     { t:34, text: "When we get old, will we regret this?" },
     { t:38, text: "Too young to think about all that shit" },
     { t:43, text: "And stalling only goes so far" },
     { t:45, text: "When you've got a head start" },
     { t:48, text: "'Cause we could stay at home and watch the sunset" },
     { t:52, text: "But I can't help from asking, 'Are you bored yet?'" },
     { t:56, text: "And if your feelin' lonely you should tell me" },
     { t:60, text: "Before this ends up as another memory" },
     { t:64, text: "Will you tell the truth so I don't have to lie" },
     { t:72, text: "Will you tell the truth so I don't have to lie" },
     { t:80, text: "Feels like I've known you my whole life" },
     { t:84, text: "I can see right through your lies" },
     { t:89, text: "I don't know where we're goin'" },
     { t:91, text: "But I'd like to be by your side" },
     { t:96, text: "If you could tell me how you're feelin'" },
     { t:100, text: "Maybe we could get through this undefeated" },
     { t:105, text: "Holdin' on for so long" },
     { t:112, text: "'Cause we could stay at home and watch the sunset" },
     { t:116, text: "But I can't help from asking, 'Are you bored yet?'" },
     { t:120, text: "And if your feelin' lonely you should tell me" },
     { t:124, text: "Before this ends up as another memory" },
     { t:128, text: "Will you tell the truth so I don't have to lie" },
     { t:136, text: "Will you tell the truth so I don't have to lie" },
     { t:144, text: "♪" },
    ] },

  { title:'blue', artist:'Yung Kai with MINNIE', file:'blue (with MINNIE).mp3', duration:213.4,
    emoji:'🌙', colors:['#8b3a3a','#2a1530'],
    lyrics:[
      { t:0, text: "♪" },
      { t:19, text: "Your morning eyes, I could stare like watching stars" },
      { t:26, text: "I could walk you by, and I'll tell without a thought" },
      { t:32, text: "You'd be mine" },
      { t:34, text: "Would you mind if I took your hand tonight?" },
      { t:40, text: "Know you're all that I want in this life" },
      { t:48, text: "I'll imagine we fell in love" },
      { t:51, text: "I'll nap under moonlight skies with you" },
      { t:55, text: "I'll think I'll picture us, you with the waves" },
      { t:58, text: "The ocean's colors on your face" },
      { t:62, text: "I'll leave my heart with your air" },
      { t:66, text: "So let me fly with you" },
      { t:70, text: "Will you be forever with me?" },
      { t:77, text: "♪" },
      { t:107, text: "You're my favorite place" },
      { t:110, text: "So always I will stay" },
      { t:114, text: "The look that's on your face" },
      { t:118, text: "I think you feel the same" },
      { t:122, text: "Fate is an artist and you'll be my muse" },
      { t:125, text: "I love you, I love you, I love you, I do" },
      { t:129, text: "If you are the ocean, and I am the blue" },
      { t:133, text: "I love you, I love you, I love you, I do" },
      { t:137, text: "I'll imagine we fell in love" },
      { t:139, text: "I'll nap under moonlight skies with you" },
      { t:143, text: "I'll think I'll picture us, you with the waves" },
      { t:147, text: "The ocean's colors on your face" },
      { t:150, text: "I'll leave my heart with your air" },
      { t:155, text: "So let me fly with you" },
      { t:158, text: "Will you be forever with me?" },
      { t:166, text: "♪" },
      
    ] },

  { title:'lucy', artist:'Corbon Amodio', file:'lucy_.mp3', duration:118.0,
    emoji:'☕', colors:['#c98b4e','#5a2e1a'],
    lyrics:[
      { t:0, text: "♪" },
      { t:25, text: "Lucy laid on her back" },
      { t:29, text: "While my head spun off the track" },
      { t:33, text: "Laying still on the grass" },
      { t:37, text: "When did things moves so damn fast?" },
      { t:41, text: "♪" },
      { t:57, text: "Hearing the words that I want" },
      { t:61, text: "But was still caught so off guard" },
      { t:65, text: "Sunny sky, stiff smile" },
      { t:69, text: "While the beats rise in my heart" },
      { t:73, text: "♪" },
      { t:79, text: "Bingo, bingo, baby" },
      { t:81, text: "I love you, ain't that crazy?" },
      { t:84, text: "I want you, I want you over again" },
      { t:88, text: "Bingo, bingo, baby" },
      { t:90, text: "I love you, ain't that crazy?" },
      { t:92, text: "I want you, I want you over again" },
      { t:96, text: "♪" },
    ] },

  { title:'Closer', artist:'Ghelee', file:'GEHLEE - Closer (Lyrics).mp3', duration:161.3,
    emoji:'🦊', colors:['#d9541e','#4a1a12'],
    lyrics:[
      { t:0, text: "♪" },
      { t:1, text: "What are you doing all the way over there?" },
      { t:4, text: "Like seriously?" },
      { t:8, text: "Get over here" },
      { t:10, text: "Closer, closer, come closer to me (closer to me)" },
      { t:14, text: "Closer, closer, stay right here, baby" },
      { t:19, text: "Just a little closer (just a little closer)" },
      { t:22, text: "Just you and me" },
      { t:24, text: "Closer, closer, stay close to me" },
      { t:29, text: "Somethin' about you (ah), I just can't get out of my mind" },
      { t:34, text: "This feelings in my heart (in my heart), you ignite (ooh)" },
      { t:39, text: "And when you come close, can't meet your eyes" },
      { t:44, text: "You make me nervous, but I kinda like it" },
      { t:49, text: "Take it slowly (slowly), stay close to me (ooh)" },
      { t:54, text: "I can be yours if you'll let me be" },
      { t:59, text: "No second-guessing, I'm feeling you" },
      { t:64, text: "Maybe, baby, you feel it too" },
      { t:69, text: "Closer, closer, come closer to me (closer to me)" },
      { t:73, text: "Closer, closer, stay right here, baby" },
      { t:78, text: "Just a little closer (just a little closer)" },
      { t:81, text: "Just you and me" },
      { t:83, text: "Closer, closer, stay close to me" },
      { t:88, text: "Whenever I'm with you, time goes so fast (ooh)" },
      { t:93, text: "Wishin' somehow this moment could last" },
      { t:98, text: "Tell me your secrets, I'll tell you mine (I'll tell you mine)" },
      { t:102, text: "And I wanna get to know you more tonight" },
      { t:108, text: "Closer, closer, come closer to me (closer to me)" },
      { t:112, text: "Closer, closer, stay right here, baby" },
      { t:117, text: "Just a little closer (just a little closer)" },
      { t:120, text: "Just you and me" },
      { t:122, text: "Closer, closer, stay close to me" },
      { t:127, text: "(Closer, closer, come closer to me) stay close to me" },
      { t:134, text: "(Closer, closer) stay right here, baby" },
      { t:137, text: "Just a little closer (just a little closer)" },
      { t:140, text: "Just you and me" },
      { t:142, text: "Closer, closer" },
      { t:145, text: "Stay close to me" },
      { t:151, text: "♪" },
    ] },

  { title:'Love Is', artist:'The Ridleys', file:'The Ridleys - Love Is (Lyric Video).mp3', duration:232.5,
    emoji:'🎃', colors:['#f08a24','#a8320f'],
    lyrics:[
      { t:0, text: "♪" },
      { t:23, text: "It's the feeling I get when I look in your eyes, and your staring back" },
      { t:32, text: "Oh, I treasure good moments like that " },
      { t:36, text: "♪" },
      { t:41, text: "It's the time that we spend doing nothing at all, stay up on the call" },
      { t:49, text: "Oh, with you, there is nothing I lack" },
      { t:56, text: "If you ask me what love is and what it's about" },
      { t:61, text: "To be honest, I'm still figuring it out" },
      { t:65, text: "If I could be candid and tell you the truth" },
      { t:71, text: "I'd love to figure love out with you" },
      { t:76, text: "♪" },
      { t:93, text: "It's the pact that we make to be safe and secure" },
      { t:97, text: "A shelter that's sure" },
      { t:101, text: "Count on me on a rainy day" },
      { t:105, text: "♪" },
      { t:110, text: "It's the choice that we make when we feel" },
      { t:114, text: "The weight of a hundred small heartbreaks" },
      { t:119, text: "To talk it out instead of parting ways" },
      { t:125, text: "So if you ask me what love is and what it's about" },
      { t:131, text: "To be honest, I'm still figuring it out" },
      { t:134, text: "If I could be candid and tell you the truth" },
      { t:140, text: "I just wanna figure love out with you" },
      { t:145, text: "♪" },
      { t:161, text: "It's when you hold my hand and assure me" },
      { t:165, text: "It's when you tell me things that you'd never tell anyone else" },
      { t:170, text: "I'm discovering things I never knew before" },
      { t:176, text: "Love is all these and more" },
      { t:185, text: "Love is all these and more" },
      { t:193, text: "Love is all these and more" },
      { t:202, text: "Love is all these and more" },
      { t:212, text: "So if you ask me what love is, I'd shrug and I'd smile" },
      { t:217, text: "Rest your head and lay down for a while" },
      { t:221, text: "There's so much to say and so much to do" },
      { t:227, text: "I just wanna live my whole life with you" },
    ] },

  { title:'La Da Dee', artist:'Cody Simpson', file:'Cody Simpson - La Da Dee (Lyrics).mp3', duration:196.8,
    emoji:'🍄', colors:['#7b8a34','#3a3a12'],
    lyrics:[
      { t:0, text: "♪" },
      { t:8, text: "There's no way to say this song's about someone else" },
      { t:12, text: "Everytime you're not in my arms, I start to lose myself " },
      { t:16, text: "Someone please pass me my shades, don't let them see me down" },
      { t:20, text: "You have taken over my days, so tonight I'm going out" },
      { t:25, text: "Yet I'm feeling like, there is no better place than right by your side" },
      { t:33, text: "I had a little taste, and I'll only spoil the party anyway" },
      { t:37, text: "'Cause all the girls are looking fine" },
      { t:39, text: "But you're the only one on my mind" },
      { t:43, text: "La da dee, la da da doo" },
      { t:45, text: "La da da, me, la da da, you" },
      { t:47, text: "La da dee, la da da doo" },
      { t:49, text: "There's only me, there's only you" },
      { t:51, text: "La da dee, la da da doo" },
      { t:53, text: "La da da, me, la da da, you" },
      { t:56, text: "La da dee, la da da doo" },
      { t:58, text: "When you were gone, I think of you" },
      { t:60, text: "All these places packed with people" },
      { t:62, text: ", but your face is all I see" },
      { t:64, text: "And the music's way too loud, but your voice won't let me be" },
      { t:68, text: "So many pretty girls around, they're just dressing to impress" },
      { t:72, text: "But the thought of you alone has got me spun" },
      { t:75, text: "And I don't know what to say next" },
      { t:77, text: "I'm feeling like" },
      { t:79, text: "There is no better place than right by your side" },
      { t:83, text: "I had a little taste," },
      { t:85, text: "and I'll only spoil the party anyway" },
      { t:89, text: "'Cause all the girls are looking fine" },
      { t:91, text: "But you're the only one on my mind" },
      { t:95, text: "La da dee, la da da doo" },
      { t:97, text: "La da da, me, la da da, you" },
      { t:99, text: "La da dee, la da da doo" },
      { t:101, text: "There's only me, there's only you" },
      { t:103, text: "La da dee, la da da doo" },
      { t:105, text: "La da da, me, la da da, you" },
      { t:107, text: "La da dee, la da da doo" },
      { t:109, text: "When you were gone, I think of you" },
      { t:111, text: "La da dee, la da da doo" },
      { t:113, text: "La da da, me, la da da, you" },
      { t:116, text: "La da dee, la da da doo" },
      { t:118, text: "There's only me, there's only you" },
      { t:120, text: "La da dee, la da da doo" },
      { t:122, text: "La da da, me, la da da, you" },
      { t:124, text: "La da dee, la da da doo" },
      { t:126, text: "When you were gone, I think of you" },
      { t:129, text: "I pretend the night is so beautiful" },
      { t:133, text: "Take a photo with the bros, la da dee, la da da doo" },
      { t:137, text: "They won't see through my disguise, right here behind my eyes" },
      { t:141, text: "Replaying in my mind, la de da, yeah" },
      { t:145, text: "I'm feeling like (Whoa)" },
      { t:147, text: "There is no better place than right by your side (By your side)" },
      { t:151, text: "I had a little taste," },
      { t:153, text: "and I'll only spoil the party anyway" },
      { t:157, text: "'Cause all the girls are looking fine" },
      { t:159, text: "But you're the only one on my mind (Ooh, yeah)" },
      { t:163, text: "La da dee, la da da doo" },
      { t:165, text: "La da da, me, la da da, you" },
      { t:167, text: "La da dee, la da da doo" },
      { t:169, text: "There's only me, there's only you" },
      { t:171, text: "La da dee, la da da doo" },
      { t:173, text: "La da da, me, la da da, you ( La da da, you, you)" },
      { t:175, text: "La da dee, la da da doo" },
      { t:177, text: "When you were gone, I think of you" },
      { t:179, text: "La da dee, la da da doo, la da da, me, la da da, you" },
      { t:184, text: "La da dee, la da da doo, there's only me, there's only you ( There's only you)" },
      { t:188, text: "La da dee, la da da doo, la da da, me, la da da, you" },
      { t:192, text: "La da dee, la da da doo" },
      { t:194, text: "When you were gone, I think of you" },
      
    ] },

  { title:'Gold', artist:'Owl City', file:'Owl City - Gold [Lyrics].mp3', duration:236.3,
    emoji:'🌅', colors:['#f7c35a','#c2501c'],
    lyrics:[
      { t:0, text: "♪" },
      { t:12, text: "Stand on up and take a bow" },
      { t:15, text: "There is something there and it's showing" },
      { t:18, text: "There is no need to look around" },
      { t:21, text: "You're the best we got going" },
      { t:24, text: "Shout out to the dreams you'll chase" },
      { t:27, text: "Shout out to the hearts you'll break" },
      { t:29, text: "Nothing is gonna stop you now, I guess you better get going" },
      { t:34, text: "You'll never be far, I'm keeping you near" },
      { t:37, text: "Inside of my heart, you're here" },
      { t:40, text: "Go on" },
      { t:41, text: "It's got to be time, you're starting to shine" },
      { t:44, text: "Cause what you've got is gold" },
      { t:49, text: "I know your gold" },
      { t:52, text: "Oh, I know, I know" },
      { t:58, text: "I don't even need stars in the night" },
      { t:62, text: "I found my treasure" },
      { t:64, text: "All I need is you by my side" },
      { t:67, text: "So shine forever" },
      { t:69, text: "Gold, I know you're gold" },
      { t:75, text: "Oh, I know you're gold" },
      { t:81, text: "It won't take you long to get when you feel like your soaring" },
      { t:87, text: "So write it all and don't forget" },
      { t:89, text: "You gotta tell us your story" },
      { t:92, text: "Shout out to the friends back home" },
      { t:95, text: "Shout out to the hearts you've known" },
      { t:98, text: "You gave them nothing but the best" },
      { t:100, text: "Yeah, and you can tell them your story" },
      { t:103, text: "You'll never be far, I'm keeping you near" },
      { t:105, text: "Inside of my heart, you're here" },
      { t:109, text: "Go on" },
      { t:110, text: "It's got to be time, you're starting to shine" },
      { t:113, text: "Cause what you've got is gold" },
      { t:118, text: "I know your gold" },
      { t:121, text: "Oh, I know, I know" },
      { t:126, text: "I don't even need stars in the night" },
      { t:130, text: "I found my treasure" },
      { t:132, text: "All I need is you by my side" },
      { t:136, text: "So shine forever" },
      { t:138, text: "Gold, I know you're gold" },
      { t:143, text: "Oh, I know you're gold" },
      { t:151, text: "♪" },
      { t:170, text: "Cause what you've got is gold" },
      { t:175, text: "I know your gold" },
      { t:178, text: "Oh, I know, I know" },
      { t:183, text: "I don't even need stars in the night" },
      { t:187, text: "I found my treasure" },
      { t:189, text: "All I need is you by my side" },
      { t:193, text: "So shine forever" },
      { t:195, text: "Gold, I know you're gold" },
      { t:200, text: "Oh, I know you're gold" },
      { t:211, text: "You're gold" },
      { t:217, text: "You're gold" },
      { t:219, text: "♪" },
    ] },

  { title:'Leaves', artist:'Ben & Ben', file:'Leaves.mp3', duration:311.0,
    emoji:'🕯️', colors:['#5a3a2e','#1f0d09'],
    lyrics:[
      { t:0, text: "♪" },
      { t:14, text: "I can think of all the times" },
      { t:17, text: "You told me not to touch the light" },
      { t:21, text: "I never thought that you would be the one" },
      { t:27, text: "I couldn't really justify" },
      { t:31, text: "How you even thought it could be right" },
      { t:34, text: "'Cause everything we cherished is gone" },
      { t:39, text: "And in the end, can you tell me if it was worth the try?" },
      { t:48, text: "So I can decide" },
      { t:54, text: "Leaves will soon grow from the bareness of trees" },
      { t:61, text: "And all will be alright in time" },
      { t:67, text: "From waves overgrown come the calmest of seas" },
      { t:73, text: "And all will be alright in time" },
      { t:79, text: "Oh, you never really love someone until you learn to forgive" },
      { t:88, text: "♪" },
      { t:100, text: "Try as hard as I might" },
      { t:103, text: "To flee the shadows of the night" },
      { t:106, text: "It haunts me, and it makes me feel blue" },
      { t:113, text: "But how can I try to hide" },
      { t:116, text: "When every breathe and every hour" },
      { t:120, text: "I still end up thinking of you?" },
      { t:125, text: "And in the end, everything we have makes it worth the fight" },
      { t:134, text: "So I will hold on for as long" },
      { t:138, text: "Leaves will soon grow from the bareness of trees" },
      { t:145, text: "And all will be alright in time" },
      { t:151, text: "From waves overgrown come the calmest of seas" },
      { t:157, text: "And all will be alright in time" },
      { t:163, text: "Oh, you never really love someone until you learn to forgive" },
      { t:171, text: "I never thought that I would see the day" },
      { t:177, text: "That I'd decide if I should leave or stay" },
      { t:183, text: "Buf in the end, what makes it worth the fight's" },
      { t:187, text: "That no matter what happens, we try to make it right" },
      { t:200, text: "Leaves will soon grow from the bareness of trees" },
      { t:206, text: "And all will be alright in time" },
      { t:213, text: "From waves overgrown come the calmest of seas" },
      { t:219, text: "And all will be alright in time" },
      { t:225, text: "Wounds of the past will eventually heal" },
      { t:230, text: "And all will be alright in time" },
      { t:237, text: "'Cause all of this comes from a love that is real" },
      { t:242, text: "I said, 'All will be alright in time'" },
      { t:248, text: "I said, 'All will be alright in time'" },
      { t:253, text: "I said, 'All will be alright in time'" },
      { t:260, text: "And all will be alright in time" },
      { t:266, text: "Oh, you never really love someone until you learn to forgive" },
      { t:278, text: "You learn to forgive" },
      { t:282, text: "♪" },
      { t:285, text: "Learn to forgive" },
      { t:289, text: "♪" },
    ] }
];


/* =========================================================
   B. THE PLAYER
   ========================================================= */
const $ = id => document.getElementById(id);
const audio = new Audio();
audio.volume = 0.8;

let current = 0;        // which song is selected
let activeLine = -2;    // which lyric line is highlighted
let lines = [];         // lyric elements
let rafId = 0;

const fmt = s => { s = Math.max(0, s || 0); return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0'); };
const grad = s => `linear-gradient(145deg, ${s.colors[0]}, ${s.colors[1]})`;
const fillRange = el => el.style.setProperty('--fill', (el.value / el.max * 100 || 0) + '%');
const totalDuration = () => (isFinite(audio.duration) && audio.duration > 0) ? audio.duration : songs[current].duration;
const lineText = l => (typeof l === 'string' ? l : l.text);

/* ---- playlist ---- */
function buildPlaylist(){
  $('count').textContent = songs.length + ' songs';
  songs.forEach((s, i) => {
    const li = document.createElement('li');
    li.innerHTML =
      `<button class="track" type="button">
         <span class="thumb" style="background:${grad(s)}">${s.emoji}<span class="eq"><i></i><i></i><i></i></span></span>
         <span class="t-info"><span class="t-title">${s.title}</span><span class="t-artist">${s.artist}</span></span>
         <span class="t-dur">${fmt(s.duration)}</span>
       </button>`;
    li.firstElementChild.addEventListener('click', () => (i === current ? togglePlay() : loadSong(i, true)));
    $('list').appendChild(li);
  });
}

/* ---- lyrics: follow the song's duration ---- */
// For simple (text-only) lyrics: how the song is divided between lines
function lyricTiming(){
  const total = totalDuration(), n = songs[current].lyrics.length || 1;
  const intro = Math.min(8, total * 0.06), outro = Math.min(8, total * 0.06);
  return { intro, len: (total - intro - outro) / n };
}

// the second when line number i starts
function lineStart(i){
  const l = songs[current].lyrics[i];
  if (typeof l === 'object') return l.t;           // exact timing you typed
  const { intro, len } = lyricTiming();
  return intro + i * len;                          // evenly spread
}

// which line should be highlighted at time t
function activeIndex(t){
  let idx = -1;
  for (let i = 0; i < lines.length; i++){
    if (t >= lineStart(i)) idx = i; else break;
  }
  return idx;
}

// shows one small message in the lyrics area
function showNotice(text){
  const box = $('lyrics');
  box.innerHTML = '';
  lines = [];
  const p = document.createElement('p');
  p.className = 'line active';
  p.textContent = text;
  box.appendChild(p);
  setLyricPadding();
  box.scrollTop = 0;
}

function buildLyrics(song){
  if (song.lyrics.length === 0){
    showNotice('Lyrics for this song have not been added yet.');
    return;
  }
  const box = $('lyrics');
  box.innerHTML = '';
  lines = song.lyrics.map((l, i) => {
    const p = document.createElement('p');
    p.className = 'line';
    p.textContent = lineText(l);
    p.addEventListener('click', () => {            // click a line to jump to it
      audio.currentTime = lineStart(i) + 0.01;
      if (audio.paused) audio.play().catch(() => {});
      tick();
    });
    box.appendChild(p);
    return p;
  });
  setLyricPadding();
  box.scrollTop = 0;
}

// padding lets the first and last lines reach the middle of the box
function setLyricPadding(){
  const box = $('lyrics'), half = box.clientHeight / 2;
  box.style.paddingTop = half + 'px';
  box.style.paddingBottom = half + 'px';
}

function setActiveLine(idx){
  activeLine = idx;
  lines.forEach((el, i) => {
    el.classList.toggle('active', i === idx);
    el.classList.toggle('past', i < idx);
  });
  const box = $('lyrics');
  const top = idx < 0 ? 0 : lines[idx].offsetTop - box.clientHeight / 2 + lines[idx].offsetHeight / 2;
  box.scrollTo({ top, behavior: 'smooth' });
}

/* ---- keeps the progress bar, time and lyrics up to date ---- */
function tick(){
  const t = audio.currentTime, total = totalDuration();
  $('seek').max = total; $('seek').value = t; fillRange($('seek'));
  $('curTime').textContent = fmt(t);
  $('durTime').textContent = fmt(total);

  const idx = activeIndex(t);
  if (idx !== activeLine) setActiveLine(idx);

  if (!audio.paused) rafId = requestAnimationFrame(tick);
}

/* ---- loading and controlling songs ---- */
function loadSong(i, shouldPlay){
  current = i;
  const s = songs[i];
  audio.src = s.file;

  $('title').textContent = s.title;
  $('artist').textContent = s.artist;
  $('cover').textContent = s.emoji;      $('cover').style.background = grad(s);
  $('miniCover').textContent = s.emoji;  $('miniCover').style.background = grad(s);
  $('miniTitle').textContent = s.title;  $('miniArtist').textContent = s.artist;
  document.title = s.title + ' – Autumn Tunes';
  document.querySelectorAll('.track').forEach((el, k) => el.classList.toggle('active', k === i));

  buildLyrics(s);
  activeLine = -2;
  if (shouldPlay) audio.play().catch(() => {}); else audio.pause();
  tick();
}

function togglePlay(){ audio.paused ? audio.play().catch(() => {}) : audio.pause(); }
function stopSong(){ audio.pause(); audio.currentTime = 0; tick(); }
function nextSong(){ loadSong((current + 1) % songs.length, true); }
function prevSong(){ loadSong((current - 1 + songs.length) % songs.length, true); }

$('btnPlay').addEventListener('click', togglePlay);
$('btnStop').addEventListener('click', stopSong);
$('btnNext').addEventListener('click', nextSong);
$('btnPrev').addEventListener('click', prevSong);

$('seek').addEventListener('input', e => { audio.currentTime = e.target.value; tick(); });
$('volume').addEventListener('input', e => { audio.volume = e.target.value; fillRange(e.target); });
fillRange($('volume'));

audio.addEventListener('play', () => {
  document.body.classList.add('is-playing');
  $('btnPlay').setAttribute('aria-label', 'Pause');
  cancelAnimationFrame(rafId); tick();
});
audio.addEventListener('pause', () => {
  document.body.classList.remove('is-playing');
  $('btnPlay').setAttribute('aria-label', 'Play');
});
audio.addEventListener('ended', nextSong);          // go to the next song automatically
audio.addEventListener('loadedmetadata', tick);
audio.addEventListener('timeupdate', () => { if (audio.paused) tick(); });
audio.addEventListener('error', () => {
  showNotice('Could not load this song. Check that the "songs" folder is next to index.html and the file name matches.');
});
window.addEventListener('resize', setLyricPadding);

// Space bar = play / pause
document.addEventListener('keydown', e => {
  if (e.code !== 'Space' || $('app').classList.contains('hidden')) return;
  if (['INPUT', 'BUTTON'].includes(e.target.tagName)) return;
  e.preventDefault(); togglePlay();
});


/* =========================================================
   C. LOGIN
   ---------------------------------------------------------
   NOTE: this is a simple demo for a school project. Real
   websites check passwords on a server, never in the page.
   Add more accounts to this list if you want.
   ========================================================= */
const USERS = [
 { username: 'autumn', password: 'leaves123' }
];

function enterApp(name) {
  $('userName').textContent = `Welcome ${name}! Curated sounds for your day 😊`;
  $('login').classList.add('hidden');
  $('app').classList.remove('hidden');
  loadSong(current, false); // runs after the player is visible
}

$('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('username').value.trim().toLowerCase();
  sessionStorage.setItem('mapleUser', name); // remember that you signed in
  enterApp(name);
});

$('logoutBtn').addEventListener('click', () => {
  stopSong();
  sessionStorage.removeItem('mapleUser'); // forget the sign-in
  $('app').classList.add('hidden');
  $('login').classList.remove('hidden');
});

buildPlaylist();

/* BUTTON TOWARDS PLAYLIST MAKER */
$('playlistBtn').addEventListener('click', () => {
  stopSong(); // optional: stops the music before leaving
  window.location.href = 'maple_playlist_maker.html';
});

// already signed in? skip the form and go straight to the player
const savedUser = sessionStorage.getItem('mapleUser');
if (savedUser !== null) enterApp(savedUser);

/*$('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('username').value.trim().toLowerCase();
 // const pass = $('password').value;
  const ok = USERS.some(u => u.username === name );

/*  if (!ok){
    $('loginError').textContent = 'Wrong username or password. Check them and try again.';
    return;
  }
  $('loginError').textContent = '';
  $('userName').textContent = Welcome ${name}! Curated sounds for your day;
  $('login').classList.add('hidden');
  $('app').classList.remove('hidden');
  loadSong(current, false);            // runs after the player is visible
});

$('logoutBtn').addEventListener('click', () => {
  stopSong();
  $('app').classList.add('hidden');
  $('login').classList.remove('hidden');
  
  /*$('password').value = '';
});

buildPlaylist();*/

   /*BUTTON TOWARDS PLAYLIST MAKER
   $('playlistBtn').addEventListener('click', () => {
  stopSong(); // optional: stops the music before leaving
  window.location.href = '/maple_playlist_maker.html';
});*/

/* =========================================================
   C. FORM PAGE ( CHANGE INPUT BASE ON USER)
   ========================================================= */
/*document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Stop page from refreshing
  
  // Get values from the inputs
  const nameInput = document.getElementById('nickname').value;
  const moodInput = document.getElementById('mood').value;
  
  // Save the details into browser session memory
  sessionStorage.setItem('spotify_user_name', nameInput);
  sessionStorage.setItem('spotify_user_mood', moodInput);
  
  // Redirect to your Spotify-like webpage
  window.location.href = "index.html";
});*/


/* =========================================================
   D. FALLING LEAVES
   ========================================================= */
const canvas = $('leaves'), ctx = canvas.getContext('2d');
const leafColors = ['#d9541e', '#f2b53f', '#a62b1f', '#e6a23a', '#8c3b12', '#c2410c', '#f59e0b', '#7b8a34'];
const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;   // gentler if the user prefers
let W = 0, H = 0, leaves = [];

function newLeaf(anywhere){
  return {
    x: Math.random() * W,
    y: anywhere ? Math.random() * H : -40,
    size: 9 + Math.random() * 16,
    speed: (0.25 + Math.random() * 0.45) * (calm ? 0.35 : 1),
    sway: Math.random() * Math.PI * 2,
    swaySpeed: 0.004 + Math.random() * 0.008,
    swayAmt: 0.2 + Math.random() * 0.5,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.018,
    flip: Math.random() * Math.PI * 2,
    color: leafColors[Math.floor(Math.random() * leafColors.length)]
  };
}

function resizeLeaves(){
  const dpr = window.devicePixelRatio || 1;
  W = window.innerWidth; H = window.innerHeight;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.max(12, Math.min(32, Math.round(W / 48)));
  while (leaves.length < count) leaves.push(newLeaf(true));
  leaves.length = count;
}

function drawLeaf(l){
  const s = l.size;
  ctx.save();
  ctx.translate(l.x, l.y);
  ctx.rotate(l.rot);
  ctx.scale(Math.cos(l.flip) * 0.6 + 0.5, 1);            // makes the leaf flutter
  ctx.globalAlpha = 0.75;
  ctx.fillStyle = l.color;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.95, -s * 0.45, s * 0.8, s * 0.6, 0, s);
  ctx.bezierCurveTo(-s * 0.8, s * 0.6, -s * 0.95, -s * 0.45, 0, -s);
  ctx.fill();
  ctx.strokeStyle = 'rgba(60,20,8,.5)';                  // the leaf's middle vein + stem
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.lineTo(0, s * 1.35);
  ctx.stroke();
  ctx.restore();
}

function animateLeaves(){
  ctx.clearRect(0, 0, W, H);
  for (const l of leaves){
    l.y += l.speed;
    l.sway += l.swaySpeed;
    l.x += Math.sin(l.sway) * l.swayAmt + 0.12;
    l.rot += l.rotSpeed;
    l.flip += 0.012;
    if (l.y > H + 40){ Object.assign(l, newLeaf(false)); }
    if (l.x > W + 40) l.x = -40;
    if (l.x < -40) l.x = W + 40;
    drawLeaf(l);
  }
  requestAnimationFrame(animateLeaves);
}

window.addEventListener('resize', resizeLeaves);
resizeLeaves();
animateLeaves();