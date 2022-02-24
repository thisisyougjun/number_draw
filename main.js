const target1 =document.querySelector(".DrawBtn");

const winnner =document.getElementsByClassName('winner');
winnner.innerText='213123';

function readExcel() {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = function () {
        let data = reader.result;
        let workBook = XLSX.read(data, { type: 'binary' });
        workBook.SheetNames.forEach(function (sheetName) {
            console.log('SheetName: ' + sheetName);
            let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
            target1.addEventListener("click",Draw);
            function Draw() {
                event.preventDefault();
                //console.log(JSON.stringify(rows));

                const numbox = document.querySelector('.numBox')
                let i =1;
                const timer = setInterval(function (){
                    if(i>30){
                        clearInterval(timer)
                    }else {
                        const WinNum = Math.floor(rows.length * Math.random())
                        const Winnum_Object =rows[WinNum]
                        const key =Object.keys(Winnum_Object)
                        const value =Object.values(Winnum_Object)

                        const winnner_num =document.querySelector('.winner_num');
                        const winner_name =document.querySelector('.winner_name');
                        const winner_insta =document.querySelector('.winner_insta');
                        const winner_size =document.querySelector('.winner_size');

                        numbox.innerHTML=value[0]
                        console.log(value[0]);
                        i++

                        for (const i in key) {
                            if (i == 0) {
                                winnner_num.innerHTML = key[i] + ' : ' + value[i]
                            } else if (i == 1) {
                                winner_name.innerHTML = key[i] + ' : ' + value[i]
                            }
                            else if (i == 2) {
                                winner_insta.innerHTML = key[i] + ' : ' + value[i]
                            }
                            else if (i == 3) {
                                winner_size.innerHTML = key[i] + ' : ' + value[i]
                            }
                        }

                        winner_insta.addEventListener('click',instaLink)
                        function instaLink(){
                            location.href='https://www.instagram.com/'+value[2]+'/';
                        }
                    }
                },40)

            }
        })
    };
    reader.readAsBinaryString(input.files[0]);
}


