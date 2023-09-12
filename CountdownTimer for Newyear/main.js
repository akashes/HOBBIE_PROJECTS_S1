
        function getRandomSize() {
            return Math.floor(Math.random() * 60) + 10; // Random size between 10 and 40 (adjust as needed)
        }

        function randomColor(){
            val=Math.floor(Math.random()*10)
            arr = [
				"#56E39F",
				"#F95738",
				"#0D3B66",
				"#56E39F",
				"#EC0B43",
				"#7AE7C7",
				"#FFCCC9",
				"#260F26",
				"#EDD4B2",
				"#F9DC5C",
			];
            return arr[val]
            // val = Math.round(Math.random()); 
            // arr=['white','black']
            // return arr[val]
        }
        function createRandomIcon() {
            const icon = document.createElement('i');
            icon.className = 'fas fa-gift';
            icon.style.fontSize = `${getRandomSize()}px`;

            const maxX = window.innerWidth - 400;
            const maxY = window.innerHeight - 300;



            const randomX = Math.random() * maxX ;
            const randomY = Math.random() * maxY;

            icon.style.left = `${randomX}px`;
            icon.style.bottom = `${randomY}px`;

            icon.style.color=`${randomColor()}`

            
            icon.classList.add('random-icon');
            document.body.appendChild(icon);
        }

        // Create 20 random icons
        for (let i = 0; i < 20; i++) {
            createRandomIcon();
        }


        var countDown=new Date("Jan 1,2024 00:00:00").getTime()
        // var countDown=new Date("2024,1,1").getTime()

        var x= setInterval(()=>{
            var now=new Date().getTime()
            var diff=countDown - now

              var days = Math.floor(diff / (1000 * 60 * 60 * 24));
				var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((diff % (1000 * 60)) / 1000);

                Days.innerText=days
                Hours.innerText=hours
                Minutes.innerText=minutes
                Seconds.innerText=seconds



                if(diff<=0){
                    // alert('Happy NewYear!!!')
                    clearInterval(x)
                    Days.innerText = "00";
					Hours.innerText = "00";
					Minutes.innerText = "00";
					Seconds.innerText = "00";
                    head=document.getElementById('head')

                    head.innerHTML=`<p>Every moment is a fresh Beginning</p><p style="color:firebrick;">Happy NEW YEAR</p>`
                    head.style.color="firebrick"
                    head.classList.add('newFont')
                    head.style.fontSize="70px"
                    document.getElementsByClassName('time')[0].style.display="none"
                    


                }

        },1000)