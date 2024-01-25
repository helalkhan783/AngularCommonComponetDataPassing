import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Blogs} from "../../responsemodel/blog.service";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {

  @Input({required: true}) blog!: Blogs; // receive data from parent

  @Output() onLikeEvent = new EventEmitter()
  @Output() onCommentEvent = new EventEmitter()

  likeBlog(blog: Blogs) {
    this.onLikeEvent.emit(blog);
  }

  commentOnBlog(comment: string) {
    this.onCommentEvent.emit(comment);
  }
}
