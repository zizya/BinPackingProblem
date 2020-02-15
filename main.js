window.onload = function render() {
    let cube = document.createElement('div');
   

    let data = rect;
    let level = 0;
    let hLevel = 0;
    let wLevel = 0;
    let i = 1;
    let levelNum = 1;
    let n = amountOfBoxes.amount;
    let w = boxSize.boxWidth;
    let h = boxSize.boxHeight;
    cube.innerHTML = `<canvas id="layer0" height=${h} width=${w}>`;
    document.body.append(cube);
    let rectangles = document.getElementById('layer0');
    let ctx = rectangles.getContext('2d');
// console.log (w);
ctx.fillStyle = "#93b9d4";
    ctx.fillRect(0, h-data[0].height, data[0].width, data[0].height);
    ctx.strokeRect(0, h-data[0].height, data[0].width, data[0].height);
    hLevel=h-data[0].height;
    wLevel= data[0].width;
for( i = 2;i<=n; i++){
    if ( w-wLevel >= data[i-2].width){
        ctx.fillRect(wLevel, h-data[i-1].height, data[i-1].width, data[i-1].height);
        ctx.strokeRect(wLevel, h-data[i-1].height, data[i-1].width, data[i-1].height);
        wLevel += data[i-1].width;
        console.log(wLevel);
        console.log(w-wLevel);
    }
    else if (w-wLevel<data[i-2].width){
        ctx.fillRect(wLevel-wLevel, hLevel-data[i-1].height , data[i-1].width, data[i-1].height);
        ctx.strokeRect(wLevel-wLevel, hLevel-data[i-1].height, data[i-1].width, data[i-1].height);
        //  level++;
        //  wLevel +=data[i-1].width;
        //   hLevel =data[i-1].height;
        //   console.log(data[i-1].height)
          hLevel = hLevel - data[i-1].height;

    }

}
    
    // ctx.fillRect(0, 0, 50, 400);
    // ctx.strokeRect(0, 0, 50, 400);

    // ctx.fillRect(51, 0, 100, 306);
    // ctx.strokeRect(51, 0, 100, 306);

    // ctx.fillRect(152, 0, 400, 100);
    // ctx.strokeRect(152, 0, 400, 100);

    

    // ctx.fillRect(0, 0, data[1].width, data[1].height);
    // ctx.strokeRect(0, 0, data[1].width, data[1].height);

    // ctx.fillRect(0, 0, data[2].width, data[2].height);
    // ctx.strokeRect(0, 0, data[2].width, data[2].height);

    // ctx.fillRect(0, 0, rect[3].width, rect[3].height);
    // ctx.strokeRect(0, 0, rect[3].width, rect[3].height);

    // ctx.fillRect(0, 0, rect[4].width, rect[4].height);
    // ctx.strokeRect(0, 0, rect[4].width, rect[4].height);


}

let rectangle1 = {
    width: 450,
    height: 150
};

let rectangle2 = {
    width: 100,
    height: 300
};
let rectangle3 = {
    width: 450,
    height: 250
};
let rectangle4 = {
    width: 200,
    height: 200
};
let rectangle5 = {
    width: 250,
    height: 350
};
let boxSize = {
    boxWidth: 600,
    boxHeight: 1000
};
let amountOfBoxes = { amount: 5 };

let rect = [rectangle1, rectangle2, rectangle3, rectangle4, rectangle5,];
 console.log(rect);

function sortByHeight(arr) {
    arr.sort((a, b) => a.height <= b.height ? 1 : -1);
    console.log(arr);
}
sortByHeight(rect);

// let rect = [{

//     amountOfBoxes: 5
// },
// {
//     rectangle1: {
//         width: 50,
//         height: 350
//     }
// },

// {
//     rectangle2: {
//         width: 100,
//         height: 300
//     }
// },
// {
//     rectangle3: {
//         width: 150,
//         height: 250
//     }
// },
// {
//     rectangle4: {
//         width: 200,
//         height: 200
//     }
// },
// {
//     rectangle5: {
//         width: 250,
//         height: 150
//     }
// },
// {
//     boxSize: {
//         width: 320,
//         height: 1000
//     }
// },


// ]





// 



// window.onload=function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//       var ctx = canvas.getContext('2d');

//       ctx.fillRect(25,25,100,100);
//       ctx.clearRect(45,45,60,60);
//       ctx.strokeRect(50,50,50,50);
//     }
//   }
