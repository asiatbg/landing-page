.emotion--banner-slider {
overflow: hidden;


.banner-slider--image {
max-width: 100%;
//position: absolute;
}



.banner-slider--item {
&:first-child {
position: relative;
}
position: absolute;
width: 100vw;
height: auto;
}



.image-slider--dots {
display: flex;
justify-content: center;
position: relative;
height: 30px;

.dot--link {
cursor: pointer;
color: transparent;
border-radius: 100%;
background-color: #0A246A;
width: .7em;
height: .7em;
margin: 0 30px;
transition: all 0.3s ease;
&:hover {
width: 1em;
height: 1em;
transition: all 0.3s ease;
}
}

.is--active {
background-color: #00a4ef;
}
}

}