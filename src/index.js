import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:45PM" 
            commentBody="This is some cool shit!"
            avatar={faker.image.avatar()}
            />
            <CommentDetail 
            author="Kenneth" 
            timeAgo="Today at 2:00PM" 
            commentBody="This is some lame shit!" 
            avatar={faker.image.avatar()}
            />
            <CommentDetail 
            author="Joe" 
            timeAgo="Yesterday at 3:20PM" 
            commentBody="This is some alright shit!"
            avatar={faker.image.avatar()} 
            />
            <CommentDetail 
            author="Claire" 
            timeAgo="March 3rd at 9:00AM" 
            commentBody="This is some unimportant shit!"
            avatar={faker.image.avatar()}
            />
            <CommentDetail 
            author="Rachel" 
            timeAgo="Sometime in the near future" 
            commentBody="You have no idea what's coming"
            avatar={faker.image.avatar()}
            />

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));