window.onload = function () {
    let image = document.getElementById('image');
    image.addEventListener('click', 
            function () {
                let source = this.src;
                let index = source.lastIndexOf('.');

                alert(`Extension is ${source.substring(index)}`);
            }
        );
}