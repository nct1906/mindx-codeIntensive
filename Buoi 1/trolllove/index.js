const noButton=document.getElementById('no')
noButton.addEventListener('mouseHover',function(){
    const answer=document.getElementsByClassName('answer')
    answer.style='flex-direction:row-reverse'
})