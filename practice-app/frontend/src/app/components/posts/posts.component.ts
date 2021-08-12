import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../Post';
import { parseHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  //TODO add the array of posts from server

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  sortByTitle() {
    this.posts = this.posts.sort((a,b) => a.title.localeCompare(b.title));
  }

  sortByLikes() {
    this.posts = this.posts.sort((a,b) => (a.likes - a.dislikes) - (b.likes - b.dislikes));
  }

  deletePost(post: Post) {

    let indexToDelete: number | undefined;

    for (let i=0; i<this.posts.length; i++){
      if (this.posts[i].post_id == post.post_id){
        indexToDelete = i;
      }
    }
    if (indexToDelete){
      this.posts.splice(indexToDelete, 1)
    }


    this.postService.deletePost(post).subscribe(() => (this.posts = this.posts.filter(p => p.post_id !== post.post_id)));
  }

  addPost(post: Post) {
    this.postService.addPost(post).subscribe(data => {
      console.log('Success!', data)
      this.posts.push(post);
    },
      error => console.log('Error!', error));
  }

  voteUp(post: Post) {
    this.postService.voteUp(post).subscribe(data => console.log('Success!', data), error => console.log('Error!', error));
  }
  voteDown(post: Post) {
    this.postService.voteDown(post).subscribe(data => console.log('Success!', data), error => console.log('Error!', error));
  }
}
