const app = new PIXI.Application({ backgroundColor: 0x000000 });

document.body.appendChild(app.view);

const graphics=new PIXI.Graphics()

graphics.beginFill(0xFF0000);
graphics.drawRect(50, 50, 100, 100);
graphics.endFill();

app.stage.addChild(graphics);


