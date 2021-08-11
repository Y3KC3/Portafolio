import { Component } from 'react';

export default class Share extends Component {
    render (){
        return (
            <div className="shareLink">
                <h1 className="sharePhoneTitle">Compartir a...</h1>
                <img src="./img/imageRight/logo.png" alt="Logo" className="logo-share"/>
                <div className="container_share">
                    <a href="https://api.whatsapp.com/send?text=https://melvincolmenares.netlify.app" target="_BLANK"><img src="./img/share-red/WhatsApp.png" alt="WhatsApp" className="control-image-share"/></a>
                    <a href="http://www.facebook.com/sharer.php?u=https://melvincolmenares.netlify.app" target="_BLANK"><img src="./img/share-red/Facebook.jpg" alt="Facebook" className="control-image-share"/></a>
                    <a href="https://twitter.com/intent/tweet?url=https://melvincolmenares.netlify.app&hashtags=#Tegnologia" target="_BLANK"><img src="./img/share-red/Twitter.png" alt="Twitter" className="control-image-share"/></a>
                    <a href="http://www.linkedin.com/shareArticle?url=https://melvincolmenares.netlify.app" target="_BLANK"><img src="./img/share-red/Linkedin.png" alt="LinkedIn" className="control-image-share"/></a>
                </div>
                <h1 className="shareExit">X</h1>
            </div>
        );
    };
};