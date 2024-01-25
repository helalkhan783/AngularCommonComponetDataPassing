import {Component, Input} from '@angular/core';
import {BlogManagerService} from "../../allservice/blog-manager.service";
import {Blogs} from "../../responsemodel/blog.service";

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent {
  title = "i am a blog post";
  img = 'https://scontent.fdac141-1.fna.fbcdn.net/v/t39.30808-6/421759870_2140769572966860_4591500940902144200_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGdxGCnZ8SODTN2l9K2s4PZuyekA-QK0lq7J6QD5ArSWrnRctbgxQU6R9DCbuxd5O_RNzRVFfEQaqX5WCBbHKSM&_nc_ohc=mWYC6aJbN8YAX-bFYsR&_nc_ht=scontent.fdac141-1.fna&oh=00_AfDu0qhiFwib-2-XX2jnb3fWN_hXTL7Ot3ST8QQPJg9jRw&oe=65B5C059';

  blogPost: Array<Blogs>;

  constructor(blogs: BlogManagerService) { // this is dependency injection
    this.blogPost = blogs.getBlogs();
  }


  onLikeClick(e: Blogs) {

    alert("clicked the name of \n" + e.getTitle() + "\n" +e.getDate() +"\n"+e.getOwner())
  }


  onCommentClick(mes: string) {
    alert(mes)
  }
}
