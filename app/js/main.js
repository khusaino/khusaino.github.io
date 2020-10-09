let button = document.getElementsByClassName("animate-1__btn"),
    forEach = Array.prototype.forEach;

forEach.call(button, function (b){
    b.addEventListener('click', addElement);
});

function addElement(e){
    let addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        sDiv   = addDiv.style,
        rect   = this.getBoundingClientRect(),
        px     = 'px';
    
    sDiv.width = sDiv.height = mValue + px;
    sDiv.left  = e.clientX - rect.left - (mValue/2) +px;
    sDiv.top  = e.clientY- rect.top - (mValue/2) +px;
    
    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
    console.log(e.clientX);
    console.log(rect.left);
}