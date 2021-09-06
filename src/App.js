import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import * as PIXI from 'pixi.js';

export default function App() {
  useEffect(() => {
    // const app = new PIXI.Application({
    //   width: 500,
    //   height: 500,
    //   resolution: 1,
    //   antialias: true
    // });
    // document.body.appendChild(app.view);

    // const container = new PIXI.Container();

    // app.stage.addChild(container);

    // app.loader.add('avatar', 'https://github.com/upzhujie.png').load(() => {
    //   const avatar = app.loader.resources.avatar;
    //   const texture = new PIXI.Sprite(avatar);

    // });

    // const container = new PIXI.Container();

    // app.stage.addChild(container);

    // const texture = PIXI.Texture.from('https://github.com/upzhujie.png');

    // const avatar = new PIXI.Sprite(texture);

    // avatar.x = 30;
    // avatar.y = 30;

    // container.addChild(avatar);

    // container.x = 300;
    // container.y = 300;

    const app = new PIXI.Application({ backgroundColor: 0x1099bb });
    document.body.appendChild(app.view);

    const basicText = new PIXI.Text('Basic text in pixi');
    basicText.x = 50;
    basicText.y = 100;

    app.stage.addChild(basicText);

    const graphics = new PIXI.Graphics();
    // 画矩形
    graphics.beginFill(0xde2349);
    graphics.drawRect(0, 0, 100, 100);
    graphics.endFill();

    // 画圆
    graphics.lineStyle(2, 0xffffff, 2);
    graphics.beginFill(0x984325);
    graphics.drawCircle(200, 200, 30);
    graphics.endFill();

    // 画线
    graphics.lineStyle(2, 0xf0f0f0, 1);
    graphics.moveTo(120, 120);
    graphics.lineTo(130, 110);
    graphics.lineTo(0, 150);
    // graphics.closePath();


    graphics.moveTo(220, 120);
    graphics.lineTo(230, 110);
    graphics.lineTo(100, 150);

    graphics.lineStyle(2, 0xffff00, 1);
    graphics.drawPolygon([300, 300, 0, 400, 20, 410, 300, 100]);

    app.stage.addChild(graphics);
  }, []);

  return <div />;
}
