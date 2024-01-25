import {Injectable} from '@angular/core';
import {Blogs} from "../responsemodel/blog.service";

@Injectable({
  providedIn: 'root'
})
export class BlogManagerService {
  getBlogs(): Array<Blogs> {
    const blogs: Array<Blogs> = [];

    const newBlog: Blogs = new Blogs("Hot news", "13.01.2024", "Me");
    const newBlog1: Blogs = new Blogs("Breaking news", "13.01.2024", "Me");

    blogs.push(newBlog, newBlog1);
    return blogs;

  }
}
