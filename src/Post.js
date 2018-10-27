import React from 'react';

function Post (props) {
  var style = {
    height: '250px',
    width: '300px',
  };

  return (
    <div class="card flex-md-row mb-4 mt-2 ml-2 mr-2 shadow-sm h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">
            <a class="text-dark" href={props.url} target="_blank" >{props.title}</a>
          </h3>
          <div class="mb-1 text-muted"></div>
          <p class="card-text mb-auto">{props.description} </p>
          <a href={props.url}>Continue reading</a>
        </div>
        <img class="card-img-right flex-auto d-none d-lg-block" style={style} data-src="holder.js/250x250?theme=thumb" alt=""  src={props.img} data-holder-rendered="true" />
    </div>
  );
}

export default Post;
