// window.onload = function render() {
//     let cube = document.createElement('div');


//     let data = rect;
//     let level = 0;
//     let hLevel = 0;
//     let wLevel = 0;
//     let i = 1;
//     let levelNum = 1;
//     let n = amountOfBoxes.amount;
//     let w = boxSize.boxWidth;
//     let h = boxSize.boxHeight;
//     cube.innerHTML = `<canvas id="layer0" height=${h} width=${w}>`;
//     document.body.append(cube);
//     let rectangles = document.getElementById('layer0');
//     let ctx = rectangles.getContext('2d');
// // console.log (w);
// ctx.fillStyle = "#93b9d4";
//     ctx.fillRect(0, h-data[0].height, data[0].width, data[0].height);
//     ctx.strokeRect(0, h-data[0].height, data[0].width, data[0].height);
//     hLevel=h-data[0].height;
//     wLevel= data[0].width;
// for( i = 2;i<=n; i++){
//     if ( w-wLevel > data[i-2].width){
//         ctx.fillRect(wLevel, h-data[i-1].height, data[i-1].width, data[i-1].height);
//         ctx.strokeRect(wLevel, h-data[i-1].height, data[i-1].width, data[i-1].height);
//         wLevel += data[i-1].width;
//         console.log(wLevel);
//         console.log(w-wLevel);

//     }
//     else if (w-wLevel<data[i-2].width){
//         ctx.fillRect(wLevel-wLevel, hLevel-data[i-1].height , data[i-1].width, data[i-1].height);
//         ctx.strokeRect(wLevel-wLevel, hLevel-data[i-1].height, data[i-1].width, data[i-1].height);
//         //  level++;
//         //  wLevel +=data[i-1].width;
//         //   hLevel =data[i-1].height;
//         //   console.log(data[i-1].height)
//           hLevel = hLevel - data[i-1].height;

//     }

// }


// }

// let rectangle1 = {
//     width: 350,
//     height: 150
// };

// let rectangle2 = {
//     width: 100,
//     height: 351
// };
// let rectangle3 = {
//     width: 250,
//     height: 250
// };
// let rectangle4 = {
//     width: 200,
//     height: 200
// };
// let rectangle5 = {
//     width: 250,
//     height: 350
// };
let boxSize = {
    boxWidth: 351,
    boxHeight: 1000
};
let amountOfBoxes = { amount: 5 };

// let rect = [rectangle1, rectangle2, rectangle3, rectangle4, rectangle5,];
//  console.log(rect);


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


function read(json){
    let input=JSON.parse(json);
    function calc(input){
    let data = input;
    
    let hLevel = 0;
    let wLevel = 0;
    let i = 1;
    
    let n = amountOfBoxes.amount;
    let w = boxSize.boxWidth;
    let h = boxSize.boxHeight;
    // console.log(data);
    let a = [
        position={x:2, y: h-data[0].height},
        size={width: data[0].width, height:data[0].height}
    ];
    // adding(a);
    // console.log(a);
    hLevel = h - data[0].height;
    wLevel = data[0].width;
    let numbers= [];
    let f
    let j
    for (i = 2; i <= n; i++) {
        
        if (w - wLevel > +data[i - 2].width) {
            let b = [
                position={x:wLevel, y: h - data[i - 1].height},
                size={width: data[i - 1].width, height:data[i - 1].height}
            ];

           
             f= a.concat(b);
            
            //  console.log(f);
            wLevel += data[i - 1].width;
            
            
        }
        else if (w - wLevel < +data[i - 2].width) {
            let c = [
                position={x:wLevel - wLevel, y: hLevel - data[i - 1].height},
                size={width: data[i - 1].width, height:data[i - 1].height}
            ];
            // function otday(f){
             j = f.concat(c);
            ;
            // adding(c);
            hLevel = hLevel - data[i - 1].height;

            



        }

    }    console.log(j)
}


calc(input);
}
// function adding(a,b,c){
//     let g= a.concat(b,c);
//     console.log(g);
//     let oMy = JSON.stringify(a,b,c)
    
//     read2(oMy);
// }


