var zodiac = [
		{
			nam: "aries",
			content: "Aries people have a great instinct for what needs to be done, and once you decide what it is, then it is full steam ahead. You can never be accused of laziness because 110% is where you kick off each day. Of course, not all Aries traits are positive ones. Being a fire sign means you are energetic, so you want to go out there and change the world with no half-measures in sight. This can come across as arrogant, but it is only because you have incredible confidence in you ability to get things done. You don’t like being told what to do.",
			img: "img/aries.jpg"
		},

		{
			nam: "taurus",
			contenet: "You have an earthy nature, and because of the practicality of your star sign, you can be thought of as a bit tight-fisted, but that is only because you are concerned about your financial security and that of your family. It’s true that you have a fear of change, but loved ones and work colleagues understand that you need to think before you leap into the abyss. When you take on a project, you give it a great deal of thought, focus completely on the task and won’t cut corners. You also dislike doing more than one thing at a time, but whatever you do is done properly.",
			img: "img/taurus.jpg"
		},

		{
			name: "gemini",
			content: "Geminis are known as eternal students, always wanting to learn—and they don’t mind what the subject is. They are good at assembling a multitude of facts and then turning them into their next ’great idea’. However, they don’t always stay with this idea to the end, but it doesn’t concern them too much. What would concern them is not having the ‘great idea’ in the first place",
			img: "img/gemini.jpg"
		},

		{
			nam: "cancer",
			content: "itachi",
			img: "img/cancer.jpg"
		},

		{
			nam: "leo",
			content: "how",
			img: "img/leo.jpg"

		},

		{
			nam: "virgo",
			content: "having",
			img: "img/virgo.jpg"

		},

		{
			nam: "libra",
			content: "hi",
			img: "img/libra.jpg"
		},

		{
			nam: "scorpio",
			content: "hello",
			img: "img/scorpio.jpg"
		},

		{
			nam: "sagittarius",
			content:"blah",
			img: "img/sagittarius.jpg"
		},

		{
			nam: "capricorn",
			content: "but",
			img: "img/capricorn.jpg"
		},

		{
			nam: "aquarius",
			content:"be",
			img: "img/aquarius.jpg"
		},

		{
			nam: "pisces",
			content: "having",
			img: "img/pisces.jpg"
		}

		]

		function getInfo(){
			var sign = document.getElementById("sign").value 
			
			for(var i=0; i<zodiac.length; i++)
			{
				if( sign == zodiac[i].nam)
				{
					document.getElementById("message").innerHTML = zodiac[i].content
					document.getElementById("image").src = zodiac[i].img
					return

				}
				else{
					document.getElementById("message").innerHTML = "sorry not working!"
				}
			}

		}
	
