import React, { Component } from 'react';
import './styles/style.less';
import testPng from './assets/test.png';
import testSvg from './assets/test.svg';

  export default class Pad extends Component {
  state = {
    isMouseDown: false,
    lastCordinate: { x: 0, y: 0 },
  }

  static defaultProps = {
    width: 300,
    height: 350,
  }

  componentDidMount() {
    const { width, height } = this.props;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.height = height;
    this.canvas.width = width;
    this.bindEvents();
  }

  bindEvents = () => {
    this.canvas.addEventListener('mousedown', (event) => {
      const ClientRectShape = this.canvas.getBoundingClientRect();
      const { clientX, clientY } = event;
      this.setState({
        isMouseDown: true,
        lastCordinate: {
          x: clientX - ClientRectShape.left,
          y: clientY - ClientRectShape.top,
        },
      });
    });

    this.canvas.addEventListener('mouseout', () => {
      this.setState({
        isMouseDown: false,
      });
    });
    this.canvas.addEventListener('mouseup', () => {
      this.setState({
        isMouseDown: false,
      });
    });

    this.canvas.addEventListener('mousemove', (event) => {
      const ClientRectShape = this.canvas.getBoundingClientRect();
      const { clientX, clientY } = event;
      const nowCordinate = {
        x: clientX - ClientRectShape.left,
        y: clientY - ClientRectShape.top,
      };
      const { isMouseDown, lastCordinate } = this.state;
      const { ctx } = this;
      if (isMouseDown) {
        // let ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.lineCap = 'round';
        const gradient = ctx.createLinearGradient(0, 0, 300, 300);
        gradient.addColorStop('0', 'magenta');
        gradient.addColorStop('0.5', 'blue');
        gradient.addColorStop('1.0', 'red');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 10;
        ctx.moveTo(lastCordinate.x, lastCordinate.y);
        ctx.lineTo(nowCordinate.x, nowCordinate.y);

        ctx.stroke();
        this.setState({
          lastCordinate: nowCordinate,
        });
      }
    });
  }

  render() {
    return (
      <div className="hhh">
        <canvas
          ref={(c) => { this.canvas = c; }}
        >
          Unsupported Browser
        </canvas>
      </div>
    );
  }
}