function read2(oMy) {
    let input2 = JSON.parse(oMy);
    
}


    //     function render(input2) {

    //         let cube = document.createElement('div');


    //         let data2 = input2;
    //         console.log(data2);
    //         let level = 0;
    //         let hLevel = 0;
    //         let wLevel = 0;
    //         let i = 1;
    //         let levelNum = 1;
    //         let n = amountOfBoxes.amount;
    //         let w = boxSize.boxWidth;
    //         let h = boxSize.boxHeight;
    //         cube.innerHTML = `<canvas id="layer0" height=${h} width=${w}>`;
    //         document.body.append(cube);
    //         let rectangles = document.getElementById('layer0');
    //         let ctx = rectangles.getContext('2d');

    //         ctx.fillStyle = "#93b9d4";
    //         ctx.fillRect(0, h - data2[0].height, data2[0].width, data2[0].height);
    //         ctx.strokeRect(0, h - data2[0].height, data2[0].width, data2[0].height);
            
    //         hLevel = h - data2[0].height;
    //         wLevel = data2[0].width;
    //         for (i = 2; i <= n; i++) {
    //             if (w - wLevel > +data2[i - 2].width) {
    //                 ctx.fillRect(wLevel, h - data2[i - 1].height, data2[i - 1].width, data2[i - 1].height);
    //                 ctx.strokeRect(wLevel, h - data2[i - 1].height, data2[i - 1].width, data2[i - 1].height);

                



    //                 // let a = ctx.fillRect;

    //                 // console.log(w-wLevel);
    //                 //     let r = [];
    //                 //    r += r.push(wLevel, h-data[i-1].height, data[i-1].width, data[i-1].height);
    //                 // console.log(r);
    //                 wLevel += data2[i - 1].width;
    //             }
    //             else if (w - wLevel < +data2[i - 2].width) {
    //                 ctx.fillRect(wLevel - wLevel, hLevel - data2[i - 1].height, data2[i - 1].width, data2[i - 1].height);
    //                 ctx.strokeRect(wLevel - wLevel, hLevel - data2[i - 1].height, data2[i - 1].width, data2[i - 1].height);
    //                 //  level++;
    //                 //  wLevel +=data[i-1].width;
    //                 //   hLevel =data[i-1].height;
    //                 //   console.log(data[i-1].height)
                  
                    


    //                 hLevel = hLevel - data[i - 1].height;

    //             }

    //         }

    //         button1.onclick = function () {
    //             cube.remove();
    //         }
    //     }

    //     render(input2);
    // }
// function read(json) {
//     let input = JSON.parse(json);



//         function render(input) {

//             let cube = document.createElement('div');


//             let data = input;
//             let level = 0;
//             let hLevel = 0;
//             let wLevel = 0;
//             let i = 1;
//             let levelNum = 1;
//             let n = amountOfBoxes.amount;
//             let w = boxSize.boxWidth;
//             let h = boxSize.boxHeight;
//             cube.innerHTML = `<canvas id="layer0" height=${h} width=${w}>`;
//             document.body.append(cube);
//             let rectangles = document.getElementById('layer0');
//             let ctx = rectangles.getContext('2d');

//             ctx.fillStyle = "#93b9d4";
//             ctx.fillRect(0, h - data[0].height, data[0].width, data[0].height);
//             ctx.strokeRect(0, h - data[0].height, data[0].width, data[0].height);
//             let a = [{
//                 position: { x: 0, y: h - data[0].height },
//                 size: { width: data[0].width, height: data[0].height }
//             }];
//             console.log(a);
//             hLevel = h - data[0].height;
//             wLevel = data[0].width;
//             for (i = 2; i <= n; i++) {
//                 if (w - wLevel > +data[i - 2].width) {
//                     ctx.fillRect(wLevel, h - data[i - 1].height, data[i - 1].width, data[i - 1].height);
//                     ctx.strokeRect(wLevel, h - data[i - 1].height, data[i - 1].width, data[i - 1].height);

//                     let b = [];
//                     b.push([wLevel, h - data[i - 1].height, data[i - 1].width, data[i - 1].height]);

//                     console.log(b);



//                     // let a = ctx.fillRect;

//                     // console.log(w-wLevel);
//                     //     let r = [];
//                     //    r += r.push(wLevel, h-data[i-1].height, data[i-1].width, data[i-1].height);
//                     // console.log(r);
//                     wLevel += data[i - 1].width;
//                 }
//                 else if (w - wLevel < +data[i - 2].width) {
//                     ctx.fillRect(wLevel - wLevel, hLevel - data[i - 1].height, data[i - 1].width, data[i - 1].height);
//                     ctx.strokeRect(wLevel - wLevel, hLevel - data[i - 1].height, data[i - 1].width, data[i - 1].height);
//                     //  level++;
//                     //  wLevel +=data[i-1].width;
//                     //   hLevel =data[i-1].height;
//                     //   console.log(data[i-1].height)
//                     let c = [];
//                     c.push([wLevel - wLevel, hLevel - data[i - 1].height, data[i - 1].width, data[i - 1].height]);
//                     console.log(c);


//                     hLevel = hLevel - data[i - 1].height;

//                 }

//             }

//             button1.onclick = function () {
//                 cube.remove();
//             }
//         }

//         render(input);
    // }