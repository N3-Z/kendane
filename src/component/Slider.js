import React, { Component } from 'react'
import '../style/slider.scss'
import img1 from '../img/slider1.jpg'
import img2 from '../img/slider2.jpg'
import img3 from '../img/slider3.jpg'
import $ from 'jquery'


export default class Slider extends Component {

    
    render() {
        $(function() {
            let idx = 1;
            let slider = $('#container___');

            function slide_next(){
                if(idx < 2){
                    slider.animate({left:'-=80vw'}, 5000);
                    idx++;
                }else{
                    slider.animate({left:'0px'}, 7500);
                    idx = 1;
                }
            }
            setInterval(slide_next, 2500);
        });
        let detail = <div>{ 
            <div id="_slidd" >
                <div id={"container___"}>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                </div>
            </div>
        }</div>

    return (
        <div className='slider-img'>
            {detail}
        </div>
    )
  }
}
