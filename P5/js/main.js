    const app = new Vue({
        el: '#app',
        data: {
            isBold: false,
            isItalic: false,
            isUnderline: false,
            isShadow: false,
            isNegative: false,
            isSepia: false,
            fontSize: 4,
            fontFamily: "",
            textColor: "black",
            backgroundColor: "white",
            alphabet: false,
            textContent: "AZERTY azerty \r123456 &#?!$%"
        },
        computed: {
            myClass: function() {
                return {
                    bold: this.isBold,
                    italic: this.isItalic,
                    underline: this.isUnderline,
                    shadow: this.isShadow,
                    negative: this.isNegative,
                    sepia: this.isSepia
                }
            }

        }
    })

    function on() {
        document.getElementById("overlay").style.display = "block";
    }

    function off() {
        document.getElementById("overlay").style.display = "none";
    }

    function downloadimage() {
        var container = document.getElementById("htmltoimage");
        html2canvas(container, { allowTaint: true }).then(function(canvas) {

            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "image.png";
            link.href = canvas.toDataURL();
            link.target = '_blank';
            link.click();
        });
    }