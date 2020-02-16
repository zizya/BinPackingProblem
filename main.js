



function toJsonData() {

    let cube1 = document.getElementById("m1");
    let side1 = cube1.value;
    let cube11 = document.getElementById("m11");
    let side11 = cube11.value;

    let cube2 = document.getElementById("m2");
    let side2 = cube2.value;
    let cube22 = document.getElementById("m22");
    let side22 = cube22.value;

    let cube3 = document.getElementById("m3");
    let side3 = cube3.value;
    let cube33 = document.getElementById("m33");
    let side33 = cube33.value;

    let cube4 = document.getElementById("m4");
    let side4 = cube4.value;
    let cube44 = document.getElementById("m44");
    let side44 = cube44.value;

    let cube5 = document.getElementById("m5");
    let side5 = cube5.value;
    let cube55 = document.getElementById("m55");
    let side55 = cube55.value;



    let outputData = [
        rectangle1 = {
            width: side1,
            height: side11
        },

        rectangle2 = {
            width: side2,
            height: side22
        },
        rectangle3 = {
            width: side3,
            height: side33

        },
        rectangle4 = {
            width: side4,
            height: side44
        },
        rectangle5 = {
            width: side5,
            height: side55
        },


    ]

    arr = outputData;
    function sortByHeight(arr) {
        arr.sort((a, b) => a.height <= b.height ? 1 : -1);
        let json = JSON.stringify(arr);
        read(json);

    }
    sortByHeight(arr);


}


function read(json) {
    let input = JSON.parse(json);
    function calc(input) {
        let cube6 = document.getElementById("m6");
        let side6 = cube6.value;
        let cube66 = document.getElementById("m66");
        let side66 = cube66.value;



        let boxSize = {
            boxWidth: side6,
            boxHeight: side66
        };
        let amountOfBoxes = {
            amount: 5
        }
        let data = input;

        let hLevel = 0;
        let wLevel = 0;
        let i = 1;

        let n = amountOfBoxes.amount;
        let w = boxSize.boxWidth;
        let h = boxSize.boxHeight;

        let testObject = [];
        testObject[0] = {
            'position': { x: 0, y: +h - data[0].height },
            'size': { width: +data[0].width, height: +data[0].height }
        };

        hLevel = +h - data[0].height;
        wLevel = +data[0].width;


        for (i = 2; i <= n; i++) {

            if (w - wLevel >= +data[i - 1].width) {
                testObject[i - 1] = {
                    'position': { x: +wLevel, y: +h - data[i - 1].height },
                    'size': { width: +data[i - 1].width, height: +data[i - 1].height }
                };

                wLevel += +data[i - 1].width;
            }
            else if (w - wLevel <= +data[i - 1].width) {
                testObject[i - 1] = {
                    'position': { x: +wLevel - wLevel, y: +hLevel - data[i - 1].height },
                    'size': { width: +data[i - 1].width, height: +data[i - 1].height }
                };
                hLevel = hLevel - +data[i - 1].height;
            }

        }


        let stroke = JSON.stringify(testObject);

        function read2(stroke) {
            let inputData = JSON.parse(stroke);



            let cube = document.createElement('div');
            cube.innerHTML = `<canvas id="layer0" height=${h} width=${w}>`;
            document.body.append(cube);
            let rectangles = document.getElementById('layer0');
            let ctx = rectangles.getContext('2d');

            ctx.fillStyle = "#93b9d4";

            ctx.fillRect(inputData[0].position.x, inputData[0].position.y, inputData[0].size.width, inputData[0].size.height);
            ctx.strokeRect(inputData[0].position.x, inputData[0].position.y, inputData[0].size.width, inputData[0].size.height);

            ctx.fillRect(inputData[1].position.x, inputData[1].position.y, inputData[1].size.width, inputData[1].size.height);
            ctx.strokeRect(inputData[1].position.x, inputData[1].position.y, inputData[1].size.width, inputData[1].size.height);

            ctx.fillRect(inputData[2].position.x, inputData[2].position.y, inputData[2].size.width, inputData[2].size.height);
            ctx.strokeRect(inputData[2].position.x, inputData[2].position.y, inputData[2].size.width, inputData[2].size.height);

            ctx.fillRect(inputData[3].position.x, inputData[3].position.y, inputData[3].size.width, inputData[3].size.height);
            ctx.strokeRect(inputData[3].position.x, inputData[3].position.y, inputData[3].size.width, inputData[3].size.height);

            ctx.fillRect(inputData[4].position.x, inputData[4].position.y, inputData[4].size.width, inputData[4].size.height);
            ctx.strokeRect(inputData[4].position.x, inputData[4].position.y, inputData[4].size.width, inputData[4].size.height);




            button1.onclick = function () {
                cube.remove();
            }
        }
        read2(stroke);
    }

    calc(input);
}




