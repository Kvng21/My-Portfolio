document.addEventListener("DOMContentLoaded", () => { 
    
    const slider = document.getElementById('slider');
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
        
        let currentIndex; 
        let list = document.querySelectorAll('.list');
      
        let totalImages = slider.children.length;    
        
        if(type === 'next'){
            currentIndex = 1;
            slider.appendChild(list[0]);
        }
        else if(type === 'prev'){
            currentIndex = -1;
            let Itemlastposition = list.length - 1;  
            slider.prepend(list[Itemlastposition]);
        }

        currentIndex = (currentIndex + 1) % totalImages;
                  
        slider.scrollTo({ 
            left: slider.clientWidth * currentIndex,
            behavior: 'smooth' 
        });
        
    }
  

});