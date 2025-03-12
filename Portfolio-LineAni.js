//Window.onload is used to load the lines properly on the page load
window.onload = () => {  

   /* const slider = document.getElementById('slider');
    const nextDom = document.getElementById('next'); 
    const prevDom = document.getElementById('prev');
    
    nextDom.onclick = function() {
        setTimeout(() => {  
            Sliderfunc('next');
        }, 200);
        
    }
    
    prevDom.onclick = function() {
        setTimeout(() => { 
            Sliderfunc('prev');
        }, 200);
    }

    const Sliderfunc = (type) =>{ 
        
        let currentIndex = 0; 
        let list = document.querySelectorAll('.list');
      
        let totalImages = slider.children.length;    
        
        if(type === 'next'){
           slider.appendChild(list[0]);
        }
        else if(type === 'prev'){
            let Itemlastposition = list.length - 1;  
            slider.prepend(list[Itemlastposition]);
        }

        currentIndex = (currentIndex + 1) % totalImages;
                  
        slider.scrollTo({ 
            left: slider.clientWidth * currentIndex,
            behavior: 'smooth' 
        });
        
    }
  */
    
    
    setTimeout(() => {
        
        const lines = document.querySelectorAll('.lines');
        const lineAnimation = () => {
            
            lines.forEach(line => {
                line.classList.remove('lineDisplay');
                line.classList.add('lineDisplay');            
                line.classList.remove('lineAni');
                line.classList.add('lineAni');
            });        
            
        }
        lineAnimation();
        
    }, 1500);
    
}

