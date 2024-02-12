const accordians=document.querySelectorAll('.accordian');

accordians.forEach(accor=>{
    const icon=accor.querySelector('.icon');
    const ans=accor.querySelector('.answer');
    accor.addEventListener('click',()=>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            ans.style.maxHeight=null;
        }
        else{
            icon.classList.add('active');
            ans.style.maxHeight=ans.scrollHeight+'px';
        }
    })
})