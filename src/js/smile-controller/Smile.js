class Smile {
    constructor () {
        this.textMes = document.getElementById('messageText');

        this.smileOne = document.getElementById('smileOne');
        this.smileTwo = document.getElementById('smileTwo');
        this.smileTrhee = document.getElementById('smileThree');
        this.smileFour = document.getElementById('smileFour');
        this.smileFive = document.getElementById('smileFive');
        this.smileSix = document.getElementById('smileSix');
        this.smileSeven = document.getElementById('smileSeven');
        this.smileEight = document.getElementById('smileEight');
        this.smileNine = document.getElementById('smileNine');
        this.smileTen = document.getElementById('smileTen');
        this.smileEleven = document.getElementById('smileEleven');
        this.smileTwelve = document.getElementById('smileTwelve');
        this.smileThirteen = document.getElementById('smileThirteen');
        this.smileFourteen = document.getElementById('smileFourteen');


        this.smileClose = document.getElementsByClassName('smile-close')[0];
        this.smileBtn = document.getElementsByClassName('message-inp__smile')[0];

        this.insertSmile = ( smile ) => {
            let start = this.textMes.selectionStart;
            let end = this.textMes.selectionEnd;
            let text = this.textMes.value;

            if ( text.length >= 1000 || text.length < 0 ) {

                return;
            } else {
                let finText = this.textMes.value.substring(0, start) + smile + this.textMes.value.substring(end);

                this.textMes.value = finText;
                this.textMes.focus();
            }
        }
    }

    smileShow = () => {

        this.smileBtn.onclick = e => {
            e.preventDefault();

            this.smileOne.style.display = "block";
            this.smileTwo.style.display = "block";
            this.smileTrhee.style.display = "block";
            this.smileFour.style.display = "block";
            this.smileFive.style.display = "block";
            this.smileSix.style.display = "block";
            this.smileSeven.style.display = "block";
            this.smileEight.style.display = "block";
            this.smileNine.style.display = "block";
            this.smileTen.style.display = "block";
            this.smileEleven.style.display = "block";
            this.smileTwelve.style.display = "block";
            this.smileThirteen.style.display = "block";
            this.smileFourteen.style.display = "block";
            this.smileClose.style.display = "block";
        };

        this.smileClose.onclick = e => {
            e.preventDefault();

            this.smileOne.style.display = "none";
            this.smileTwo.style.display = "none";
            this.smileTrhee.style.display = "none";
            this.smileFour.style.display = "none";
            this.smileFive.style.display = "none";
            this.smileSix.style.display = "none";
            this.smileSeven.style.display = "none";
            this.smileEight.style.display = "none";
            this.smileNine.style.display = "none";
            this.smileTen.style.display = "none";
            this.smileEleven.style.display = "none";
            this.smileTwelve.style.display = "none";
            this.smileThirteen.style.display = "none";
            this.smileFourteen.style.display = "none";
            this.smileClose.style.display = "none";
        };
    }

    clickSmile = () => {
        this.smileOne.onclick = e => {
            e.preventDefault();

            this.insertSmile( '😀');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileTwo.onclick = e => {
            e.preventDefault();

            this.insertSmile( '👍');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileTrhee.onclick = e => {
            e.preventDefault();

            this.insertSmile( '🙁');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileFour.onclick = e => {
            e.preventDefault();

            this.insertSmile( '😱');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileFive.onclick = e => {
            e.preventDefault();

            this.insertSmile( '😈');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileSix.onclick = e => {
            e.preventDefault();

            this.insertSmile( '🤪');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileSeven.onclick = e => {
            e.preventDefault();

            this.insertSmile( '😴');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileEight.onclick = e => {
            e.preventDefault();

            this.insertSmile( '🥵');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileNine.onclick = e => {
            e.preventDefault();

            this.insertSmile( '🥶');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileTen.onclick = e => {
            e.preventDefault();

            this.insertSmile( '🤓');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileEleven.onclick = e => {
            e.preventDefault();

            this.insertSmile( '🤖');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileTwelve.onclick = e => {
            e.preventDefault();

            this.insertSmile( '👽');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileThirteen.onclick = e => {
            e.preventDefault();

            this.insertSmile( '🤡');

            this.smile = this.textMes.value;
            this.textMes.value = this.smile;
        };

        this.smileFourteen.onclick = e => {
            e.preventDefault();

            this.insertSmile( '😅');

            this.smile = this.textMes.value ;
            this.textMes.value = this.smile;
        };


    };

}

export default Smile;