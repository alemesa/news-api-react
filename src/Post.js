import React from 'react';

function Post (props) {
  var style = {
    height: '250px',
    width: '250px'
  };
  return (
    <div class="col-sm-4">
      <div class="card flex-md-row mb-4 mt-2 shadow-sm h-md-250">
        <div class="card-body d-flex flex-column align-items-start">

          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">
            <a class="text-dark" href={props.url} target="_blank">{props.title}</a>
          </h3>

          <div class="mb-1 text-muted"></div>

          <p class="card-text mb-auto">{props.description}</p>

          <a href="#">Continue reading</a>
        </div>

      <div className="image">
        <img class="card-img-right flex-auto d-none d-lg-block" style={style} data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]"  src='https://reactstrap.github.io/assets/logo.png' data-holder-rendered="true" />
      </div>

    </div>
  </div>


  );
}

export default Post;
