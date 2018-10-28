import React from 'react';
import PostHeader from './PostHeader.js'


function formatDate(date) {
  var time = new Date(date);
  var year = time.getFullYear();
  var day = time.getDate();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var month = time.getMonth() + 1;
  var composedTime =
    day +
    '/' +
    month +
    '/' +
    year +
    ' | ' +
    hour +
    ':' +
    (minute < 10 ? '0' + minute : minute);
  return composedTime;
}

function Post (props) {
  var style = {
    height: 'auto',
    width: 'auto',
    maxWidth: '300px',
    maxHeight: '300px'

  }
  var paragraph = {
    whiteSpace: 'pre-line',
    overflow: 'hidden',

     width: '90%',
    height: '65px',
    textOverflow: 'ellipsis',
  }


  return (
    <div className="card flex-md-row mb-4 mt-2 ml-2 mr-2 shadow-sm h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <PostHeader default={props.header} />
          <h4 className="mb-0">
            <a className="text-dark" href={props.url} target="_blank" >{props.title}</a>
          </h4>
          <p className="mb-1 mt-2 text-muted"> {formatDate(props.newsDate)}</p>
          <div className="mb-1 text-muted"></div>
          <p className="card-text mb-auto" style={paragraph}>{props.description} </p>
          <a href={props.url}>Continue reading</a>

          <p> By <a className="text-secondary text-mute" >{props.author} </a></p>
        </div>
        <img className="card-img-right flex-auto d-none d-lg-block" style={style} data-src="holder.js/250x250?theme=thumb" alt=""  src={props.img} data-holder-rendered="true" />
    </div>
  );
}

export default Post;
