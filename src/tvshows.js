import React, {Component} from 'react'; 
import logo from './popcorn.png';
import search from './search.png';
import styled from 'styled-components';
import './tvshows.css';
import { render } from '@testing-library/react';
import movies from './popular';
import home from './home';
import toprated from './toprated';
import tvshows from './tvshows';
import genres from './genres';
import {Link } from "react-router-dom";



  
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:false
  }
    
    
    }
    
  

  componentDidMount()
  {
    const APP_KEY = "ed0651580d5ef20c027a8ca6a7f36aa5";
 

    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${APP_KEY}&language=en-US&page=1`;
    fetch(url, {
      method: 'GET' ,
      headers:{
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
      }  
    }).then((result)=>{
      result.json().then((resp)=>{
       this.setState({data:resp}) 
      })
    })
 
  }
 
    
  render () {
  return (
    <Section>
      <Nav>
        <div className = "box" >
        <img className = "img1" src={logo} alt = "logo" />
        </div>
        <Link to ='./home' ><svg className = "svg1" width="307" height="56" viewBox="0 0 307 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.276 38.76C42.636 37.5653 42.2307 36.2427 42.06 34.792C41.8893 33.2987 41.804 31.2507 41.804 28.648C41.804 26.1733 41.4627 24.0187 40.78 22.184C40.0973 20.3493 38.6893 19.432 36.556 19.432C35.7453 19.432 34.9347 19.688 34.124 20.2C33.356 20.6693 32.78 21.2667 32.396 21.992C31.7987 23.144 31.3933 24.4027 31.18 25.768C30.9667 27.0907 30.86 28.6267 30.86 30.376C30.86 31.4853 30.924 32.616 31.052 33.768C31.052 34.1093 31.0733 34.664 31.116 35.432C31.2013 36.1573 31.244 36.8187 31.244 37.416C31.244 39.976 30.348 41.256 28.556 41.256C26.2093 41.256 24.972 40.0187 24.844 37.544C24.844 35.7947 24.8653 34.856 24.908 34.728V31.976C24.908 30.44 24.844 28.9467 24.716 27.496C24.588 26.0453 24.4387 24.9573 24.268 24.232C23.884 22.824 23.372 21.736 22.732 20.968C22.1347 20.2 21.1747 19.816 19.852 19.816C17.9747 19.816 16.46 20.6267 15.308 22.248C14.4973 23.528 13.964 25.0853 13.708 26.92C13.452 29.2667 13.26 31.1227 13.132 32.488C13.0467 33.8107 13.004 35.3467 13.004 37.096C13.004 38.3333 12.7907 39.336 12.364 40.104C11.98 40.872 11.2333 41.256 10.124 41.256C9.31333 41.256 8.46 41.0427 7.564 40.616C6.71067 40.1467 6.284 39.528 6.284 38.76C6.284 37.9493 6.36933 37.1387 6.54 36.328C6.924 33.896 7.116 29.544 7.116 23.272C7.116 22.248 6.86 21.2667 6.348 20.328C5.87867 19.3467 5.30267 18.856 4.62 18.856C4.44933 18.856 4.12933 18.9413 3.66 19.112C3.23333 19.2827 2.91333 19.368 2.7 19.368C2.14533 19.368 1.63333 19.112 1.164 18.6C0.737333 18.088 0.524 17.6613 0.524 17.32C0.524 16.2533 1.036 15.3573 2.06 14.632C3.12667 13.864 4.236 13.48 5.388 13.48C6.96667 13.48 8.31067 13.9707 9.42 14.952C10.5293 15.9333 11.3827 17.2987 11.98 19.048C12.9613 17.3413 14.284 15.976 15.948 14.952C17.612 13.8853 19.468 13.352 21.516 13.352C22.796 13.352 23.82 13.5227 24.588 13.864C25.3987 14.1627 26.06 14.6107 26.572 15.208C27.084 15.7627 27.7453 16.616 28.556 17.768C29.6227 16.4027 30.988 15.336 32.652 14.568C34.3587 13.8 36.108 13.416 37.9 13.416C40.0333 13.416 41.9533 14.2907 43.66 16.04C45.3667 17.7467 46.5187 19.7307 47.116 21.992C47.4147 23.144 47.564 25.3627 47.564 28.648L47.82 32.36C48.0333 34.5787 48.7587 35.9227 49.996 36.392C51.4467 36.8187 52.172 37.2667 52.172 37.736C52.172 38.76 51.916 39.5067 51.404 39.976C51.02 40.232 50.4867 40.5093 49.804 40.808C49.1213 41.1067 48.588 41.256 48.204 41.256C45.9 41.256 44.2573 40.424 43.276 38.76ZM63.6805 54.056C61.3338 54.056 59.6272 53.6293 58.5605 52.776C57.5365 51.9653 57.0245 51.0693 57.0245 50.088C57.0245 48.5947 57.7285 47.848 59.1365 47.848C59.5632 47.848 60.1178 47.976 60.8005 48.232C61.4832 48.5307 62.1232 48.68 62.7205 48.68C63.6592 48.68 64.4272 48.0613 65.0245 46.824C65.6218 45.5867 66.2192 43.5813 66.8165 40.808C65.4938 39.272 63.8725 36.84 61.9525 33.512C60.0752 30.184 58.4538 26.92 57.0885 23.72C55.7232 20.4773 55.0405 18.1733 55.0405 16.808C55.0405 15.7413 55.4032 14.952 56.1285 14.44C56.8965 13.928 57.7712 13.672 58.7525 13.672C59.5205 13.672 60.1178 13.8213 60.5445 14.12C60.9712 14.376 61.2698 14.8667 61.4405 15.592C62.4645 19.2187 63.5525 22.3973 64.7045 25.128C65.8992 27.8587 67.4138 30.824 69.2485 34.024C69.9738 32.36 70.9338 29.5227 72.1285 25.512C73.4512 21.032 74.5605 17.8533 75.4565 15.976C75.8405 15.208 76.3098 14.5893 76.8645 14.12C77.4618 13.6507 78.1232 13.416 78.8485 13.416C79.5738 13.416 80.3418 13.6933 81.1525 14.248C82.0058 14.76 82.4325 15.3787 82.4325 16.104C82.4325 16.5307 82.2832 17.0427 81.9845 17.64C80.3205 21.48 78.8485 25.1067 77.5685 28.52C76.3312 31.8907 75.1365 35.6027 73.9845 39.656C73.3018 41.9173 72.5765 44.072 71.8085 46.12C71.0832 48.168 70.5712 49.4267 70.2725 49.896C69.4192 51.0907 68.4592 52.072 67.3925 52.84C66.3258 53.6507 65.0885 54.056 63.6805 54.056ZM103.729 26.536C102.065 26.536 100.657 26.4933 99.5045 26.408C98.3952 26.28 96.9232 26.088 95.0885 25.832L95.0245 32.552C94.9818 33.704 94.9605 35.3467 94.9605 37.48C94.9605 38.5893 94.6405 39.464 94.0005 40.104C93.4032 40.7013 92.7205 41 91.9525 41C90.5445 41 89.4992 40.8293 88.8165 40.488C88.1338 40.104 87.7925 39.4427 87.7925 38.504C87.7925 37.2667 87.8992 35.5173 88.1125 33.256C88.5818 28.392 88.8165 23.4 88.8165 18.28C88.8165 13.5013 88.6672 9 88.3685 4.776C88.4112 4.17866 88.7098 3.496 89.2645 2.728C89.8618 1.96 90.6085 1.53333 91.5045 1.448C92.4858 1.448 94.0432 1.27733 96.1765 0.935997C98.3952 0.594666 100.081 0.424 101.233 0.424C104.731 0.424 107.441 0.765333 109.361 1.448C111.323 2.13066 113.286 3.26133 115.249 4.84C117.382 8.168 118.449 10.5147 118.449 11.88C118.449 14.7387 117.873 17.2773 116.721 19.496C115.569 21.7147 113.883 23.4427 111.665 24.68C109.446 25.9173 106.801 26.536 103.729 26.536ZM102.257 5.864C100.891 5.864 99.6965 5.94933 98.6725 6.12C97.6912 6.248 96.4965 6.48266 95.0885 6.824C95.2592 10.7493 95.3445 13.608 95.3445 15.4C95.3445 17.2347 95.2805 18.7707 95.1525 20.008C96.9872 20.392 98.4378 20.648 99.5045 20.776C100.571 20.8613 101.766 20.904 103.089 20.904C106.246 20.904 108.465 20.0933 109.745 18.472C111.067 16.808 111.729 14.888 111.729 12.712C111.729 12.072 111.537 11.2827 111.153 10.344C110.769 9.40533 110.427 8.78666 110.129 8.488C108.977 7.464 107.846 6.78133 106.737 6.44C105.67 6.056 104.177 5.864 102.257 5.864ZM146.674 20.456C147.015 21.0533 147.292 21.928 147.506 23.08C147.719 24.1893 147.826 25.192 147.826 26.088C147.826 27.752 147.463 30.12 146.738 33.192C143.794 38.568 139.442 41.256 133.682 41.256C131.548 41.256 129.372 40.552 127.154 39.144C124.935 37.736 123.399 36.1147 122.546 34.28C121.394 30.6107 120.818 28.2853 120.818 27.304C120.818 25.5973 121.18 23.784 121.906 21.864C122.674 19.944 123.634 18.28 124.786 16.872C125.511 15.8907 126.812 15.0587 128.69 14.376C130.567 13.6507 132.274 13.288 133.81 13.288C136.796 13.288 139.335 13.864 141.426 15.016C143.516 16.1253 145.266 17.9387 146.674 20.456ZM141.106 30.76C141.319 30.2053 141.426 28.776 141.426 26.472C141.426 25.2347 141.191 24.0187 140.722 22.824C140.295 21.6293 139.655 20.6053 138.802 19.752C138.716 19.6667 138.482 19.5387 138.098 19.368C137.714 19.1547 137.18 18.9627 136.498 18.792C135.858 18.5787 135.111 18.472 134.258 18.472C131.868 18.472 130.119 19.432 129.01 21.352C127.9 23.272 127.345 25.448 127.345 27.88C127.345 28.3067 127.452 29.1173 127.666 30.312C127.922 31.5067 128.135 32.2533 128.306 32.552C128.434 32.8507 128.754 33.2773 129.266 33.832C129.82 34.344 130.482 34.8133 131.25 35.24C132.06 35.624 132.892 35.816 133.746 35.816C135.666 35.816 137.202 35.368 138.354 34.472C139.506 33.5333 140.423 32.296 141.106 30.76ZM155.552 18.728C155.168 18.728 154.805 18.7707 154.464 18.856C154.122 18.8987 153.781 18.92 153.44 18.92C152.97 18.92 152.522 18.7067 152.096 18.28C151.712 17.8533 151.52 17.4693 151.52 17.128C151.52 16.0187 152.074 15.1653 153.184 14.568C154.293 13.928 155.424 13.608 156.576 13.608C157.557 13.608 158.56 13.9493 159.584 14.632C160.65 15.272 161.44 16.104 161.952 17.128C163.061 15.8053 164.426 14.8453 166.048 14.248C167.669 13.6507 169.354 13.352 171.104 13.352C173.066 13.352 174.88 13.9707 176.544 15.208C178.25 16.4453 179.594 18.024 180.576 19.944C181.557 21.8213 182.048 23.6987 182.048 25.576C182.048 27.4107 181.856 29.0533 181.472 30.504C181.088 31.912 180.405 33.3413 179.424 34.792C178.314 36.328 176.821 37.5867 174.944 38.568C173.109 39.5493 170.912 40.04 168.352 40.04C167.669 40.04 166.837 39.8693 165.856 39.528C164.874 39.144 164.064 38.7387 163.424 38.312C163.125 41.2133 162.976 43.7307 162.976 45.864C162.976 47.144 163.04 48.36 163.168 49.512C163.253 50.8773 163.296 51.8587 163.296 52.456C163.296 53.3947 162.976 54.0773 162.336 54.504C161.696 54.9733 160.992 55.208 160.224 55.208C158.688 55.208 157.664 54.7813 157.152 53.928C156.682 53.1173 156.448 51.944 156.448 50.408C156.618 46.7387 156.832 43.3467 157.088 40.232C157.344 36.392 157.472 30.4613 157.472 22.44C157.472 21.672 157.322 20.8613 157.024 20.008C156.725 19.1547 156.234 18.728 155.552 18.728ZM163.68 31.976C163.893 32.7867 164.49 33.4693 165.472 34.024C166.496 34.536 167.413 34.792 168.224 34.792C170.656 34.792 172.469 34.1307 173.664 32.808C174.56 31.8693 175.136 30.952 175.392 30.056C175.69 29.16 175.84 27.7307 175.84 25.768C175.84 24.232 175.541 22.952 174.944 21.928C174.346 20.8613 173.621 20.0933 172.768 19.624C171.914 19.112 171.104 18.856 170.336 18.856C168.586 18.856 167.157 19.3893 166.048 20.456C164.981 21.48 164.298 22.888 164 24.68C163.786 26.088 163.68 28.52 163.68 31.976ZM210.675 19.624C210.675 21.5013 209.715 22.44 207.795 22.44C207.155 22.44 206.621 22.2907 206.195 21.992C205.768 21.6933 205.299 21.2453 204.787 20.648C203.507 19.24 202.397 18.536 201.458 18.536C200.221 18.536 199.005 18.8987 197.811 19.624C196.659 20.3493 195.72 21.3733 194.995 22.696C194.269 24.0187 193.907 25.4907 193.907 27.112C193.907 28.904 194.248 30.3973 194.931 31.592C195.656 32.7867 196.765 33.8107 198.259 34.664C198.813 34.9627 199.453 35.1973 200.179 35.368C200.947 35.5387 201.608 35.624 202.163 35.624C203.4 35.624 204.957 35.1333 206.835 34.152C207.517 33.8107 208.093 33.5547 208.563 33.384C209.032 33.2133 209.523 33.128 210.035 33.128C210.504 33.128 211.037 33.3413 211.635 33.768C212.232 34.1947 212.531 34.728 212.531 35.368C212.531 36.648 211.933 37.736 210.739 38.632C209.544 39.4853 208.072 40.1467 206.323 40.616C204.616 41.0427 202.973 41.256 201.395 41.256C198.877 41.256 196.531 40.68 194.355 39.528C192.221 38.376 190.515 36.7973 189.235 34.792C187.955 32.744 187.315 30.44 187.315 27.88C187.315 25.1493 187.933 22.6533 189.171 20.392C190.408 18.1307 192.072 16.36 194.163 15.08C196.253 13.8 198.536 13.16 201.01 13.16C202.419 13.16 203.869 13.416 205.363 13.928C206.856 14.44 208.115 15.1867 209.139 16.168C210.163 17.1493 210.675 18.3013 210.675 19.624ZM243.171 20.456C243.512 21.0533 243.789 21.928 244.003 23.08C244.216 24.1893 244.323 25.192 244.323 26.088C244.323 27.24 244.195 28.52 243.939 29.928C243.683 31.336 243.448 32.424 243.235 33.192C240.291 38.568 235.939 41.256 230.179 41.256C228.045 41.256 225.869 40.552 223.651 39.144C221.432 37.736 219.896 36.1147 219.043 34.28C217.891 30.6533 217.315 28.328 217.315 27.304C217.315 25.5973 217.677 23.784 218.403 21.864C219.171 19.944 220.131 18.28 221.283 16.872C222.051 15.8907 223.373 15.0587 225.251 14.376C227.128 13.6507 228.835 13.288 230.371 13.288C233.357 13.288 235.875 13.864 237.923 15.016C240.013 16.1253 241.763 17.9387 243.171 20.456ZM237.603 30.76C237.816 30.3333 237.923 28.904 237.923 26.472C237.923 25.2347 237.688 24.0187 237.219 22.824C236.792 21.6293 236.152 20.6053 235.299 19.752C235.213 19.6667 234.979 19.5387 234.595 19.368C234.211 19.1547 233.677 18.9627 232.995 18.792C232.355 18.5787 231.608 18.472 230.755 18.472C228.365 18.472 226.616 19.432 225.507 21.352C224.397 23.272 223.843 25.448 223.843 27.88C223.843 28.264 223.971 29.0533 224.227 30.248C224.483 31.4427 224.675 32.2107 224.803 32.552C225.144 33.1493 225.827 33.8533 226.851 34.664C227.917 35.432 229.069 35.816 230.307 35.816C232.227 35.816 233.741 35.368 234.851 34.472C236.003 33.5333 236.92 32.296 237.603 30.76ZM250.711 18.536C249.601 17.768 249.047 16.9573 249.047 16.104C249.047 15.5067 249.303 14.952 249.815 14.44C250.327 13.928 251.095 13.672 252.119 13.672C253.313 13.672 254.38 13.992 255.319 14.632C256.3 15.2293 256.983 16.104 257.367 17.256C258.348 16.104 259.457 15.1867 260.695 14.504C261.975 13.8213 263.276 13.48 264.599 13.48C266.177 13.48 267.607 13.9067 268.887 14.76C270.167 15.6133 270.807 16.7653 270.807 18.216C270.807 19.0267 270.444 19.8587 269.719 20.712C269.036 21.5653 268.332 21.992 267.607 21.992C267.223 21.992 266.881 21.9067 266.583 21.736C266.327 21.5227 266.007 21.224 265.623 20.84C265.196 20.4133 264.833 20.1147 264.535 19.944C264.236 19.7307 263.895 19.624 263.51 19.624C262.828 19.624 262.188 19.7307 261.591 19.944C260.993 20.1573 260.588 20.4133 260.375 20.712C259.692 21.7787 259.18 22.7387 258.839 23.592C258.54 24.4453 258.391 25.3627 258.391 26.344C258.391 27.0693 258.369 27.6453 258.327 28.072L258.263 31.72C258.263 32.2747 258.284 32.8933 258.327 33.576C258.369 34.2587 258.412 34.7707 258.455 35.112C258.583 36.264 258.647 37.3733 258.647 38.44C258.647 39.1653 258.369 39.8053 257.815 40.36C257.26 40.9147 256.577 41.192 255.767 41.192C254.487 41.192 253.548 40.9573 252.951 40.488C252.353 39.976 252.055 39.0587 252.055 37.736L251.991 33.64C251.948 32.8293 251.927 31.6773 251.927 30.184L251.991 25.96C252.076 23.912 252.119 22.248 252.119 20.968C252.119 20.4987 252.012 20.072 251.799 19.688C251.628 19.304 251.265 18.92 250.711 18.536ZM303.764 36.072C303.977 36.1573 304.318 36.264 304.788 36.392C305.257 36.52 305.598 36.648 305.812 36.776C306.025 36.904 306.132 37.096 306.132 37.352C306.174 38.376 305.79 39.2293 304.979 39.912C304.212 40.552 303.294 40.872 302.228 40.872C300.564 40.872 299.262 40.424 298.324 39.528C297.385 38.632 296.702 37.2667 296.276 35.432C296.105 34.7067 296.02 33.704 296.02 32.424C296.02 31.6987 296.062 30.5253 296.148 28.904C296.233 27.1973 296.276 25.832 296.276 24.808C296.276 22.9733 296.084 21.5867 295.7 20.648C295.316 19.6667 294.398 19.176 292.948 19.176C291.454 19.176 290.11 19.7733 288.916 20.968C287.764 22.1627 286.782 23.9547 285.972 26.344C284.862 29.672 284.244 34.088 284.116 39.592C284.116 39.8907 283.796 40.2533 283.156 40.68C282.558 41.064 281.833 41.256 280.98 41.256C279.401 41.256 278.42 40.424 278.036 38.76L277.972 37.672C277.972 37.288 278.014 36.84 278.1 36.328C278.612 33.3413 278.868 30.7387 278.868 28.52C278.868 27.5387 278.846 26.7707 278.804 26.216L278.74 23.208C278.74 22.184 278.484 21.2027 277.972 20.264C277.46 19.2827 276.862 18.792 276.18 18.792C275.966 18.792 275.668 18.8773 275.284 19.048C274.9 19.176 274.58 19.24 274.324 19.24C273.897 19.24 273.428 19.0267 272.916 18.6C272.446 18.1733 272.212 17.7253 272.212 17.256C272.212 16.36 272.51 15.6347 273.108 15.08C273.748 14.568 274.366 14.1627 274.964 13.864C275.604 13.5653 276.329 13.416 277.14 13.416C277.822 13.416 278.377 13.48 278.804 13.608C279.23 13.736 279.806 14.0133 280.532 14.44C280.958 14.6533 281.449 15.2507 282.004 16.232C282.558 17.2133 282.985 18.6 283.284 20.392C284.137 18.8133 285.566 17.1493 287.572 15.4C289.065 14.0347 291.22 13.352 294.036 13.352C296.596 13.352 298.622 14.2907 300.116 16.168C301.609 18.0027 302.356 20.5413 302.356 23.784C302.356 24.424 302.313 25.4693 302.228 26.92C302.1 28.072 302.036 29.288 302.036 30.568C302.036 33.5547 302.612 35.3893 303.764 36.072Z" fill="black"/>
</svg></Link>
    <div className = "svg2">
    <svg width="116" height="56" viewBox="0 0 116 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.74669 25.0225C32.7466 -14.9776 128.747 -0.977564 104.747 25.0225C80.7466 51.0225 -23.2533 65.0225 4.74669 25.0225Z" fill="#557AFF"/>
    <path d="M11.4933 30.0449C39.4933 -9.95514 135.493 4.04487 111.493 30.0449C87.4933 56.0449 -16.5066 70.0449 11.4933 30.0449Z" stroke="black"/>
    </svg>
    <p>Login</p>
    </div>

  <div className = "svg3">
  <svg width="116" height="56" viewBox="0 0 116 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.74669 25.0225C32.7466 -14.9776 128.747 -0.977564 104.747 25.0225C80.7466 51.0225 -23.2533 65.0225 4.74669 25.0225Z" fill="#694CDC"/>
  <path d="M11.4933 30.0449C39.4933 -9.95514 135.493 4.04487 111.493 30.0449C87.4933 56.0449 -16.5066 70.0449 11.4933 30.0449Z" stroke="black"/>
  </svg>

  <p>Sign up</p>
    </div>
      </Nav>  
      <ActivityList>
        <Activity>
        <svg width="194" height="44" viewBox="0 0 194 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="17" width="160" height="44" fill="#FCFF71"/>
        <line x1="4.48996e-08" y1="30.5" x2="182" y2="30.5" stroke="black"/>
        </svg>


        <Link to ='./popular' ><p>Popular</p></Link>
        </Activity>

        <Activity>
        <svg width="194" height="44" viewBox="0 0 194 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="17" width="160" height="44" fill="#9DFF50"/>
        <line x1="4.48996e-08" y1="30.5" x2="182" y2="30.5" stroke="black"/>
        </svg>


        <Link to ='./toprated' ><p>Top Rated</p></Link>
        </Activity>

        <Activity>
        <svg width="194" height="44" viewBox="0 0 194 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="17" width="160" height="44" fill="#67F6FF"/>
        <line x1="4.48996e-08" y1="30.5" x2="182" y2="30.5" stroke="black"/>
        </svg>


        <Link to ='./tvshows' ><p>TV Shows</p></Link>
        </Activity>

        <Activity>
        <svg width="194" height="44" viewBox="0 0 194 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="17" width="160" height="44" fill="#FF7171"/>
        <line x1="4.48996e-08" y1="30.5" x2="182" y2="30.5" stroke="black"/>
        </svg>


        <Link to ='./genres' ><p>Genres</p></Link>
        </Activity>
        </ActivityList>

        <Main>

            <div className="row2">
              <div className="card5">
                <div>
                   <div>
                     <img src= "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" width="200" height="250"/>
                  </div>
                   </div> 
                      <div>
                    
                    <div className="p1"><p>Lucifer</p>
                     <p>Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.</p></div>
                </div>  
              </div>

              <div className="card5">
                <div>
                   <div>
                     <img src= "https://image.tmdb.org/t/p/w500/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg" width="200" height="250"/>
                  </div>
                   </div> 
                      <div>
                    
                    <div className="p1"><p>The 100</p>
                     <p>100 years in the future, when the Earth has been abandoned due to radioactivity, the last surviving humans live on an ark orbiting the planet — but the ark won't last forever. So the repressive regime picks 100 expendable juvenile delinquents to send down to Earth to see if the planet is still habitable.</p></div>
                </div>  
              </div>

              <div className="card5">
                <div>
                   <div>
                     <img src= "https://image.tmdb.org/t/p/w500/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg" width="200" height="250"/>
                  </div>
                   </div> 
                      <div>
                    
                    <div className="p1"><p>The Flash</p>
                     <p>After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.</p></div>
                </div>  
              </div>

              <div className="card5">
                <div>
                   <div>
                     <img src= "https://image.tmdb.org/t/p/w500/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg" width="200" height="250"/>
                  </div>
                   </div> 
                      <div>
                    
                    <div className="p1"><p>Supernatural</p>
                     <p>When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way.</p></div>
                </div>  
              </div>
            </div>         
          

        </Main>

        <div>
        <p style={{textAlign:"center"}} >COPYRIGHT © 2020 MYPOPCORN</p>
        </div>
        
    </Section> 
    
    
   ); 
  
  };
}

const Section = styled.div`
margin: 40px 0px 0px 0px;
`;
const Nav = styled.div`
display: flex;
flex-direction: row
justify-content: space-evenly;
  .svg1 {
    margin: 30px 30px 0px 0px;
  }

  .svg2 {
    margin-left: 230px;
    margin-right: 20px;
    margin-top: 30px;
    float:right;
  }

  .svg3 {
    margin-left: 0px;
    margin-right: 20px;
    margin-top: 30px;
    float:right;
  }

  p {
    position: absolute;
    font-size: 18px;
    margin-top: -40px;
    margin-left: 23px;
    color: white;
  }

`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  margin-top: 20px;
`;
const Activity = styled.div`
  p {
    position: absolute;
    font-size: 20px;
    margin-top: 25px;
    margin-left: -50px;
  }
  svg {
    transition: transform 1s;
    position: absolute;
    margin-top: 20px;
    margin-right: 100px;
    margin-left: -90px;
  }
  svg:hover {
    transform: scale(1.1);
  }
`;

const Main = styled.div`

margin-top: 240px;
display: grid;
width: 75%;
margin: auto;
padding-top: 50px; 
`;