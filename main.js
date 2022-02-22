const target1 =document.getElementById("randForm");

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
            target1.addEventListener("submit",Draw);
            function Draw() {
                event.preventDefault();
                //console.log(JSON.stringify(rows));
                const WinNum = Math.floor(rows.length * Math.random())
                const Winnum_Object =rows[WinNum]
                console.log(Winnum_Object);
                const winnner_num =document.querySelector('.winner_num');
                const winner_name =document.querySelector('.winner_name');
                /*for (let i = 0; i <1; i++) {
                    const key =Object.keys(Winnum_Object)[i]
                    const value =Object.values(Winnum_Object)[i]
                    winnner_num.innerHTML=key+' : '+value

                }
                 */
                const key =Object.keys(Winnum_Object)[0]
                const value =Object.values(Winnum_Object)[0]
                winnner_num.innerHTML=key+' : '+value
                const key2 =Object.keys(Winnum_Object)[1]
                const value2 =Object.values(Winnum_Object)[1]
                winner_name.innerHTML=key2+' : '+value2
                //const tessst = rows[1]


            }
        })
    };
    reader.readAsBinaryString(input.files[0]);
}

